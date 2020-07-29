<template>
  <div id="home">
    <div id="banner">
      Hi, I am a young architect with a passion for experential architecture having a strong belief that we have a magnificient past with strong roots, new links has to be formed to take it forward with modern interpretations, considering present requirements. 
    </div>
    <Blogpost sequence="1"/>
    <Blogpost sequence="2"/>
  </div>
</template>

<style>
  #home {
        margin: 0% 8%;
  }

  #banner {
      display: flex;
      justify-content: left;
      align-items: center;

      height: 85vh;
      padding-right: 40%;

      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      font-size: 24px;
      
      background-image: url(../assets/calli.jpg);
      background-repeat: no-repeat;
      background-size: cover;
  }
</style>

<script>
  import Blogpost from "@/components/Blogpost.vue";

  export default {
      name: 'Home',
      components: {
        Blogpost
      }
  }
</script>

