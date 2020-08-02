<template>
    <v-card class="pt-6 px-3 card-style" @click="onClick(data['project-number'])" tile>
        <v-img height="220px" :src="require('../assets/project-' + data['project-number'] + '-1.jpg')"/>
        <v-card-title class="px-0 py-2 text-center"> {{ data["project-name"].split(',')[0] }} </v-card-title>
        <v-card-subtitle class="px-0"> {{ data["project-name"].split(',')[1] }} </v-card-subtitle>
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
        }
    }
</script>