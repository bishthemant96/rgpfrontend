<template>
    <div class="head-container">
        <div class="title-container" id="title-container">
            <img id="logo" src="../assets/stamp.jpg"/>
            <router-link id="title" to="/"> रेनुका गुप्ता </router-link>
        </div>
        <div class="nav-container" id="nav-container">
            <router-link class="nav-item" to="/"> Home </router-link>
            <router-link class="nav-item" to="/About"> About </router-link>
            <router-link class="nav-item" to="/Projects"> Projects </router-link>
            <router-link class="nav-item" to="/Research"> Research </router-link>
        </div>
    </div>
</template>



<style>
    .head-container {
        display: flex;
        justify-content: space-between;

        margin: 1% 8%;
    }

    .title-container {
        display: flex;
        align-items: center;
    }

    #logo{
        height: 75px;
        width: 75px;
        border-radius: 50%;
        margin-right: 10px;
    }

    #title {
        padding-top: 5px;
        padding-left: 10px;
        border-left: 1px solid black;

        color: black !important;
        font-size: 40px;
        font-family: 'Kalam', sans-serif;
        font-weight: 300;
        text-decoration: none;
    }

    .nav-container {
        display: flex !important;
        justify-content: space-between;
        align-items: center;

        width: 30% !important;
    }

    .nav-item {
        color: black !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 400;
        text-decoration: none;
    }
</style>



<script>
    export default {
        name: 'Header'
    }
</script>