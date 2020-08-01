<template>
    <v-dialog max-width="80%" @click:outside="closeModal" v-model="isVisible">
        <v-card elevation="24" max-width="100%" class="mx-auto" height="100%">
            <v-carousel interval="3000" :cycle="cycle" hide-delimiter-background delimiter-icon="mdi-minus">
                <v-carousel-item v-for="i in slides" :key="i">
                    <v-img max-width="100%" max-height="100%" :src="require('../assets/project-'+ data['project-number'] + '-' +Number(i)+'.jpg')" />
                </v-carousel-item>
            </v-carousel>

            <v-list>
            <v-list-item>
                <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                <v-list-item-title>Renuka Gupta</v-list-item-title>
                <v-list-item-subtitle>Author</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                <v-switch v-model="cycle" label="Slideshow" inset></v-switch>
                </v-list-item-action>
            </v-list-item>
            </v-list>

            <v-card>
            <v-card-title>
                {{ data["project-name"] }}
            </v-card-title>

            <v-card-subtitle>
                Status: {{ data["status"] }}
            </v-card-subtitle>

            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br> <br>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </v-card-text>
            </v-card>
        </v-card>
    </v-dialog>
</template>



<style scoped>

</style>



<script>
export default {
    name: "Modal",

    props: {
        visible: Boolean,
        data: Object
    },

    data: function(){
        return {
            isVisible: false,
            cycle: false, 
            slides: 6
        }
    },

    methods: {
        closeModal: function(){
            this.isVisible = false;
            this.$emit("closeModal");
        }
    },

    watch: {
        visible: function(newValue, oldValue){
            console.log(oldValue);
            this.isVisible = newValue;
        },

        data: function(){
            if(this.data["project-number"]>2)
                this.slides = 2;
        }
    }
}
</script>