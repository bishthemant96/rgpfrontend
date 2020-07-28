<template>
    <v-card tile>
        <v-container>
            <v-row no-gutters>
                <v-col cols="8">
                    <v-img height="300px" :src="require('../assets/university.jpeg')"/>
                </v-col>

                <v-col cols="4">
                    <v-card-title>Reception, Temple Tree Retreat</v-card-title>
                    <v-card-subtitle> Status: under-construction </v-card-subtitle>
                    <v-card-text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </v-card-text>
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
        name: "WideCard"
    }
</script>