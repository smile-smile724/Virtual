<template>
  <!-- 主要内容 -->
    <div class="main">
        <div class="tip">教学视频</div>
        <ul class="content">
            <li>
                <a href="#" class="img"></a>
                <a href="#"><span>实验一   常用仪器的使用与测试</span></a>
            </li>
            <li>
                <router-link to="/Video" class="img"><img src="../assets/video.jpg" width="215px" height="152px"></router-link>
                <router-link to="/Video"><span>实验二   单机低频放大器的设计与调测</span></router-link>
            </li>
            <li>
                <a href="#" class="img"></a>
                <a href="#"><span>实验三   差动放大电路</span></a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
a,.router-link-active{
  text-decoration: none;
	color: rgba(80, 80, 80, 1);
}
.main{
  min-width:760px;
    margin:0;
    position: absolute;
    left:200px;
    top: 98px;
    background-color: rgb(240,243,247);
}
  .tip{
    width: 96px;
	height: 36px;
	color: rgba(80, 80, 80, 1);
	font-size: 24px;
	line-height: 36px;
	text-align: left;
    font-weight: bold;
    margin-top:23px;
    margin-left:28px;
}
.content{
    list-style: none;
    margin:0 15.5px;
    padding:0;
}
.content li {
    width:215px;
    height:152px;
    float:left;
    margin: 10px 12.5px;
}
.content li .img{
    width:215px;
    height:152px;
    background-color: rgba(153, 153, 153, 1);
}
.content a{
    width:215px;
    text-decoration: none;
    color: rgba(80, 80, 80, 1);
	text-align: center;
    display: inline-block;
    font-size: 13px;
}

</style>


<script>
export default {
    data () {
      return {
      }
    },
    methods:{
    }
}
</script>
