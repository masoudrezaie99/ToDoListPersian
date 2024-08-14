<template>
  <v-app>
    <headerCp/>

    <v-main>
      <router-view/>
    </v-main>

    <footerCp/>
    
  </v-app>
</template>

<script>
import footerCp from './components/footer-cp.vue';
import headerCp from './components/header-cp.vue';
export default {
  name: 'App',

    components:{
      headerCp,
      footerCp,
    }
}
</script>


<style>
*{
  direction: rtl;
}



</style>