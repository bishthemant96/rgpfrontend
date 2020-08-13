<template>
    <div class="head-container">
        <router-link id="title" to="/"> RENUKA GUPTA </router-link>
        <router-link v-if="$route.name!=='About'" class="nav-item" to="/"> ABOUT </router-link>
        <router-link v-else class="nav-item" to="/Portfolio"> PORTFOLIO </router-link>
    </div>
</template>



<style>
    .head-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        padding: 3% 0% 2% 0%;
        margin: 0% 8%;

        background-color: var(--bg-header);
    }

    #title {
        color: var(--text-header) !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        font-weight: 400;
        letter-spacing: -2px;
        text-decoration: none;
        line-height: 1;
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