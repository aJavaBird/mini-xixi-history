//chess.js

// const util = require('../../utils/util.js');
// const commonJs = require('../../utils/chess/common.js');
// const aiJs = require('../../utils/chess/AI.js');
// const playJs = require('../../utils/chess/play.js');

var thisPage = {};

var com = com||{};

com.init = function (stype){
	
	com.nowStype= stype || com.getCookie("stype") ||"stype1";
	var stype = com.stype[com.nowStype];
	com.width			=	stype.width;		//画布宽度
	com.height			=	stype.height; 		//画布高度
	com.spaceX			=	stype.spaceX;		//着点X跨度
	com.spaceY			=	stype.spaceY;		//着点Y跨度
	com.pointStartX		=	stype.pointStartX;	//第一个着点X坐标;
	com.pointStartY		=	stype.pointStartY;	//第一个着点Y坐标;
	com.page			=	stype.page;			//图片目录
	
	// com.get("box").style.width = com.width+130+"px";
	
	// com.canvas			=	document.getElementById("chess"); //画布
	// com.ct				=	com.canvas.getContext("2d") ; 
	// com.canvas.width	=	com.width;
	// com.canvas.height	=	com.height;
	
    com.childList		=	com.childList||[];
    com.picMap          =   com.picMap||[]; // 图片路径
	
	// com.loadImages(com.page);		//载入图片/图片目录
	//z(com.initMap.join())
}

//样式
com.stype = {
	stype1:{
		width:325,		//画布宽度
		height:402, 		//画布高度
		spaceX:35,		//着点X跨度
		spaceY:36,		//着点Y跨度
		pointStartX:5,		//第一个着点X坐标;
		pointStartY:19,		//第一个着点Y坐标;
		page:"stype_1"	//图片目录
	},
	stype2:{
		width:530,		//画布宽度
		height:567, 		//画布高度
		spaceX:57,		//着点X跨度
		spaceY:57,		//着点Y跨度
		pointStartX:-2,		//第一个着点X坐标;
		pointStartY:0,		//第一个着点Y坐标;
		page:"stype_2"	//图片目录
	}		
}
//获取ID
// com.get = function (id){
// 	return document.getElementById(id)
// }

// window.onload = function(){
// 	com.bg=new com.class.Bg();
// 	com.dot = new com.class.Dot();
// 	com.pane=new com.class.Pane();
// 	com.pane.isShow=false;
	
// 	com.childList=[com.bg,com.dot,com.pane];	
// 	com.bg.show();
// 	com.get("bnBox").style.display = "block";
// 	//play.init();
// 	com.get("billBn").addEventListener("click", function(e) {
// 		if (confirm("是否结束对局，开始棋局研究？")){
// 			com.init();
// 			com.get("chessRight").style.display = "block";
// 			com.get("moveInfo").style.display = "none";
// 			bill.init();
// 		}
// 	})
// 	com.get("superPlay").addEventListener("click", function(e) {
// 		if (confirm("确认开始大师级对弈？")){
// 			play.isPlay=true ;	
// 			com.get("chessRight").style.display = "none";
// 			com.get("moveInfo").style.display = "block";
// 			com.get("moveInfo").innerHTML="";
// 			play.depth = 4;
// 			play.init();
// 		}
// 	})
// 	com.get("tyroPlay").addEventListener("click", function(e) {
// 		if (confirm("确认开始新手级对弈？")){
// 			play.isPlay=true ;	
// 			com.get("chessRight").style.display = "none";
// 			com.get("moveInfo").style.display = "block";
// 			com.get("moveInfo").innerHTML="";
// 			play.depth = 3;
// 			play.init();
// 		}
// 	})
	
// 	com.get("stypeBn").addEventListener("click", function(e) {
// 		var stype =com.nowStype;
// 		if (stype=="stype1") stype="stype2";
// 		else if (stype=="stype2") stype="stype1";
// 		com.init(stype);
// 		com.show();
// 		play.depth = 4;
// 		play.init();
// 		document.cookie="stype=" +stype;
// 		clearInterval(timer);
// 		var i=0;
// 		var timer = setInterval(function (){
// 			com.show();
// 			if (i++>=5) clearInterval(timer);
// 		},2000);
// 	})
	
// 	com.getData("js/gambit.all.js",
// 		function(data){
// 		com.gambit=data.split(" ");
// 		AI.historyBill = com.gambit;
// 	})
// 	com.getData("js/store.js",
// 		function(data){
// 		com.store=data.split(" ");
// 	})
// }

// //载入图片
// com.loadImages = function(stype){
	
// 	//绘制棋盘
// 	com.bgImg = new Image();
// 	com.bgImg.src  = "img/"+stype+"/bg.png";
	
// 	//提示点
// 	com.dotImg = new Image();
// 	com.dotImg.src  = "img/"+stype+"/dot.png";
	
// 	//棋子
// 	for (var i in com.args){
// 		com[i] = {};
// 		com[i].img = new Image();
// 		com[i].img.src = "img/"+stype+"/"+ com.args[i].img +".png";
// 	}
	
// 	//棋子外框
// 	com.paneImg = new Image();
// 	com.paneImg.src  = "img/"+stype+"/r_box.png";
	
// 	document.getElementsByTagName("body")[0].style.background= "url(img/"+stype+"/bg.jpg)";
	
// }

//显示列表
com.show = function () {
    // com.ct.clearRect(0, 0, com.width, com.height);  
    var nowChess = [
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ],
        [    ,    ,    ,    ,    ,    ,    ,    ,    ]
    ];
	// for (var i=0; i<com.childList.length ; i++){
	// 	com.childList[i].show();
    // }
    for(var i=0; i<10; i++){
        for(var j=0; j<9; j++){
            if(com.picMap[i+'_'+j]){
                nowChess[i][j] = com.picMap[i+'_'+j];
            } else {
				nowChess[i][j] = '';
			}
        }
    }
    thisPage.setData({
        chess: nowChess,
    });
}

//显示移动的棋子外框
com.showPane  = function (x,y,newX,newY){
	// com.pane.isShow=true;
	// com.pane.x= x ;
	// com.pane.y= y ;
	// com.pane.newX= newX ;
    // com.pane.newY= newY ;
    thisPage.setData({
        x: x,
        y: y,
        nx: newX,
        ny: newY,
    });
    
}

//生成map里面有的棋子
com.createMans = function(map){
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				com.mans[key]=new com.class.Man(key);
				com.mans[key].x=n;
				com.mans[key].y=i;
                com.childList.push(com.mans[key]);
                com.picMap[i+'_'+n] = com.args[com.mans[key].pater].img;
			}
		}
	}
}

com.initpicMap = function(map){
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key) {
				com.mans[key]=new com.class.Man(key);
				com.mans[key].x=n;
				com.mans[key].y=i;
                com.picMap[i+'_'+n] = com.args[com.mans[key].pater].img;
			}else {
                com.picMap[i+'_'+n] = '';
            }
		}
	}
}

com.mans	 ={};		//棋子集合
// com.createMans(com.initMap)		//生成棋子	


//debug alert
com.alert = function (obj,f,n){
	if (typeof obj !== "object") {
		try{console.log(obj)} catch (e){}
		//return alert(obj);
	}
	var arr = [];
	for (var i in obj) arr.push(i+" = "+obj[i]);
	try{console.log(arr.join(n||"\n"))} catch (e){}
	//return alert(arr.join(n||"\n\r"));
}

//com.alert的简写，考虑z变量名最不常用
var z = com.alert;

//获取元素距离页面左侧的距离
com.getDomXY = function (dom){
	var left = dom.offsetLeft;
	var top = dom.offsetTop;
	var current = dom.offsetParent;
	while (current !== null){
		left += current.offsetLeft;
		top += current.offsetTop;
		current = current.offsetParent;
	}
	return {x:left,y:top};
}

//获得cookie
com.getCookie = function(name){
	// if (document.cookie.length>0){
	// 	start=document.cookie.indexOf(name + "=")
	// 	if (start!=-1){ 
	// 		start=start + name.length+1 
	// 		end=document.cookie.indexOf(";",start)
	// 	if (end==-1) end=document.cookie.length
	// 		return unescape(document.cookie.substring(start,end))
	// 	} 
	// }
	return false;
}
//二维数组克隆
com.arr2Clone = function (arr){
	var newArr=[];
	for (var i=0; i<arr.length ; i++){	
		newArr[i] = arr[i].slice();
	}
	return newArr;
}

// 载入数据
com.getData = function (url,fun){
      var filePaths = url.split('/');
      var fileName = filePaths[filePaths.length-1];
      wx.getFileSystemManager().copyFile({  //先把文件复制到可操作的文件夹
        srcPath	: url, //源文件
        destPath: wx.env.USER_DATA_PATH + '/' + fileName,	//可操作的文件夹路径
        success: res => {
            //  console.log(res)		//复制成功返回res信息             
        },
        fail: console.error		//复制失败返回error
      });
      wx.getFileSystemManager().readFile({  //读取文件
        filePath: wx.env.USER_DATA_PATH + '/' + fileName,
        encoding: 'utf-8',
        success: res => {
        //   console.log(res.data);
          fun(res.data);
        },
        fail: console.error
      })
}

//把坐标生成着法
com.createMove = function (map,x,y,newX,newY){
	var h="";
	var man = com.mans[map[y][x]];
	h+= man.text;
	map[newY][newX] = map[y][x];
	delete map[y][x];
	if (man.my===1){
		var mumTo=["一","二","三","四","五","六","七","八","九","十"];	
		newX=8-newX;
		h+= mumTo[8-x];
		if (newY > y) {
			h+= "退";
			if (man.pater == "m" || man.pater == "s" || man.pater == "x"){
				h+= mumTo[newX];
			}else {
				h+= mumTo[newY - y -1];
			}
		}else if (newY < y) {
			h+= "进";
			if (man.pater == "m" || man.pater == "s" || man.pater == "x"){
				h+= mumTo[newX];
			}else {
				h+= mumTo[y - newY -1];
			}
		}else {
			h+= "平";
			h+= mumTo[newX];
		}
	}else{
		var mumTo=["１","２","３","４","５","６","７","８","９","10"];
		h+= mumTo[x];
		if (newY > y) {
			h+= "进";
			if (man.pater == "M" || man.pater == "S" || man.pater == "X"){
				h+= mumTo[newX];
			}else {
				h+= mumTo[newY - y-1];
			}
		}else if (newY < y) {
			h+= "退";
			if (man.pater == "M" || man.pater == "S" || man.pater == "X"){
				h+= mumTo[newX];
			}else {
				h+= mumTo[y - newY-1];
			}
		}else {
			h+= "平";
			h+= mumTo[newX];
		}
	}
	return h;
}

com.initMap = [
	['C0','M0','X0','S0','J0','S1','X1','M1','C1'],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,'P0',    ,    ,    ,    ,    ,'P1',    ],
	['Z0',    ,'Z1',    ,'Z2',    ,'Z3',    ,'Z4'],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	['z0',    ,'z1',    ,'z2',    ,'z3',    ,'z4'],
	[    ,'p0',    ,    ,    ,    ,    ,'p1',    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	['c0','m0','x0','s0','j0','s1','x1','m1','c1']
];



com.initMap1 = [
	[    ,    ,    ,, "J0"   ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,"c0",    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,	  ,    ,    ,    ],
	[    ,    ,    ,    ,"s0",    ,    ,"C0",    ],
	[    ,    ,    ,"s1",    ,"j0",    ,    ,    ]
];

com.initMap1 = [
	[    ,    ,    ,, "J0"   ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    , ,    ,    ,    ],
	[    ,    ,    ,    ,    ,"z0",    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,	  ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    , "j0"   ,,    ,    ,    ]
];

com.keys = {
	"c0":"c","c1":"c",
	"m0":"m","m1":"m",
	"x0":"x","x1":"x",
	"s0":"s","s1":"s",
	"j0":"j",
	"p0":"p","p1":"p",
	"z0":"z","z1":"z","z2":"z","z3":"z","z4":"z","z5":"z",
	
	"C0":"c","C1":"C",
	"M0":"M","M1":"M",
	"X0":"X","X1":"X",
	"S0":"S","S1":"S",
	"J0":"J",
	"P0":"P","P1":"P",
	"Z0":"Z","Z1":"Z","Z2":"Z","Z3":"Z","Z4":"Z","Z5":"Z",
}

//棋子能走的着点
com.bylaw ={}
//车
com.bylaw.c = function (x,y,map,my){
	var d=[];
	//左侧检索
	for (var i=x-1; i>= 0; i--){
		if (map[y][i]) {
			if (com.mans[map[y][i]].my!=my) d.push([i,y]);
			break
		}else{
			d.push([i,y])	
		}
	}
	//右侧检索
	for (var i=x+1; i <= 8; i++){
		if (map[y][i]) {
			if (com.mans[map[y][i]].my!=my) d.push([i,y]);
			break
		}else{
			d.push([i,y])	
		}
	}
	//上检索
	for (var i = y-1 ; i >= 0; i--){
		if (map[i][x]) {
			if (com.mans[map[i][x]].my!=my) d.push([x,i]);
			break
		}else{
			d.push([x,i])	
		}
	}
	//下检索
	for (var i = y+1 ; i<= 9; i++){
		if (map[i][x]) {
			if (com.mans[map[i][x]].my!=my) d.push([x,i]);
			break
		}else{
			d.push([x,i])	
		}
	}
	return d;
}

//马
com.bylaw.m = function (x,y,map,my){
	var d=[];
		//1点
		if ( y-2>= 0 && x+1<= 8 && !play.map[y-1][x] &&(!com.mans[map[y-2][x+1]] || com.mans[map[y-2][x+1]].my!=my)) d.push([x+1,y-2]);
		//2点
		if ( y-1>= 0 && x+2<= 8 && !play.map[y][x+1] &&(!com.mans[map[y-1][x+2]] || com.mans[map[y-1][x+2]].my!=my)) d.push([x+2,y-1]);
		//4点
		if ( y+1<= 9 && x+2<= 8 && !play.map[y][x+1] &&(!com.mans[map[y+1][x+2]] || com.mans[map[y+1][x+2]].my!=my)) d.push([x+2,y+1]);
		//5点
		if ( y+2<= 9 && x+1<= 8 && !play.map[y+1][x] &&(!com.mans[map[y+2][x+1]] || com.mans[map[y+2][x+1]].my!=my)) d.push([x+1,y+2]);
		//7点
		if ( y+2<= 9 && x-1>= 0 && !play.map[y+1][x] &&(!com.mans[map[y+2][x-1]] || com.mans[map[y+2][x-1]].my!=my)) d.push([x-1,y+2]);
		//8点
		if ( y+1<= 9 && x-2>= 0 && !play.map[y][x-1] &&(!com.mans[map[y+1][x-2]] || com.mans[map[y+1][x-2]].my!=my)) d.push([x-2,y+1]);
		//10点
		if ( y-1>= 0 && x-2>= 0 && !play.map[y][x-1] &&(!com.mans[map[y-1][x-2]] || com.mans[map[y-1][x-2]].my!=my)) d.push([x-2,y-1]);
		//11点
		if ( y-2>= 0 && x-1>= 0 && !play.map[y-1][x] &&(!com.mans[map[y-2][x-1]] || com.mans[map[y-2][x-1]].my!=my)) d.push([x-1,y-2]);

	return d;
}

//相
com.bylaw.x = function (x,y,map,my){
	var d=[];
	if (my===1){ //红方
		//4点半
		if ( y+2<= 9 && x+2<= 8 && !play.map[y+1][x+1] && (!com.mans[map[y+2][x+2]] || com.mans[map[y+2][x+2]].my!=my)) d.push([x+2,y+2]);
		//7点半
		if ( y+2<= 9 && x-2>= 0 && !play.map[y+1][x-1] && (!com.mans[map[y+2][x-2]] || com.mans[map[y+2][x-2]].my!=my)) d.push([x-2,y+2]);
		//1点半
		if ( y-2>= 5 && x+2<= 8 && !play.map[y-1][x+1] && (!com.mans[map[y-2][x+2]] || com.mans[map[y-2][x+2]].my!=my)) d.push([x+2,y-2]);
		//10点半
		if ( y-2>= 5 && x-2>= 0 && !play.map[y-1][x-1] && (!com.mans[map[y-2][x-2]] || com.mans[map[y-2][x-2]].my!=my)) d.push([x-2,y-2]);
	}else{
		//4点半
		if ( y+2<= 4 && x+2<= 8 && !play.map[y+1][x+1] && (!com.mans[map[y+2][x+2]] || com.mans[map[y+2][x+2]].my!=my)) d.push([x+2,y+2]);
		//7点半
		if ( y+2<= 4 && x-2>= 0 && !play.map[y+1][x-1] && (!com.mans[map[y+2][x-2]] || com.mans[map[y+2][x-2]].my!=my)) d.push([x-2,y+2]);
		//1点半
		if ( y-2>= 0 && x+2<= 8 && !play.map[y-1][x+1] && (!com.mans[map[y-2][x+2]] || com.mans[map[y-2][x+2]].my!=my)) d.push([x+2,y-2]);
		//10点半
		if ( y-2>= 0 && x-2>= 0 && !play.map[y-1][x-1] && (!com.mans[map[y-2][x-2]] || com.mans[map[y-2][x-2]].my!=my)) d.push([x-2,y-2]);
	}
	return d;
}

//士
com.bylaw.s = function (x,y,map,my){
	var d=[];
	if (my===1){ //红方
		//4点半
		if ( y+1<= 9 && x+1<= 5 && (!com.mans[map[y+1][x+1]] || com.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
		//7点半
		if ( y+1<= 9 && x-1>= 3 && (!com.mans[map[y+1][x-1]] || com.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
		//1点半
		if ( y-1>= 7 && x+1<= 5 && (!com.mans[map[y-1][x+1]] || com.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
		//10点半
		if ( y-1>= 7 && x-1>= 3 && (!com.mans[map[y-1][x-1]] || com.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
	}else{
		//4点半
		if ( y+1<= 2 && x+1<= 5 && (!com.mans[map[y+1][x+1]] || com.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
		//7点半
		if ( y+1<= 2 && x-1>= 3 && (!com.mans[map[y+1][x-1]] || com.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
		//1点半
		if ( y-1>= 0 && x+1<= 5 && (!com.mans[map[y-1][x+1]] || com.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
		//10点半
		if ( y-1>= 0 && x-1>= 3 && (!com.mans[map[y-1][x-1]] || com.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
	}
	return d;
		
}

//将
com.bylaw.j = function (x,y,map,my){
	var d=[];
	var isNull=(function (y1,y2){
		var y1=com.mans["j0"].y;
		var x1=com.mans["J0"].x;
		var y2=com.mans["J0"].y;
		for (var i=y1-1; i>y2; i--){
			if (map[i][x1]) return false;
		}
		return true;
	})();
	
	if (my===1){ //红方
		//下
		if ( y+1<= 9  && (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
		//上
		if ( y-1>= 7 && (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
		//老将对老将的情况
		if ( com.mans["j0"].x == com.mans["J0"].x &&isNull) d.push([com.mans["J0"].x,com.mans["J0"].y]);
		
	}else{
		//下
		if ( y+1<= 2  && (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
		//上
		if ( y-1>= 0 && (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
		//老将对老将的情况
		if ( com.mans["j0"].x == com.mans["J0"].x &&isNull) d.push([com.mans["j0"].x,com.mans["j0"].y]);
	}
	//右
	if ( x+1<= 5  && (!com.mans[map[y][x+1]] || com.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
	//左
	if ( x-1>= 3 && (!com.mans[map[y][x-1]] || com.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
	return d;
}

//炮
com.bylaw.p = function (x,y,map,my){
	var d=[];
	//左侧检索
	var n=0;
	for (var i=x-1; i>= 0; i--){
		if (map[y][i]) {
			if (n==0){
				n++;
				continue;
			}else{
				if (com.mans[map[y][i]].my!=my) d.push([i,y]);
				break	
			}
		}else{
			if(n==0) d.push([i,y])	
		}
	}
	//右侧检索
	var n=0;
	for (var i=x+1; i <= 8; i++){
		if (map[y][i]) {
			if (n==0){
				n++;
				continue;
			}else{
				if (com.mans[map[y][i]].my!=my) d.push([i,y]);
				break	
			}
		}else{
			if(n==0) d.push([i,y])	
		}
	}
	//上检索
	var n=0;
	for (var i = y-1 ; i >= 0; i--){
		if (map[i][x]) {
			if (n==0){
				n++;
				continue;
			}else{
				if (com.mans[map[i][x]].my!=my) d.push([x,i]);
				break	
			}
		}else{
			if(n==0) d.push([x,i])	
		}
	}
	//下检索
	var n=0;
	for (var i = y+1 ; i<= 9; i++){
		if (map[i][x]) {
			if (n==0){
				n++;
				continue;
			}else{
				if (com.mans[map[i][x]].my!=my) d.push([x,i]);
				break	
			}
		}else{
			if(n==0) d.push([x,i])	
		}
	}
	return d;
}

//卒
com.bylaw.z = function (x,y,map,my){
	var d=[];
	if (my===1){ //红方
		//上
		if ( y-1>= 0 && (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
		//右
		if ( x+1<= 8 && y<=4  && (!com.mans[map[y][x+1]] || com.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
		//左
		if ( x-1>= 0 && y<=4 && (!com.mans[map[y][x-1]] || com.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
	}else{
		//下
		if ( y+1<= 9  && (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
		//右
		if ( x+1<= 8 && y>=6  && (!com.mans[map[y][x+1]] || com.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
		//左
		if ( x-1>= 0 && y>=6 && (!com.mans[map[y][x-1]] || com.mans[map[y][x-1]].my!=my))d.push([x-1,y]);
	}
	
	return d;
}

com.value = {
	
	//车价值
	c:[
		[206, 208, 207, 213, 214, 213, 207, 208, 206],
		[206, 212, 209, 216, 233, 216, 209, 212, 206],
		[206, 208, 207, 214, 216, 214, 207, 208, 206],
		[206, 213, 213, 216, 216, 216, 213, 213, 206],
		[208, 211, 211, 214, 215, 214, 211, 211, 208],
		
		[208, 212, 212, 214, 215, 214, 212, 212, 208],
		[204, 209, 204, 212, 214, 212, 204, 209, 204],
		[198, 208, 204, 212, 212, 212, 204, 208, 198],
		[200, 208, 206, 212, 200, 212, 206, 208, 200],
		[194, 206, 204, 212, 200, 212, 204, 206, 194]
	],
	
	//马价值
	m:[
		[90, 90, 90, 96, 90, 96, 90, 90, 90],
		[90, 96,103, 97, 94, 97,103, 96, 90],
		[92, 98, 99,103, 99,103, 99, 98, 92],
		[93,108,100,107,100,107,100,108, 93],
		[90,100, 99,103,104,103, 99,100, 90],
		
		[90, 98,101,102,103,102,101, 98, 90],
		[92, 94, 98, 95, 98, 95, 98, 94, 92],
		[93, 92, 94, 95, 92, 95, 94, 92, 93],
		[85, 90, 92, 93, 78, 93, 92, 90, 85],
		[88, 85, 90, 88, 90, 88, 90, 85, 88]
	],
	
	//相价值
	x:[
		[0, 0,20, 0, 0, 0,20, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0,23, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0,20, 0, 0, 0,20, 0, 0],
		
		[0, 0,20, 0, 0, 0,20, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[18,0, 0, 0,23, 0, 0, 0,18],
		[0, 0, 0, 0, 0, 0, 0, 0, 0], 
		[0, 0,20, 0, 0, 0,20, 0, 0]
	],
	
	//士价值
	s:[
		[0, 0, 0,20, 0,20, 0, 0, 0],
		[0, 0, 0, 0,23, 0, 0, 0, 0],
		[0, 0, 0,20, 0,20, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0,20, 0,20, 0, 0, 0],
		[0, 0, 0, 0,23, 0, 0, 0, 0], 
		[0, 0, 0,20, 0,20, 0, 0, 0]
	],
	
	//奖价值
	j:[
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0], 
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0], 
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0]
	],
	
	//炮价值
	p:[
		
		[100, 100,  96, 91,  90, 91,  96, 100, 100],
		[ 98,  98,  96, 92,  89, 92,  96,  98,  98],
		[ 97,  97,  96, 91,  92, 91,  96,  97,  97],
		[ 96,  99,  99, 98, 100, 98,  99,  99,  96],
		[ 96,  96,  96, 96, 100, 96,  96,  96,  96], 
		
		[ 95,  96,  99, 96, 100, 96,  99,  96,  95],
		[ 96,  96,  96, 96,  96, 96,  96,  96,  96],
		[ 97,  96, 100, 99, 101, 99, 100,  96,  97],
		[ 96,  97,  98, 98,  98, 98,  98,  97,  96],
		[ 96,  96,  97, 99,  99, 99,  97,  96,  96]
	],
	
	//卒价值
	z:[
		[ 9,  9,  9, 11, 13, 11,  9,  9,  9],
		[19, 24, 34, 42, 44, 42, 34, 24, 19],
		[19, 24, 32, 37, 37, 37, 32, 24, 19],
		[19, 23, 27, 29, 30, 29, 27, 23, 19],
		[14, 18, 20, 27, 29, 27, 20, 18, 14],
		
		[ 7,  0, 13,  0, 16,  0, 13,  0,  7],
		[ 7,  0,  7,  0, 15,  0,  7,  0,  7], 
		[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
		[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
		[ 0,  0,  0,  0,  0,  0,  0,  0,  0]
	]
}

//黑子为红字价值位置的倒置
com.value.C = com.arr2Clone(com.value.c).reverse();
com.value.M = com.arr2Clone(com.value.m).reverse();
com.value.X = com.value.x;
com.value.S = com.value.s;
com.value.J = com.value.j;
com.value.P = com.arr2Clone(com.value.p).reverse();
com.value.Z = com.arr2Clone(com.value.z).reverse();

//棋子们
com.args={
	//红子 中文/图片地址/阵营/权重
	'c':{text:"车", img:'r_c', my:1 ,bl:"c", value:com.value.c},
	'm':{text:"马", img:'r_m', my:1 ,bl:"m", value:com.value.m},
	'x':{text:"相", img:'r_x', my:1 ,bl:"x", value:com.value.x},
	's':{text:"仕", img:'r_s', my:1 ,bl:"s", value:com.value.s},
	'j':{text:"将", img:'r_j', my:1 ,bl:"j", value:com.value.j},
	'p':{text:"炮", img:'r_p', my:1 ,bl:"p", value:com.value.p},
	'z':{text:"兵", img:'r_z', my:1 ,bl:"z", value:com.value.z},
	
	//蓝子
	'C':{text:"車", img:'b_c', my:-1 ,bl:"c", value:com.value.C},
	'M':{text:"馬", img:'b_m', my:-1 ,bl:"m", value:com.value.M},
	'X':{text:"象", img:'b_x', my:-1 ,bl:"x", value:com.value.X},
	'S':{text:"士", img:'b_s', my:-1 ,bl:"s", value:com.value.S},
	'J':{text:"帅", img:'b_j', my:-1 ,bl:"j", value:com.value.J},
	'P':{text:"炮", img:'b_p', my:-1 ,bl:"p", value:com.value.P},
	'Z':{text:"卒", img:'b_z', my:-1 ,bl:"z", value:com.value.Z}
};

com.class = com.class || {} //类
com.class.Man = function (key, x, y){
	this.pater = key.slice(0,1);
	var o=com.args[this.pater]
	this.x = x||0;   
    this.y = y||0;
	this.key = key ;
	this.my = o.my;
	this.text = o.text;
	this.value = o.value;
	this.isShow = true;
	this.alpha = 1;
	this.ps = []; //着点
	
	this.show = function (){
		if (this.isShow) {
			com.ct.save();
			com.ct.globalAlpha = this.alpha;
			com.ct.drawImage(com[this.pater].img,com.spaceX * this.x + com.pointStartX , com.spaceY *  this.y +com.pointStartY);
			com.ct.restore(); 
		}
	}
	
	this.bl = function (map){
		var map = map || play.map
		return com.bylaw[o.bl](this.x,this.y,map,this.my)
	}
}

com.class.Bg = function (img, x, y){
	this.x = x||0; 
    this.y = y||0;
	this.isShow = true;
	
	this.show = function (){
		if (this.isShow) com.ct.drawImage(com.bgImg, com.spaceX * this.x,com.spaceY *  this.y);
	}
}
com.class.Pane = function (img, x, y){
	this.x = x||0; 
    this.y = y||0;
	this.newX = x||0; 
    this.newY = y||0;
	this.isShow = true;
	
	this.show = function (){
		if (this.isShow) {
			com.ct.drawImage(com.paneImg, com.spaceX * this.x + com.pointStartX , com.spaceY *  this.y + com.pointStartY)
			com.ct.drawImage(com.paneImg, com.spaceX * this.newX + com.pointStartX  , com.spaceY *  this.newY + com.pointStartY)
		}
	}
}

com.class.Dot = function (img, x, y){
	this.x = x||0; 
    this.y = y||0;
	this.isShow = true;
	this.dots=[]
	
	this.show = function (){
		for (var i=0; i<this.dots.length;i++){
			if (this.isShow) com.ct.drawImage(com.dotImg, com.spaceX * this.dots[i][0]+10  + com.pointStartX ,com.spaceY *  this.dots[i][1]+10 + com.pointStartY)
		}
	}
}

com.init();

var AI = AI||{};

AI.historyTable	=	{};		//历史表


//人工智能初始化
AI.init = function(pace){
	var bill = AI.historyBill || com.gambit; //开局库
	if (bill.length){
		var len=pace.length;
		var arr=[];
		//先搜索棋谱
		for (var i=0;i< bill.length;i++){
			if (bill[i].slice(0,len)==pace) {
			arr.push(bill[i]);
			}
		}
		if (arr.length){
			var inx=Math.floor( Math.random() * arr.length );
			AI.historyBill = arr ;
			return arr[inx].slice(len,len+4).split("");
		}else{
			AI.historyBill = [] ;
		}
		
	}
	 //如果棋谱里面没有，人工智能开始运作
	var initTime = new Date().getTime();
	AI.treeDepth=play.depth;
	//AI.treeDepth=4;
	
	AI.number=0;
	AI.setHistoryTable.lenght = 0

	var val=AI.getAlphaBeta(-99999 ,99999, AI.treeDepth, com.arr2Clone(play.map),play.my);
	//var val = AI.iterativeSearch(com.arr2Clone(play.map),play.my)
	if (!val||val.value==-8888) {
		AI.treeDepth=2;
		val=AI.getAlphaBeta(-99999 ,99999, AI.treeDepth, com.arr2Clone(play.map),play.my);
	}
	//var val = AI.iterativeSearch(com.arr2Clone(play.map),play.my);
	if (val&&val.value!=-8888) {
		var man = play.mans[val.key];
		var nowTime= new Date().getTime();
		// com.get("moveInfo").innerHTML='<h3>AI搜索结果：</h3>最佳着法：'+
		// 								com.createMove(com.arr2Clone(play.map),man.x,man.y,val.x,val.y)+
		// 								'<br />搜索深度：'+AI.treeDepth+'<br />搜索分支：'+
		// 								AI.number+'个 <br />最佳着法评估：'+
		// 								val.value+'分'+
		// 								' <br />搜索用时：'+
		// 								(nowTime-initTime)+'毫秒'
		return [man.x,man.y,val.x,val.y]
	}else {
		return false;	
	}
}

//迭代加深搜索着法
AI.iterativeSearch = function (map, my){
	var timeOut=100;
	var initDepth = 1;
	var maxDepth = 8;
	AI.treeDepth=0;
	var initTime = new Date().getTime();
	var val = {};
	for (var i=initDepth; i<=maxDepth; i++){
		var nowTime= new Date().getTime();
		AI.treeDepth=i;
		AI.aotuDepth=i;
		var val = AI.getAlphaBeta(-99999, 99999, AI.treeDepth , map ,my)
		if (nowTime-initTime > timeOut){
			return val;
		}
	}
	return false;
}

//取得棋盘上所有棋子
AI.getMapAllMan = function (map, my){
	var mans=[];
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key && play.mans[key].my == my){
				play.mans[key].x = n;
				play.mans[key].y = i;
				mans.push(play.mans[key])
			}
		}
	}
	return mans;
}

/*
//取得棋谱所有己方棋子的着法
AI.getMoves = function (map, my, txtMap){
	var highMores = [];   //优先级高的着法
	var manArr = AI.getMapAllMan (map, my);
	var moves = [];
	var history=AI.historyTable[txtMap];
	for (var i=0; i<manArr.length; i++){
		var man = manArr[i];
		var val=man.bl(map);
		for (var n=0; n<val.length; n++){
			if (history){
				highMores.push([man.x,man.y,val[n][0],val[n][1],man.key])
			}else{
				moves.push([man.x,man.y,val[n][0],val[n][1],man.key])
			}
		}
	}
	return highMores.concat(moves);
}
*/
//取得棋谱所有己方棋子的着法
AI.getMoves = function (map, my){
	var manArr = AI.getMapAllMan (map, my);
	var moves = [];
	var foul=play.isFoul;
	for (var i=0; i<manArr.length; i++){
		var man = manArr[i];
		var val=man.bl(map);
		
		for (var n=0; n<val.length; n++){
			var x=man.x;
			var y=man.y;
			var newX=val[n][0];
			var newY=val[n][1];
			 //如果不是长将着法
			if (foul[0]!=x || foul[1]!=y || foul[2]!=newX || foul[3]!=newY ){
				moves.push([x,y,newX,newY,man.key])
			}
		}
	}
	return moves;
}
//A:当前棋手value/B:对手value/depth：层级
AI.getAlphaBeta = function (A, B, depth, map ,my) { 
	//var txtMap= map.join();
	//var history=AI.historyTable[txtMap];
	//	if (history && history.depth >= AI.treeDepth-depth+1){
	//		return 	history.value*my;
	//}
	if (depth == 0) {
		return {"value":AI.evaluate(map , my)}; //局面评价函数; 
　	}
　	var moves = AI.getMoves(map , my ); //生成全部走法; 
　	//这里排序以后会增加效率

	for (var i=0; i < moves.length; i++) {
		
		
　　	//走这个走法;
		var move= moves[i];
		var key = move[4];
		var oldX= move[0];
		var oldY= move[1];
		var newX= move[2];
		var newY= move[3];
		var clearKey = map[ newY ][ newX ]||"";

		map[ newY ][ newX ] = key;
		delete map[ oldY ][ oldX ];
		play.mans[key].x = newX;
		play.mans[key].y = newY;
		
	　　if (clearKey=="j0"||clearKey=="J0") {//被吃老将,撤消这个走法; 
			play.mans[key]	.x = oldX;
			play.mans[key]	.y = oldY;
			map[ oldY ][ oldX ] = key;
			delete map[ newY ][ newX ];
			if (clearKey){
				 map[ newY ][ newX ] = clearKey;
				// play.mans[ clearKey ].isShow = false;
			}

			return {"key":key,"x":newX,"y":newY,"value":8888};
			//return rootKey; 
	　　}else { 
	　　	var val = -AI.getAlphaBeta(-B, -A, depth - 1, map , -my).value; 
			//val = val || val.value;
	
	　　	//撤消这个走法;　 
			play.mans[key]	.x = oldX;
			play.mans[key]	.y = oldY;
			map[ oldY ][ oldX ] = key;
			delete map[ newY ][ newX ];
			if (clearKey){
				 map[ newY ][ newX ] = clearKey;
				 //play.mans[ clearKey ].isShow = true;
			}
	　　	if (val >= B) { 
				//将这个走法记录到历史表中; 
				//AI.setHistoryTable(txtMap,AI.treeDepth-depth+1,B,my);
				return {"key":key,"x":newX,"y":newY,"value":B}; 
			} 
			if (val > A) { 
	　　　　	A = val; //设置最佳走法; 
				if (AI.treeDepth == depth) var rootKey={"key":key,"x":newX,"y":newY,"value":A};
			} 
		} 
　	} 
	//将这个走法记录到历史表中; 
	//AI.setHistoryTable(txtMap,AI.treeDepth-depth+1,A,my);
	if (AI.treeDepth == depth) {//已经递归回根了
		if (!rootKey){
			//AI没有最佳走法，说明AI被将死了，返回false
			return false;
		}else{
			//这个就是最佳走法;
			return rootKey;
		}
	}
　return {"key":key,"x":newX,"y":newY,"value":A}; 
}

//奖着法记录到历史表
AI.setHistoryTable = function (txtMap,depth,value,my){
	AI.setHistoryTable.lenght ++;
	AI.historyTable[txtMap] = {depth:depth,value:value} 
}

//评估棋局 取得棋盘双方棋子价值差
AI.evaluate = function (map,my){
	var val=0;
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				val += play.mans[key].value[i][n] * play.mans[key].my;
			}
		}
	}
	//val+=Math.floor( Math.random() * 10);  //让AI走棋增加随机元素
	//com.show()
	//z(val*my)
	AI.number++;
	return val*my;
}

//评估棋局 取得棋盘双方棋子价值差
AI.evaluate1 = function (map,my){
	var val=0;
	for (var i in play.mans){
		var man=play.mans[i];
		if (man.isShow){
			val += man.value[man.y][man.x] * man.my;
		}
	}
	//val+=Math.floor( Math.random() * 10);  //让AI走棋增加随机元素
	//com.show()
	//z(val*my)
	AI.number++;
	return val*my;
}

var play = play||{};

play.init = function (){
	
	play.my				=	1;				//玩家方
	play.map 			=	com.arr2Clone (com.initMap);		//初始化棋盘
	play.nowManKey		=	false;			//现在要操作的棋子
	play.pace 			=	[];				//记录每一步
	play.isPlay 		=	true ;			//是否能走棋
	play.mans 			=	com.mans;
	play.bylaw 			= 	com.bylaw;
	play.show 			= 	com.show;
	play.showPane 		= 	com.showPane;
	play.isOffensive	=	true;			//是否先手
	play.depth			=	play.depth || 3;				//搜索深度
	
	play.isFoul			=	false;	//是否犯规长将
	
	
	
	// com.pane.isShow		=	 false;			//隐藏方块
	
	//初始化棋子
	for (var i=0; i<play.map.length; i++){
		for (var n=0; n<play.map[i].length; n++){
			var key = play.map[i][n];
			if (key){
				com.mans[key].x=n;
				com.mans[key].y=i;
				com.mans[key].isShow = true;
			}
		}
    }

    com.initpicMap(com.initMap);
    thisPage.setData({
        x: '',
        y: '',
        nx: '',
        ny: '',
    });

	play.show();
	
	//绑定点击事件
	// com.canvas.addEventListener("click",play.clickCanvas)
	//clearInterval(play.timer);
	//com.get("autoPlay").addEventListener("click", function(e) {
		//clearInterval(play.timer);
		//play.timer = setInterval("play.AIPlay()",1000);
	//	play.AIPlay()
	//})
	/*
	com.get("offensivePlay").addEventListener("click", function(e) {
		play.isOffensive=true;
		play.isPlay=true ;	
		com.get("chessRight").style.display = "none";
		play.init();
	})
	
	com.get("defensivePlay").addEventListener("click", function(e) {
		play.isOffensive=false;
		play.isPlay=true ;	
		com.get("chessRight").style.display = "none";
		play.init();
	})
	*/
	
	
	// com.get("regretBn").addEventListener("click", function(e) {
	// 	play.regret();
	// })
	
	/*
	var initTime = new Date().getTime();
	for (var i=0; i<=100000; i++){
		
		var h=""
		var h=play.map.join();
		//for (var n in play.mans){
		//	if (play.mans[n].show) h+=play.mans[n].key+play.mans[n].x+play.mans[n].y
		//}
	}
	var nowTime= new Date().getTime();
	z([h,nowTime-initTime])
	*/
	
}



//悔棋
play.regret = function (){
	var map  = com.arr2Clone(com.initMap);
	//初始化所有棋子
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				com.mans[key].x=n;
				com.mans[key].y=i;
				com.mans[key].isShow = true;
			}
		}
	}
	var pace= play.pace;
	pace.pop();
	pace.pop();
	
	for (var i=0; i<pace.length; i++){
		var p= pace[i].split("")
		var x = parseInt(p[0], 10);
		var y = parseInt(p[1], 10);
		var newX = parseInt(p[2], 10);
		var newY = parseInt(p[3], 10);
		var key=map[y][x];
		//try{
	 
		var cMan=map[newY][newX];
		if (cMan) com.mans[map[newY][newX]].isShow = false;
		com.mans[key].x = newX;
		com.mans[key].y = newY;
		map[newY][newX] = key;
		delete map[y][x];
		if (i==pace.length-1){
			com.showPane(newX ,newY,x,y)	
		}
		//} catch (e){
		//	com.show()
		//	z([key,p,pace,map])
			
		//	}
	}
	play.map = map;
	com.initpicMap(play.map);
	play.my=1;
	play.isPlay=true;
	com.show();
}



//点击棋盘事件
play.clickCanvas = function (e){
	if (!play.isPlay) return false;
	var key = play.getClickMan(e);
	var point = play.getClickPoint(e);
	
	var x = point.x;
	var y = point.y;
	
	if (key){
		play.clickMan(key,x,y);	
	}else {
		play.clickPoint(x,y);	
	}
	play.isFoul = play.checkFoul();//检测是不是长将
}

//点击棋子，两种情况，选中或者吃子
play.clickMan = function (key,x,y){
    var man = com.mans[key];
    thisPage.setData({
        x: '',
        y: '',
        nx: '',
        ny: '',
    });
	//吃子
	if (play.nowManKey&&play.nowManKey != key && man.my != com.mans[play.nowManKey ].my){
		//man为被吃掉的棋子
		if (play.indexOfPs(com.mans[play.nowManKey].ps,[x,y])){
			man.isShow = false;
			var pace=com.mans[play.nowManKey].x+""+com.mans[play.nowManKey].y
            //z(bill.createMove(play.map,man.x,man.y,x,y))
            
            com.picMap[com.mans[play.nowManKey].y+'_'+com.mans[play.nowManKey].x] = null;

            delete play.map[com.mans[play.nowManKey].y][com.mans[play.nowManKey].x]; 
			play.map[y][x] = play.nowManKey;
			com.showPane(com.mans[play.nowManKey].x ,com.mans[play.nowManKey].y,x,y)
			com.mans[play.nowManKey].x = x;
			com.mans[play.nowManKey].y = y;
            com.mans[play.nowManKey].alpha = 1;
            
            com.picMap[y+'_'+x] = com.args[com.mans[play.nowManKey].pater].img;
			
			play.pace.push(pace+x+y);
			play.nowManKey = false;
			// com.pane.isShow = false;
			// com.dot.dots = [];
			com.show()
			// com.get("clickAudio").play();
			setTimeout(play.AIPlay,500);
			if (key == "j0") play.showWin (-1);
			if (key == "J0") play.showWin (1);
		}
	// 选中棋子
	}else{        
		if (man.my===1){
			if (com.mans[play.nowManKey]) com.mans[play.nowManKey].alpha = 1 ;
			man.alpha = 0.6;
			// com.pane.isShow = false;
			play.nowManKey = key;
			com.mans[key].ps = com.mans[key].bl(); //获得所有能着点
            // com.dot.dots = com.mans[key].ps
            // 选中棋子
            thisPage.setData({
                x: com.mans[key].x,
                y: com.mans[key].y,
            });
			com.show();
			//com.get("selectAudio").start(0);
			// com.get("selectAudio").play();
		}
	}
}

//点击着点
play.clickPoint = function (x,y){
	var key=play.nowManKey;
	var man=com.mans[key];
	if (play.nowManKey){
		if (play.indexOfPs(com.mans[key].ps,[x,y])){
			var pace=man.x+""+man.y
			//z(bill.createMove(play.map,man.x,man.y,x,y))
			delete play.map[man.y][man.x];
			play.map[y][x] = key;
            com.showPane(man.x ,man.y,x,y)
            com.picMap[y+'_'+x] = com.picMap[man.y+'_'+man.x];
            com.picMap[man.y+'_'+man.x] = '';
			man.x = x;
			man.y = y;
			man.alpha = 1;
			play.pace.push(pace+x+y);
			play.nowManKey = false;
            // com.dot.dots = [];            
			com.show();
			// com.get("clickAudio").play();
			setTimeout(play.AIPlay,500);
		}else{
			//alert("不能这么走哦！")	
		}
	}
	
}

//Ai自动走棋
play.AIPlay = function (){
	//return
	play.my = -1 ;
	var pace=AI.init(play.pace.join(""))
	if (!pace) {
		play.showWin (1);
		return ;
	}
	play.pace.push(pace.join(""));
	var key=play.map[pace[1]][pace[0]]
		play.nowManKey = key;
	
	var key=play.map[pace[3]][pace[2]];
	if (key){
		play.AIclickMan(key,pace[2],pace[3]);	
	}else {
		play.AIclickPoint(pace[2],pace[3]);	
	}
	// com.get("clickAudio").play();
	
	
}

//检查是否长将
play.checkFoul = function(){
	var p=play.pace;
	var len=parseInt(p.length,10);
	if (len>11&&p[len-1] == p[len-5] &&p[len-5] == p[len-9]){
		return p[len-4].split("");
	}
	return false;
}



play.AIclickMan = function (key,x,y){
	var man = com.mans[key];
	//吃子
    man.isShow = false;
    
    com.picMap[com.mans[play.nowManKey].y+'_'+com.mans[play.nowManKey].x] = null;

	delete play.map[com.mans[play.nowManKey].y][com.mans[play.nowManKey].x];
	play.map[y][x] = play.nowManKey;
    play.showPane(com.mans[play.nowManKey].x ,com.mans[play.nowManKey].y,x,y);  
	
	com.mans[play.nowManKey].x = x;
	com.mans[play.nowManKey].y = y;
    com.picMap[y+'_'+x] = com.args[com.mans[play.nowManKey].pater].img;

    play.nowManKey = false;
	
	com.show();
	if (key == "j0") play.showWin (-1);
	if (key == "J0") play.showWin (1);
}

play.AIclickPoint = function (x,y){
	var key=play.nowManKey;
	var man=com.mans[key];
	if (play.nowManKey){
		delete play.map[com.mans[play.nowManKey].y][com.mans[play.nowManKey].x];
		play.map[y][x] = key;		
        com.showPane(man.x,man.y,x,y)	
        com.picMap[y+'_'+x] = com.picMap[man.y+'_'+man.x];
        com.picMap[man.y+'_'+man.x] = '';
		man.x = x;
		man.y = y;
		play.nowManKey = false;		
	}
	com.show();
}


play.indexOfPs = function (ps,xy){
	for (var i=0; i<ps.length; i++){
		if (ps[i][0]==xy[0]&&ps[i][1]==xy[1]) return true;
	}
	return false;
	
}

//获得点击的着点
play.getClickPoint = function (e){
	var domXY = com.getDomXY(com.canvas);
	var x=Math.round((e.pageX-domXY.x-com.pointStartX-20)/com.spaceX)
	var y=Math.round((e.pageY-domXY.y-com.pointStartY-20)/com.spaceY)
	return {"x":x,"y":y}
}

//获得棋子
play.getClickMan = function (e){
	var clickXY=play.getClickPoint(e);
	var x=clickXY.x;
	var y=clickXY.y;
	if (x < 0 || x>8 || y < 0 || y > 9) return false;
	return (play.map[y][x] && play.map[y][x]!="0") ? play.map[y][x] : false;
}

//获得棋子
play.getClickManByXY = function (x,y){	
	if (x < 0 || x>8 || y < 0 || y > 9) return false;
	return (play.map[y][x] && play.map[y][x]!="0") ? play.map[y][x] : false;
}

play.showWin = function (my){
	play.isPlay = false;
	if (my===1){
		wx.showToast({
            title: "恭喜你，你赢了！",
            icon: 'none',
            duration: 2000,
        });
	}else{
		wx.showToast({
            title: "很遗憾，你输了！",
            icon: 'none',
            duration: 2000,
        });
	}
}

const app = getApp();

const conf = {
    data: {
        popMsg: '',
        nextDepth: 1,
        depth: 0,        
        chess:[
            ['','','','','','','','',''],
            ['','','','','','','','',''],
            ['','','','','','','','',''],
            ['','','','','','','','',''],
            ['','','','','','','','',''],
            ['','','','','','','','',''],
            ['','','','','','','','',''],
            ['','','','','','','','',''],
            ['','','','','','','','',''],
            ['','','','','','','','','']
        ],
        x:'',
        y:'',
        nx:'',
        ny:'',
    },
    onReady: function(){
        // 弹框
        this.popup = this.selectComponent("#popup");
        com.mans	 ={};		//棋子集合
        com.createMans(com.initMap);		//生成棋子	
		thisPage = this;        
		com.gambit="77477062796780708979727666651242262500011927017109197666798971742735102235237414 77477062796780702625636419277282171520428988304127351031473712323732413235233112 19272324775710227967706289798070666560421713221429470001394801311363727626252425 77477062796780708979102219076364172712147973625409190010191520420605232473756465 77471022262580811727204279677082897972621907001009198111191330417972113159483135 26256364776772421927706229478070676412227967232427352425472560826465707417374246 77477062796763648979807079731022192723240908121373752042666564657565625426252425 77377242796770625948807069471022895912021715001059552324192722345535242535342515 77477242796770628979808119271022262581513948000117150131273523244737423235232425 77477062796763641737807019271022091900108979121679736254262550417353546627357276 77377062796780708979232479757282753510222947707419383041171360421323001009191216 26251222774720427967808189798111192710310919304179757082674883841713030413431119 77477242796770628979808119278131394810222625000179756364290712026665646575656254 77477062796780702625728219276364170712420919102219148281146422416665816164344122 77477062796780708979102266652324190703041727221409080405060500057975604208580535 77477242796770628979102226258081192781513948000117150131273523244737242537315131 77471022796772526665706226258070897970796779121569872042192715140908304108580030 77471022796772528979706226251202172720422723636419270010797310140919141927193041 77471022262572521927706217078070796763640919001027355242191570753523120215102210 17471022192700106665724279677062897980816755232477671202656410155574223464631565 77477062796712421927102209190001262501318979807079757282753531352735707435237414 19272324775710227967708289798070666572762947304117182042186822146755766679708270 26251222774720427967232489792425190780810919813147433041394831351737706243837282 26256364776772421927706229471002394812320919001017138081798723242524812124142126 17471022192700100919706226256364798783847767627489886042191380838858120213230201 77477242796770628979808119278131666523247974424174243132262520422423102209084121 26252042774770627967807089796364192710221715002009071211666511616755646555346575 77477062796780708979102219077276666523240908604208380001171301713833304133232230 77477062796780702625636419272042897972761707102209190010191330414645767379752324 26251222774772421927232427352425354380817967812189797082797522321727251527371516 77377242796770628979808119278131394810227975434426253136375722431713444557563634 77477062796780708979636479731022262572827363828119077075464522411713124207268161 77477062796780708979102226256364797372827363828117370010192712020907504127358161 26257062666572827767604219278070090810026947000108380171795871781718504167570304 77477062796780708979636479731022262572827363828119273041273581616353707517152042 69471232262510021927001009191014170714347757604279678081060581515948515666656364 69477252666570827967807089797074192710221715232467757434758320427767525709070001 77477062796780708988636426251022192720428858304117071216464572760919003058553036 77477062796723246665102219078070897903041737727446452042373304053363121479750506 77477062796780708979102226256364797320421927728273637072273500011737121635540151 66651022262572427967706289798070777312190919001017134344694742437343707967796243 26251222774720427967232419072425897910310919304117373123474370624353807037270030 77577252666570827967807019272324170710220919001019135253131512021510221089881022 77477062796780708979636417377276192710020919001066656465191520421565762679702629 77477062796780708979102219076364172700100919121679757282755570710605711166656465 77477062796763648979808219271022464530411715625445445466443472427976646567466658 69476364262570621927604209081002086800016665646568657270777301717370807079677131 77477062796780708979102266652324171360427973728273706270192770510908030408380003 77477062796780708979102266652324171360427973223419072425136325260919122219142229 79676364262570621927808189888121171810028858604246450001090812172947728258532171 26251222774720421907808109198131796730413948313489797082173783847973100247430010 77477242796770628979636419271022262500011715013166653134675534370907646559483731 77477062796780702625636419271022898820422735304188287282473764656665121525242324 79676364262570621927808117071252091910227773627469472042732300015948746606050111 66656042775723247967706289798070192710221713221429470001136301317974315139487282 77477062796780702625728219277075290763648988121666657565271565250929232488280002 77477242796770628979808119278131262510027975313609070304252423242735123259480010 77477062796780708979102226256364797372827363828119273041170781616353627409190010 77377062796780706665728219272324171360421363102209190010191350416947223413152425 26251222774720423948636479677062897980707975728275706270464510311737001019272324 26251222774720424743304129471031434400101938808179678151091910144645515689887062 77477062796780702625636419271022171562742735204289887071885874664737000109087151 77477062796763641737102289798070192700100919121679736254262564657353546653736647 77477062796780708979102226256364192712162735166609190010171364655948727347276606 69477232796770628979807077736364736320427970627019071022090812021737001008787062 77377242796770628979102219272324394863641707001009198070797062701913426207032042 77571252262510221927001079677082897980700919101417071419271972627970827007276364 66657262294770827967124289791022192700100919807017152324868570767787766679771011 69477232796770628979636477872042192723241707102209191210797580707570627087837062 19272324775710227967708289798070294720425752726279708270522262221707001009191216 77377062796780708979727666657666262512421927707967794246798766560919464449480001 77477062796780708979102219072324666503041727221409080405675505065543204243241211 29472324666510221927725279677062897980701713604213637073091912141915736315555254 79676364262570621927808189888121171872828858217177872042464510226746717766653041 17471022192700100919636419157062666564651565727177678082657571217987204247572324 69471232262510021927001009191014170714347757706279678081594881510605515607063436 26256364192770626947204279581031896900206665646569652324271562541727725209088081 26256364776712421927102209190010171370626947220113121012191242462746721266654344 66651022262512021727204219070010796770826947808177877262897963646564101479721464 26252042192763641707102209190010773770627967627419138081273581113523120213111011 26257242796770621927807089797074778774796779100229476364394812220919001017130304 26252042192763641707102209190010773770627967625419131202131022108979808179757252 77577242192770627967807069476364262510020605000159480151090650412715123225245155 26251222694710021927001009197242171370627757807079672324252470742414030489797454 26251222774720427967808119278111897910311707708227353041797583844737000106051117 69477232796770628979807077736364262510021927122209190010171323242735242547252042 77477062796780702625728219277075464512422746102217270010252410162423224189886364 77477062796780708979232419071022173772742625242579752042752522146665707125231435 26256364776772421927706229478070394810020939504167641232271562547967323525244232 26251222694710021927001009191014170714347967706219115041271572711112225225243424 19276364262570627967204209088081083812222715100215030020060581110322202205041116 77477062796780702625728219276364171520428988707627357666090710314748667688587671 77477062796780708979102226256364797372827363828119273041170700100919816163536274 77477062666580707967232417131022132360421927121409190010897963647975646575656254 77477062796780708979102266652324190703041727221409086042675504050605000508585041 77477062796780702625636419271022171572778979774779706270294720423948304166650030 26257062666512427747102219078070796772821727707489797479677942463948001079674645 17377242796710021927232409191222694724254725000139487062897901311914808166650304 26257062192772827967807089796364090820426947304108387076383510026665646535650030 26251222774720427967232419072425897980810919813139483135474330411737708269472515 77477062796780702625636419271022898820428858728217153041473723242524422427352442 77471022796772526665232419076042172700100919121689887062882880702625707427375041 26251222774720424743304129471031434400101938808179678151091910144645515689885606 77477242796770628979808179758131192731362907100226253041753536260929123217130010 77477062796780708979636479731022192730410908120246450010171872827363707645447666 26251222174772427967706289792324190724250919100277736364797580707525707325223041 77477242796780818979706219278131666510026755313555436243474330412947123209190010".split(" ");
		com.store="26251222774720427967232419072425897980814743304146451031454481516746515517473123463470820919251543832344060555353415001015231019233519294745292479772434838572620715343377276364272482632434333415346465341365554547221247676266676344633554634439486646485744365433362849484616483840308583555683851618383928168583565759485758485718138313123233253235393835315748422425464132483716371333375633315848383930314627563769473141868548588584374527154526394926188474183749393716150316350324352739385848383727062416061816281826472526052836052636442645374748387473 77477062796780708979636479731022262572827363828119273041273581616353707566657574355412114645604245446465547365664443624353636667736111616361677709070010177710160737435577871686373322433323860661510646230374643948462603096469515383848757262547172515174755364737432457472416373815450907452507096967474636173818173853433846 77477062796723248979807066651022190703041727221409080003797320420838728273706270464550412728140638360405677524257563826269877082638260824544826047430304443412324344323644044050282505152555364655564220344462220424604224231516234346362947161707192232433306144434363334333231494814265658264533433101435350401938171848490108394808385838 7747706279676364897980707973102226257282736382814645304145448161635364656746707847486555535543441747204247440030192712110919627455653033465433532735748665627858191758543554535444455455454455541747867848685458474858564447563648182243626578664767436465556443555361676866366653431131432366062383030469476764833331301814040514040646040564445948467633533020050076795359 7747706279678070897910221907636417370010091972761913304159482042132322304743624323431217694730224323172723831018464518384544221467461435495935474627383779773727774727472947767707197076193876668303665659496465444356864342604247658636381736260373772706052616172916156547154547694505734342604323270723204130202707092747504147676082676205456202091902121909121745656987656417070919071719091715646787658260150509190515190915450902654767772937021245431282372577794859828943636082 2625636477676042798770628979807079757282757062701747000147433041294770624345102219272243091912028685013187754355677731331913557625246465476562541323332324235466451566587747828515104130756358663948664765474264232250412212020110110100120200100201204227357655355455344645341354334132010010203312133411213041454434264443203021318515634426141233143500104050102030404463413043426442318140206371 77477062796780708979636479731022192723240908121373752042666564657565625426252425652572620858707467557464557664747655746447676252557664746777747658543041775752571757002069472201543476863433865639482025472556552735131025070122572710203523202333232230234303044333301127255556252156463313460613110636 7747706279678070897972766665124219271022091900102625101417071474191363641323646523226566797774644748666777676467076776794818625467477073222354664743426229477353394862632735535849396369393869681815585648575646433346163527163638486658 7747706279678070897963647973102226251216464520421927304106051626666572827370627045444344274600100906101706264445474564652636175745446566466557676573675736664030394857536636304073615351617370624939517136336243736571612947616444462324252464243949436433632243467643556303242676738262736355360333644533356265 774770627967807026256364192772821715204289887076273576660907103147486676675576468858461655342324345312110737242535543152543300203345161537313041484315145838144431336254 7747706279678081192720426665813189797282170731360919103167553635464500107976828107033537454437274443814143426042763641476947426059481217495931520305171605451015262515255543254543225041191627251610253536354535224352444362355559494456485755526283563749485272483837451016727339487383383983841615452615258486485926182528182657482324394960422827264506058606270706260504456607056687483787684939261659481676055576165558687658536364656476645355161955651913394964526555422048592002374852315554131954553112550512330535331235051231053531233505191648394132055530415505 773772427967706289791022262580811927813139484344797531363757224329472324093936394839122227154445464524251523252659484324454424367535001023151000153626363536001036262232666542416755604244343202343341015534101434535041262363646564146417106270333202062303064603016469575969670106674753614050101447674857 77477242898870627967807088387074192710221715232438333041156522340919123219153426474374643948624333434272464520424353727553513231515626451511313329470030274633365651366611133033131041301012334351717574655564545550746467885450462750586987433388696444 774770627967807089791242192710222625636409197276594800011707013119133136132322412715767323244222472760422414222715273626141773776947625466656465476541626547546679595041476562742947748659697050271986651938260648576584394877786786668769677838678784768777507017373808072706262729838449598485867885864839868777877668 262520421927636477477062796780708988728217151031883800013834121006053041341410200504232427060304252404054707625415255433242333250625012129473123072721111411231125138281090570732717112366656465 774770627967807089796364797310222625728273638281192700011707015127355041091981611912616312227078472763666947515222207868202366763948521235566858070360425675586803001210270764652313102075637679476968672947674763424050131450510001515001005051000151500100 774770627967232489798070190710227975204217272214060530410715728275706270153400300504030409043034041463642707343314244030594833394839422426252442474370624313625413168262694712150737626616665466373666543638415238881511 694763642625100219276042090800010858706279670121585523242524212427355041594812326665646555658050895950594859 7747706279678070897910226665232419070304171360421323000309190323191272827970627012182425187870517871513267552526556382867176868463848384464526277626 6947724279677062897980701927707417151232594810226665747609190001153501511913232413235154262524252325221435367674252050413616322227152212161454141527747620221211778776796779147479581118485974545837188837258889594854748767747948598959494859522224795924345953251342124849524239484344132553433433123233436243676343242544322244252225472542826564828664540304632360425444240344434220238303244333040506052405273505248384867684444050355476725462505144542042334342645455 774770627967807089791022262563647973728273638281464530411727816163536465666570761907121547486042252415174847762667481747694726240919000153560131272631384869625459485435695735144725142657382638191824342547232418163435163624253637221447253525373825456564456538341422345442645626220154532042538343448385656948590120858320328353030429476967072844453948616028164555264655564656674716046482566647466662460604250686 7747706279678070897963647973102226257282736382811737000119270151273581613543624347432243634312426947707609197666191051315948665643636141373356666759664610204243333731372023434729473735636441456444504123636082636545475947464765354744353344843303848625248689485989842423844459488384232244242212826003632414636041506062140462425041424684854837857512220402222102012120010046664050203041520605 774770627967807089791022190723246665030417272214090860426755000308385041556314062728040538370313797513154767727429477454757062703733706226255453333153512524200231330224634262544221512128212402334315164303022003055446676646342126161705063426062617076646405046430703265612525653838465640306646306664345666447652042694764444525504063625250252842206261446453232042615164545150405039485456238356868380505180815150818050512821415280308626212526563034 77477062796780708979102226256364797372827363828146453041454481616353646567466566463470781927204259486656476762745363616717677455635355366737121737387877535636445626002034461711091911313808777626167686463486161916232425242234243444361611202627463628463831301113260608183038183806364837363749483734134328363837362443472416373883844746162469473436463624364849030438580405394884854837051558383657385885753748574558551516555775765787403087847666848616264765666786876768870768582947262707082728483745660806426406086482080628180656667856063031060941320906314149397866065641425646324137481828485758684606665839495837495937160603283803836878838616288646283665877868876542525949826465873615461615361618365749593839 26257062666523242524728279678070897970742423636465647464192720427787625467551031171454622735312335236414556300016382608223428260426301516947515787891464796964694769576763556769898712523948625455345272877772820907828677878676077769668786767586887535341366461332404177714142717242417271414232113545113042323011324211235433493946364837363739493747493947373949372723314544315042525031524271724241727141427173334549392729393845573848423273432949 26251222774720427967232489792425190780810919813147433041438370823948313517377262694722323732353279726252666532348385253507263424260524231913103185832313051300206755202486852454553454447276311276568261565244345262 262512227967636419277062091910021712604227357273694750416665646547658050654722325948000177870121897973701913212279726254123254353202355648575664727420028783707239485056131423242524222414240224838456668464666474644264675572025543020686852442 7747724289887062796780708838707419271022090823241713746438332002085830413323002066656434262524252325221413636082585542222715022425352229394834355535244235552909483720260605261615341406551516194948191534150905630305651534826067550625474362435543838469472544476544650304658604848665848042204322121148491131594865733453415253723171464573652234657345447365444365443413524113214030213330408086446386466355464540304535304072514152513271313312504135314132433340303101 7747102279677252897970626665232419076042172700100919121626252425656463647975646575656254652580602722522247435041677554462522101329474634222413432434164639486069755469683433433354334676332140501913767947694152138368698373798906054260071569617379612179895040493921251507253539493537".split(" ");
		// com.getData("utils/data/gambit.all.dat",
        //     function(data){
        //     com.gambit=data.split(" ");
        //     AI.historyBill = com.gambit;
        // });
        // com.getData("utils/data/store.dat",
        //     function(data){
        //     com.store=data.split(" ");
        // });
    },
    showPlayMsg: function(e) {
        this.setData({
          popMsg: e.currentTarget.dataset.msg,
          nextDepth: parseInt(e.currentTarget.dataset.next_depth),
        })
        this.popup.showPopup();
    },
    hidePlayMsg: function(){
        this.popup.hidePopup();
    },
    tapChessMan: function(e) {
        // if(!(e.currentTarget.dataset.isman)){
        //     console.log('('+e.currentTarget.dataset.x+','+e.currentTarget.dataset.y+')位置无棋子，不操作');
        //     return;
        // }
        if (!play.isPlay) 
            return false;

        var x = e.currentTarget.dataset.x;
        var y = e.currentTarget.dataset.y;
        var key = play.getClickManByXY(x,y);
        
        if (key){
            play.clickMan(key,x,y);	
        }else {
            play.clickPoint(x,y);	
        }
        play.isFoul = play.checkFoul();//检测是不是长将
    },
    doPlay: function(e) {
        this.popup.hidePopup();
        this.setData({
            depth: this.data.nextDepth,
        });
        
        play.depth = this.data.depth;
        play.init();
	},
	tapRegret: function(e) {
		// if (!play.isPlay) 
		// 	return false;

		play.regret();
	}
};
Page(conf);

