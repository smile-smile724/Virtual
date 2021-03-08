<template>
    <div class="main">
    <!-- 主要内容 -->
        <div class="tip">实验分析</div>
    </div>
</template>

<style scoped>

.main{
  min-width:350px;
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
        url:this.$host+"/virtual/test/analyze",
        method:"post",
        data:{
            number: 2,
            analyze:1
        },
        xhrFields:{
            withDredentials:true
        },
        success:function(data){
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
