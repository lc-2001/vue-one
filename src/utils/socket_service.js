export default class ScoketService {
    static instance = null;
    static get Instance() {
        if (!this.instance) {
            this.instance = new ScoketService()
        }
        return this.instance
    }
    //和服务端连接的socket对象
    ws = null
    //存储回调函数
    callBackMapping = {}
    //标识是否连接成功
    connected = false
    //记录重试的次数
    sendRetryCount = 0
    //重新连接尝试的次数
    connectRetryCount = 0
    //定义连接服务器的方法
    connect() {
        //连接服务器
        if (!window.WebSocket) {
            return console.log('您的浏览器不支持WebSocket')
        }
        this.ws = new WebSocket('ws://localhost:9998')
        //连接成功事件
        this.ws.onopen = () => {
            this.connected = true
            //重置重新连接的次数
            this.connectRetryCount = 0
        }
        // 连接服务器失败
        this.ws.onclose = () => {
            this.connected = false
            this.connectRetryCount++
            setTimeout(() => {
                this.connect()
            }, this.connectRetryCount * 500)
        }
        //得到服务器发送过来的数据
        this.ws.onmessage = msg => {
            //真正服务器端发送过来的原始数据在msg的data字段
            const recvData = JSON.parse(msg.data)
            const socketType = recvData.socketType
            //判断回调函数是否存在
            if (this.callBackMapping[socketType]) {
                const action = recvData.action
                if (action === 'getData') {
                    const realData = JSON.parse(recvData.data)
                    this.callBackMapping[socketType].call(this, realData)
                }
                else if (action === 'fullScreen') {
                    this.callBackMapping[socketType].call(this, recvData)
                } else if (action === 'themeChange') {
                    this.callBackMapping[socketType].call(this, recvData)
                }
            }
        }
    }
    registerCallBack(socketType, callBack) {
        //回调函数的注册
        this.callBackMapping[socketType] = callBack
    }
    unRegisterCallBack(socketType) {
        this.callBackMapping[socketType] = null
    }
    //发送数据的方法
    send(data) {
        //判断此时此刻有没有连接成功
        if (this.connected) {
            this.sendRetryCount = 0
            this.ws.send(JSON.stringify(data))
        }
        else {
            this.sendRetryCount++
            setTimeout(() => {
                this.send(data)
            }, this.sendRetryCount * 500)
        }
    }
}