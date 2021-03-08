<template>

    <!-- 顶部标题栏 -->
    <div class="top">
      <!-- back按钮 -->
      <router-link :to="$route.meta.to" v-if="$route.meta.keepAlive==3"><img src="../assets/back.png" id="back"></router-link>
      <span>低频电子线路虚拟实验系统</span>
    </div>

</template>

<style scoped>

.top{
    width: 100%;
    min-width:1000px;
	height: 98px;
	background-color: rgba(179, 200, 221, 1);
    box-shadow: rgba(204, 204, 204, 1) solid 1px;
    margin:0;
    position: absolute;
    color: rgba(80, 80, 80, 1);
    text-align: center;
    line-height: 98px;
	font-size: 32px;
}


#back{
    float: left;
    position: absolute;
    top:21px;
    left:50px;
    cursor: pointer;
}
</style>
