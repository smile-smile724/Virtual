<template>
  <!-- 主要内容 -->
    <div class="main">
        <div class="tip">修改密码</div>
        <img src="../assets/person.png" class="person">
        <span class="name">{{username}}</span>
        <ul>
            <li><input type="password" class="OriginalP" placeholder="原密码" v-model="user.oldPassword"><i style="top:12px"><img src="../assets/username.svg" width="14px" height="14px"></i></li>
            <li><input type="password" class="NewP" placeholder="新密码" v-model="user.newPassword"><i style="top:81px"><img src="../assets/username.svg" width="14px" height="14px"></i></li>
            <li><input type="password" class="AgainP" placeholder="确认密码" v-model="user.againPassword"><i style="top:150px"><img src="../assets/username.svg" width="14px" height="14px"></i></li>
            <li class="btn" @click='ChangePassword'>确定</li>
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
.person{
    width:150px;
    height:150px;
    margin:98px auto 0 auto;
}
.name{
  width: 100%;
  min-width:800px;
    display: inline-block;
    text-align: center;
    color: rgba(80, 80, 80, 1);
    font-size: 19px;
    margin-top:248px auto 0 auto;
}

.main ul{
    width: 312px;
    list-style: none;
    padding:0;
    margin:11px auto 0 auto;

}
.main ul li{
    width: 313px;
	height: 34px;
    margin-bottom: 35px;
}
.main ul li input{
    width: 313px;
	height: 34px;
	text-indent: 30px;
	color: rgba(166, 166, 166, 1);
	background-color: rgba(255, 255, 255, 1);
	border-radius: 2px;
	font-size: 13px;
	border: rgba(229, 229, 229, 1) solid 1px;
    text-align: left;
}
.btn{
    width: 313px;
	height: 38px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(144, 192, 239, 1);
	border-radius: 3px;
	font-size: 14px;
	line-height: 38px;
	text-align: center;
    font-weight: bold;
    cursor: pointer;
}
i{
  display: block;
  margin:-25px 0 0 -280px;
}
</style>


<script>

import axios from 'axios'
axios.defaults.withCredentials = true;  //允许axios请求携带cookie等凭证
export default {
    data () {
        return {
            username:"",
            user:{
              oldPassword:'',
              newPassword:'',
              againPassword:''
            }
        }
    },
    mounted:function(){
      this.GetContent()
    },
    methods: {
        GetContent(){
            axios({
              method: 'post',
              url: this.$host+'/virtual/test/name',
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
                this.username=response.data.data;
              }else{
                alert(response.data.message);
              }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        ChangePassword(){
          if(this.user.oldPassword==""||this.user.newPassword==""||this.user.againPassword==""){
            alert("密码不能为空！")
          }else{
              if(this.user.newPassword==this.user.againPassword){
              axios({
                method: 'post',
                url: this.$host+'/virtual/test/alter',
                data: {
                  oldpassword: this.user.oldPassword,
                  newpassword: this.user.newPassword
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
                if(response.data.code==10001){
                  alert("修改成功");
                }else{
                  alert(response.data.message);
                  this.$router.push('/');
                }
              })
              .catch(function (error) {
                  console.log(error);
              });
            }else{
              alert("两次密码输入不相同！");
            }
          }
        }
    }
}

</script>
