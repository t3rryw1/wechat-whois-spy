//index.js
//获取应用实例
var app = getApp()
var WSManager = require();
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindNewTap: function() {
    wx.navigateTo({
      url: '../../room/new/new'
    })
  },
  bindJoinTap: function() {
    wx.navigateTo({
        url: '../../room/join/join'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
