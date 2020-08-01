<template>
  <v-app> 
    <Header/>
    
    <v-main>
      <router-view></router-view>
    </v-main>     

    <Footer/>
  </v-app>
</template>



<style>
  @import url("theme.css");

  .section-style {
    background-color: var(--bg-section) !important;
    color: var(--text-section) !important;
  }
</style>



<script>
  export default {
    name: 'App',
      components: {
        Header: () => import('@/components/Header.vue'),
        Footer: () => import('@/components/Footer.vue'),
      }
  };
</script>