<template>
    <div id="about">
        <div class="introduction">
            <div class="about-introduction">
                Hi, I am Renuka! 
                <br> <br>
                I am a young architect with a passion for experential architecture having a strong belief that we have a magnificient past with strong roots, new links has to be formed to take it forward with modern interpretations, considering present requirements. 
                <br> <br>
                I graduated from MBS School of Planning and Architecture with Bachelors of Architecture in 2020 with a specialisation in building biology. 
            </div>
            <img class="about-photo" src="../assets/about-photo.jpg">
        </div>

        <div class="about-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla at. Sed blandit libero volutpat sed cras ornare. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Rutrum quisque non tellus orci. Aliquet lectus proin nibh nisl condimentum. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Lacinia quis vel eros donec ac odio. 
            <br> <br>
            Mattis enim ut tellus elementum sagittis vitae et leo duis. Viverra justo nec ultrices dui sapien eget mi. Malesuada fames ac turpis egestas maecenas pharetra convallis. Sodales neque sodales ut etiam sit amet nisl. Sapien pellentesque habitant morbi tristique senectus et netus. Velit laoreet id donec ultrices. Volutpat sed cras ornare arcu dui vivamus. Amet cursus sit amet dictum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.
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
        width: 80%;
        margin: auto;
    }

    .about-introduction {
        width: 50%;
        
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        text-align: justify;
        text-justify: inter-word;
    }

    .about-photo {
        height: 380px;
        width: 380px;
        border-radius: 50% 0% 50% 50%;
    }

    .about-detail{
        width: 80%;

        margin: auto;

        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        text-align: justify;
        text-justify: inter-word;
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

