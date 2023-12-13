Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType:0,
    header:{
        back:false,
        title:"小花狮作文智能辅导系统"
    },
    temp:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  getUsername(e){
    let username = e.detail.value
    console.log(username)
    this.data.temp = username
  },
  changeType(e){
    let type = e.target.dataset.type;
    this.setData({
      pageType:type
    })
    if(type==1){
      wx.navigateTo({
        url: '/pages/sign_up/sign_up',
      })
    }
    else if(type==2){
      wx.navigateTo({
        url: '/pages/forget_password/forget_password',
      })
    }
  },
  goApp(){
    if(this.data.temp == 1){
        console.log("教师登录")
        wx.setStorageSync('userType', 0)
        wx.switchTab({
          url: '/pages/user_center/user_center',
        })
    }
    else if(this.data.temp == 2){
        console.log("学生登录")
        wx.setStorageSync('userType', 1)
        wx.switchTab({
          url: '/pages/user_center/user_center',
        })
    }

  }
})