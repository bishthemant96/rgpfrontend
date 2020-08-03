<template>
    <v-container class="flex">
        <v-row no-gutters>
            <v-col class="project-photo" cols="8">
                <v-img :id="'project-photo-'+data['project-number']" @click="onClick(data['project-number'])" :src="require('../assets/project-' + data['project-number'] + '-1.jpg')"/>
            </v-col>

            <v-col class="project-detail" cols="4">
                <v-card :id="'project-detail-'+data['project-number']" class="pa-4" tile>
                    <v-card-title> 
                        {{ data["project-name"] }} 
                    </v-card-title>

                    <v-card-subtitle> 
                        Status: {{ data["status"] }}  
                    </v-card-subtitle>
                    
                    <v-card-text> 
                        {{ data["project-description"].substring(0,350) + "..." }} 
                    </v-card-text>
                    
                    <v-card-actions> 
                        <v-btn @click="onClick(data['project-number'])" text>Read more</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<style scoped>
    .project-detail {
        align-self: center;
        height: 80%;
        margin-left: -2%;
        z-index: 1;
        color: var(--text-card); 
        background-color: var(--bg-card) !important;
    }

    .project-photo {
        cursor: pointer;
    }
</style>



<script>
    export default {
        name: "WideCard",

        props:{
            data: Object,
            onClick: Function,
        },
        
        mounted: function(){
            let image = document.getElementById("project-photo-"+this.data['project-number']);
            let detail = document.getElementById("project-detail-"+this.data['project-number']);

            image.onmouseover = function(){
                detail.style.transition = "ease 0.5s"; 
                detail.style.marginLeft = "-5%";
            }

            image.onmouseout = function(){
                detail.style.marginLeft = "0%";
            }
        }
    }
</script>