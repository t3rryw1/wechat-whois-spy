/**
 * Created by terrywang on 2017/2/9.
 */

var baseHttpUrl = "http://localhost:10090";

var wsUrl = "ws://localhost:8080";

var WSManager = function(){
    this.status = "NOT_CONNECTED";
    wx.onSocketClose(function(res) {
        console.log('WebSocket连接已关闭！');
        if(that.close)
        that.status="CONNECTED";
    });
};

WSManager.getInstance = function(){
    if(!this.instance){
        this.instance = new WSManager();
    }
    return this.instance;
};

WSManager.prototype.connect  = function(callback){
    wx.connectSocket({
      url: wsUrl
    })
    var that = this;
    wx.onSocketOpen(function(res) {
        console.log('WebSocket连接已打开！');
        that.status="CONNECTED";
        if(callback){
            callback(res);
        }
    });

};

WSManager.prototype.close  = function(callback){
    if(this.status!='CONNECTED'){
        return false;
    }
    wx.closeSocket();
    var that = this;
    wx.onSocketClose(function(res) {
        console.log('WebSocket连接已关闭！');
        that.status="NOT_CONNECTED";
        if(callback){
            callback(res);
        }
    });
};

WSManager.prototype.sendCommand = function(command){
    var string = JSON.encode(command);
    wx.sendSocketMessage({
        data:string,
        fail:function(){

        }
    })
};

WSManager.prototype.onReceiveCommand = function(callback){
    wx.onSocketMessage(function(res) {
        console.log('收到服务器内容：' + res.data)
        var obj = JSON.decode(res.data);
        callback(obj);
    })
};

WSManager.prototype.getStatus = function() {
    return this.status;
}


module.exports = WSManager;

