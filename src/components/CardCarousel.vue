<template>
    <div>
        <v-sheet class="mx-auto sub-heading" color="teal lighten-3">
            Other things I do
        </v-sheet>

        <v-sheet class="mx-auto" flat>
            <v-slide-group v-model="model" class="pa-0" show-arrows>
                <v-slide-item v-for="n in 5" :key="n" v-slot:default="{toggle}">
                    <v-card class="ma-4 round-card" height="250" @click="toggle" flat>
                        <v-img class="round-image" height="200px" width="200px" :src="getImagePath(n)"/>
                        <v-card-subtitle class="round-image-caption"> Good Hobby </v-card-subtitle>
                    </v-card>
                </v-slide-item>
            </v-slide-group>

            <v-expand-transition>
                <v-sheet v-if="model != null" color="grey lighten-4" height="200" tile>
                    <v-row class="fill-height" align="center" justify="center">
                        <h3 class="title">Selected {{ model }}</h3>
                    </v-row>
                </v-sheet>
            </v-expand-transition>
        </v-sheet>
    </div>
</template>



<style scoped>
    .round-image{
        border-radius: 50% !important;
    }

    .round-image-caption{
        text-align: center;
    }

    .sub-heading{
        text-align: center;
        font-weight: 400;
        font-size: 18px;
        margin: 10% 0% 1% 0%;
    }
</style>


<script>
export default {
    name: "CardCarousel",

    data(){
        return {
            model: null
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