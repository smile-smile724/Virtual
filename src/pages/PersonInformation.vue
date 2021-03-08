<template>
<!-- 主要内容 -->
    <div class="main">
        <div class="tip">个人信息</div>
        <img src="../assets/person.png">
        <span class="name">{{user.username}}</span>
        <ul class="Information">
            <li>账号：<span>{{user.num}}</span></li>
            <li>专业：<span>{{user.major}}</span></li>
            <li>班级：<span>{{user.classAndGrade}}</span></li>
            <li>授课老师：<span>{{user.teacher}}</span></li>
            <li>实验课时：<span>{{user.classHour}}</span></li>
        </ul>
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
  height:600px;
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
.main img{
    width:150px;
    height:150px;
    margin:98px auto 0 auto;
}
.name{
  width: 100%;
  min-width:800px;
    display: block;
    text-align: center;
    color: rgba(80, 80, 80, 1);
    font-size: 19px;
    margin-top:248px auto 0 auto;
}
.main ul{
  width:250px;
    list-style: none;
    padding:0;
    margin:11px auto 0 auto;
}
.main ul li{
    margin-bottom: 20px;
	color: rgba(80, 80, 80, 1);
	font-size: 16px;
}
</style>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;  //允许axios请求携带cookie等凭证
export default {
    data () {
        return {
            user:{
                username:"",
                num:"",
                major:"",
                classAndGrade:"",
                teacher:"",
                classHour:""
            }
        }
    },
    mounted:function(){
      this.GetContent()
    },
    methods: {
        GetContent(){
            axios({
              method: 'get',
              url: this.$host+'/virtual/test/information',
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
                this.user=response.data.data;
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
