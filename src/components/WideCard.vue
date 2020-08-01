<template>
    <v-card @click="emitClick()">
        <v-container>
            <v-row no-gutters>
                <v-col cols="8">
                    <v-img height="350px" :src="getImagePath()"/>
                </v-col>

                <v-col cols="4">
                    <v-card-title> {{ data["project-name"] }} </v-card-title>
                    <v-card-subtitle> Status: {{ data["status"] }}  </v-card-subtitle>
                    <v-card-text> {{ data["project-description"].substring(0,400) + "..." }} </v-card-text>
                    <v-card-actions> 
                        <v-btn text>Read more</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-container>
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
        },

        methods: {
            getImagePath: function(){
                return require('../assets/project-' + this.data["project-number"] + '-1.jpg');
            },

            emitClick: function(){
                this.onClick(this.data["project-number"]);
            }
        }
    }
</script>