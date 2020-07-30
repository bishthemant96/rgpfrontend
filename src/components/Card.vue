<template>
    <v-card tile>
        <v-img height="180px" :src="getImagePath()"/>
        <v-card-title>Care Taker Unit</v-card-title>
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
        },

        methods: {
            getImagePath: function(){
                return require('../assets/project-' + this.sequence + '.jpg');
            },
        }
    }
</script>