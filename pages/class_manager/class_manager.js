// pages/class_manager/class_manager.js
import {teacherPage} from '../../utils/tabbar.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList:[
        {
            class:"2022年1班",
            total:"30人",
            time:"2023/10/31-2023/11/4"
        },
        {
            class:"2022年2班",
            total:"17人",
            time:"2023/10/31-2023/11/4"
        },
        {
            class:"2022年3班",
            total:"20人",
            time:"2023/10/31-2023/11/4"
        },
        {
            class:"2022年4班",
            total:"30人",
            time:"2023/10/31-2023/11/4"
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    this.getTabBar().setData({
        selected: 2, // 个人界面 显示下标
        list: teacherPage // teacherPage 为引入的列表
      })
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

  }
})