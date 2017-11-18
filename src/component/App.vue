<template>
<main>
<app-header></app-header>
<router-view></router-view>
<app-footer></app-footer>    
 </main>    
</template>
<script>
import homeComponent from './home/home.vue';
export default {
  data() {
    return {

    };
  },
  components:{
      'app-home':homeComponent
  }
};
</script>
<style scoped>

</style>