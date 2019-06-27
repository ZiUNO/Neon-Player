// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
       * 显示输入
       */
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },

    /**
     * 
     */
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
    },

    /**
     * 清除输入
     */
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
    },

    /**
     * 隐藏输入
     */
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
    }
  }
})
