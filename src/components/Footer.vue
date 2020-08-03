<template>
  <v-card class="footer" flat tile>
    <v-card-title class="footer-text">
      Wanna work together? Let’s talk! 
      <v-spacer></v-spacer>
      <span class="mr-4"> guptarenuka05@gmail.com </span>
      <v-divider color="white" vertical/>
      <v-btn v-for="icon in icons" :key="icon" class="ml-4 footer-text" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="py-0 footer-text text-center">
        &#169; Renuka Gupta 2020. Best viewed on desktop.
    </v-card-text>
  </v-card>
</template>



<style>
  .footer {
    margin: 0% 8%;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--bg-footer) !important;
    font-size: 14px !important;
  }

  .footer-text{
    font-size: 14px;
    color: var(--text-footer) !important; 
  }
</style>



<script>
  export default {
    name: 'Footer',
        
    data: () => ({
      icons: [
        'mdi-linkedin',
        'mdi-instagram',
        'mdi-facebook',
      ],
    }),
  }
</script>