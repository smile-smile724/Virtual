<template>
  <div class="main">
    <!-- 主要内容 -->
        <div class="tip">虚拟实验</div>
        <div class="LineBtn">
          <button  @click="GetLine()">获取连线</button>
          <button  @click="ClearLine()">清空连线</button>
          <button  @click="SaveLine()">保存连线</button>
          <button  @click="ClearThisLine(chosenLine)" style="width:90px">删除所选连线</button>
        </div>
        <div class="Exp">
            <div class="ExpButton">
                <div class="ButtonList" style="cursor:default">工具</div>
                <p></p>
                <div @click="ExpButtonClick('.wyy')">直流电源</div>
                <div @click="ExpButtonClick('.hsfsq')">信号源</div>
                <div class="ButtonList" style="margin-top:90px;cursor:default">检测设备</div>
                <p></p>
                <div @click="ExpButtonClick('.hsjs')">示波器</div>
                <div @click="ExpButtonClick('.wyb')">万用表</div>
                <div @click="ExpButtonClick('.jlhfb')">毫伏表</div>
            </div>
            <div class="mainExp" id="DrawingBoard" @mousemove="LineMouseMove($event)">
                <span>操作界面</span>
                <!-- 稳压源 -->
                <img src="../assets/workImage-wenyayuan-wenyayuan.png" class="wyy WenYaY">
                <img src="../assets/workImage-wenyayuan2-shang1.png" id="btn01" class="wyy wyybtn" @click="WyyNumClick('btn01')">
                <img src="../assets/workImage-wenyayuan2-shang1.png" id="btn02" class="wyy wyybtn" @click="WyyNumClick('btn02')">
                <img src="../assets/workImage-wenyayuan2-xia1.png" id="btn03" class="wyy wyybtn" @click="WyyNumClick('btn03')">
                <img src="../assets/workImage-wenyayuan2-xia1.png" id="btn04" class="wyy wyybtn" @click="WyyNumClick('btn04')">
                <img src="../assets/workImage-Input.png" style="top:145px;left:70px;" class="wyy IOput" data-connection="" @click="IOputClick(0)">
                <img src="../assets/workImage-Output.png" style="top:145px;left:140px;" class="wyy IOput" data-connection="" @click="IOputClick(1)">
                <div class="wyy Num Wyy">
                    <img src="../assets/workImage-wenyayuan-oppositeNumber.png" class="num" style="top:0px;left:35px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumber.png" class="num" style="top:0px;left:68px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumberPoint.png" class="point" style="top:40px;left:101px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumber.png" class="num" style="top:0px;left:108px;">
                </div>
                <img src="../assets/workImage-wenyayuan2-powerOff.png" id="btn05" class="wyy upbtn" @click="upbtnClick(0)">
                <!-- 函数接收 -->
                <img src="../assets/workImage-oscilloscope-small.png" class="hsjs oscilloscope" style="cursor:pointer;" @click="hsjsClick()">
                <img src="../assets/workImage-Input.png" style="top:150px;left:405px;" class="hsjs IOput" data-connection=""  @click="IOputClick(2)">
                <img src="../assets/workImage-Output.png" style="top:150px;left:420px;" class="hsjs IOput" data-connection=""  @click="IOputClick(3)">
                <img src="../assets/workImage-Input.png" style="top:150px;left:440px;" class="hsjs IOput" data-connection=""  @click="IOputClick(4)">
                <img src="../assets/workImage-Output.png" style="top:150px;left:455px;" class="hsjs IOput" data-connection=""  @click="IOputClick(5)">
                <!-- 交流毫伏表 -->
                <img src="../assets/workImage-jiaoliuhaofubiao-jiaoliuhaofubiao.png" class="jlhfb ACV">
                <div class="jlhfb Num acv">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumber.png" style="top:6px;left:2px;">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumberPoint.png" class="point" style="top:27px;left:19px;">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumber.png" style="top:6px;left:23px;">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumberPoint.png" class="point" style="top:27px;left:40px;">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumber.png" style="top:6px;left:44px;">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumberPoint.png" class="point" style="top:27px;left:61px;">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumber.png" style="top:6px;left:64px;">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumberPoint.png" class="point" style="top:27px;left:81px;">
                    <img src="../assets/workImage-jiaoliuhaofubiao-oppositeNumber.png" style="top:6px;left:85px;">
                </div>
                <img src="../assets/workImage-wenyayuan2-powerOff.png" id="btn06" class="jlhfb upbtn"  @click="upbtnClick(1)">
                <img src="../assets/workImage-Input.png" style="top:140px;left:590px;" class="jlhfb IOput" data-connection="" @click="IOputClick(6)">
                <img src="../assets/workImage-Output.png" style="top:140px;left:630px;" class="jlhfb IOput" data-connection=""  @click="IOputClick(7)">
                <!-- 函数发生器 -->
                <img src="../assets/workImage-hanshufashengqi-hanshufashengqi.png" class="hsfsq Hsfsq">
                <div class="hsfsq Num Hs1" @click="ChosenBorder('.Hs1')">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumber.png" style="top:2px;left:2px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumberPoint.png" class="point" style="top:19px;left:16px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumber.png" style="top:2px;left:21px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumberPoint.png" class="point" style="top:19px;left:35px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumber.png" style="top:2px;left:40px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumberPoint.png" class="point" style="top:19px;left:54px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumber.png" style="top:2px;left:59px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumberPoint.png" class="point" style="top:19px;left:73px;">
                </div>
                <div class="hsfsq Num Hs2" @click="ChosenBorder('.Hs2')">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumber.png" style="top:2px;left:2px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumberPoint.png" class="point" style="top:19px;left:16px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumber.png" style="top:2px;left:21px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumberPoint.png" class="point" style="top:19px;left:35px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumber.png" style="top:2px;left:40px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumberPoint.png" class="point" style="top:19px;left:54px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumber.png" style="top:2px;left:59px;">
                    <img src="../assets/workImage-hanshufashengqi-oppositeNumberPoint.png" class="point" style="top:19px;left:73px;">
                </div>
                <div class="hsfsq unit">
                    <input type="radio" name="frequency" value="MHZ" @click="InpoutClick('frequency','MHZ')" checked>
                    <input type="radio" name="frequency" value="HZ"  @click="InpoutClick('frequency','HZ')" >
                    <input type="radio" name="Voltage" value="V" style="margin-top:10px" @click="InpoutClick('Voltage','V')" checked>
                    <input type="radio" name="Voltage" value="mV"  @click="InpoutClick('Voltage','mV')">
                </div>
                <ul class="hsfsq numbtn">
                    <li @click="NumBtnClick(7)"></li>
                    <li @click="NumBtnClick(8)"></li>
                    <li @click="NumBtnClick(9)"></li>
                    <li @click="NumBtnClick(0)"></li>
                    <li @click="NumBtnClick(4)"></li>
                    <li @click="NumBtnClick(5)"></li>
                    <li @click="NumBtnClick(6)"></li>
                    <li @click="NumBtnClick('num-point')"></li>
                    <li @click="NumBtnClick(1)"></li>
                    <li @click="NumBtnClick(2)"></li>
                    <li @click="NumBtnClick(3)"></li>
                    <li @click="NumBtnClick('clear')"></li>
                    <li @click="NumBtnClick('define')"></li>
                </ul>
                <img src="../assets/workImage-hanshufashengqi-powerOff.png"  class="hsfsq upbtn hsbtn" style="top:265px;left:230px;" @click="upbtnClick(2)">
                <img src="../assets/workImage-Input.png" style="top:265px;left:190px;" class="hsfsq IOput" data-connection=""  @click="IOputClick(8)">
                <img src="../assets/workImage-Output.png" style="top:265px;left:210px;" class="hsfsq IOput" data-connection=""  @click="IOputClick(9)">
                <!-- 万用表 -->
                <img src="../assets/workImage-wanyongbiao-wanyongbiao.png" class="wyb Wyb">
                <div class="wyb Num WYb">
                    <img src="../assets/workImage-wenyayuan-oppositeNumber.png" style="top:1px;left:20px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumberPoint.png" class="point" style="top:26px;left:39px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumber.png" style="top:1px;left:45px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumberPoint.png" class="point" style="top:26px;left:64px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumber.png" style="top:1px;left:70px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumberPoint.png" class="point" style="top:26px;left:89px;">
                    <img src="../assets/workImage-wenyayuan-oppositeNumber.png" style="top:1px;left:95px;">
                    <div></div>
                </div>
                <img src="../assets/workImage-Input.png" style="top:435px;left:80px;" class="wyb IOput" data-connection=""  @click="IOputClick(10)">
                <img src="../assets/workImage-Output.png" style="top:435px;left:130px;" class="wyb IOput" data-connection="" @click="IOputClick(11)">
                <img src="../assets/workImage-xzbtn.png" class="wyb xzbtn" draggable="false" @mousedown="xzbtnMouseDown($event)" @mouseup="xzbtnMouseUp($event)">
                <!-- 电路图 -->
                <div class="DLT">
                    <img src="../assets/sdian2.png" id="DL">
                    <img src="../assets/dian2_rl2.png" id="RL">
                    <div class="RW">
                        <span>R:0K</span>
                        <img src="../assets/workImage-xzbtn.png"  draggable="false"     @mousedown="RWMouseDown($event)" @mouseup="RWMouseUp()" >
                        <i style="top:65px;left:-9px;" >0K</i>
                        <i style="top:65px;left:52px;">680K</i>
                    </div>
                    <div class="Border" @click="BorderClick()"></div>
                    <p style="top:100px;left:53px;" @click="PointClick(0)"></p>
                    <p style="top:204px;left:54px;" @click="PointClick(1)"></p>
                    <p style="top:100px;left:114px;" @click="PointClick(2)"></p>
                    <p style="top:0px;left:185px;" @click="PointClick(3)"></p>
                    <p style="top:70px;left:185px;" @click="PointClick(4)"></p>
                    <p style="top:120px;left:185px;" @click="PointClick(5)"></p>
                    <p style="top:205px;left:185px;" @click="PointClick(6)"></p>
                    <p style="top:70px;left:294px;" @click="PointClick(7)"></p>
                    <p style="top:205px;left:294px;" @click="PointClick(8)"></p>
                    <button style="top:105px;left:319px;"  @click="RLClick(0)">接入RL</button>
                    <button style="top:135px;left:319px;color:blue;"  @click="RLClick(1)">不接入RL</button>
                </div>

                <!-- 放大的函数接收器 -->
                <div class="Hsjsq">
                    <img src="../assets/workImage-xzbtn.png" class="rotate bigbtn" style="top:125px;left:227px;"  draggable="false"    @mousedown="rotateMouseDown($event,0)" @mouseup="rotateMouseUp(0)" >
                    <img src="../assets/workImage-xzbtn.png" class="rotate bigbtn" style="top:125px;left:283px;"  draggable="false"  @mousedown="rotateMouseDown($event,1)" @mouseup="rotateMouseUp(1)" >
                    <img src="../assets/workImage-xzbtn.png" class="rotate bigbtn" style="top:125px;left:339px;transform: rotate(128deg);" draggable="false"  @mousedown="rotateMouseDown($event,2)" @mouseup="rotateMouseUp(2)" >
                    <img src="../assets/workImage-Input.png" style="top:185px;left:230px;" class="ioput">
                    <img src="../assets/workImage-Output.png" style="top:185px;left:253px;" class="ioput">
                    <img src="../assets/workImage-Input.png" style="top:185px;left:287px;" class="ioput">
                    <img src="../assets/workImage-Output.png" style="top:185px;left:309px;" class="ioput">
                    <img src="../assets/workImage-wenyayuan2-powerOff.png" class="Hsjsqbtn" @click="HsjsqbtnClick()">
                    <img src="../assets/workImage-wenyayuan2-powerOff.png" class="hsjsqbtn" style="top:85px;left:236px;" @click="hsjsqbtnClick(0)">
                    <img src="../assets/workImage-wenyayuan2-powerOff.png" class="hsjsqbtn" style="top:85px;left:264px;" @click="hsjsqbtnClick(1)">
                    <img src="../assets/workImage-wenyayuan2-powerOff.png" class="hsjsqbtn" style="top:85px;left:299px;" @click="hsjsqbtnClick(2)">
                    <img src="../assets/workImage-wenyayuan2-powerOff.png" class="hsjsqbtn" style="top:80px;left:339px;" @click="hsjsqbtnClick(3)">
                    <img src="../assets/workImage-wenyayuan2-powerOff.png" class="hsjsqbtn" style="top:85px;left:365px;" @click="hsjsqbtnClick(4)">
                    <img src="../assets/workImage-xzbtn.png" class="rotate midbtn" style="top:33px;left:231px;" draggable="false"  @mousedown="rotateMouseDown($event,3)" @mouseup="rotateMouseUp(3)" >
                    <img src="../assets/workImage-xzbtn.png" class="rotate midbtn" style="top:33px;left:300px;" draggable="false"  @mousedown="rotateMouseDown($event,4)" @mouseup="rotateMouseUp(4)" >
                    <img src="../assets/workImage-xzbtn.png" class="rotate midbtn" style="top:31px;left:349px;transform: rotate(0deg);" draggable="false"   @mousedown="rotateMouseDown($event,5)" @mouseup="rotateMouseUp(5)" >
                    <img src="../assets/workImage-xzbtn.png" class="rotate smallbtn" style="top:35px;left:196px;" draggable="false"  @mousedown="rotateMouseDown($event,6)" @mouseup="rotateMouseUp(6)" >
                    <img src="../assets/workImage-xzbtn.png" class="rotate smallbtn" style="top:73px;left:196px;" draggable="false"  @mousedown="rotateMouseDown($event,7)" @mouseup="rotateMouseUp(7)" >
                    <img src="../assets/workImage-oscilloscope-bullet_v.png" style="top:110px;left:201px;">
                    <img src="../assets/workImage-oscilloscope-down.png" class="adjust up" style="top:31px;left:258px;" @click="adjustBtnClick(0)">
                    <img src="../assets/workImage-oscilloscope-down.png" class="adjust up" style="top:31px;left:285px;" @click="adjustBtnClick(1)">
                    <img src="../assets/workImage-oscilloscope-down.png" class="adjust down" style="top:45px;left:260px;" @click="adjustBtnClick(2)">
                    <img src="../assets/workImage-oscilloscope-down.png" class="adjust down" style="top:45px;left:287px;" @click="adjustBtnClick(3)">
                    <img src="../assets/workImage-oscilloscope-down.png" class="adjust left" style="top:20px;left:340px;transform: rotate(90deg);" @click="adjustBtnClick(4)">
                    <img src="../assets/workImage-oscilloscope-down.png" class="adjust right" style="top:19px;left:370px;transform: rotate(-90deg);" @click="adjustBtnClick(5)">
                    <canvas id="canvas"    @mousedown="CanvasMouseDown" @mouseup="CanvasMouseUp" ref="canvas">
                        不支持canvas
                    </canvas>
                    <div class="output">
                        <span style="color:yellow;"></span>
                        <span style="color:red;"></span>
                    </div>
                    <div id="HsjsqShow" v-show="Hsjsqbtnflag">
                        <span style="color:yellow;font-size:8px">CH1：f={{hsjsqbtnflag[0]?HsNum1:'0'}}{{frequency}} - Vpp={{showV1.toFixed(1)}}{{Voltage}}</span>
                        <span style="color:red;font-size:8px">CH2：f={{hsjsqbtnflag[1]?HsNum1:'0'}}{{frequency}} - Vpp={{showV2.toFixed(1)}}{{Voltage}}</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="ExpName">实验二   单机低频放大器的设计与调测</div>
    </div>
</template>

<style scoped>
.main{
  min-width:1000px;
  width:100%;
  height:100%;
    margin:0;
    position: absolute;
    top:170px;

}

.tip{
    margin-top:17px;
}
.LineBtn{
    width: 790px;
    text-align: left;
    margin:0 auto 0 auto;
}
.LineBtn button{
    width:70px;
    font-size:12px;
    text-align: center;
    border-radius: 20px;
    background-color: cornflowerblue;
    border:none;
    cursor: pointer;
    outline: none;
    margin:10px 40px 0 10px;
}
.Exp{
    width: 790px;
	height: 481px;
    background-color: rgba(153, 153, 153, 1);
    margin:16px auto 0 auto;
    background: url(../assets/basic.jpg) no-repeat;
    background-size:790px 481px;
}
.ExpName{
    text-align: center;
    font-size: 14px;
    color: rgba(80, 80, 80, 1);
	  font-size: 17px;
    margin-top:26px;
}
.ExpButton{
    width:110px;
    height:481px;
    text-align: center;
    font-size:12px;
    line-height:30px;
    float: left;
}
.ExpButton div{
    width:98px;
    height:30px;
    border:1px solid black;
    background-color:white;
    border-radius: 8px;
    margin-left:5px;
    display:block;
    margin-top:10px;
    cursor: pointer;
}
.ExpButton p{
    width:110px;
    height:1px;
    background-color: white;
}
.ButtonList{
    margin:15px 0;
}
.mainExp{
    width:680px;
    height:481px;
    margin-left:110px;
    position: relative;
}
.mainExp span{
	color: black;
    font-size: 21px;
    letter-spacing:2px;
    margin:25px 0 0 -90px;
    display: inline-block;
}
.mainExp img{
    position: absolute;
}
.WenYaY{
    width:240px;
    top:60px;
    left:25px;
}
#btn01,#btn02,#btn03,#btn04{
    width:18px;
    height:16px;
    margin:2px;
    cursor: pointer;
}
#btn01:hover,#btn02:hover,#btn03:hover,#btn04:hover{
    width:22px;
    height:20px;
    margin:0;
}
#btn01,#btn02{
    top:80px;
}
#btn03,#btn04{
    top:100px;
}
#btn01,#btn03{
    left:206px;
}
#btn02,#btn04{
    left:234px;
}
.upbtn{
    width:16px;
    height:8px;
    cursor: pointer;
}
#btn05{
    top:152px;
    left:228px;
}
.oscilloscope{
    width:240px;
    top:60px;
    left:275px;
}
.ACV{
    width:140px;
    top:60px;
    left:525px;
}
#btn06{
    top:147px;
    left:540px;
}
.IOput{
    width: 14px;
    height:14px;
    border-radius: 14px;
    margin:1px;
    cursor: pointer;
}
.IOput:hover{
    width: 16px;
    height:16px;
    border-radius: 16px;
    margin:0;
}
.Hsfsq{
    width:240px;
    top:180px;
    left:25px;
}
.Wyb{
    width:170px;
    top:300px;
    left:25px;
}
.Wyy{
    width:145px;
    height:50px;
    position: absolute;
    top:80px;
    left:42px;
}
.Wyy img{
    width:35px;
}
.Wyy .point{
    width:10px;
}
.acv{
    width:105px;
    height:38px;
    position: absolute;
    top:88px;
    left:543px;
}
.acv img{
    width:18px;
}
.acv .point{
    width:5px;
}
.Hs1,.Hs2{
    width:81px;
    height:25px;
    position: absolute;
    top:206px;
    left:39px;
    /* outline:#4e98c2 solid thick;  */
}
.Hs1 img,.Hs2 img{
    width:14px;
}
.Hs1 .point,.Hs2 .point{
    width:5px;
}
.Hs2{
    top:249px;
}
.WYb{
    width:134px;
    height:35px;
    position: absolute;
    top:320px;
    left:42px;
}
.WYb img{
    width:22px;
}
.WYb .point{
    width:7px;
}
.wyy,.hsjs,.jlhfb,.hsfsq,.wyb,.Hsjsq,.RW{
    display:none;
}
.hsbtn{
    width:24px;
    height:14px;
}
.xzbtn{
    width:70px;
    height:70px;
    border-radius:70px ;
    top:370px;
    left:78px;
    -moz-user-select: none;
    -webkit-user-select: none;

}
.DLT{
    width:350px;
    height:226px;
    position: absolute;
    top:230px;
    left:280px;
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
.numbtn{
    position: absolute;
    width:100px;
    height:77px;
    list-style: none;
    top:186px;
    left:161px;
    padding:0;
}
.numbtn li{
    float: left;
    width:17px;
    height:12px;
    border:1px solid rgb(80,80,80);
    margin:0 2px 7px 2px;
    cursor: pointer;
    -o-border-radius:100%;
    -ms-border-radius:100%;
    -moz-border-radius:100%;
    -webkit-border-radius:100%;
    background: url(../assets/workImage-hanshufashengqi-numbtn.png) no-repeat;
    background-size: 20px 15px;
}
.numbtn li:hover{
    border:1px solid #1a7eb8;
}
.unit{
    width:15px;
    height:100px;
    position: absolute;
    top:204px;
    left:130px;
}
.unit input{
    width:11px;
    height:11px;
    margin:3px 0;
    float: left;
    cursor: pointer;
}
.WYb div{
    width:20px;
    height:35px;
    position: absolute;
    left:114px;
    top:2px;
}
.ioput{
    width: 17px;
    height:17px;
    border-radius: 17px;
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
.Border{
    width:48px;
    height:47px;
    position: absolute;
    top:40px;
    left:81px;
    cursor: pointer;
}
.RW{
    width:60px;
    height:100px;
    position: absolute;
    left:0;
    top:0;
}
.RW span{
    width:55px;
    text-align: left;
    margin:0;
    font-size: 10px;
    margin-left:5px;
}
.RW i{
    position: absolute;
    font-size: 8px;
    font-style: normal;
}
.RW img{
    width:60px;
    height:60px;
    border-radius: 60px;
    left:-1px;
    top:22px;
}
.newline{
    height:2px;
    background-color: black;
    position: absolute;
    z-index: 99;
    transform-origin:left top;
}
.Hsjsq{
    width:400px;
    height:220.44px;
    position: absolute;
    top:-170px;
    left:380px;
    background: url(../assets/workImage-oscilloscope-oscilloscope.png) no-repeat;
    background-size: 400px 220.44px;
}
.Hsjsq img{
    position: absolute;
}
.Hsjsq .bigbtn{
    width:45px;
    height:45px;
    border-radius: 45px;
}
.Hsjsq .midbtn{
    width:25px;
    height:25px;
    border-radius: 25px;
    transform: rotate(128deg);
}
.Hsjsq .smallbtn{
    width:22px;
    height:22px;
    border-radius: 22px;
}
.Hsjsq .up,.Hsjsq .down,.Hsjsq .left,.Hsjsq .right{
    width:10px;
    cursor: pointer;
    margin:1px;
}
.Hsjsq .up:hover,.Hsjsq .down:hover,.Hsjsq .left:hover,.Hsjsq .right:hover{
    width:12px;
    margin:0px;
}
.Hsjsq .up{
    transform: rotate(180deg);
}
canvas{
    position: absolute;
    width:180px;
    height:180px;
    left:10px;
    top:10px;
    background: url(../assets/workImage-oscilloscope-wave.png) no-repeat;
    background-size: 180px 180px;
    z-index: 100;
}
.Hsjsqbtn{
    width:20px;
    height:10px;
    position: absolute;
    top:155px;
    left:196px;
    cursor: pointer;
}
.hsjsqbtn{
    width:18px;
    height:9px;
    position: absolute;
    cursor: pointer;
}
.output{
    width:180px;
    height:22px;
    background-color: black;
    position: absolute;
    top:190px;
    left:10px;
}
.output span{
    width:86px;
    height:18px;
    border:2px solid gray;
    margin:0;
    float: left;
    font-size:15px;
}
.rotate{
    position: absolute;
}
#HsjsqShow{
    position:absolute;
    top:0;
    left:-250px;
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
        context: {}, // canvas对象
        flag : [false,false,false,false],
        imgurl:[
          [
            require("../assets/workImage-wenyayuan-number0.png"),
            require("../assets/workImage-wenyayuan-number1.png"),
            require("../assets/workImage-wenyayuan-number2.png"),
            require("../assets/workImage-wenyayuan-number3.png"),
            require("../assets/workImage-wenyayuan-number4.png"),
            require("../assets/workImage-wenyayuan-number5.png"),
            require("../assets/workImage-wenyayuan-number6.png"),
            require("../assets/workImage-wenyayuan-number7.png"),
            require("../assets/workImage-wenyayuan-number8.png"),
            require("../assets/workImage-wenyayuan-number9.png"),
            require("../assets/workImage-wenyayuan-oppositeNumber.png"),
            require("../assets/workImage-wenyayuan-numberPoint.png"),
            require("../assets/workImage-wenyayuan-oppositeNumberPoint.png")
          ],
          [
            require("../assets/workImage-jiaoliuhaofubiao-number0.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number1.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number2.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number3.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number4.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number5.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number6.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number7.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number8.png"),
            require("../assets/workImage-jiaoliuhaofubiao-number9.png"),
            require("../assets/workImage-jiaoliuhaofubiao-oppositeNumber.png"),
            require("../assets/workImage-jiaoliuhaofubiao-numberPoint.png"),
            require("../assets/workImage-jiaoliuhaofubiao-oppositeNumberPoint.png")
          ],
          [
            require("../assets/workImage-hanshufashengqi-number0.png"),
            require("../assets/workImage-hanshufashengqi-number1.png"),
            require("../assets/workImage-hanshufashengqi-number2.png"),
            require("../assets/workImage-hanshufashengqi-number3.png"),
            require("../assets/workImage-hanshufashengqi-number4.png"),
            require("../assets/workImage-hanshufashengqi-number5.png"),
            require("../assets/workImage-hanshufashengqi-number6.png"),
            require("../assets/workImage-hanshufashengqi-number7.png"),
            require("../assets/workImage-hanshufashengqi-number8.png"),
            require("../assets/workImage-hanshufashengqi-number9.png"),
            require("../assets/workImage-hanshufashengqi-oppositeNumber.png"),
            require("../assets/workImage-hanshufashengqi-numberPoint.png"),
            require("../assets/workImage-hanshufashengqi-oppositeNumberPoint.png")
          ],
          [
            require("../assets/workImage-hanshufashengqi-number0.png"),
            require("../assets/workImage-hanshufashengqi-number1.png"),
            require("../assets/workImage-hanshufashengqi-number2.png"),
            require("../assets/workImage-hanshufashengqi-number3.png"),
            require("../assets/workImage-hanshufashengqi-number4.png"),
            require("../assets/workImage-hanshufashengqi-number5.png"),
            require("../assets/workImage-hanshufashengqi-number6.png"),
            require("../assets/workImage-hanshufashengqi-number7.png"),
            require("../assets/workImage-hanshufashengqi-number8.png"),
            require("../assets/workImage-hanshufashengqi-number9.png"),
            require("../assets/workImage-hanshufashengqi-oppositeNumber.png"),
            require("../assets/workImage-hanshufashengqi-numberPoint.png"),
            require("../assets/workImage-hanshufashengqi-oppositeNumberPoint.png")
          ]
        ],
        RLimg:[require("../assets/dian2_rl1.png"),require("../assets/dian2_rl2.png")],
        Wyynum:0,
        Jlhfb:0,
        HsNum1:0,
        HsNum2:0,
        chosenNum:undefined,
        HsNum:"",
        JlhfbNum:"",
        RotateBtnoffsetleft:[],
        RotateBtnoffsettop:[],
        xzbtnoffsetleft:0,
        xzbtnoffsettop:0,
        hsjsflag:false,
        wyynum:[0,0,0],
        pointflag:false,
        Numlength:0,
        frequency:"MHZ",
        Voltage:"V",
        R3:51,R4:24,R5:5.1,R7:0.1,R8:1.8,R9:5.1,RL:3,UBEQ:0.7,UCES:0.7,
        UBQ:0,ICQ:0,U1:0,U2:0,U:0,dU:0,chosenCH:0,Uom:0,T:0,V:0,
        IOputConnection:[],
        connectionFlag:false,
        xzbtnoffsetleft:0,xzbtnoffsettop:0,
        Postflag:false,
        x1 :0,x2:0,dy1:0, // canvas画布原点x
	    y1 :0,y2:0,dy2:0, // canvas画布原点y
        arrPointx1 : [], // 用于保存已经波形图的轨迹点
        arrPointy1 : [],
        arrPointx2 : [], // 用于保存已经波形图的轨迹点
        arrPointy2 : [],
	    step :0.1, // x轴每次走的步长
	    width:360, // 这个是画布宽度
        height:180, // 这个是画图高度
        changeT1:10,
        changeV1:0,
        changeT2:10,
        changeV2:0,
        changeFX:0,
        showV1:0,
        showV2:0,
        angle:0,v1:0,v2:0,t1:0,t2:0,
        Uom1:null,Uom2:null,
        moveX:0,allMoveX:0,
        Hsjsqbtnflag:false,
        hsjsqbtnflag: [false,false,false,false,false],
        WYbImg:[require('../assets/workImage-wanyongbiao-vdc.png'),require('../assets/workImage-wanyongbiao-mvdc.png'),require('../assets/workImage-wanyongbiao-K.png')],
        RW:(0/256*680).toFixed(1),
        RWoffsetleft:0,RWoffsettop:0,
        RLflag:false,
        IOputConnection:[0,0,0],
        connectionFlag:false,
        Postflag:false,
        positionX:0,positionY:0,
        connectionflag:false,
        beginleft:0,begintop:0,endleft:0,endtop:0,
        newline:{},
        collect:0,
        IOputflag:[false,false,false,false,false,false,false,false,false,false,false,false],
        chosenPoint:0,
        chosenLine:null
      }
    },
    // 注册组件
    components: {
      html2canvas
    },
    mounted:function(){
      this.initDraw()
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
      this.$nextTick(function () {
        var that=this;
        $(document).on("click", ".newline", function () {
              var index=$(".newline").index(this);
              if(index==that.chosenLine){
                $(".newline").eq(that.chosenLine).css('background-color','black');
                that.chosenLine=null;
              }else{
                if(that.chosenLine!=null){
                  $(".newline").eq(that.chosenLine).css('background-color','black');
                }
                $(this).css('background-color','red');
                that.chosenLine=index;
              }
        })
      });
    },
    methods:{
      // 初始化画布
      initDraw:function(){
        const canvas = this.$refs.canvas
        this.context = canvas.getContext('2d')
      },
      // 数字显示开关
      upbtnClick:function(num){
        // alert(upbtn.css("width")=="16px");
        var num_index = num;//被选中的右侧的下标
        var upbtn = $(".upbtn");
        var Num = $(".Num");
        this.flag[num_index]=!this.flag[num_index];
        if(this.flag[num_index]){
            upbtn.eq(num_index).css("width","14px");
            upbtn.eq(num_index).css("height","6px");
            upbtn.eq(num_index).css("margin","1px");
            if(num_index == 2){
                Num.eq(num_index).find("img").attr("src",this.imgurl[num_index][0]);
                Num.eq(num_index).find(".point").attr("src",this.imgurl[num_index][12]);
                upbtn.eq(num_index).css("width","22px");
                upbtn.eq(num_index).css("height","12px");
                num_index++;
                this.HsNum="";
                this.HsNum1=0;
                this.HsNum2=0;
            }else if(num_index > 2){
                num_index++;
            }
            Num.eq(num_index).find("img").attr("src",this.imgurl[num_index][0]);
            Num.eq(num_index).find(".point").attr("src",this.imgurl[num_index][12]);
            if(num_index == 0){
                Num.eq(num_index).find(".point").attr("src",this.imgurl[num_index][11]);
            }

            // 数据清零
            if(num_index==0){
                this.Wyynum=0;
            }else if(num_index==1){
                this.Jlhfb=0;
            }else if(num_index==3){
                this.HsNum1=0;
                this.HsNum2=0;
            }

        }else{
            upbtn.eq(num_index).css("width","16px");
            upbtn.eq(num_index).css("height","8px");
            upbtn.eq(num_index).css("margin","0px");
            if(num_index == 2){
                upbtn.eq(num_index).css("width","24px");
                upbtn.eq(num_index).css("height","14px");
                Num.eq(num_index).find("img").attr("src",this.imgurl[num_index][10]);
                Num.eq(num_index).find(".point").attr("src",this.imgurl[num_index][12]);
                num_index++;
                $(".Num").css("outline","none");
                this.chosenNum=undefined;
            }else if(num_index > 2){
                num_index++;
            }
            Num.eq(num_index).find("img").attr("src",this.imgurl[num_index][10]);
            Num.eq(num_index).find(".point").attr("src",this.imgurl[num_index][12]);
        }
        this.show();
      },
      // 仪器显示
      ExpButtonClick:function(data){
        if(data){
            if($(data).css("display") == "none"){
                $(data).fadeIn(1000);
                if(data==".wyb"){
                    $(".xzbtn").css("transform", "rotate(0deg)");
                    this.xzbtnoffsetleft=$(".xzbtn").offset().left,
                    this.xzbtnoffsettop=$(".xzbtn").offset().top;
                }
            }else{
                $(data).fadeOut(1000);
            }
        }
        this.show();
      },
      hsjsClick:function(){
        if(!this.hsjsflag){
          $(".Hsjsq").fadeIn(1000);
          for(var index=0;index<8;index++){
              this.RotateBtnoffsetleft[index]=$(".rotate").eq(index).offset().left,
              this.RotateBtnoffsettop[index]=$(".rotate").eq(index).offset().top;
          }
        }
        this.show();
      },
      BorderClick:function(){
        $(".RW").fadeIn(1000);
        this.RWoffsetleft=$(".RW img").offset().left,
        this.RWoffsettop=$(".RW img").offset().top;
        this.show();
      },
      // 稳压源调节按钮
      WyyNumClick:function(pressbtn){
        if(this.flag[0]){
            var n=this.Wyynum*10;
            if(pressbtn=="btn01"){
                n=n+10;
            }else if(pressbtn=="btn02"){
                n++;
            }else if(pressbtn=="btn03"){
                n=n-10;
            }else if(pressbtn=="btn04"){
                n--;
            }
            if(n>999||n<1){
                alert("超出量程！");
            }else{
                this.Wyynum=n/10;
                for(var i=2;i>=0;i--){
                    this.wyynum[i]=n%10;
                    n=(n-this.wyynum[i])/10;
                    $(".Num").eq(0).find(".num").eq(i).attr("src",this.imgurl[0][this.wyynum[i]]);
                }
            }
        }else{
          alert("请打开直流电源开关");
        }
        this.show();
      },
      // 交流毫伏表
      jlhfbNum:function(){
        $(".acv").find("img").attr("src",this.imgurl[1][0]);
        $(".acv").find(".point").attr("src",this.imgurl[1][12]);
        // console.log(JlhfbNum.indexOf("."));
        if(this.JlhfbNum.indexOf(".")!=-1){
            $(".acv").find(".point").eq(4-(this.JlhfbNum.length-this.JlhfbNum.indexOf(".")-1)).attr("src",this.imgurl[1][11]);
            var temp=this.JlhfbNum.replace(".","");
            for(var i=4;i>=5-temp.length;i--){
                $(".acv").find("img").eq(2*i).attr("src",this.imgurl[1][parseInt(temp[temp.length+i-5])]);
            }
        }else{
            // console.log(this.JlhfbNum);
            for(var i=4;i>=5-this.JlhfbNum.length;i--){
                $(".acv").find("img").eq(2*i).attr("src",this.imgurl[1][parseInt(this.JlhfbNum[this.JlhfbNum.length+i-5])]);
            }
        }
        this.show();
      },
      // 选择调节频率还是峰峰值
      ChosenBorder:function(CH){
        // 判断是否打开了开关
        if(this.flag[2]&&(CH==".Hs1"||CH==".Hs2")){
            $(".Num").css("outline","none");
            $(CH).css("outline","#4e98c2 solid thick");
            $(CH).find("img").attr("src",this.imgurl[2][0]);
            $(CH).find(".point").attr("src",this.imgurl[2][12]);
            this.chosenNum=CH;
            this.HsNum="";
            this.pointflag=false;
            // console.log(this.chosenNum);
        }
        this.show();
      },
      // 输入数值
      NumBtnClick:function(n){
        // 提示效果的逻辑
        // console.log(this.HsNum.length);
        if(this.pointflag){
            this.Numlength=this.HsNum.length-1;
        }else{
            this.Numlength=this.HsNum.length;
        }
        if(this.flag[2]&&this.chosenNum!=undefined){
            // console.log(n);
            // 输入数值0~9
            if((n>=0&&n<=9)&&this.Numlength<4){
                this.HsNum=this.HsNum+n.toString();
                this.ShowNum();
            }else if((n>=0&&n<=9)&&this.Numlength>=4){
                alert("超出有效位数！");
            }else if(n=="num-point"&&!this.pointflag){
                this.HsNum=this.HsNum+".";
                this.pointflag=true;
                this.ShowNum();
            }else if(n=="num-point"&&this.pointflag){
                alert("数据输入格式错误");
            }else if(n=="define"){
                // console.log(this.chosenNum==".Hs1");
                $(".Num").css("outline","none");
                if(this.chosenNum!=undefined){
                    if(this.chosenNum==".Hs1"){
                        this.HsNum1=parseFloat(this.HsNum);
                    }else if(this.chosenNum==".Hs2"){
                        this.HsNum2=parseFloat(this.HsNum);
                    }
                    // console.log(this.HsNum1+"  "+this.HsNum2)
                }else{
                    alert("请点击数字显示屏选中一个要调整的信号");
                }
                this.HsNum="";
                this.chosenNum=undefined;
            }else if(n=="clear"){
                this.HsNum="";
                this.ShowNum();
                this.pointflag=false;
                // alert(this.HsNum1+""+this.HsNum2);
            }

            // console.log(this.HsNum);
            // if(this.HsNum.indexOf(".")!=-1){
            //     console.log(this.HsNum.length-this.HsNum.indexOf(".")-1);
            // }
        }else if(this.flag[2]&&this.chosenNum==undefined){
            alert("请点击数字显示屏选中一个要调整的信号");
        }else{
            alert("请打开函数发生器开关");
        }
        this.show();
      },
      // 获取函数发生器的单位
      InpoutClick:function(name,value){
        if(name=="frequency"){
            this.frequency=value;
        }else if(name=="Voltage"){
            this.Voltage=value;
        }
        this.show();
        // console.log(this.frequency+"  "+this.Voltage)
      },
      // 数字变成图片显示
      ShowNum:function(){
        $(this.chosenNum).find("img").attr("src",this.imgurl[2][0]);
        $(this.chosenNum).find(".point").attr("src",this.imgurl[2][12]);
        if(this.pointflag){
            $(this.chosenNum).find(".point").eq(3-(this.HsNum.length-this.HsNum.indexOf(".")-1)).attr("src",this.imgurl[2][11]);
            var temp=this.HsNum.replace(".","");
            for(var i=3;i>=4-temp.length;i--){
                $(this.chosenNum).find("img").eq(2*i).attr("src",this.imgurl[2][temp[temp.length+i-4]]);
            }
        }else{
            // console.log(HsNum);
            for(var i=3;i>=4-this.HsNum.length;i--){
                $(this.chosenNum).find("img").eq(2*i).attr("src",this.imgurl[2][this.HsNum[this.HsNum.length+i-4]]);
            }
        }
      },
      HsjsqbtnClick:function(){
        if(!this.Hsjsqbtnflag){
            $(".Hsjsqbtn").css("width","18px");
            $(".Hsjsqbtn").css("height","9px");
            $(".Hsjsqbtn").css("margin","1px");
            this.show();
        }else{
            $(".Hsjsqbtn").css("width","20px");
            $(".Hsjsqbtn").css("height","10px");
            $(".Hsjsqbtn").css("margin","0px");
            this.context.clearRect(0, 0, canvas.width, canvas.height);
        }
        this.Hsjsqbtnflag=!this.Hsjsqbtnflag;
        this.show();
      },
      // CH1 CH2 CH2反相 极性 自动
      hsjsqbtnClick:function(index){
        this.hsjsqbtnflag[index]=!this.hsjsqbtnflag[index];
        if(this.hsjsqbtnflag[index]&&this.Hsjsqbtnflag){
            $(".hsjsqbtn").eq(index).css("width","16px");
            $(".hsjsqbtn").eq(index).css("height","8px");
            $(".hsjsqbtn").eq(index).css("margin","1px");
            this.show();
        }else if(!this.hsjsqbtnflag[index]&&this.Hsjsqbtnflag){
            $(".hsjsqbtn").eq(index).css("width","18px");
            $(".hsjsqbtn").eq(index).css("height","9px");
            $(".hsjsqbtn").eq(index).css("margin","0px");
            this.context.clearRect(0, 0, canvas.width, canvas.height);
            this.show();
        }else if(this.Hsjsqbtnflag){
            alert("请打开函数接收器的开关！");
        }
        this.show();
      },
      // 函数接收器的箭头按钮
      adjustBtnClick:function(index){
        if(index==0){
            this.y1=this.y1-2;
        }else if(index==1){
            this.y2=this.y2-2;
        }else if(index==2){
            this.y1=this.y1+2;
        }else if(index==3){
            this.y2=this.y2+2;
        }else if(index==4){
            this.allMoveX=this.allMoveX+2;
        }else if(index==5){
            this.allMoveX=this.allMoveX-2;
        }
        this.show();
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
      // 计算角度
      CalculationAngle:function(beginangle,beginx,beginy,endx,endy){
        var angle;
        var width;
        width=Math.sqrt(Math.pow((endy-beginy),2)+Math.pow((endx-beginx),2));
        angle=Math.round(parseFloat((Math.asin(Math.abs(endy-beginy)/width))/Math.PI*180));
        if(endx>beginx){
            if(endy<beginy){
                angle=-angle+360;
            }else{
                angle=angle+360;
            }
        }else{
            if(endy<beginy){
                angle=angle+180;
            }else{
                angle=-angle+180;
            }
        }
        angle=angle-beginangle;
        return angle;
      },
      // 移动画布
      CanvasMouseDown:function(e){
        var that=this;
          this.moveX=e.pageX; //获取当前鼠标相对的X坐标
          $("#canvas").mousemove(function(e){
            that.context.clearRect(0, 0, canvas.width, canvas.height);
            var positionX=e.pageX; //获取当前鼠标相对的X坐标
            that.allMoveX=that.allMoveX+that.moveX-positionX;
            that.show();
          })
      },
      CanvasMouseUp:function(){
        $("#canvas").attr('onselectstart','return true');
        //解除鼠标移动事件
        $("#canvas").off('mousemove');
      },
      // 万用表的旋钮
      xzbtnMouseDown:function(e){
        var that =this;
        $(".xzbtn").attr('onselectstart','return false');
        var endangle=0,angle;
        var centertop=$(".xzbtn").height()/2;
        var centerleft=$(".xzbtn").width()/2;
        var positionX,positionY;
        $(".xzbtn").mousemove(function(e){
            positionX=e.pageX-that.xzbtnoffsetleft;
            positionY=e.pageY-that.xzbtnoffsettop;
            angle=that.CalculationAngle(142,centerleft,centertop,positionX,positionY);
            if(angle==0||angle==256){
                endangle=angle;
            }
            if(angle<0||angle>256){
                angle=endangle;
            }
            if(angle>=44&&128>angle){
                $(".WYb div").css("background","url("+that.WYbImg[0]+") no-repeat");
                $(".WYb div").css("background-size","20px 35px");
            }else if(angle>=128&&212>angle){
                $(".WYb div").css("background","url("+that.WYbImg[1]+") no-repeat");
                $(".WYb div").css("background-size","20px 35px");
            }else if(angle>=212&&256>=angle){
                $(".WYb div").css("background","url("+that.WYbImg[2]+") no-repeat");
                $(".WYb div").css("background-size","20px 35px");
            }else if(angle>=0&&44>angle){
                $(".WYb div").css("background","none");
            }
            $(".xzbtn").css("transform", "rotate("+angle+"deg)");
            that.show();
        });
        positionX=e.pageX-this.xzbtnoffsetleft;
        positionY=e.pageY-this.xzbtnoffsettop;
        angle=this.CalculationAngle(142,centerleft,centertop,positionX,positionY);
        if(angle>=44&&128>angle){
            $(".WYb div").css("background","url("+this.WYbImg[0]+") no-repeat");
            $(".WYb div").css("background-size","20px 35px");
        }else if(angle>=128&&212>angle){
            $(".WYb div").css("background","url("+this.WYbImg[1]+") no-repeat");
            $(".WYb div").css("background-size","20px 35px");
        }else if(angle>=212&&256>=angle){
            $(".WYb div").css("background","url("+this.WYbImg[2]+") no-repeat");
            $(".WYb div").css("background-size","20px 35px");
        }else if(angle>=0&&44>angle){
            $(".WYb div").css("background","none");
        }
        if(angle>=0&&256>=angle){
            $(".xzbtn").css("transform", "rotate("+angle+"deg)");
        }
        this.show();
      },
      xzbtnMouseUp:function(){
        $(".xzbtn").attr('onselectstart','return true');
        //解除鼠标移动事件
        $(".xzbtn").off('mousemove');
      },
      // 函数接收器的旋转按钮
      rotateMouseDown:function(e,index){
        var that=this;
        var positionX,positionY;
        var RotateBtn=$(".rotate");
        $(".rotate").eq(index).attr('onselectstart','return false');
        var endangle=0;
        var beginangle=0;
        var centertop,centerleft;
        centertop=RotateBtn.eq(index).height()/2;
        centerleft=RotateBtn.eq(index).width()/2;
        RotateBtn.eq(index).mousemove(function(e){
            positionX=e.pageX-that.RotateBtnoffsetleft[index];
            positionY=e.pageY-that.RotateBtnoffsettop[index];
            var  angle=that.CalculationAngle(142,centerleft,centertop,positionX,positionY);
            if(angle==0||angle==256){
                endangle=angle;
            }
            if(angle<0||angle>256){
                angle=endangle;
            }
            // 改变变量
            if(index<=2){
                if(index==0){
                    that.v1=that.changeV1*angle/90;
                }else if(index==1){
                    that.v2=that.changeV2*angle/90;
                }else if(index==2){
                    that.t1=that.changeT1*(angle-128)/180;
                    that.t2=that.changeT2*(angle-128)/180;
                }
            }else if(index<=5){
                if(index==3){
                    that.y1=75*(angle-128)/90;
                }else if(index==4){
                    that.y2=75*(angle-128)/90;
                }else if(index==5){
                    that.allMoveX=that.allMoveX+(angle-beginangle)/9*that.changeT1;
                    beginangle=angle;
                }
            }
            RotateBtn.eq(index).css("transform", "rotate("+angle+"deg)");
            that.show();
        });
        positionX=e.pageX-that.RotateBtnoffsetleft[index];
        positionY=e.pageY-that.RotateBtnoffsettop[index];
        var  angle=that.CalculationAngle(142,centerleft,centertop,positionX,positionY);
        if(index<=2){
                if(index==0){
                    that.v1=that.changeV1*angle/180;
                }else if(index==1){
                    that.v2=that.changeV2*angle/180;
                }else if(index==2){
                    that.t1=that.changeT1*(angle-128)/180;
                    that.t2=that.changeT2*(angle-128)/180;
                }
            }else if(index<=5){
                if(index==3){
                    that.y1=75*(angle-128)/90;
                }else if(index==4){
                    that.y2=75*(angle-128)/90;
                }else if(index==5){
                    that.allMoveX=that.allMoveX+(angle-beginangle)/9*that.changeT1;
                    beginangle=angle;
                }
            }
            // 显示波形
            that.show();

        if(angle>=0&&256>=angle){
            RotateBtn.eq(index).css("transform", "rotate("+angle+"deg)");
        }
      },
      rotateMouseUp:function(index){
        $(".rotate").eq(index).attr('onselectstart','return true');
        //解除鼠标移动事件
        $(".rotate").eq(index).off('mousemove');
      },
      // 变阻器的显示和阻值改变
      RWMouseDown:function(e){
        var that=this;
        var positionX,positionY;
        $(".RW img").attr('onselectstart','return false');
        var endangle=0;
        var centertop,centerleft;
        centertop=$(".RW img").height()/2;
        centerleft=$(".RW img").width()/2;
        $(".RW img").mousemove(function(e){
            positionX=e.pageX-that.RWoffsetleft;
            positionY=e.pageY-that.RWoffsettop;
            var  angle=that.CalculationAngle(142,centerleft,centertop,positionX,positionY);
            // 改变变量

            // console.log(angle);
            if(angle==0||angle==256){
                endangle=angle;
            }
            if(angle<0||angle>256){
                angle=endangle;
            }
            $(".RW img").css("transform", "rotate("+angle+"deg)");
            that.RW=(angle/256*680).toFixed(1);
            $(".RW span").html("R:"+that.RW+"K");
            that.show();
        });
        positionX=e.pageX-that.RWoffsetleft;
        positionY=e.pageY-that.RWoffsettop;
        // console.log(positionX+'   '+positionY);
            var  angle=that.CalculationAngle(142,centerleft,centertop,positionX,positionY);
            // 显示波形
        // console.log(angle);
        if(angle>=0&&256>=angle){
            $(".RW img").css("transform", "rotate("+angle+"deg)");
            that.RW=(angle/256*680).toFixed(1);
            $(".RW span").html("R:"+that.RW+"K");
            that.show();
        }
      },
      RWMouseUp:function(index){
        $(".RW img").attr('onselectstart','return true');
        //解除鼠标移动事件
        $(".RW img").off('mousemove');
      },
      // 电路计算
      CalculationU:function(){
        this.UBQ=this.R4/(this.R4+this.R3+this.RW)*this.Wyynum;
        this.ICQ=(this.UBQ-this.UBEQ)/(this.R7+this.R8);
        this.U2=this.Wyynum-this.ICQ*(this.R5+this.R7+this.R8)-this.UCES;
        if(this.RLflag){
            this.U1=this.ICQ*this.R9*this.RL/(this.R9+this.RL);
        }else{
            this.U1=this.ICQ*this.R9;
        }
        this.U=(this.U1+this.U2)/2;
        this.dU=this.U-this.U2;
        if(this.U1>this.U2){
            this.Uom=this.U2;
        }else{
            this.Uom=this.U1;
        }
        this.T=this.HsNum1/100;
        this.V=this.HsNum2/5;
        if(this.T==0){
            this.T=1;
        }
        if(this.chosenCH==1){
            this.Uom1=this.Uom;
            this.dy1=this.dU;
            this.changeV1=this.V;
            this.changeT1=this.T;
            if(-this.changeV1-this.dy1<this.Uom1){
                this.showV1=this.changeV1-this.dy1+this.Uom1;
            }else{
                this.showV1=2*this.changeV1;
            }
        }else if(this.chosenCH==2){
            this.Uom2=this.Uom;
            this.dy2=this.dU;
            this.changeV2=this.V;
            this.changeT2=this.T;
            this.changeFX=this.changeV2;
            if(-this.changeV2-this.dy2<this.Uom2){
                this.showV2=this.changeV2-this.dy2+this.Uom2;
            }else{
                this.showV2=2*this.changeV2;
            }
        }
      },
      // 创造波形
      createCanvas:function(arrPointx,arrPointy,color,T,V,x_base,dy,y_base,Uom){
        arrPointx[0] = x_base;
        arrPointy[0] = 75+y_base-dy;
        if(V==NaN){
            V=0;
        }
        for(var i=1;i<(this.width/this.step);i++){
            arrPointx[i] = arrPointx[i-1]+this.step;
            arrPointy[i] = 75+y_base-dy+V*Math.sin(arrPointx[i])*5;
            if(Uom!=null){
                if(arrPointy[i]>V*Math.abs(Uom)*5+75+y_base){
                    arrPointy[i]=V*Math.abs(Uom)*5+75+y_base;
                }else if(arrPointy[i]<-V*Math.abs(Uom)*5+75+y_base){
                    arrPointy[i]=-V*Math.abs(Uom)*5+75+y_base;
                }
            }
            this.context.beginPath();
            if(T==NaN||T==0){
                T=1;
            }
            this.context.moveTo(arrPointx[i-1]*T,arrPointy[i-1])
            this.context.lineTo(arrPointx[i]*T,arrPointy[i]);
            this.context.lineWidth = 2;
            this.context.strokeStyle = color;
            this.context.fileStyle = color;
            this.context.stroke();
        }
      },
      // 移动波形
      canvasMove:function(movex,arrPointx,arrPointy,color,T){
        arrPointx[0] = arrPointx[0]-movex/T/2;
        for(var i=1;i<(this.width/this.step);i++){
            arrPointx[i] = arrPointx[i]-movex/T/2;
            this.context.beginPath();
            this.context.moveTo(arrPointx[i-1]*T,arrPointy[i-1])
            this.context.lineTo(arrPointx[i]*T,arrPointy[i]);
            this.context.lineWidth = 2;
            this.context.strokeStyle = color;
            this.context.fileStyle = color;
            this.context.stroke();

        }
      },
      // 波形的显示
      showCH1:function(changeT1,changeV1){
        this.createCanvas(this.arrPointx1,this.arrPointy1,"yellow",changeT1,changeV1,this.x1,this.dy1,this.y1,this.Uom1);
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.canvasMove(this.allMoveX,this.arrPointx1,this.arrPointy1,"yellow",changeT1);
      },
      showCH2:function(changeT2,changeV2){
        this.createCanvas(this.arrPointx2,this.arrPointy2,"red",changeT2,changeV2,this.x2,this.dy2,this.y2,this.Uom2);
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.canvasMove(this.allMoveX,this.arrPointx2,this.arrPointy2,"red",changeT2);
      },
      showCH1CH2:function(changeT1,changeV1,changeT2,changeV2){
        this.createCanvas(this.arrPointx2,this.arrPointy2,"red",changeT2,changeV2,this.x2,this.dy2,this.y2,this.Uom2);
        this.createCanvas(this.arrPointx1,this.arrPointy1,"yellow",changeT1,changeV1,this.x1,this.dy1,this.y1,this.Uom1);
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.canvasMove(this.allMoveX,this.arrPointx1,this.arrPointy1,"yellow",changeT1);
        this.canvasMove(this.allMoveX,this.arrPointx2,this.arrPointy2,"red",changeT2);
      },
      ChangeFX:function(a,b){
        if(a==b){
            return -a;
        }else if(a==-b){
            return a;
        }
      },
      showWave:function(T1,V1,T2,V2,v2){
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        if(this.hsjsqbtnflag[2]){
            V2=this.ChangeFX(V2,this.changeFX);
        }else if(!this.hsjsqbtnflag[2]){
            V2=-this.ChangeFX(V2,this.changeFX);
        }
        if(v2!=0){
            v2=V2/Math.abs(V2)*Math.abs(v2);
        }

        if(this.Hsjsqbtnflag){
          if(this.hsjsqbtnflag[0]&&!this.hsjsqbtnflag[1]&&this.hsjsqbtnflag[4]){
            this.showCH1(T1,V1);
          }else if(!this.hsjsqbtnflag[0]&&this.hsjsqbtnflag[1]&&this.hsjsqbtnflag[4]){
            this.showCH2(T2,V2+v2);
          }else if(this.hsjsqbtnflag[0]&&this.hsjsqbtnflag[1]&&this.hsjsqbtnflag[4]){
            this.showCH1CH2(T1,V1,T2,V2+v2);
          }
        }
      },
      //   显示计算好的波形
      show:function(){
        this.connectionCheck();
        if(this.connectionFlag){
          this.CalculationU();
        }else{
          // this.changeT1=10;
          // this.changeV1=0;
          // this.changeT2=10;
          // this.changeV2=0;
          // this.v1=0;
          // this.v2=0;
          // this.t1=0;
          // this.t2=0;
          // this.Uom1=null;
          // this.Uom2=null;
        }
        this.showWave(this.changeT1+this.t1,this.changeV1+this.v1,this.changeT2+this.t2,this.changeV2,this.v2);
      },
      // 连线逻辑
      connectionCheck:function(){
        var that= this;
        $(".IOput").each(function(){
          var index=$(".IOput").index(this);
          that.IOputConnection[index]=$(this).attr("data-connection");
        });
        if(this.IOputConnection[0]==3&&this.IOputConnection[8]==0&&(this.IOputConnection[1]==1||this.IOputConnection[1]==6||this.IOputConnection[1]==8)&&(this.IOputConnection[9]==1||this.IOputConnection[9]==6||this.IOputConnection[9]==8)){
          if(this.IOputConnection[2]==7&&(this.IOputConnection[3]==1||this.IOputConnection[3]==6||this.IOputConnection[3]==8)){
            this.connectionFlag=true;
            this.chosenCH=1;
          }
          if(this.IOputConnection[4]==7&&(this.IOputConnection[5]==1||this.IOputConnection[5]==6||this.IOputConnection[5]==8)){
            this.connectionFlag=true;
            this.chosenCH=2;
          }

          if(!this.Postflag&&this.connectionFlag){
            $.ajax({
                url:this.$host+"/virtual/test/virtual",
                method:"post",
                data:{
                    number: 2,
                    virtual:1
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
            })
            this.Postflag=true;
          }
        }
      },
      // 计算线角度
      LineAngle:function(beginx,beginy,endx,endy){
        var angle;
        var width;
        width=Math.sqrt(Math.pow((endy-beginy),2)+Math.pow((endx-beginx),2));
        angle=Math.round(parseFloat((Math.asin(Math.abs(endy-beginy)/width))/Math.PI*180));
        if(endx>beginx){
            if(endy<beginy){
                angle=-angle;
            }else{
                angle=angle;
            }
        }else{
            if(endy<beginy){
                angle=angle+180;
            }else{
                angle=-angle+180;
            }
        }
        return angle;
      },
      // 获取鼠标位置出现线条
      LineMouseMove:function(e){
        this.positionX=e.pageX-$('.mainExp').offset().left; //获取当前鼠标相对mainExp的X坐标
        this.positionY=e.pageY-$('.mainExp').offset().top; //获取当前鼠标相对mainExp的Y坐标
        // console.log(positionX+'   '+positionY);
        if(this.connectionflag){
            var width=Math.sqrt(Math.pow((this.positionX-this.beginleft),2)+Math.pow((this.positionY-this.begintop),2));
            var angle=this.LineAngle(this.beginleft,this.begintop,this.positionX,this.positionY);
            // console.log(angle);
            $(this.newline).css("width", width+"px");
            $(this.newline).css("transform", "rotate("+angle+"deg)");
            // console.log($(newline).css("width"));
        }
      },
      IOputClick:function(index){
        if(!this.connectionflag&&!this.IOputflag[index]){
            this.IOputflag[index]=true;
            this.connectionflag=true;
            this.newline = document.createElement("div");
            $(this.newline).attr("data-connection",index);
            $(this.newline).css("height", "2px");
            $(this.newline).css("position", "absolute");
            $(this.newline).css("z-index", "99");
            $(this.newline).css("transform-origin", "left top");
            $(this.newline).css("background-color", "black");
            this.begintop=$(".IOput").eq(index).position().top+7.5;
            this.beginleft=$(".IOput").eq(index).position().left+7.5;
            $(this.newline).addClass("newline");
            $(this.newline).css("top",this.begintop+"px");
            $(this.newline).css("left",this.beginleft+"px");
            // console.log(begintop+"   "+beginleft);
            $(".mainExp").append(this.newline);
            this.chosenPoint=index;
        }else if(this.connectionflag&&!this.IOputflag[index]){
            $(this.newline).attr("data-connection",index);
            $(".IOput").eq(index).attr("data-connection",this.chosenPoint);
            this.IOputflag[index]=true;
            this.connectionflag=false;
            this.endtop=$(".IOput").eq(index).position().top+7.5;
            this.endleft=$(".IOput").eq(index).position().left+7.5;
            var width=Math.sqrt(Math.pow((this.beginleft-this.endleft),2)+Math.pow((this.begintop-this.endtop),2));
            var angle=this.LineAngle(this.beginleft,this.begintop,this.endleft,this.endtop);
            $(this.newline).css("width", width+"px");
            $(this.newline).css("transform", "rotate("+angle+"deg)");
            $(".mainExp").append(this.newline);
        }else if(!this.connectionflag&&this.IOputflag[index]){
            alert("该点无法引出两条导线！");
        }
        this.show();
      },
      PointClick:function(index){
        if(!this.connectionflag){
            this.connectionflag=true;
            this.chosenPoint=index;
            this.newline = document.createElement("div");
            $(this.newline).css("height", "2px");
            $(this.newline).css("position", "absolute");
            $(this.newline).css("z-index", "99");
            $(this.newline).css("transform-origin", "left top");
            $(this.newline).css("background-color", "black");
            this.begintop=$(".DLT").position().top+$(".DLT p").eq(index).position().top+3.5;
            this.beginleft=$(".DLT").position().left+$(".DLT p").eq(index).position().left+3.5;
            $(this.newline).addClass("newline");
            $(this.newline).css("top",this.begintop+"px");
            $(this.newline).css("left",this.beginleft+"px");
            // console.log(begintop+"   "+beginleft);
            $(".mainExp").append(this.newline);
        }else{
            $(".IOput").eq(this.chosenPoint).attr("data-connection",index);
            this.chosenPoint=null;
            this.connectionflag=false;
            this.endtop=$(".DLT").position().top+$(".DLT p").eq(index).position().top+2;
            this.endleft=$(".DLT").position().left+$(".DLT p").eq(index).position().left+4;
            var width=Math.sqrt(Math.pow((this.beginleft-this.endleft),2)+Math.pow((this.begintop-this.endtop),2));
            var angle=this.LineAngle(this.beginleft,this.begintop,this.endleft,this.endtop);
            $(this.newline).css("width", width+"px");
            $(this.newline).css("transform", "rotate("+angle+"deg)");
            $(".mainExp").append(this.newline);
        }
        this.show();
      },
      GetLine:function(){
        var that= this;
        var Clearflag=true;
        $(".IOput").each(function(){
          var index=$(".IOput").index(this);
          that.IOputConnection[index]=$(this).attr("data-connection");
          if(that.IOputConnection[index]!=""){
            Clearflag=false;
          }
        });
        if(Clearflag==true){
          axios({
              method: 'get',
              url: this.$host+'/virtual/test/linedown',
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
                var line=response.data.data;
                for(var i=0;i<line.length;i++){
                  if(line[i]!=null){
                    that.IOputClick(i);
                    that.PointClick(parseInt(line[i]));
                  }
                }
              }else {
                alert(data.message)
              }
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
          alert("请先清空连线！");
        }
        this.show();
      },
      SaveLine:function(){
        var that= this;
        $(".IOput").each(function(){
          var index=$(".IOput").index(this);
          that.IOputConnection[index]=$(this).attr("data-connection");
        });
        axios({
              method: 'post',
              url: this.$host+'/virtual/test/lineup',
              data: {
                line:that.IOputConnection
              },
            })
            .then(response => {
              var data=response.data;
              if(data.code==10001){
                alert("保存成功");
              }else {
                alert(data.message)
              }
            })
            .catch(function (error) {
                console.log(error);
            });
        this.show();
      },
      ClearLine:function(){
        var that= this;
        $(".IOput").each(function(){
          var index=$(".IOput").index(this);
          $(this).attr("data-connection","");
          that.IOputflag[index]=false;
        });
        $(".newline").remove();
        this.show();
      },
      ClearThisLine:function(line){
        if(line!=null){
          var index=$(".newline").eq(line).attr("data-connection");
          $(".IOput").eq(index).attr("data-connection","");
          this.IOputflag[index]=false;
          $(".newline").eq(line).remove();
        }else{
          alert('请先选择要删除的线条！');
        }
      }



  }
}
</script>
