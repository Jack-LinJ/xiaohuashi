Component({
    data: {
      selected: 0, // 当前显示下标
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      list: [
        {
            "pagePath": "../eassy_list/eassy_list",
            "text": "作业批改",
            "iconPath": "../icon/homework.png",
            "selectedIconPath": "../icon/homework_acitve.png"
        },
        {
            "pagePath": "../user/user",
            "text": "个人中心",
            "iconPath": "../icon/userpage.png",
            "selectedIconPath": "../icon/userpage_active.png"
        }
      ]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({url})
        this.setData({
          selected: data.index
        })
      }
    }
  })
  