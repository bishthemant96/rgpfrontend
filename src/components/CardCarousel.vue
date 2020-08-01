<template>
    <v-sheet class="card-carousel-container" flat>
        <v-card v-for="n in data.length" :key="n" max-width="20%" class="ma-0 round-card" @click="doToggle(n)" flat tile>
            <v-img class="round-image" height="150px" width="150px" :src="getImagePath(n)"/>
            <v-card-subtitle :class="'round-image-caption ' + (model===n? 'teal lighten-4': '') "> {{ data[n-1]["hobby"] }} </v-card-subtitle>
        </v-card>

        <v-expand-transition>
            <v-sheet v-if="model != null"  class="hobby-description" width="100%" color="teal lighten-4" tile>
                {{data[model-1]["hobby-description"]}}
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
        margin-top: 3%;
        margin-bottom: 3%;

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

        props: {
            data: Array
        },

        data(){
            return {
                model: null
            }
        },
        
        methods: {
            doToggle: function(num){
                this.model = this.model === num? null : num;
            },

            getImagePath: function(num){
                return require("../assets/hobby-"+num+".jpg");
            }
        }
    }
</script>