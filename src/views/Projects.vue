<template>
  <div id="projects">    
    <v-card flat outlined tile class="section-header"> RECENT PROJECTS </v-card>
    
    <ProjectPreview/>

    <v-card flat outlined tile class="section-header"> OTHER PROJECTS </v-card>

    <v-container>
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

  .section-header {
      margin-top: 4%;
      margin-bottom: 1%;

      text-align: center;

      font-family: 'Montserrat', sans-serif;
      font-size: 24px;
      font-weight: 400;
  }
</style>



<script>
  import ProjectPreview from "@/components/ProjectPreview.vue";
  import Card from "@/components/Card.vue";

  export default {
      name: 'Projects',
      components: {
        ProjectPreview,
        Card
      }
    }
</script>

