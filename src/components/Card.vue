<template>
    <v-card :elevation="elevation" :id="'project-card-'+data['project-number']" class="pa-3 card-style" @click="onClick(data['project-number'])" tile>
        <v-img height="220px" :src="require( '../assets/project-' + data['project-number'] + '-1.jpg')"/>
        <v-card-title class="px-2 py-2 text-center"> {{ data["project-name"].split(',')[0] }} </v-card-title>
        <v-card-subtitle class="px-2 py-2"> {{ data["project-name"].split(',')[1] }} </v-card-subtitle>
    </v-card>
</template>



<style scoped>
    .card-style{
        background-color: var('--bg-card');
        color: var('--text-card');   
    }
</style>



<script>
    export default {
        name: "Card",

        props:{
            onClick: Function,
            data: Object,
        },

        data(){
            return {
                elevation: 2
            }
        },

        mounted: function(){
            let card = document.getElementById("project-card-"+this.data['project-number']);
            var that = this;

            card.onmouseover = function(){
                that.elevation = 3;

                  for(let i=3; i<=8; i++){
                    if(i!=that.data['project-number']){
                        document.getElementById("project-card-" + i).style.transition = "ease 0.3s";
                        document.getElementById("project-card-" + i).style.opacity = "0.5";
                    }
                }

            }

            card.onmouseout = function(){
                that.elevation = 2;
                for(let i=3; i<=8; i++){
                    if(i!=that.data['project-number']){
                        document.getElementById("project-card-" + i).style.opacity = "1";
                    }
                }
            }
        }
    }
</script>