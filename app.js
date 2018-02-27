App({
  onLaunch: function() {
    console.log('App Launch');
  },
  onShow: function() {
    console.log('show')
  },
  onHide: function() {
    console.log('hide')
  },
  globalData: {
    hasLogin: false,
    taobao: ''
  }
})
