// pages/eassy_manager/eassy_manager.js
import {teacherPage} from '../../utils/tabbar.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeworkList:[
        {
            class:"2022年1班",
            title:"我来编童话",
            time:"2023/10/31-2023/11/4",
            submitLeft:"3",
            correctLeft:"2"
        },
        {
            class:"2022年2班",
            title:"议论要言之有据",
            time:"2023/10/31-2023/11/4",
            submitLeft:"3",
            correctLeft:"1"
        },
        {
            class:"2022年3班",
            title:"学习仿写",
            time:"2023/10/31-2023/11/4",
            submitLeft:"2",
            correctLeft:"3"
        },
        {
            class:"2022年4班",
            title:"变形记",
            time:"2023/10/31-2023/11/4",
            submitLeft:"3",
            correctLeft:"3"
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

  },
  goEassyList(e){
      wx.navigateTo({
        url: '/pages/eassy_list_teacher/eassy_list_teacher?title='+e.currentTarget.dataset.title,
      })
  }
})