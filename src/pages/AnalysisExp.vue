<template>
<!-- 主要内容 -->
    <div class="main">
        <div class="tip">实验分析</div>
        <ul class="content">
            <li>实验一   常用仪器的使用与测试</li>
            <router-link to="/Analysis"><li>实验二   单机低频放大器的设计与调测</li></router-link>
            <li>实验三   差动放大电路</li>
            <li>实验四   集成运算放大器</li>
        </ul>
    </div>
</template>

<style scoped>
a,.router-link-active{
  text-decoration: none;
	color: rgba(80, 80, 80, 1);
}
.main{
  min-width:350px;
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
    margin:30px 28px;
    padding:0;
}
.content li {
	height: 25px;
	color: rgba(80, 80, 80, 1);
	font-size: 17px;
    line-height: 25px;
    text-align: left;
    padding-bottom:17px;
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
