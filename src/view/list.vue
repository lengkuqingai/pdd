<template>
  <div class="wrap">
    <Headers :title="content.title"></Headers>
    <div class="content">
      <div class="content-item" v-for="(item,index) in content.content" :key="index">{{item}}</div>
      <div v-if="content.tip" class="tip" @click="leave(content.alt)" :herf="content.alt">{{content.tip}}</div>
    </div>
    <footer class="id">
      <p>&#169;2019-2020</p>
      <p>(网站备案：粤ICP备19129443号)</p>
    </footer>
  </div>
</template>
<script>
  import Headers from './header'
  import data from '../assets/list'
  export default {
    name:'index',
    data(){
      return {
        list:data.list,
        content:{}
      }
    },
    components:{
      Headers
    },
    mounted(){
      let index = this.$route.query.index
      this.content = this.list[index]
    },
    methods:{
      goList(index){
        this.$router.push({
          path:'/list',
          query:{
            index:index
          }
        })
      },
      leave(address){
        window.location.href = address
      }
    }
  }
</script>
<style xml:lang="less" scoped>
  header{
    line-height: 44px;
    /*font-weight: bold;*/
    font-size:16px;
    text-align: center;
    height:44px;
    background-color: #ffffff;
  }
  .id{
    text-align: center;
  }
  .content{
    width:94%;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 2px 2px 2px 2px #f5f5f5;
    margin:10px auto;
    padding:20px;
  }
  .content-item{
    text-indent: 2em;
    font-size:14px;
    line-height: 20px;
    margin-bottom:10px;
  }
  .tip{
    color:green;
    text-align: center;
    margin-top:10px;
    text-decoration:underline;
  }
</style>
