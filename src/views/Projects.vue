<template>
  <div id="projects">    
    <v-card class="section-header" flat outlined tile> RECENT PROJECTS </v-card>
    
    <v-container class="pa-0">
      <v-row class="mb-6" no-gutters> 
        <v-col cols="12">
          <WideCard/> 
        </v-col>
      </v-row>

      <v-row no-gutters> 
        <v-col cols="12">
          <WideCard/> 
        </v-col>
      </v-row>
    </v-container>


    <v-card id="other-projects" class="section-header" flat outlined tile> OTHER PROJECTS </v-card>

    <v-container class="pa-0">
      <v-row class="mb-6" align="center" justify="space-between" no-gutters>
        <v-col cols="12" md="3">
          <Card/>
        </v-col>

        <v-col cols="12" md="3">
          <Card/>
        </v-col>
        
        <v-col cols="12" md="3">
          <Card/>
        </v-col>
      </v-row>

      <v-row align="center" justify="space-between" no-gutters>
        <v-col cols="12" md="3">
          <Card/>
        </v-col>

        <v-col cols="12" md="3">
          <Card/>
        </v-col>
        
        <v-col cols="12" md="3">
          <Card/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<style>
  #projects{
    margin: 0% 8%;
  }

  #other-projects{
    margin-top: 5%;
  }

  .section-header {
    margin-bottom: 2%;

    text-align: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;
  }
</style>



<script>
  import Card from "@/components/Card.vue";
  import WideCard from "@/components/WideCard.vue";

  export default {
      name: 'Projects',
      components: {
        Card,
        WideCard
      }
    }
</script>

