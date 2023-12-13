// pages/eassy_list_teacher/eassy_list_teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    students:[
      {
        name:"小白同学",
        eassyName:"绍兴柯岩风景区",
        lastSubmit:"2023/10/8 12:54:41",
        status:"2",
        score:"96"
      },
      {
        name:"李华",
        eassyName:"上海外滩",
        lastSubmit:"2023/10/8 12:54:41",
        status:"1",
        score:""
      },
      {
        name:"小明",
        eassyName:"",
        lastSubmit:"",
        status:"0",
        score:""
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    console.log(e)
    this.setData({
        title:e.title
    })
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
  goEassy(e){
    console.log(e.currentTarget.dataset.index)
    wx.navigateTo({
      url: '/pages/eassy/eassy',
    })
  }
})