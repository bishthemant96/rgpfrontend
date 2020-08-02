<template>
    <v-card class="pa-4 card-style" @click="onClick(data['project-number'])" tile>
        <v-row no-gutters>
            <v-col cols="8">
                <v-img height="350px" :src="require('../assets/project-' + data['project-number'] + '-1.jpg')"/>
            </v-col>

            <v-col cols="4">
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
                    <v-btn text>Read more</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
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
        name: "WideCard",

        props:{
            data: Object,
            onClick: Function,
        }
    }
</script>