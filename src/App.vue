<template>
  <v-app> 
    <Header/>

    <v-main>
      <router-view></router-view>
    </v-main>     

    <Footer/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
    components: {
      Header: () => import('@/components/Header.vue'),
      Footer: () => import('@/components/Footer.vue'),
    }
};
</script>

<style scoped>
</style>