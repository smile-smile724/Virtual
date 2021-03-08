<template>
  <!-- 主要内容 -->
    <div class="main">
    <!-- 主要内容 -->
        <div class="tip">实验二   单机低频放大器的设计与调测 </div>
        <ul>
            <li>
                <span>一、实验目的</span>
                <p>1. 单级低频放大器的设计方法，掌握电路元件参数对技术指标的影响；<br>
                        2. 研究静态工作点对输出波形的影响及放大器静态工作点的调整方法；<br>
                        3. 掌握放大器频率特性的测试方法；<br>
                        4. 掌握放大器静态工作点、电压放大倍数和输入、输出电阻的测试方法；<br>
                        5. 熟悉模拟电路实验箱的使用。</p>
            </li>
            <li>
                <span>二、实验仪器</span>
                <p>1. 函数信号发生器<br>
                        2. 双踪示波器<br>
                        3. 晶体管交流毫伏表<br>
                        4. 万用表<br>
                        5. 模拟电路实验箱</p>
            </li>
            <li>
                <span>三、预习要求与思考题</span>
                <p>预习要求：<br>
                    1. 预习理论课中和本指导书中有关的单级放大器设计方法和设计步骤；<br>
                        2. 复习单级放大器放大倍数、输入电阻、输出电阻和幅频特性的计算及测量方法；<br>
                        3. 已知晶体管的 β =60， VCC =12V， RL=3 KΩ ，设计性能指标要求 AV&gt;40 Ri&gt;1 KΩ ， RO
                        &lt;3 KΩ ， Hf &gt;100KHZ， Lf &lt;100HZ <br>
                        4. 根据实验任务要求，写出预习报告，在预习报告中明确实验内容。<br>
                    思考题：<br>
                        1. RC 和 RL 的变化对静态工作点有否影响？<br>
                        2. RC 和 RL 的变化对放大器的电压增益有何影响？
                </p>
            </li>
            <li>
                <span>四、实验步骤</span>
                <p>1. 正确组装连接实验电路
                        根据预习内容中放大电路的性能指标要求，自行设计电路，选择元器件的参数值， 按自己设计的实验电路原理图和所选用的常用的仪器，用导线进行连接组装。组装之前
                        须测量和调节确定电源电压为所需要的值，并注意电源的极性和信号源的接地线都不能接错，不能带电接线。<br>
                        2. 经检查实验电路组装接线无误后，方可接通电源，进行调测。 以下调测步骤的说明按照图 2-3 为例。<br>  （1） 用动态法调整电路的静态工作点<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;放大器的线性工作范围与晶体管的静态工作点密切相关。静态工作点太低时，放大
                        器容易产生截止失真；工作点太高时，放大器容易产生饱和失真。如果当放大器的静态
                        工作点调整在晶体管线性工作范围的中心位置时，则输出波形的两端应同时出现“削顶” 和“缩顶”失真。若不是同时失真，则说明 Q 点不在线性区中点，可以适当调整 RP1， 使 Q 点在线性区中点。但由于“缩顶”失真不明显，因此，最大不失真输出电压常以 Uo
                        波形刚出现“削顶”失真时为界。 调整的步骤是：在电路的输入端输入频率为 1KHZ的正弦波信号，大大增加信号源的 输出电压幅度，然后再略调 RP1，使放大器输出端同时出现“削顶”“缩顶” 失真，此时
                        电路的工作点为最佳。这时就可以进行静态工作点的测量。
                        要求将调整过程中用示波器观察到的饱和失真、截止失真的波形和工作点为最佳状
                        态时出现的“削顶”“缩顶”失真波形画出。 <br>（2） 静态工作点的调节与测量
                        静态工作点是在放大电路没有输入信号的前提下用万用表的直流电压档测得的。<br>
                        （3） 放大器主要性能指标的测量<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a、 观察负载电阻 RL 对电压增益 AV 的影响
                        在实验电路的Ui 点用函数信号发生器输入频率 f 为 1kHz、幅度为 5mV 的正弦波信
                        号，在断开负载电阻 RL的情况下，用示波器的双踪功能分别监视放大器的输入和输出波 形，都不出现失真后，进行比较相位和用晶体管交流毫伏表测量其输出和输入电压的有
                        效值，根据公式 iO UU = - AV 即可得到空载时放大器的电压增益。同理，接上负载电阻 RL 后也可测得相应的输出电压的有效值，并计算出此时的电压增益。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b、 输入电阻 Ri 的测量<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ri为放大器输入端看进去的交流等效电阻，它等于放大器输入端信号电压Ui 与输 入电流 Ii 之比
                        本实验采用换算法测量输入电阻。测量电路如图 2-4 所示。在信号源 US 与放大器
                        之间串入一个已知电阻 RS，只要分别测出 US和 Ui，即可得知输入电阻 Ri 。<br>
                        <img src="../assets/wordImage-content1.png" width="750px"><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c、 输出电阻 RO 的测量<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输出电阻 RO 系指将输入电压源视为短路，从输出端向放大器看进去的交流等效电 阻。它的大小能够说明放大器承受负载的能力，其值越小，带负载能力越强。 用换算法测量 RO 的电路如图 2-5 所示。在保证输出不失真的情况下，首先测量负 载电阻 RL不接入即放大器负载开路时的输出电压 Vo 的值，然后接入负载电阻 RL在测
                        量放大器负载上的电压 VoL的值。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d、 *幅频特性测试（通频带 BW 的测量）<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;放大器的通频带 BW 是指放大器的增益下降到中频增益 AV 的 0.707 倍时，所对应的
                        上限频率 fH和下限频率 fL之差。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;放大器的幅频特性可通过测量不同频率时的电压放大倍数 Av 来获得。通常采用“逐 点测试法”测量放大器的幅频特性曲线。<br>
                        通频带的具体测量方法是将放大器输入中频信号，如 f = 1kHz，在其输出端有正常的
                        放大波形时，用晶体管交流毫伏表测出其电压值为UO ，然后维持Ui 不变，增加信号源
                        的频率直到输出电压下降到 0.707UO 为止，此频率就是上限频率 fH。同理保持 Vi不变， 降低信号源的频率直到输出电压下降到 0.707VO为止，此频率就是下限频率 fL。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本实验采用逐点测试法来进行幅频特性测试。保持函数信号发生器的输出电压即实
                        验电路输入电压的有效值为 5mV 不变，按照下表调节函数信号发生器的输出频率，测量
                        相应的输出电压，填入表 2-3，并计算相应的 AV；另外在测量的过程中找到 fH 和 fL，并
                        计算 BW 的值。整理并标于坐标纸上，再将其连接成曲线。
                    </p>
            </li>
            <li>
                <span>五、注意事项</span>
                <p>1. 组装电路前，应测量所用三极管是否完好。<br>
                        2. 测试连接电路时，必须分清电源VCC 的正负接线端，信号输入、输出端等。<br>
                        3. 动态测试时要求所有仪器的地线与线路的地线连在一起。</p>
            </li>
        </ul>
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
  .main ul{
    height:65%;
    min-width:750px;
    list-style: none;
    padding:0;
    margin:10px 34px;
    overflow-x: hidden;
	text-align: left;
}
.main ul li span{
    color: rgba(80, 80, 80, 1);
	font-size: 17px;
	text-align: left;
}
.main ul li p{
    margin:10px 0;
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
        url:this.$host+"/virtual/test/content",
        method:"post",
        data:{
            number: 2,
            content:1
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
