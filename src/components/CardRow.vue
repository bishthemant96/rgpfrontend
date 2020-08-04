<template>
    <v-sheet class="card-carousel-container inherit-background" flat>
        <v-card v-for="n in data.length" :id="'card-'+ n" :key="n" max-width="20%" class="ma-0 inherit-background" @click="doToggle(n)" flat tile>
            <v-img class="circular-border rounded-circle" height="150px" width="150px" :src="require('../assets/hobby-' + n + '.jpg')"/>
            <v-card-subtitle :class="'text-center ' + (model===n? 'sub-section': 'inherit-color') "> {{ data[n-1]["hobby"] }} </v-card-subtitle>
        </v-card>

        <v-sheet v-if="model != null"  class="hobby-description sub-section" width="100%" tile>
            {{data[model-1]["hobby-description"]}}
        </v-sheet>
    </v-sheet>
</template>



<style scoped>
    .card-carousel-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        width: 62%;
        margin: auto;
        margin-top: 3%;
        margin-bottom: 3%;

        font-family: 'Montserrat', sans-serif;
    }

    .inherit-background{
        background-color: var(--bg-main);
    }

    .inherit-color{
        color: var(--text-main) !important;
    }

    .hobby-description{
        padding: 20px;
        text-align: justify;
        text-justify: inter-word;
    }

    .sub-section {
        background-color: var(--bg-sub-section) !important;
        color: var(--text-sub-section) !important;
    }

    .circular-border {
        border: 2px solid var(--bg-sub-section);
    }
</style>


<script>
    export default {
        name: "CardRow",

        props: {
            data: Array
        },

        data(){
            return {
                model: 1
            }
        },
        
        methods: {
            doToggle: function(num){
                this.model = num;
            }
        },

        mounted: function(){
            for(let i =1; i<=4; i++){
                let that = this;
                let card = document.getElementById("card-"+i);
                card.onmouseover = function(){
                    that.model = i;
                }
            }
            
        }
    }
</script>