<template>
<article>
      <div id="header" class="mui-bar mui-bar-nav nav-top" style='top:40px'>
  <h1 class="mui-title">资讯详情</h1>
  <router-link to='/news/list' class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
    <span class="mui-icon mui-icon-left-nav" />返回
  </router-link>
  <i></i>
</div>
<div class='' v-for='v in XQ' v-bind:key='v.id'>
    <h3>{{v.title}}</h3>
<div class='tirm'>
    <span>{{v.add_time | date }}</span>
    <span></span>
</div>
<p v-html='v.content' style='color:#000'></p>
</div>
</article>
</template>
<script>
export default{
    data(){
        return{
            XQ:[],
        }
    },
        created(){
         this.getXQ()
    },
    methods:{
 
         getXQ(){
           let  id=this.$route.params.id
           this.axios.get(this.api.getXQ+id).then(res => {
            this.XQ = res.data.message;
        })
      }
         
    },

}
</script>
<style scoped>
article {
    padding-top: 40px;
}
i{
    width: 100%;
}
.fl {
  float: left;
}
h3{
    color: skyblue;
    font-size: 20px;
    padding: 10px 0;
}
.tirm span{
    colo:#999;
    font-size: 14px;
}
p{
    width: 100%;
    border-top: 1px solid #999;
}
</style>

