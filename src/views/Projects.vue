<template>
  <div id="projects">    
    <div class="section-header"> RECENT PROJECTS </div>
    
    <ProjectPreview/>

    <div class="section-header"> OTHER PROJECTS </div>

    <div class="other-section">
      
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
</template>



<style>
.section-header {
    width: auto;
    margin: 5% 8% 2% 8%;

    text-align: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;

    color: black;

    border-bottom: 1px solid black;
}

.other-section{
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0% 8%;
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

