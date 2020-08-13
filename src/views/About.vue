<template>
    <div id="about">
        <div class="introduction">
            <div id="tagline"> 
                <span id="tagline-split-1">Just a girl </span> with happiness living in places.
            </div>
            <div id="down-arrow">
                <v-icon @click="$vuetify.goTo('#about-detail', options)" x-large> mdi-chevron-down </v-icon>
            </div>       
        </div>
        
        <v-container class="px-0 py-10 about-detail" id="about-detail" fluid>
            <v-row class="detail-row px-0 " justify="center" no-gutters> 
                <v-col align-self="center" cols="4" offset="2">
                    <v-card class= "detail-card" id="card-1" flat>
                        <v-card-title> 
                            HERE'S WHERE I STARTED MY JOUNRNEY BACK THEN
                        </v-card-title>
                        <v-card-text>
                            I graduated from MBS School of Planning and Architecture with Bachelors of Architecture in 2020 with a specialisation in building biology, also I would like to say the bla bla is bla bl abassa aldjskjd adjklsa ld klajds .  
                            <br> <br>
                            I am a young architect with a passion for experential architecture having a strong belief that we have a magnificient past with strong roots, new links has to be formed to take. 
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col class="photo-column" cols="5">
                    <v-img class="about-images" max-width="320px" max-height="430px" src="../assets/about-photo-3.jpg"/>
                </v-col>

                <v-col cols="1">
                </v-col>
            </v-row>

            <v-row class="detail-row px-0 " justify="start" no-gutters> 
                <v-col class="photo-column" cols="5">
                    <v-img class="about-images" max-width="600px" max-height="400px" src="../assets/about-photo-4.jpg"/>
                </v-col>
                
                <v-col align-self="center" cols="4" offset="1" >
                    <v-card class= "detail-card" id="card-2" flat>
                        <v-card-title> 
                            AND IT TOOK ME TO AUROVILLE
                        </v-card-title>
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla at. Sed blandit libero volutpat sed cras ornare. Elementum curabitur vitae nunc.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

           <v-row class="detail-row px-0 " justify="center" no-gutters> 
                <v-col align-self="center" cols="4" offset="2">
                    <v-card class= "detail-card" id="card-3" flat>
                        <v-card-title> 
                            HERE'S WHERE I STARTED MY JOUNRNEY BACK THEN
                        </v-card-title>
                        <v-card-text>
                            I graduated from MBS School of Planning and Architecture with Bachelors of Architecture in 2020 with a specialisation in building biology, also I would like to say the bla bla is bla bl abassa aldjskjd adjklsa ld klajds .  
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col class="photo-column" cols="6">
                    <v-img class="about-images" max-width="430px" max-height="320px" src="../assets/about-photo-9.jpg"/>
                </v-col>
            </v-row>
        </v-container>  
              
              
        <v-card id="some-things" class="section-header" :light='false' @click="$vuetify.goTo('#some-things', options)" flat tile> 
            HERE ARE SOME THINGS THAT I LOVE TO DO
        </v-card>

        <CardRow :data="hobbies"/>
    </div>
</template>

<style>
    #about{
        background-color: var(--bg-main);

        color: var(--text-main);
        font-family: 'Montserrat', sans-serif;
    }

    .introduction {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: center;


        height: 83vh;
        margin: 0% 8%;

        background-image: url("../assets/about-photo-6.jpg");
        background-size: cover;
        background-position: top ;

        color: white;
        font-size: 30px;
        font-weight: 300;
        
    }

    #tagline {
        width: 50%;
        margin-right: 50% ;
        padding-left: 10%;
    }

    .about-detail{
        display: flex;
        flex-wrap: wrap;

        margin: 0% 5%;

        font-size: 18px;
    }

    .detail-row{
        margin-bottom: -1%;
    }

    .photo-column {
        display: flex;
        justify-content: center;
    }

    .detail-card{
        text-align: justify;
        text-justify: inter-word;

        transition: ease 0.5s;
    }

    #some-things{
        margin: 2% auto;
        width: 62%;
    }

    @media screen and (max-width: 750px ) {
        .introduction {
            height: 90vh;
            background-size: cover;
            background-position: right ;
            color: white;
        }

        #tagline-split-1{
            color: black;
        }
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
            //Add transitions
            let images = document.getElementsByClassName("about-images");
            images.forEach((element, index) => {
                if(index%2 == 0){
                    element.onmouseover = function(){
                        document.getElementById("card-"+(index+1)).style.marginLeft = "5%";
                        document.getElementById("card-"+(index+1)).style.marginRight = "-5%";
                    }

                    element.onmouseout = function(){
                        document.getElementById("card-"+(index+1)).style.marginLeft = "0%";
                        document.getElementById("card-"+(index+1)).style.marginRight = "0%";
                    }
                } else {
                        element.onmouseover = function(){
                        document.getElementById("card-"+(index+1)).style.marginLeft = "-5%";
                        document.getElementById("card-"+(index+1)).style.marginRight = "5%";
                    }

                    element.onmouseout = function(){
                        document.getElementById("card-"+(index+1)).style.marginLeft = "0%";
                        document.getElementById("card-"+(index+1)).style.marginRight = "0%";
                    }
                }

            });
        },
    }
</script>

