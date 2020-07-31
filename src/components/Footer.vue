<template>
  <v-footer class="footer" dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="black footer-note">
        
        &#169; Renuka Gupta 2020. All Rights Reserved.

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-0 white--text text-center">
        Best viewed on desktop.
      </v-card-text>
    </v-card>
  </v-footer>
</template>



<style>
    .footer {
        margin: 2% 8% 0% 8%;
        font-family: 'Montserrat', sans-serif;
    }

    .footer-note{
        font-size: 14px;
    }
</style>



<script>
    export default {
        name: 'Footer',
            
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }),
    }
</script>