<template>
    <div class="project-preview-container">
        <img class="project-preview-photo" src="../assets/current-project-1.jpg"/>

        <div class="project-preview-detail">
            <div class="project-preview-heading">
                Reception, Temple Tree Retreat
            </div>

            <div class="project-preview-timestamp">
                Aug '19 - Mar '20
            </div>

            <div class="project-preview-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </div>
        </div>
    </div>
</template>



<style>
    .project-preview-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 40vh;
        margin: 2% 8%;

        font-family: 'Montserrat', sans-serif;

    }

    .project-preview-photo {
        width: 45%;
        height: 100%;
    }

    .project-preview-detail {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;

        width: 45%;
        height: 50%;
    }

    .project-preview-heading {
        font-size: 24px;
        font-weight: 400;
        width: 100%;

    }

    .project-preview-timestamp {
        font-size: 14px;
        font-style: italic;
        width: 100%;

    }

    .project-preview-description {
        font-size: 14px;
        width: 100%;
    }
</style>



<script>
    export default {
        name: 'ProjectPreview',
    }
</script>