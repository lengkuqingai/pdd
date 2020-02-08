<template>
  <div id="app">
    <keep-alive >
      <!--//当前进入的路由 meta里面 keepAlive为true时走这里-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!--//当前进入的路由 meta里面 keepAlive为false时走这里 下面 if 判断进行了取反处理-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style xml:lang="less">
@import "styles/reset.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
