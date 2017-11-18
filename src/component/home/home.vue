<template>
  <article>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for='item in lunbos' v-bind:key='item.url'>
            <a v-bind:href="item.url">
                <img v-bind:src="item.img" >
            </a>
        </mt-swipe-item>
     </mt-swipe>
  </article>
</template>
<script>
export default {
  data() {
    return {
        lunbos:[],
    };
  },
  methods:{
      gitLubos(){
          this.axios.get('http://vue.studyit.io/api/getlunbo')
          .then(rep => this.lunbos = rep.data.message)
      }
  },
  //生命周期函数，组件加载完后调用
  created(){
      this.gitLubos();  
  }
};
</script>
<style lang='less' scoped>
    @heigth:260px;
    article{
        height: @heigth;
     
     img{
        height: @heigth;
    }
    }
   
</style>
  
