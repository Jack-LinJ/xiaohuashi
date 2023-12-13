// pages/eassy/eassy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paragraph:[
      {
        index:1,
        sentence:[
          {
            content:"一提到绍兴，大家第个想起的是什么了鲁迅？",
            error:"缺少标点",
            highpoint:""
          },
          {
            content:"黄酒，其实在绍兴还有一个优美却小众的景区柯岩，",
            error:"错用标点",
            highpoint:""
          },
        ],
        evaluation:{
          tags:["开门见山","揭示中心","总领全文"],
          content:"这一段内容独具匠心，让读者在思考的过程中得到新的启示和思考。"
        },
        show:0,
        sentenceShow:0
      },
      {
        index:2,
        sentence:[
          {
            content:"绍兴柯岩风景区位于绍兴城8公里处，建立于汉代至今已有一干八百多年历史。",
            error:"缺少标点",
            highpoint:""
          },
          {
            content:"它包括柯鉴湖鲁镇三部分。",
            error:"错别字",
            highpoint:""
          },
          {
            content:"它包括柯鉴湖鲁镇三部分。景区依衣山傍水风光秀丽。",
            error:"字符级错误",
            highpoint:""
          },
        ],
        evaluation:{
          tags:["开门见山","揭示中心","总领全文"],
          content:"这一段内容独具匠心，让读者在思考的过程中得到新的启示和思考。"
        },
        show:0,
        sentenceShow:0
      },
      {
        index:3,
        sentence:[
          {
            content:"进入景区我们先来到柯岩。",
            error:"缺少标点",
            highpoint:""
          },
          {
            content:'其中最壮观的是"买头工大佛。',
            error:"错别字",
            highpoint:"拟人"
          },
          {
            content:"仰头望去却怎么也看不到顶端。",
            error:"主语不明",
            highpoint:""
          },
          {
            content:"据说这是隋唐时期，历经石工三化凿成的，滩怪这么有气势。",
            error:"错别字",
            highpoint:""
          },
        ],
        evaluation:{
          tags:["开门见山","揭示中心","总领全文"],
          content:"这一段内容独具匠心，让读者在思考的过程中得到新的启示和思考。"
        },
        show:0,
        sentenceShow:0
      },
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
  showParagraphEvaluation(e){
    let index = e.currentTarget.dataset.index
    let paragraph = this.data.paragraph
    if(paragraph[index].show==1){
      paragraph[index].show = 0
    }
    else{
      paragraph[index].show = 1
    } 
    this.setData({
      paragraph:paragraph
    })
  },
  showSentenceEvaluation(e){
    let paragraphIndex = e.currentTarget.dataset.paragraphindex
    let sentenceIndex = e.currentTarget.dataset.sentenceindex
    console.log(paragraphIndex,sentenceIndex)
    let paragraph = this.data.paragraph
    paragraph[paragraphIndex].show = 2
    paragraph[paragraphIndex].sentenceShow = sentenceIndex
    this.setData({
      paragraph:paragraph
    })
  }
})