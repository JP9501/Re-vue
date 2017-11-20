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
								<router-link v-bind="{to:'/news/list'}">
									<span class="mui-icon  mui-icon-chat"></span>
									<div class="mui-media-body">新闻资讯</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
									<div class="mui-media-body">图片分享</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
									<div class="mui-media-body">商品购买</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
									<div class="mui-media-body">留言反馈</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span>
									<div class="mui-media-body">视频专区</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a v-bind="{to:'/'}">
									<span class="mui-icon mui-icon-list"></span>
									<div class="mui-media-body">联系我们</div>
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
  
