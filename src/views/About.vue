<template>
    <div id="about">
        <div class="introduction">
            <div class="about-introduction">
                Hi, I am a young architect with a passion for experential architecture having a strong belief that we have a magnificient past with strong roots, new links has to be formed to take it forward with modern interpretations, considering present requirements.
                I graduated from MBS School of Planning and Architecture with Bachelors of Architecture in 2020 with a specialisation in building biology. 
            </div>
            <img class="about-photo" src="../assets/about-photo.jpg">
        </div>  
        
        <CardCarousel/>
    </div>
</template>

<style>
    #about{
        margin: 0% 8%;
    }

    .introduction {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 80vh;
    }

    .about-introduction {
        width: 50%;
        
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        text-align: justify;
        text-justify: inter-word;
    }

    .about-photo {
        height: 480px;
        width: 480px;
        border-radius: 50% 0% 50% 50%;
    }
</style>

<script>
    import CardCarousel from "@/components/CardCarousel.vue"

    export default {
        name: 'About',
        
        components: {
            CardCarousel
        }
    }
</script>

