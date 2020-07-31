<template>
    <v-sheet class="card-carousel-container" flat>
        <v-card v-for="n in 5" :key="n" max-width="20%" class="ma-0 round-card" @click="doToggle(n)" flat>
            <v-img class="round-image" height="150px" width="150px" :src="getImagePath(n)"/>
            <v-card-subtitle class="round-image-caption"> {{hobbies[n-1]}} </v-card-subtitle>
        </v-card>

        <v-expand-transition>
            <v-sheet v-if="model != null"  class="hobby-description" width="100%" color="teal lighten-4" height="200" tile>
                <span>Calligraphy</span>
                <br>
                <v-divider/>
                {{hobby_description[model-1]}}
            </v-sheet>
        </v-expand-transition>
    </v-sheet>
</template>



<style scoped>
    .card-carousel-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        width: 80%;
        margin: auto;

        font-family: 'Montserrat', sans-serif;
    }
    
    .round-image{
        border-radius: 50% !important;
    }

    .round-image-caption{
        text-align: center;
    }

    .hobby-description{
        padding: 20px;
        text-align: justify;
        text-justify: inter-word;
    }
</style>


<script>
    export default {
        name: "CardCarousel",

        data(){
            return {
                model: null,
                hobbies: ["Craft Making", "Calligraphy", "Pottery", "Bookmark Making", "Gardening"],
                hobby_description: [
                    "I learnt calligraphy from Popo Pingel while I was interning under Mona Doctor Pingel at Studio Nakshbandi. Popo taught us calligraphy over the span of 40 weekends to teach us about the importance of hand-eye co-ordination in the field of architecture. Ever since, I attained the hobby of pursuing calligraphy as a method of relaxation for self.",
                    "I learnt calligraphy from Popo Pingel while I was interning under Mona Doctor Pingel at Studio Nakshbandi. Popo taught us calligraphy over the span of 40 weekends to teach us about the importance of hand-eye co-ordination in the field of architecture. Ever since, I attained the hobby of pursuing calligraphy as a method of relaxation for self.",
                    "I learnt calligraphy from Popo Pingel while I was interning under Mona Doctor Pingel at Studio Nakshbandi. Popo taught us calligraphy over the span of 40 weekends to teach us about the importance of hand-eye co-ordination in the field of architecture. Ever since, I attained the hobby of pursuing calligraphy as a method of relaxation for self.",
                    "I learnt calligraphy from Popo Pingel while I was interning under Mona Doctor Pingel at Studio Nakshbandi. Popo taught us calligraphy over the span of 40 weekends to teach us about the importance of hand-eye co-ordination in the field of architecture. Ever since, I attained the hobby of pursuing calligraphy as a method of relaxation for self.",
                    "I learnt calligraphy from Popo Pingel while I was interning under Mona Doctor Pingel at Studio Nakshbandi. Popo taught us calligraphy over the span of 40 weekends to teach us about the importance of hand-eye co-ordination in the field of architecture. Ever since, I attained the hobby of pursuing calligraphy as a method of relaxation for self."
                ]
            }
        },
        
        methods: {
            doToggle: function(num){
                console.log('run');
                this.model= this.model===null? num: null;
            },

            getImagePath: function(num){
                return require("../assets/hobby-"+num+".jpg");
            }
        }
    }
</script>