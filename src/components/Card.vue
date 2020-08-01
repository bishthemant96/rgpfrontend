<template>
    <v-card @click="onClick(data['project-number'])">
        <v-img height="175px" :src="getImagePath()"/>
        <v-card-title> {{ data["project-name"].split(',')[0] }} </v-card-title>
        <v-card-subtitle> {{ data["project-name"].split(',')[1] }} </v-card-subtitle>
    </v-card>
</template>



<script>
    export default {
        name: "Card",

        props:{
            onClick: Function,
            data: Object,
        },

        methods: {
            getImagePath: function(){
                return require('../assets/project-' + this.data["project-number"] + '-1.jpg');
            },
        }
    }
</script>