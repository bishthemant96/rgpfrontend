<template>
  <div id="projects">    
    <v-card id="recent-projects" class="section-header" :light='false' @click="$vuetify.goTo('#recent-projects', options)" flat tile outlined> RECENT PROJECTS </v-card>
    
    <v-container class="pa-0" fluid>
      <v-row v-for="num in 2" :key="num" class="mb-6" no-gutters> 
        <v-col cols="12">
          <WideCard :onClick="onCardClick" :data="projects[num-1]"/> 
        </v-col>
      </v-row>
    </v-container>

    <Modal :data="projects[sequence-1]" :visible="isModalOpen" @closeModal="closeModal()"/>

    <v-card id="other-projects" class="section-header" @click="$vuetify.goTo('#other-projects', options)" flat tile> OTHER PROJECTS </v-card>

    <v-container class="pa-0" fluid>
      <v-row v-for="i in 2" :key="i" class="mb-6" align="center" justify="space-between" no-gutters>
        <v-col v-for="j in 3" :key="j" cols="12" md="3">
          <Card :onClick="onCardClick" :data="projects[((i-1)*3)+j+1]"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<style>
  #projects{
    margin: 0% 8%;
    padding: 3% 0%;
    background-color: var(--bg-main);
  }

  #other-projects{
    margin-top: 10%;
  }

  .section-header {
    margin-bottom: 4%;

    text-align: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;

    background-color: var(--bg-sub-header) !important;
    color: var(--text-sub-header) !important;
  }
</style>



<script>
  import Card from "@/components/Card.vue";
  import WideCard from "@/components/WideCard.vue";
  import Modal from "@/components/Modal.vue";
  
  export default {
      name: 'Projects',

      components: {
        Card,
        WideCard,
        Modal
      },

      data: function(){
        return {
          isModalOpen: false,
          sequence: 0,
          projects: [],
          options: {
            duration: 500, 
            offset: 0,
            easing: 'linear',
          }
        }
      },

      beforeMount: function(){
        let dataFile = require("../data/projects.json");
        this.projects = dataFile["data"]
      },

      methods: {
        onCardClick: function(sequence){
          this.sequence = sequence;
          this.isModalOpen = true;
        },

        closeModal: function(){
          this.isModalOpen = false;
        }
      }
    }
</script>

