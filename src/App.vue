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

  .section-header {
    margin-bottom: 2%;

    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;

    background-color: var(--bg-section-header) !important;
    color: var(--text-section-header) !important;
  }

  .section-body{
    margin: 2% 0%;
    padding: 1% 0% 1% 0%;

    background-color: var(--bg-section);
    color: var(--text-section);
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