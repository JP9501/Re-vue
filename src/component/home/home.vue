<template>
  <article>
      <!-- 轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for='item in lunbos' v-bind:key='item.url'>
            <a v-bind:href="item.url">
                <img v-bind:src="item.img" >
            </a>
        </mt-swipe-item>
     </mt-swipe>
     <!-- 九宫格 -->
     <div class="mui-slider-item mui-active">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-home"></span>
									<div class="mui-media-body">Home</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
									<div class="mui-media-body">Email</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-chatbubble"></span>
									<div class="mui-media-body">Chat</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-location"></span>
									<div class="mui-media-body">location</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-search"></span>
									<div class="mui-media-body">Search</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-phone"></span>
									<div class="mui-media-body">Phone</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-gear"></span>
									<div class="mui-media-body">Setting</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-info"></span>
									<div class="mui-media-body">about</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-more"></span>
									<div class="mui-media-body">more</div>
								</a>
							</li>
						</ul>
					</div>
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
          this.axios.get(this.api.getLunbo)
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
  
