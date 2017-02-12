

// //index.js
// //获取应用实例
// var app = getApp()
// Page({
//   data: {
//     userInfo: {}
//   },
//   //事件处理函数
//   bindNewTap: function() {
//     wx.navigateTo({
//       url: '../index/new'
//     })
//   },
//   bindJoinTap: function() {
//     wx.navigateTo({
//       url: '../index/join'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })
// pages/index/new.js
Page({
  data:{
    allowPlayers:[3,4,5,6,7,8,9,10],
    index:0
    },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})