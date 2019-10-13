
Component({
  data: {
    recordStep:''
  },
  methods: {
    test:function(){
      console.log('我在逻辑层');
    },
    recordStart:function(e){
      this.setData({
        recordStep: 'recording',
        showspeack:true,
      });
    },
    recordMove: function (e) {
      //这种方法调用的时候，真机调试会看到明显的卡顿。
      var moveLenght = e && e.changedTouches && e.changedTouches[e.changedTouches.length - 1].clientY - this.data.startPoint;
      if (moveLenght < -27) {
        this.setData({
          pressflag: false
        });
      } else {
        this.setData({
          pressflag: true
        });
      }
    },
    recordStop: function (e) {
      this.setData({
        recordStep: 'stop'
      });
    }
  }
});