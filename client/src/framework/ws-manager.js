/**
 * Created by terrywang on 2017/2/9.
 */

var wsUrl = "ws://localhost:8080";

var ActionManager = require("./action-manager");

var WSManager = function () {
    this.status = "NOT_CONNECTED";
    this.actionManager = new ActionManager();
};

WSManager.getInstance = function () {
    if (!this.instance) {
        this.instance = new WSManager();
    }
    return this.instance;
};

WSManager.prototype.connect = function (callback) {
    wx.connectSocket({
            url: wsUrl
    });
    var that = this;
    wx.onSocketOpen(function (res) {
        console.log('WebSocket连接已打开！');
        that.status = "CONNECTED";
        if (callback) {
            callback(res);
        }
    });

    wx.onSocketMessage(function (res) {
        console.log('收到服务器内容：' + res.data);
        var obj = JSON.parse(res.data);
        var messageAction = obj.action;
        if(messageAction){
            that.actionManager.triggerAction(messageAction);
        }else{
            console.error("no action found");
        }
    });
};

WSManager.prototype.close = function (callback) {
    if (this.status != 'CONNECTED') {
        return false;
    }
    var that = this;
    wx.onSocketClose(function (res) {
        console.log('WebSocket连接已关闭！');
        that.status = "NOT_CONNECTED";
        if (callback) {
            callback(res);
        }
    });
    wx.closeSocket();
};

WSManager.prototype.sendCommand = function (command) {
    var string = JSON.stringify(command);
    wx.sendSocketMessage({
        data: string,
        fail: function () {

        }
    })
};

module.exports = WSManager;

