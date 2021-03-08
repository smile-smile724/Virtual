<template>
<!-- 主要内容 -->
    <div class="main">
    <!-- 主要内容 -->
        <div class="tip">实验二   单机低频放大器的设计与调测</div>
        <div class="main_content">
            <h1>实验原理</h1>
            <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单级放大器是构成多级放大器和复杂电路的基本单元。其任务是在不失真的条件下， 对输入信号进行放大。要使放大器正常工作，必须设置合适的静态工作点。静态工作点
的设置：一是要满足放大倍数、输入电阻、输出电阻、非线性失真等各项指标的要求； 二是要满足当外界环境等条件发生变化时，静态工作点要保持稳定。影响静态工作点的 因素较多，但当晶体管确定之后，主要因素取决于偏置电路，如电源电压的变动、负载 电阻 RC 和基极偏置电阻的改变等都会影响工作点，如图 2-1 和图 2-2 所示。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了稳定静态工作点，经常采用具有直流电流负反馈的分压式偏置电路。<br>
                <img src="../assets/wordImage-theory1.png" width="750px"><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验电路以图 2-3 为例，为分压式偏置的单级低频放大电路。电路中上偏置电阻 Rb1
由 1R3 和 RP1 串联组成，下偏置电阻为 1R4，1R5 为集电极电阻 RC，1R7、1R8为发射极电
流负反馈电阻，起到稳定直流工作点的作用，1C1 和 1C2 为交流耦合电容，1C3 为发射极 旁路电容。输入的交流信号 Ui 经 1C1 送到三极管基极，经放大后从集电极输出，经 1C 2
耦合到负载电阻 1R9（RL）上。<br>
                <img src="../assets/wordImage-theory2.png" width="432px"><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;放大器的静态工作点 Q 主要由上偏置电阻、下偏置电阻、RE、RC 及电源电压+VCC
所决定，该电路利用上偏置电阻、下偏置电阻的分压固定基极电位 VBQ。如果满足 I1&gt;&gt;IBQ， 当温度升高时，ICQ↑—VEQ↑—VBQ↓—IBQ↓—ICQ↓，结果抑制了 ICQ 的变化，从而获得稳定 的静态工作点。
            </span>
        </div>
    </div>
</template>

<style scoped>
.main{
  min-width:800px;
  height:100%;
    margin:0;
    position: absolute;
    margin-left:60px;
    margin-right:40px;
    margin-top: 120px;
}
  .tip{
	height: 36px;
	color: rgba(80, 80, 80, 1);
	font-size: 24px;
	line-height: 36px;
	text-align: left;
    font-weight: bold;
    margin-top:23px;
    margin-left:28px;
}
.main_content{
    min-width:750px;
    height:100%;
    margin-top:9px;
    margin-left:34px;
}
h1{
    color: rgba(80, 80, 80, 1);
	font-size: 23px;
    text-align: left;
}
.main_content span{
    height:65%;
    margin-top:17px;
    color: rgba(80, 80, 80, 1);
	font-size: 17px;
    text-align: left;
    display: block;
    overflow-x: hidden;
    margin-right:34px;
}
</style>



<script>
import $ from 'jquery'
export default {
    data () {
      return {
      }
    },
    mounted:function(){
      $.ajax({
        url:this.$host+"/virtual/test/theory",
        method:"post",
        data:{
            number: 2,
            theory:1
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
    }
}
</script>
