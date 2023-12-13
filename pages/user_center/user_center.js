// pages/user_center/user_center.js
import {teacherPage} from '../../utils/tabbar.js';
import {studentPage} from '../../utils/tabbar.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userType:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data.userType = wx.getStorageSync('userType')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.data.userType = wx.getStorageSync('userType')
    if(this.data.userType == 0){
        this.getTabBar().setData({
            selected: 3, // 个人界面 显示下标
            list: teacherPage // teacherPage 为引入的列表
          })
    }
    else if(this.data.userType == 1){
        this.getTabBar().setData({
            selected: 1, // 个人界面 显示下标
            list: studentPage // teacherPage 为引入的列表
          })
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  goEdit(){
      wx.navigateTo({
        url: '/pages/userinfo_edit/userinfo_edit',
      })
  },
  goForgetPassword(){
      wx.navigateTo({
        url: '/pages/forget_password/forget_password',
      })
  },
  exitLogin(){
      wx.navigateTo({
        url: '/pages/index/index',
      })
  }
})