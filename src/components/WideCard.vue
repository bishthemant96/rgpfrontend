<template>
    <v-card class="pa-4" @click="onClick(data['project-number'])">
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
                    {{ data["project-description"].substring(0,400) + "..." }} 
                </v-card-text>
                
                <v-card-actions> 
                    <v-btn text>Read more</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>



<style scoped>
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