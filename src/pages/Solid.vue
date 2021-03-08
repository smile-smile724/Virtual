<template>
  <div class="main">
    <!-- 主要内容 -->
        <div class="tip">实体实验</div>
        <span class="Expname">实验二   单机低频放大器的设计与调测</span>
        <div class="mainExp">
            <img src="../assets/WordImage-solide1.png" style="top:30px;left:30px;">
            <img src="../assets/WordImage-solide2.png" style=" width:400px;top:30px;left:550px;">
            <img src="../assets/WordImage-solide3.png" style="top:170px;left:30px;">
            <canvas id="canvas" @mousedown="CanvasMouseDown($event)" @mouseup="CanvasMouseUp()" ref="canvas">
                不支持canvas
            </canvas>
            <div class="newline" style="top: 122px; left: 81px; width: 380px; transform: rotate(20deg);"></div>
            <div class="newline" style="top: 122px; left: 151px; width: 441px; transform: rotate(49.2deg);"></div>
            <div class="newline" style="top: 260px; left: 203px; width: 141px; transform: rotate(42deg);"></div>
            <div class="newline" style="top: 260px; left: 223px; width: 219px; transform: rotate(66deg);"></div>
            <!-- <div class="newline" style="top: 225px; left: 793px; width: 266px; transform: rotate(158deg);"></div>
            <div class="newline" style="top: 225px; left: 813px; width: 351px; transform: rotate(138.5deg);"></div> -->
            <div class="DLT">
                <img src="../assets/sdian2.png" id="DL">
                <img src="../assets/dian2_rl2.png" id="RL">
                <p style="top:100px;left:53px;" @click="PointClick(0)"></p>
                <p style="top:100px;left:114px;" @click="PointClick(1)"></p>
                <p style="top:0px;left:185px;" @click="PointClick(2)"></p>
                <p style="top:70px;left:185px;" @click="PointClick(3)"></p>
                <p style="top:120px;left:185px;" @click="PointClick(4)"></p>
                <p style="top:70px;left:294px;" @click="PointClick(5)"></p>
                <button style="top:105px;left:319px;" @click="RLClick(0)">接入RL</button>
                <button style="top:135px;left:319px;color:blue;" @click="RLClick(1)">不接入RL</button>
            </div>
            <div class="notice">点击红点部分即可获得相应的波形！</div>
            <div id="HsjsqShow">
              <span style="color:yellow;font-size:8px">CH1：f={{HsNum1}} - Vpp={{showV1}}</span>
              <span style="color:red;font-size:8px">CH2：f={{HsNum2}} - Vpp={{showV2}}</span>
            </div>
        </div>
  </div>
</template>

<style scoped>

.main{
  min-width:1000px;
  width:100%;
  height:100%;
    margin:0;
    position: absolute;
    margin-top: 120px;
}

  .tip{
	height: 36px;
	color: rgba(80, 80, 80, 1);
	font-size: 24px;
	line-height: 36px;
	text-align: left;
    font-weight: bold;
    margin-top:17px;
    margin-left:88px;
}

.Expname{
	height: 25px;
	color: rgba(80, 80, 80, 1);
	font-size: 17px;
	line-height: 25px;
    display:block;
    text-align:center;
}
.mainExp{
    height:530px;
    min-width:980px;
    background: url(../assets/basic.jpg) no-repeat;
    background-size:980px 530px;
    position: absolute;
    left:50%;
    margin-left:-490px;
    top:100px;
}
.mainExp img{
    position: absolute;
}
.DLT{
    width:350px;
    height:226px;
    position: absolute;
    top:250px;
    left:250px;
}
.DLT img{
    position: absolute;
}
#DL{
    width:350px;
    top:0;
    left:0;
}
#RL{
    height:136px;
    top:72px;
    left:295px;
}
.DLT p{
    padding:0;
    margin:1px;
    width:6px;
    height:6px;
    border-radius: 6px;
    background-color: rgb(187, 26, 26);
    cursor: pointer;
    position: absolute;
    z-index:100;
}
.DLT p:hover{
    width:8px;
    height:8px;
    border-radius: 8px;
    margin:0;
}
.DLT button{
    width:70px;
    font-size:12px;
    text-align: center;
    border-radius: 20px;
    border:none;
    position: absolute;
    cursor: pointer;
    outline: none;
}
.newline{
    height:2px;
    background-color: black;
    position: absolute;
    z-index: 99;
    transform-origin:left top;
}
canvas{
    position: absolute;
    width:180px;
    height:180px;
    left:561px;
    top:40px;
    z-index: 100;
}
.notice{
    width:140px;
    height:40px;
    background-color: rgb(194, 190, 190);
    opacity: 0.7;
    text-align: center;
    border-radius: 20px;
    line-height: 20px;
    padding:20px 30px;
    font-weight: bold;
    position: absolute;
    color: rgb(255, 8, 8);
    top:350px;
    left:700px;
}
#HsjsqShow{
    position:absolute;
    top:50px;
    left:350px;
    background-color: rgb(66, 66, 66);
    min-width:200px;
    height:50px;
}
#HsjsqShow span{
    width:100%;
    height:25px;
    line-height: 25px;
    position: relative;
    display: block;
    text-align: left;
    margin:0;
}
</style>



<script>
import $ from 'jquery'
import html2canvas from 'html2canvas'
import axios from 'axios'
axios.defaults.withCredentials = true;  //允许axios请求携带cookie等凭证
export default {
    data () {
      return {
        RLflag:false,
        context: {}, // canvas对象
        arrPointy : [],
        arrPointx:[],
        step :0.1, // x轴每次走的步长
        HsNum1:"0HZ",
        HsNum2:"0HZ",
        showV1:"0V",
        showV2:"0V",
        HsNum:['1000HZ','1000HZ','1000HZ','1000HZ','1000HZ','1000HZ'],
        showV:['5mV','5mV','16.4V','16V','15V','16.8V']
      }
    },
    mounted:function(){
      this.initDraw()
      $.ajax({
        url:this.$host+"/virtual/test/entity",
        method:"post",
        data:{
            number: 2,
            entity:1
        },
        xhrFields:{
            withDredentials:true
        },
        success:function(data){
            // alert(status),
            // alert(data.code),
            console.log(data.message)
        },
        error:function(err){
            console.log(err);
        }


      });
      var that=this;
      var timer = setInterval(function(){
        $.ajax({
            url:that.$host+'/virtual/test/time',
            type:'post',
            data:{

            },
            success:function(data){

            },
            error: function(err){
                console.log(err);
            }
        })
      },18000);
    },
    methods:{
      // 初始化画布
      initDraw:function(){
        const canvas = this.$refs.canvas
        this.context = canvas.getContext('2d')
      },
      // RL的接入与否
      RLClick:function(index){
        $(".DLT button").css("color","black");
        $(".DLT button").eq(index).css("color","blue");
        if(index==0){
            $("#RL").attr("src",this.RLimg[0]);
            this.RLflag=true;
        }else{
            $("#RL").attr("src",this.RLimg[1]);
            this.RLflag=false;
        }
        this.show();
      },
      // 创造波形
      createCanvas:function(arrPointx,arrPointy){
         arrPointx[0] = 0;
         arrPointy[0]=75+parseFloat(arrPointy[0]);
         for(var i=1;i<arrPointy.length;i++){
             arrPointx[i] = arrPointx[i-1]+this.step;
             arrPointy[i] = 75+parseFloat(arrPointy[i]);
             this.context.beginPath();
             this.context.moveTo(arrPointx[i-1],arrPointy[i-1])
             this.context.lineTo(arrPointx[i],arrPointy[i]);
             this.context.lineWidth = 1;
             this.context.strokeStyle = "yellow";
             this.context.fileStyle = "yellow";
             this.context.stroke();


            };
      },
      // 移动波形
      canvasMove:function(movex,arrPointx,arrPointy){
        arrPointx[0] = arrPointx[0]-movex;
        for(var i=1;i<arrPointy.length;i++){
            arrPointx[i] = arrPointx[i]-movex;
            this.context.beginPath();
            this.context.moveTo(arrPointx[i-1],arrPointy[i-1])
            this.context.lineTo(arrPointx[i],arrPointy[i]);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "yellow";
            this.context.fileStyle = "yellow";
            this.context.stroke();
        }
      },
      CanvasMouseDown:function(e){
        var that=this;
        var moveX;
        moveX=e.pageX; //获取当前鼠标相对的X坐标
        $("#canvas").mousemove(function(e){
            that.context.clearRect(0, 0, canvas.width, canvas.height);
            var positionX=e.pageX; //获取当前鼠标相对的X坐标
            that.canvasMove(moveX-positionX,that.arrPointx,that.arrPointy);
        })
      },
      CanvasMouseUp:function(){
        $("#canvas").off('mousemove');
      },
      // 点击出现波形
      PointClick:function(index){
        var that=this;
        axios({
              method: 'post',
              url: this.$host+'/virtual/test/wave',
              data: {
                PointNum:index+1
              },
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
              var data=response.data;
              if(data.code==10001){
                that.arrPointy=data.data;
                that.context.clearRect(0, 0, canvas.width, canvas.height);
                that.createCanvas(that.arrPointx,that.arrPointy);
              }else {
                console.log(response)
                alert(data.message)
              }
          })
          .catch(function (error) {
                console.log(error);
          });
          this.HsNum1=this.HsNum[index]
          this.showV1=this.showV[index]
      }

    }
}
</script>
