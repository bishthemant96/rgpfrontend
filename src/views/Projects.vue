<template>
  <div id="projects">    
    <v-card class="section-header" color="black" dark flat tile> RECENT PROJECTS </v-card>
    
    <v-container class="pa-0">
      <v-row class="mb-6" no-gutters> 
        <v-col cols="12">
          <WideCard :onClick="onCardClick" sequence="1"/> 
        </v-col>
      </v-row>

      <v-row no-gutters> 
        <v-col cols="12">
          <WideCard :onClick="onCardClick"  sequence="2"/> 
        </v-col>
      </v-row>
    </v-container>

    <Modal :visible="isModalOpen" @closeModal="closeModal()"/>

    <v-card id="other-projects" class="section-header" color="black" dark flat tile> OTHER PROJECTS </v-card>

    <v-container class="pa-0">
      <v-row class="mb-6" align="center" justify="space-between" no-gutters>
        <v-col cols="12" md="3">
          <Card :onClick="onCardClick" sequence="1"/>
        </v-col>

        <v-col cols="12" md="3">
          <Card :onClick="onCardClick" sequence="2"/>
        </v-col>
        
        <v-col cols="12" md="3">
          <Card :onClick="onCardClick" sequence="3"/>
        </v-col>
      </v-row>

      <v-row align="center" justify="space-between" no-gutters>
        <v-col cols="12" md="3">
          <Card :onClick="onCardClick" sequence="4"/>
        </v-col>

        <v-col cols="12" md="3">
          <Card :onClick="onCardClick" sequence="5"/>
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
    margin-top: 10%;
  }

  .section-header {
    margin-bottom: 4%;

    text-align: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;
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
        }
      },

      methods: {
        onCardClick: function(){
          this.isModalOpen = true;
        },

        closeModal: function(){
          this.isModalOpen = false;
        }
      }
    }
</script>

