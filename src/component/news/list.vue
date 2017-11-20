<template>
<article>
  <div id="header" class="mui-bar mui-bar-nav nav-top" style='top:40px'>
  <h1 class="mui-title">图文资讯</h1>
  <router-link to='/' class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
    <span class="mui-icon mui-icon-left-nav" />返回
  </router-link>
</div>
<ul class="mui-table-view tw-box" style='padding-top:40px'>
				<li class="mui-table-view-cell mui-media" v-for='v in this.twzx' v-bind:key='v.id'>
					<router-link :to="`/news/detail/${v.id}`" class="">
						<img class="mui-media-object mui-pull-left" :src="v.img_url" >
						<div class="mui-media-body">
							<p class="mui-ellipsis">{{v.title}}</p>
						</div>
            <div class='xw-buttom'>
              <span class='fl bottom-color'>发表时间 : {{v.add_time | date}}</span>
              <span class='btnNumber' >点击 : {{v.click}}</span>  
            </div>
					</router-link>
				</li>
		
			</ul>
</article>
</template>
<script>
  export default{
    data(){
      return {
        twzx:[]
      }
    },

  created(){
      this.getxw()
    },

    methods:{
      getxw(){
        this.axios.get(this.api.getXW).then(res => {
          this.twzx = res.data.message;
          console.log(this.twzx);
        })
        // .then(rep => console.log(rep.data.message));
      }
    },
    
  }
</script>
<style scoped>
.btnNumber{
  float: right;
}
.xw-buttom{
  color: skyblue;
  font-size: 14px;
}
.bottom-color{
    color: skyblue;
}
.fl{
  float: left;
};
</style>

