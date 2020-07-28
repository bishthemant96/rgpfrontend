<template>
    <div id="footer">
        <div id="footer-note-1">
            &#169; Renuka Gupta 2020. All Rights Reserved.
        </div>
        <div id="footer-note-2">
            Best viewed on desktop.
        </div>
    </div>
</template>



<style>
    #footer {
        display: flex;
        flex-wrap: wrap;

        width: 100%;
        height: 15vh;

        font-family: 'Montserrat', sans-serif;
        text-align: center;
    }

    #footer-note-1 {
        align-self: flex-end;
        width: 100%;
        font-size: 12px;
    }

    #footer-note-2 {
        align-self: center;
        width: 100%;
        font-size: 10px;
    }
</style>



<script>
    export default {
        name: 'Footer'
    }
</script>