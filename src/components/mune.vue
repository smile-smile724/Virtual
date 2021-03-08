<template>
    <!-- 左侧导航栏 -->
    <div class="left">
        <ul class="main_menu">
            <li><div class="nav" @click="chosenlist(0)"><img src="../assets/icon1.png" class="icon"><span>学习</span><img src="../assets/down.png" class="arrow"></div>
                <ul v-if="chosenList===0">
                    <router-link to="/ExpContent"><li :class="{selected : $route.path==pathArr[0]}">实验内容</li></router-link>
                    <router-link to="/ExpVideo"><li :class="{selected : $route.path==pathArr[1]}">教学视频</li></router-link>
                    <router-link to="/ExpTheory"><li :class="{selected : $route.path==pathArr[2]}">实验原理</li></router-link>
                </ul>
            </li>
            <li><div class="nav" @click="chosenlist(1)"><img src="../assets/icon2.png" class="icon"><span>实验</span><img src="../assets/down.png" class="arrow"></div>
                <ul v-if="chosenList===1">
                    <router-link to="/VirtualExp"><li :class="{selected : $route.path==pathArr[3]}">虚拟实验</li></router-link>
                    <router-link to="/SolidExp"><li :class="{selected : $route.path==pathArr[4]}">实体实验</li></router-link>
                    <router-link to="/AnalysisExp"><li :class="{selected : $route.path==pathArr[5]}">实验分析</li></router-link>
                </ul>
            </li>
            <li><div class="nav" @click="chosenlist(2)"><img src="../assets/icon3.png" class="icon"><span>系统</span><img src="../assets/down.png" class="arrow"></div>
                <ul v-if="chosenList===2">
                    <router-link to="/PersonInformation"><li :class="{selected : $route.path==pathArr[6]}">个人信息</li></router-link>
                    <router-link to="/StudyRecord"><li :class="{selected : $route.path==pathArr[7]}">学习记录</li></router-link>
                    <router-link to="/ChangePassword"><li :class="{selected : $route.path==pathArr[8]}">修改密码</li></router-link>
                </ul>
            </li>
            <router-link to="/login"><div class="out"><span>登出</span></div></router-link>
        </ul>
    </div>

</template>

<style scoped>
a,.router-link-active{
  text-decoration: none;
}
a{
  color:#2C3E50;
}
a:hover{
    color:rgba(24, 144, 255, 1);
}
  .left{
    width: 150px;
	  height: 100%;
    margin:0;
    position: absolute;
    left:0;
    top: 98px;
	background-color: rgba(255, 255, 255, 1);
}
.main_menu{
    width: 150px;
    height:45px;
    list-style: none;
    padding:0;
    margin:0;
    position: absolute;
}
.main_menu li span{
    font-size: 14px;
    line-height: 45px;
    position: absolute;
}
.icon{
    width:28px;
    height:45px;
    margin:0 0 0 20px;
    display: inline-block;
}
.arrow{
    width:30px;
    height:45px;
    margin:0 0 0 64px;
    display: inline-block;
}
.nav:hover .arrow{
    opacity: 0.4;
}
.main_menu li ul{
    list-style: none;
    padding:0;
    margin:0;
}
.main_menu li ul li{
    width: 99px;
    height:45px;
    margin-left:48px;
    font-size: 14px;
    line-height: 45px;
    text-align: left;
}
.main_menu li,.main_menu li ul li,.out{
    cursor: pointer;
}
.out{
    width:50px;
    height:47px;
    position: absolute;
    top:571px;
    margin-left:50px;
    background: url(../assets/out.png) no-repeat;
    background-size: 50px 30px;
}
.out span{
    width:50px;
    color: rgba(80, 80, 80, 1);
	font-size: 14px;
    text-align: center;
    display: block;
    padding-top:30px;
}

.selected{
    border-right: 3px solid rgba(24, 144, 255, 1);
}
.main_menu li ul a .selected{
    color:rgba(24, 144, 255, 1);
}
</style>

<script>
import $ from 'jquery'
import down from '../assets/down.png'
import up from '../assets/up.png'
  export default {
    data () {
      return {
        chosenList:null,
        down:down,
        up:up,
        pathArr:['/ExpContent','/ExpVideo','/ExpTheory','/VirtualExp','/SolidExp','/AnalysisExp','/PersonInformation','/StudyRecord','/ChangePassword']
      }
    },
    mounted:function(){
      this.chosenList=this.$route.meta.order
    },
    methods:{
      chosenlist:function(num){
        $(".nav").parent("li").find(".arrow").attr("src",this.down);
        if(this.chosenList==num){
          this.chosenList=null;
        }else{
          this.chosenList=num;
          $(".nav").parent("li").find(".arrow").eq(num).attr("src",this.up);
        }
      }
    }
  }
</script>
