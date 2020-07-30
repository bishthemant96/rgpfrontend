<template>
    <div class="head-container">
        <div class="title-container" id="title-container">
            <router-link id="title" to="/"> Renuka Gupta </router-link>
        </div>
        <div class="nav-container" id="nav-container">
            <router-link class="nav-item" to="/"> About </router-link>
            <router-link class="nav-item" to="/Projects"> Projects </router-link>
            <router-link class="nav-item" to="/Research"> Research </router-link>
        </div>
    </div>
</template>



<style>
    .head-container {
        display: flex;
        justify-content: space-between;

        padding: 3% 0%;
        margin: 0% 8%;
    }

    .title-container {
        display: flex;
        align-items: center;
    }

    #title {
        padding-top: 5px;

        color: black !important;
        font-size: 50px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        text-decoration: none;
    }

    .nav-container {
        display: flex !important;
        justify-content: space-between;
        align-items: center;

        width: 25% !important;
    }

    .nav-item {
        color: black !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 300;
        text-decoration: none;
    }
</style>



<script>
    export default {
        name: 'Header'
    }
</script>