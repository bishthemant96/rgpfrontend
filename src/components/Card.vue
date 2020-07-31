<template>
    <v-card @click="emitClick()">
        <v-img height="180px" :src="getImagePath()"/>
        <v-card-title>Care Taker Unit Extension</v-card-title>
        <v-card-subtitle> Temple Tree Retreat </v-card-subtitle>
    </v-card>
</template>



<style scoped>
</style>



<script>
    export default {
        name: "Card",

        props:{
            sequence: String,
            onClick: Function,
        },


        methods: {
            getImagePath: function(){
                return require('../assets/project-' + this.sequence + '.jpg');
            },

            emitClick: function(){
                this.onClick();
            }
        }
    }
</script>