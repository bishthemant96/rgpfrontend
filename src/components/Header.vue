<template>
    <div class="head-container">
        <div class="title-container" id="title-container">
            <router-link id="title" to="/"> Renuka Gupta </router-link>
        </div>
        <div class="nav-container" id="nav-container">
            <router-link v-if="$route.name!=='About'" class="nav-item" to="/"> ABOUT </router-link>
            <router-link v-else class="nav-item" to="/Portfolio"> PORTFOLIO </router-link>
        </div>
    </div>
</template>



<style>
    .head-container {
        display: flex;
        justify-content: space-between;

        padding: 3% 1% 1% 1%;
        margin: 0% 8%;

        background-color: var(--bg-header);
    }

    .title-container {
        display: flex;
        align-items: center;
    }

    #title {
        color: var(--text-header) !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 50px;
        font-weight: 400;
        text-decoration: none;
    }

    .nav-container {
        display: flex !important;
        justify-content: space-between;
        align-items: center;

    }

    .nav-item {
        color: var(--text-header) !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 300;
        text-decoration: none;
    }

    @media screen and (max-width: 750px ) {
        #title {
            font-size: 20px;
        }

        .nav-item {
            font-size: 10px;
        }

        .head-container {
            padding: 3% 0% 1% 0%;
        }
    }
</style>



<script>
    export default {
        name: 'Header'
    }
</script>