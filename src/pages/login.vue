<template>
  <div class="main">

    <div id="picture"><img src="../assets/log.png" id="603" width="84px" height="84px"></div>

    <div id="theme">低频电子线路虚拟实验系统</div>
    <div id="word1">Virtual experiment system of low frequency electronic circuit</div>
    <input id="username" type="text" placeholder="账户" v-model="user.num">
    <input id="password" type="password" placeholder="密码" v-model="user.password">
    <div id="usernamesvg"><img src="../assets/username.svg"></div>
    <div id="passwordsvg"><img src="../assets/password.svg"></div>
    <div id="word2"><a href="#">忘记密码</a></div>

    <button id="button" @click="login()">登录</button>

</div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            user:{
                num:"",
                password:""
            }
        }
    },
    methods: {
        login(){
            const that=this;
            axios({
              method: 'post',
              url: this.$host+'/virtual/test/login',
              data: {
                num: that.user.num,
                password: that.user.password
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
                // alert("欢迎用户"+data.data.username+"登录"),
                alert("欢迎用户"+data.data+"登录");
                that.$router.push('/ExpContent');
              }else {
                alert(data.message)
              }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}

</script>

<style scoped>
body{
    position: relative;
    background: rgb(240,243,247);
}
a{
    text-decoration: none;
}
.main{
    width: 550px;
    height:400px;
    position: relative;
    left: 55%;
    top:14.35%;
}

#picture{
    position: absolute;
    left: 0;
    top:0;

}
#theme{
    position:absolute;
    height: 44px;
    left: 15%;
    top: 5%;
    color: rgba(0, 0, 0, 0.85);
    font-size: 33px;
    line-height: 44px;
    text-align: left;
    font-weight: bold;
}
#word1{
    position: absolute;
    height: 22px;
    left: 17%;
    top: 17%;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 160%;
    text-align: left;
}
#username{
    position: absolute;
    width: 370px;
    height: 40px;
    left: 17%;
    top: 35%;
    text-indent: 36px;
    color: rgba(166, 166, 166, 1);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 2px;
    font-size: 15px;
    line-height: 150%;
    border: rgba(229, 229, 229, 1) solid 1px;
    text-align: left;
    outline: none;
}
#password{
    position: absolute;
    width: 370px;
    height: 40px;
    left: 17%;
    top: 50%;
    text-indent: 36px;
    color: rgba(166, 166, 166, 1);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 2px;
    font-size: 15px;
    line-height: 150%;
    border: rgba(229, 229, 229, 1) solid 1px;
    text-align: left;
    outline: none;
}
#usernamesvg img{
    position: absolute;
    width: 16px;
    height: 16px;
    left: 19%;
    top: 38.5%;
    font-size: 16px;
    color: rgba(153, 153, 153, 1);
}
#passwordsvg img{
    position: absolute;
    width: 16px;
    height: 16px;
    left: 19%;
    top: 53.5%;
    font-size: 16px;
    color: rgba(153, 153, 153, 1);
}
#button{
    position: absolute;
    width: 368px;
    height: 40px;
    left: 17.5%;
    top: 77%;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(24, 144, 255, 1);
    border-radius: 4px;
    font-size: 15px;
    line-height: 150%;
    text-align: center;
    padding:0;
    border:0;
    cursor: pointer;
}
#word2{
    position: absolute;
    width: 56px;
    height: 22px;
    left: 72%;
    top:64%;
    color: rgba(24, 144, 255, 1);
    font-size: 14px;
    line-height: 160%;
    text-align: left;
}
#word2 a{
    color: rgba(24, 144, 255, 1);
}
</style>
