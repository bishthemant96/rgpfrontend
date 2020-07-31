<template>
    <v-dialog max-width="80%" @click:outside="closeModal" v-model="isVisible">
        <Carousel/>
    </v-dialog>
</template>



<style scoped>

</style>



<script>
import Carousel from "@/components/Carousel.vue";

export default {
    name: "Modal",

    components: {
        Carousel
    },

    props: {
        visible: Boolean
    },

    data: function(){
        return {
            isVisible: false,
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
        }
    }
}
</script>