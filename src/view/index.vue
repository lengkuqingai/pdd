<template>
  <div class="wrap">
    <Headers :left="left" :title="'拼多多砍价群'"></Headers>
    <div class="content">
      <div class="clip">
        <div class="title-item">如何获取拼多多砍价群</div>
        <div class="desc">关注公众号<span>只为钱</span>或扫描下方二维码，回复<span>拼多多互砍群</span></div>
        <div class="code">
          <img src="../assets/zwp.jpg">
        </div>
      </div>
      <div class="clip list">
        <div class="title-item">您关注的最新资讯</div>
        <div class="list-wrap">
          <div v-for="(item,index) in list" :key="index" class="list-item" :class="index<3?'hot':''" @click="goList(item.index)">{{item.title}}</div>
        </div>
      </div>
    </div>
    <footer class="id">
      <p>&#169;2019-2020</p>
      <a href="http://www.beian.miit.gov.cn">(网站备案：粤ICP备19129443号)</a>
    </footer>
  </div>
</template>
<script>
  import data from '../assets/list'
  import Headers from './header'
  export default {
    name:'index',
    data(){
      return {
        list:data.list,
        left:false
      }
    },
    components:{
      Headers
    },
    methods:{
      goList(index){
        this.$router.push({
          path:'/list',
          query:{
            index:index
          }
        })
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
    margin-top:10px;
  }
  .clip{
    width:94%;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 2px 2px 2px 2px #f5f5f5;
    margin:0 auto 10px;
    padding:20px;
  }
  .title-item{
    font-size:16px;
    line-height: 32px;
    text-align: center;
  }
  .desc{
    font-size:12px;
    line-height: 14px;
    /*margin-left:20px;*/
  }
  span{
    color:green;
    margin:0 4px;
  }
  .code{
    text-align: center;
    font-size:0;
  }
  img{
    margin:0 auto;
    width:200px;
  }
  .list-item{
    font-size:14px;
    line-height: 30px;
    width:100%;
    padding-right:80px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    position: relative;
  }
  .list-item:not(:last-child){
    border-bottom: 1px solid #f5f5f5;
  }
  .hot:after{
    content: '推荐';
    background-color:red;
    color:#ffffff;
    font-size:10px;
    line-height: 20px;
    position: absolute;
    top:5px;
    right:0;
    padding:0 6px;
    border-radius: 4px;
  }
</style>
