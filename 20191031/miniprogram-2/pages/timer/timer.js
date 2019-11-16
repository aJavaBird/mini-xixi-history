//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    seconds:0,
    timeingText:'开始计时',
    isRunning:false,
  },
  onLoad: function () {
    
  },
  startTiming: function(e) {
    if(this.data.timeingText=='开始计时'){
      this.setData({
        timeingText : '暂停',
        seconds : 0,
        isRunning : true,
      });
      setTimeout(this.doRunning,1000);
    } else if(this.data.timeingText=='暂停'){
      this.setData({
        timeingText : '继续',
        isRunning : false,
      });
    } else if(this.data.timeingText=='继续'){
      setTimeout(this.doRunning,1000);
      this.setData({
        timeingText : '暂停',
        isRunning : true,
      });
    }
  },

  doRunning: function(){
    if(this.data.isRunning){
      var newSeconds = this.data.seconds+1;
      this.setData({
        seconds : newSeconds,
      });
      setTimeout(this.doRunning,1000);
    }
  },

  restartTiming: function(){
    this.setData({
      timeingText : '开始计时',
      isRunning : false,
      seconds : 0
    });
  }

})
