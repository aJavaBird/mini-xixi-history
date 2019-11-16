//logs.js
const util = require('../../utils/util.js')

const app = getApp();

const conf = {
  data: {
    calendarConfig: {
      // 配置内置主题
      // theme: 'elegant',
      // defaultDay: '2018-3-6',
      showLunar: true,
      multi: true,
      highlightToday: true,
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad: function (){
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },
  onReady: function (){
    console.log("userInfo",this.data.userInfo);
  },
  afterCalendarRender(e) {
    var curDate = e.detail.data.calendar;
    console.log('afterCalendarRender', curDate.curYear+'-'+curDate.curMonth);
    if(this.data.userInfo && this.data.userInfo.nickName && (this.data.userInfo.nickName=='快乐菠菜' || this.data.userInfo.nickName=='窦房结')){
      this.setTodu(this.getXiaomeiRestDays(curDate.curYear,curDate.curMonth));
    }    
  },
  whenChangeMonth(e) {
    var curDate = e.detail.next;
    if(this.data.userInfo && this.data.userInfo.nickName && (this.data.userInfo.nickName=='快乐菠菜' || this.data.userInfo.nickName=='窦房结')){
      this.setTodu(this.getXiaomeiRestDays(curDate.year,curDate.month));
    }    
  },
  setTodu(days) {
    this.calendar['setTodoLabels']({
      showLabelAlways: true,
      days
    });
  },
  getXiaomeiRestDays(year,month){
    /*js 的月份是 从 0 开始算的（这个有点坑）, month月份参数, 介于0(1月) ~11(12月)之间的整数。*/
    var FIRST_REST_DATE = new Date(2019,0,31); // 交班日（休息第一天）2019-01-31
    var TERM = 10; // 工作休息周期
    var TERM_REST = 5; // 休息周期
    var lastDate = new Date(year,month,0); // 获取当月最后一天
    var lastDay = lastDate.getDate();
    var restDays = [];
    for(var i=1;i<=lastDay;i++){
      var date = new Date(year,month-1,i);
      var iDays = Math.floor((date.getTime()-FIRST_REST_DATE.getTime()) / (24 * 3600 * 1000));
      console.log(year+'-'+month+"-"+i+"--"+iDays);
      this._addByIDays(TERM,TERM_REST,iDays,date,restDays);
    }
    return restDays;
  },
  _addByIDays(TERM,TERM_REST,iDays,date,restDays){
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    if(iDays>=0){
      if(iDays%TERM == 0){
        restDays.push({
          year:year,month:month,day:day,todoText:"换班",todoTextColor:"#F57917"
        });
      } else if(iDays%TERM < TERM_REST){
        restDays.push({
          year:year,month:month,day:day,todoText:"休息",todoTextColor:"#208E24"
        });
      }
    } else {
      iDays = Math.abs(iDays);
      if(iDays%TERM == 0){
        restDays.push({
          year:year,month:month,day:day,todoText:"换班",todoTextColor:"#F57917"
        });
      } else if(iDays%TERM > TERM_REST){
        restDays.push({
          year:year,month:month,day:day,todoText:"休息",todoTextColor:"#208E24"
        });
      }
    }
  }
};
Page(conf);

