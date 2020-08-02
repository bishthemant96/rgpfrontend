<template>
  <v-app id="main-app"> 
    <Header/>
    
    <v-main>
      <router-view></router-view>
    </v-main>     

    <Footer/>
  </v-app>
</template>



<style>
  @import url("theme.css");

  #main-app{
    background-color: var(--bg-body);
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