<template>
    <div id="about">
        <div class="introduction">
            <div id="tagline"> 
                JUST A GIRL WITH HAPPINESS LIVING IN PLACES. 
            </div>
            <div id="down-arrow">
                <v-icon @click="$vuetify.goTo('#center-image', options)" x-large> mdi-chevron-down </v-icon>
            </div>       
        </div>

        <v-img id="center-image" class="center-image" height="400px" max-width="750px" src="../assets/about-photo-6.jpg"/>
        
        <div class="about-detail">
            <div class="column-one"> 
                <v-card id="card-one" flat>
                    <v-card-title> 
                        HERE'S WHERE I STARTED MY JOUNRNEY BACK THEN
                    </v-card-title>
                    <v-card-text>
                        I graduated from MBS School of Planning and Architecture with Bachelors of Architecture in 2020 with a specialisation in building biology, also I would like to say the bla bla is bla bl abassa aldjskjd adjklsa ld klajds .  
                        <br> <br>
                        I am a young architect with a passion for experential architecture having a strong belief that we have a magnificient past with strong roots, new links has to be formed to take. 
                    </v-card-text>
                </v-card>

                <v-img id="image-two" max-width="500px" max-height="333px" src="../assets/about-photo-4.jpg"/>
            </div>
            <div class="column-two"> 
                <v-img id="image-one" max-width="320px" max-height="430px" src="../assets/about-photo-3.jpg"/>

                <v-card id="card-two" flat>
                    <v-card-title> 
                        AND IT TOOK ME TO AUROVILLE
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla at. Sed blandit libero volutpat sed cras ornare. Elementum curabitur vitae nunc.
                    </v-card-text>
                </v-card>
            </div>
        </div>  
              
              
        <v-card id="some-things" class="section-header" :light='false' @click="$vuetify.goTo('#some-things', options)" flat tile> 
            HERE ARE SOME THINGS THAT I LOVE TO DO
        </v-card>

        <CardRow :data="hobbies"/>

         <div class="about-endnote">
            Mattis enim ut tellus elementum sagittis vitae et leo duis. Viverra justo nec ultrices dui sapien eget mi. Malesuada fames ac turpis egestas maecenas pharetra convallis. Sodales neque sodales ut etiam sit amet nisl. Sapien pellentesque habitant morbi tristique senectus et netus. Velit laoreet id donec ultrices. Volutpat sed cras ornare arcu dui vivamus. Amet cursus sit amet dictum.
        </div>  
    </div>
</template>

<style>
    #about{
        background-color: var(--bg-main);

        color: var(--text-main);
        font-family: 'Montserrat', sans-serif;

        transition: ease-in 0.5s;

    }

    .introduction {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: center;


        height: 80vh;
        margin: 0% 8%;

        background-image: url("../assets/about-photo-5.jpg");
        background-size: cover;
        background-position: top ;

        font-size: 34px;
        font-weight: 300;
    }

    #tagline {
        width: 40%;
        margin-right: 60% ;
        padding-left: 10%;
    }

    .center-image{
        margin: 8% auto;
        opacity: 0;
        transition: 0.3s all ease-out;
        transform: scale(0.8);
    }

    .about-detail{
        display: flex;
        flex-wrap: wrap;

        margin: 0% 5%;

        font-size: 18px;
    }

    .column-one{
        width: 50%;
        display: flex;
        flex-direction: column;

        overflow: visible;
    }

    .column-two {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        overflow: visible;
    }

    #image-one {
        margin-right: 12%;
    }
    #card-one{
        margin-left: 35%;
        margin-bottom: 10%;

        margin-right: -10%;

        text-align: justify;
        text-justify: inter-word;

        transition: ease 0.5s;
    }

    #card-two {
        align-self: flex-start;
        text-align: right;
        margin-right: 35%;
        margin-top: 10%;

        text-align: justify;
        text-justify: inter-word;

        transition: ease 0.5s;
    }

    #some-things{
        margin: 8% auto 2% auto;
        width: 62%;
    }

    .about-endnote{
        margin: 6% auto;
        width: 62%;
        text-align: justify;
        text-justify: inter-word;
    }
</style>

<script>
    import CardRow from "@/components/CardRow.vue"

    export default {
        name: 'About',

        data: function(){
            return {
                isModalOpen: false,
                sequence: 0,
                hobbies: [],
                options: {
                    duration: 1000, 
                    offset: 0,
                    easing: 'linear',
                }
            }
        },
        
        components: {
            CardRow
        },

        beforeMount: function(){
            // load hobbies data
            let dataFile = require("../data/hobbies.json");
            this.hobbies = dataFile["data"]

        },

        mounted: function(){
            window.scroll(function(){
                console.log("hello");
            });

            //Add transitions
            let imageOne = document.getElementById("image-one");
            let imageTwo = document.getElementById("image-two");

            imageOne.onmouseover = function(){
                document.getElementById("card-one").style.marginRight = "-15%";
                document.getElementById("card-one").style.marginLeft = "40%";
            }

            imageOne.onmouseout = function(){
                document.getElementById("card-one").style.marginRight = "-10%";
                document.getElementById("card-one").style.marginLeft = "35%";
            }

            imageTwo.onmouseover = function(){
                document.getElementById("card-two").style.marginLeft = "-5%";
                document.getElementById("card-two").style.marginRight = "40%";
            }

            imageTwo.onmouseout = function(){
                document.getElementById("card-two").style.marginLeft = "0%";
                document.getElementById("card-two").style.marginRight = "35%";
            }

            let image = document.getElementById("center-image");
            window.onscroll = function(){
                var rect = image.getBoundingClientRect()
                var elemTop = rect.top + 200 ;// 200 = buffer
                var elemBottom = rect.bottom;

                if(elemTop < window.innerHeight && elemBottom >= 0){
                    image.style.opacity = '1'
                    image.style.transform = 'scale(1)'
                }
            }

        },
    }
</script>

