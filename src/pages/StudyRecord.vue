<template>
  <!-- 主要内容 -->
    <div class="main">
        <div class="tip">学习记录</div>
        <div class="item">学习用时</div>
        <div class="echart">
            <div class="boll">
                <div class="text">
                    <p class="num">学习进度</p>
                    <p class="progress">36%</p>
                </div>
                <div class="water w1"></div>
                <div class="water w2"></div>
                <div class="water"></div>
            </div>
            <div class="word">
                <p style="margin-top:32px;">今日学习时长</p>
                <span>2时31分</span>
                <p>共计学习时长</p>
                <span>2时31分</span>
            </div>
            <canvas id="canvas_circle" width="385px" height="193px" > </canvas>
        </div>
        <div class="item" style="margin-top:40px">实验情况</div>
        <span class="seconditem" style="margin-top:12px">实验一  常用仪器的使用与测试 </span>
        <div class="first" style="margin-left:18px">
            <span>实验内容</span>
            <p></p>
            <span>教学视频进度</span>
            <p></p>
            <span>实验原理</span>
            <p></p>
            <span>虚拟实验</span>
            <p></p>
            <span>实体实验</span>
            <p></p>
            <span>实验分析</span>
            <p></p>
        </div>
        <span class="seconditem">实验二   单机低频放大器的设计与调测 </span>
        <div class="second" style="margin-left:18px">
            <span>实验内容</span>
            <p></p>
            <span>教学视频进度</span>
            <p></p>
            <span>实验原理</span>
            <p></p>
            <span>虚拟实验</span>
            <p></p>
            <span>实体实验</span>
            <p></p>
            <span>实验分析</span>
            <p></p>
        </div>
    </div>
</template>


<style scoped>
a,.router-link-active{
  text-decoration: none;
	color: rgba(80, 80, 80, 1);
}
.main{
  width: 80%;
  min-width:800px;
    margin:0;
    position: absolute;
    margin:0 200px;
    top: 98px;
    background-color: rgb(240,243,247);
}
.tip{
    width: 112px;
	height: 42px;
	color: rgba(80, 80, 80, 1);
	font-size: 27px;
	line-height: 42px;
	text-align: left;
    font-weight: bold;
    margin-top:23px;
    margin-left:28px;
}
.item{
    width: 88px;
	height: 33px;
	color: rgba(80, 80, 80, 1);
	font-size: 21px;
	line-height: 33px;
	text-align: left;
    margin-top:11px;
    margin-left:28px;
}
.echart{
  width: 100%;
  min-width:800px;
    height:193px;
    display: block;
}
div,p{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
.boll {
        height: 160px;
        width: 160px;
        border-radius: 50%;
        border: 2px solid rgba(165, 171, 177, 100);
        float: left;
        position: relative;
        font-size: 14px;
        overflow: hidden;
        margin:20px 0 0 100px;
}
.text {
        text-align: center;
        margin-top: 40px;
        color: rgba(165, 171, 177, 100);
}
.num {
        font-size: 14px;
        color:rgba(0, 0, 0, 0.45);
}
.progress{
        color:rgba(165, 171, 177, 100);
        font-size: 20px;
        font-weight: bold;
}
.water {
        height: 50%;
        background: url(../assets/wave.png) repeat-x;
        position: absolute;
        width: 100%;
        -webkit-animation: move_wave 4s linear infinite;
        animation: move_wave 4s linear infinite;
}

.w1 {
        opacity: .5;
        background-position: 120px 0;
        -webkit-animation: move_wave 10s linear infinite;
        animation: move_wave 10s linear infinite;
}
.w2 {
        opacity: .3;
        background-position: 60px 0;
        -webkit-animation: move_wave 8s linear infinite;
        animation: move_wave 8s linear infinite;
}

@-webkit-keyframes move_wave {
        0% {
            background-position: 0 0
        }
        to {
            background-position: 532px 0
        }
}

@keyframes move_wave {
        0% {
            background-position: 0 0
        }
        to {
            background-position: 532px 0
        }
}
.word{
    width:110px;
    height:193px;
    float: left;
    margin-left:35px;
}
.word p,.word span{
    width:110px;
    display: block;
    text-align: center;
    margin:10px 0;
}
.word p{
    color: rgba(80, 80, 80, 1);
	font-size: 16px;
	font-weight: bold;
}
.word span{
    color: rgba(80, 80, 80, 1);
	font-size: 14px;
}
.mainchart{
    width:385px;
    height:193px;
}
.seconditem{
	height: 25px;
	left: 166px;
	color: rgba(80, 80, 80, 1);
	font-size: 17px;
	line-height: 25px;
    margin-left:28px;
    display: block;
}
.first span,.second span{
	height: 21px;
	color: rgba(80, 80, 80, 1);
	font-size: 14px;
    line-height: 21px;
    margin:12px 10px;
    display:inline-block;
}
.first p,.second p{
	height: 21px;
	color: rgba(133, 205, 110, 1);
	font-size: 14px;
    line-height: 21px;
    margin:0 10px;
    display:inline-block;
}
.second p{
	color: rgba(248, 113, 144, 1);
}
</style>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;  //允许axios请求携带cookie等凭证
import $ from 'jquery'
export default {
    data () {
      return {
      }
    },
    mounted:function(){
      this.init()
      this.getContext()
    },
    methods:{
      drawCircle(canvasId, data_arr, color_arr, text_arr)  {
                var c = document.getElementById(canvasId);
                var ctx = c.getContext("2d");

                var radius = c.height / 2 - 20; //半径
                var ox = radius + 20, oy = radius + 20; //圆心

                var width = 8, height = 8; //图例宽和高
                var posX = ox * 2 + 20, posY = 60;   //
                var textX = posX + width + 5, textY = posY + 8;

                var startAngle = 0; //起始弧度
                var endAngle = 0;   //结束弧度
                for (var i = 0; i < data_arr.length; i++)
                {
                    //绘制饼图
                    endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度
                    ctx.fillStyle = color_arr[i];
                    ctx.beginPath();
                    ctx.moveTo(ox, oy); //移动到到圆心
                    ctx.arc(ox, oy, radius, startAngle, endAngle, false);
                    ctx.closePath();
                    ctx.fill();
                    startAngle = endAngle; //设置起始弧度

                    //绘制比例图及文字
                    ctx.fillStyle = color_arr[i];
                    ctx.fillRect(posX, posY + 20 * i, width, height);
                    ctx.moveTo(posX, posY + 20 * i);
                    ctx.font = '14px';    //斜体 30像素 微软雅黑字体
                    ctx.fillStyle = "rgba(80, 80, 80, 1)"; //"#000000";
                    var percent = text_arr[i] + "：" + 100 * data_arr[i] + "%";
                    ctx.fillText(percent, textX, textY + 20 * i);
                }
      },
      init() {
                //绘制饼图
                //比例数据和颜色
                var data_arr = [0.1, 0.2, 0.3, 0.4];
                var color_arr = ["rgba(194, 201, 210, 1)", "rgba(156, 201, 202, 1)", "rgba(146, 214, 153, 1)", "rgba(245, 223, 149, 1)"];
                var text_arr = ["实验一", "实验二", "实验三", "实验四"];

                this.drawCircle("canvas_circle", data_arr, color_arr, text_arr);
      },
      getContext:function(){
        var first=$(".first p");
        var second=$(".second p");
        var expnum=new Array(first,second);
        var trueflag=new Array("已阅读","","已阅读","已完成","已浏览","已完成");
        var falseflag=new Array("未阅读","","未阅读","未完成","未浏览","未完成");
        axios({
              method: 'get',
              url: this.$host+'/virtual/test/refer',
              transformRequest: [
                function (data) {
                  let ret = ''
                  for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                  }
                  ret = ret.substring(0, ret.lastIndexOf('&'));
                  return ret
                }
              ],
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
               }
            })
            .then(response => {
              if(response.data.code==10001){
                var data=response.data;
                console.log("连接成功！")
                // console.log(data.data)
                var expcontent=new Array(data.data.content,data.data.schedule,data.data.theory,data.data.dummy,data.data.entity,data.data.ana);
                for(var i=0;i<2;i++){
                    for(var j=0;j<6;j++){
                        if(expcontent[j][i]==true&&j!=1){
                            expnum[i].eq(j).html(trueflag[j]);
                            expnum[i].eq(j).css("color","rgba(133, 205, 110, 1)");
                        }else if(expcontent[j][i]==false&&j!=1){
                            expnum[i].eq(j).html(falseflag[j]);
                            expnum[i].eq(j).css("color","rgba(248, 113, 144, 1)");
                        }else if(j==1){
                            if(expcontent[j][i]==0){
                                expnum[i].eq(j).html("0%");
                                expnum[i].eq(j).css("color","rgba(248, 113, 144, 1)");
                            }else{
                                expnum[i].eq(j).html(expcontent[j][i]*100+"%");
                                expnum[i].eq(j).css("color","rgba(133, 205, 110, 1)");
                            }

                        }
                    }
                }
                if(data.data.todaytime>=60){
                    $(".word span").eq(0).html(parseInt(data.data.todaytime/60)+"时"+data.data.todaytime%60+"分");
                }else{
                    $(".word span").eq(0).html(data.data.todaytime+"分");
                }
                if(data.data.alltime>=60){
                    $(".word span").eq(1).html(parseInt(data.data.alltime/60)+"时"+data.data.alltime%60+"分");
                }else{
                    $(".word span").eq(1).html(data.data.alltime+"分");
                }
                $(".progress").html(data.data.percentage.toFixed(2)+"%");
                $(".water").css("height",data.data.percentage/100*160+"px");
                $(".water").css("top",157-data.data.percentage/100*160+"px");
              }else{
                alert(response.data.message);
              }
            })
            .catch(function (error) {
                console.log(error);
            });
      }
    }
}
</script>
