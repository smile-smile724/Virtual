<template>
  <div class="main">
    <!-- 主要内容 -->
        <div class="tip">教学视频</div>
        <div class="video">
          <video controls  autoplay="autoplay" muted="muted" poster="../assets/video.jpg" width="100%" height="100%" data-setup="{}">
             <source src="../assets/实验教程.mp4" type="video/mp4">
          </video>
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
.video{
    width: 900px;
	height: 500px;
    background-color: rgba(153, 153, 153, 1);
    margin:66px auto 0 auto;
}
.ExpName{
    width:100%;
    text-align: center;
	color: rgba(80, 80, 80, 1);
	font-size: 14px;
    margin-top:26px;
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
        url:this.$host+"/virtual/test/schedule",
        method:"post",
        data:{
            number: 2,
            schedule:1
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
