<template>
<main>
<app-header></app-header>
<app-home></app-home>
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