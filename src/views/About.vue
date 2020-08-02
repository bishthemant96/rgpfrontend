<template>
    <div id="about">
        <div class="introduction">
            JUST A GIRL WITH HAPPINESS LIVING IN PLACES.       
        </div>

        <v-img class="center-image" height="400px" max-width="750px" src="../assets/about-photo-6.jpg"/>
        
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

                <v-img max-width="500px" height="350px" src="../assets/about-photo-4.jpg"/>
            </div>
            <div class="column-two"> 
                <v-img class="mr-15" max-width="320px" max-height="450px" src="../assets/about-photo-3.jpg"/>

                <v-card id="card-two" flat>
                    <v-card-title> 
                        AND MY JOURNEY TOOK ME TO AUROVILLE
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla at. Sed blandit libero volutpat sed cras ornare. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Rutrum quisque non.
                    </v-card-text>
                </v-card>
            </div>
        </div>  
              
              
        <v-card id="some-things" class="section-header" :light='false' @click="$vuetify.goTo('#some-things', options)" flat tile> 
            HERE ARE SOME THINGS THAT I LOVE TO DO:
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

    }

    .introduction {
        display: flex;
        align-items: center;

        height: 80vh;
        padding: 0% 35% 0% 10%;
        margin: 0% 8%;

        background-image: url("../assets/about-photo-5.jpg");
        background-size: cover;
        background-position: center ;

        font-size: 34px;
        font-weight: 300;
    }

    .center-image{
        margin: 8% auto;
        
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
    }

    .column-two {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    #card-one{
        margin-left: 28%;
        margin-bottom: 10%;

        text-align: justify;
        text-justify: inter-word;
    }

    #card-two {
        align-self: flex-start;
        text-align: right;
        margin-right: 29%;
        margin-top: 10%;

        text-align: justify;
        text-justify: inter-word;
    }

    #some-things{
        margin: 5% auto;
        width: 62%;
    }

    .about-endnote{
        margin: 3% auto;
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
            }
        },
        
        components: {
            CardRow
        },

        beforeMount: function(){
            let dataFile = require("../data/hobbies.json");
            this.hobbies = dataFile["data"]
      },
    }
</script>

