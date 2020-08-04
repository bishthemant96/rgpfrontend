<template>
  <div id="projects">
    <section class="section-body">    
      <v-card id="recent-projects" class="section-header" :light='false' @click="$vuetify.goTo('#recent-projects', options)" flat tile> 
        RECENT PROJECTS 
      </v-card>

      <v-container class="pa-0" fluid>
        <v-row v-for="num in 2" :key="num" class="mb-6" no-gutters> 
          <v-col cols="12">
            <WideCard :onClick="onCardClick" :data="projects[num-1]"/> 
          </v-col>
        </v-row>
      </v-container>
    </section>

    <Modal :data="projects[sequence-1]" :visible="isModalOpen" @closeModal="closeModal()"/>

    <section class="section-body">
      <v-card id="other-projects" class="section-header" @click="$vuetify.goTo('#other-projects', options)" flat tile> 
        OTHER WORKS
      </v-card>

      <v-container class="pa-0" fluid>
        <v-row v-for="i in 2" :key="i" class="mb-6" align="center" justify="space-between">
          <v-col v-for="j in 3" :key="j" cols="12" md="4">
            <Card :onClick="onCardClick" :data="projects[((i-1)*3)+j+1]"/>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>



<style>
  #projects{
    margin: 0% 8%;
    padding: 2% 0%;
    background-color: var(--bg-main);
  }

  @media screen and (max-width: 750px ) {

  }
</style>



<script>
  import Card from "@/components/Card.vue";
  import WideCard from "@/components/WideCard.vue";
  import Modal from "@/components/Modal.vue";
  
  export default {
      name: 'Portfolio',

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

      created: function(){
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

