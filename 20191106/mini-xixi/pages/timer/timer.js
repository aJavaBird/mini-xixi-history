//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    seconds:0,
    dot : '.',
    milliseconds : 0,
    timeingText : '开始计时',
    isRunning : false,
    timestampStart : 0,
    usedMilliseconds : 0,
  },
  onLoad: function () {
    
  },
  startTiming: function(e) {
    if(this.data.timeingText=='开始计时'){
      this.setData({
        timeingText : '暂停',
        seconds : 0,
        milliseconds : 0,
        isRunning : true,
        timestampStart : new Date().getTime(),
        usedMilliseconds : 0,
      });
      setTimeout(this.doRunning,this.random(1,100));
    } else if(this.data.timeingText=='暂停'){
      var newUsedMilliseconds = new Date().getTime() - this.data.timestampStart + this.data.usedMilliseconds;
      this.setData({
        timeingText : '继续',
        isRunning : false,
        timestampStart : new Date().getTime(),
        usedMilliseconds : newUsedMilliseconds,
      });
    } else if(this.data.timeingText=='继续'){
      this.setData({
        timeingText : '暂停',
        isRunning : true,
        timestampStart : new Date().getTime(),
      });
      setTimeout(this.doRunning,this.random(1,100));
    }
  },

  doRunning: function(){
    if(this.data.isRunning){  
      var newUsedMilliseconds = new Date().getTime() - this.data.timestampStart + this.data.usedMilliseconds;
      var newMilliseconds = newUsedMilliseconds % 1000;
      var newSeconds = parseInt(newUsedMilliseconds / 1000);
      
      this.setData({
        seconds : newSeconds,
        milliseconds : newMilliseconds,
      });
      setTimeout(this.doRunning,this.random(1,100));
    }
  },

  restartTiming: function(){
    this.setData({
      timeingText : '开始计时',
      isRunning : false,
      seconds : 0,
      milliseconds : 0,
      timestampStart : 0,
      usedMilliseconds : 0,
    });
  },

  random: function(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  }

})
