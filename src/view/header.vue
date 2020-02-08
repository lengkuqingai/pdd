<template>
  <div class="header">
    <div v-if="left">
      <Icon name="arrow-left"
            size='20px'
            @click='$router.go(-1)'
      />
    </div>
    <span> {{title}}</span>
    <span @click="share"   v-show="link" class="copyBtn link" :data-clipboard-text="herf" >分享到微信
    </span>
  </div>
</template>
<script>
  import {Icon,Toast} from 'vant'
  import Clipboard from 'clipboard'
  new Clipboard('.copyBtn');
  export default {
    name: 'headers',
    data() {
      return {
        herf:''
      }
    },
    mounted(){
      this.herf=location.href
    },
    props:{
      left:{
        default:true,
        Type:String
      },
      title:{
        default:'',
        Type:String
      },
      link:{
        default:'',
        Type:String
      }
    },
    components: {
      Icon,Toast
    },
    methods:{
      share(){
        Toast({
          message:'链接已复制，请前往微信发送给好友',
          duration:3000
        })
      }
    }
  }
</script>
<style xml:lang="less" scoped>
  .header {
    height: 40px;
    text-align: center;
    position: relative;
    background: white;
  }

  .header > div {
    position: absolute;
    top: 10px;
    left: 5px;
  }
  span{
    line-height: 40px;
    font-size: 14px;
  }
  .link{
    position: absolute;
    right: 12px;
  }
</style>
