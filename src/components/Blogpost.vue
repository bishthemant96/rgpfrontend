<template>
<div>
    <div v-if="isDefaultLayout" class="blogpost">
        <div class="blogpost-content">
            <div class="blogpost-description" :style="{ textAlign: 'right' }">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>

        <div class="line-separtaion"></div>

        <div class="blogpost-photo" :style="{ backgroundImage: `url(${getImagePath()})` }">
            <div class="blogpost-photo-overlay">
                <span class="blogpost-photo-caption"> A cross ventilation implementation. </span>
            </div>
        </div>
    </div>
    <div v-else class="blogpost">
        <div class="blogpost-photo" :style="{ backgroundImage: `url(${getImagePath()})` }"> 
            <div class="blogpost-photo-overlay">
                <span class="blogpost-photo-caption"> Use of handmade designs. </span>
            </div>
        </div>

        <div class="line-separtaion"></div>

        <div class="blogpost-content">
            <div class="blogpost-description">In the last several years, there’s been a significant shift of focus in building design that has emphasized human wellness and betterment. Those core concepts are the foundation of experiential design, a new and exciting movement that reimagines what good design looks like.</div>
        </div>
    </div>
</div>
</template>

<style>
.blogpost {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    width: auto;
    height: 40vh;
    
    margin: 5% 8%;
/* 
    border: 1px solid black; */
}

.blogpost-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    height: 100%;
    width:45%;

    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
}

.blogpost-description {
    width: 100%;
    padding: 20px 0px;
}

.line-separtaion{
    display: block;
    height: 100%;
    width: 2px;
    background-color: lightcoral;
}

.blogpost-photo {
    display: block;
    
    height: 100%;
    width: 45%;

    transition: .5s ease;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.blogpost-photo-overlay {
    opacity: 0;
    transition: .5s ease;

    display: flex;
    align-items: flex-end;

    height: 100%;
    width: 100%;
    
    background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0.5));

    color: white;
}

.blogpost-photo-overlay:hover {
    opacity: 1;
}

.blogpost-photo-caption {
    padding: 1%;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
}
/* Responsive Code */
@media only screen and (max-width: 600px) {
    .blogpost-content {
        width: 100vw;
        height: 50%;
        order: 1;
    }

    .blogpost-photo {
        width: 100%;
        height: 50%;
        order: 2;
    }
}
</style>

<script>
export default {
    name: 'Blogpost',

    data(){
      return {
        isDefaultLayout: true,
      }
    },

    props: {
      sequence: String,
    },

    beforeMount() {
      if(this.sequence % 2 == 0 ){
        this.isDefaultLayout = true;
      } else {
        this.isDefaultLayout = false;
      }
    },

    methods: {
      getImagePath: function(){
        return require('../assets/blogpost-photo-'+this.sequence+'.jpg');
      }
    }
  }
</script>