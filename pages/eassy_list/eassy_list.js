// pages/eassy_list/eassy_list.js
import {studentPage} from '../../utils/tabbar.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeworkList:[
        {
            class:"已提交",
            title:"我来编童话",
            time:"2023/10/31-2023/11/4"
        },
        {
            class:"已批改",
            title:"议论要言之有据",
            time:"2023/10/31-2023/11/4"
        },
        {
            class:"被退回",
            title:"学习仿写",
            time:"2023/10/31-2023/11/4"
        },
        {
            class:"未提交",
            title:"变形记",
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
        selected: 0, // 个人界面 显示下标
        list: studentPage // teacherPage 为引入的列表
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