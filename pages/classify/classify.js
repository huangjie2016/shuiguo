const app = getApp();
Page({
  data: {
    _num: 1,
    title: '全部',
    list: [
      {
        'price': '$36.00',
        'name': '维C满满水果搭',
        'count': 20,
        'url': 'https://fuss10.elemecdn.com/0/2f/6679b39d06f1252b6a4942f9fceabjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
      },
      {
        'price': '$26.00',
        'name': 'A级-进口甜橙',
        'count': 28,
        'url': 'https://fuss10.elemecdn.com/a/b3/cc9c79717f0d7894f9226116499f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
      },
      {
        'price': '$30.00',
        'name': '红颜奶香草莓',
        'count': 60,
        'url': 'https://fuss10.elemecdn.com/0/cb/d1d0cbdad9b217e0b4d2a7f5fcb5ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
      }
    ]
  },
  clickNav: function(e) {
    const num = e.target.dataset.num;
    
    if(num == 1){
      this.setData({
        _num: num,
        title: '全部',
        list: [
          {
            'price': '$36.00',
            'name': '维C满满水果搭',
            'count': 20,
            'url': 'https://fuss10.elemecdn.com/0/2f/6679b39d06f1252b6a4942f9fceabjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
          },
          {
            'price': '$26.00',
            'name': 'A级-进口甜橙',
            'count': 28,
            'url': 'https://fuss10.elemecdn.com/a/b3/cc9c79717f0d7894f9226116499f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
          },
          {
            'price': '$30.00',
            'name': '红颜奶香草莓',
            'count': 60,
            'url': 'https://fuss10.elemecdn.com/0/cb/d1d0cbdad9b217e0b4d2a7f5fcb5ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
          }
        ]
      })
    }
    if(num == 2){
      this.setData({
        _num: num,
        title: '拼盘',
        list: [
          {
            'price': '$36.00',
            'name': '维C满满水果搭',
            'count': 20,
            'url': 'https://fuss10.elemecdn.com/0/2f/6679b39d06f1252b6a4942f9fceabjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
          }
        ]
      })
    }
    if(num == 3){
      this.setData({
        _num: num,
        title: '水果',
        list: [
          {
            'price': '$26.00',
            'name': 'A级-进口甜橙',
            'count': 28,
            'url': 'https://fuss10.elemecdn.com/a/b3/cc9c79717f0d7894f9226116499f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
          },
          {
            'price': '$30.00',
            'name': '红颜奶香草莓',
            'count': 60,
            'url': 'https://fuss10.elemecdn.com/0/cb/d1d0cbdad9b217e0b4d2a7f5fcb5ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
          }
        ]
      })
    }
  }
});