<template>
<div class="project-preview-container">
    <img class="project-preview-photo" src="../assets/current-project-1.jpg"/>
    

    <div class="project-preview-detail">
        <div class="project-preview-item project-preview-heading">
            Reception, Temple Tree Retreat
        </div>

        <div class="project-preview-item project-preview-timestamp">
            Aug '19 - Mar '20
        </div>

        <div class="project-preview-item project-preview-description">
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
    width: auto;

    margin: 2% 8%;

}

.project-preview-photo {
    width: 45%;
    height: 100%;
}

.project-preview-detail {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-around;
    align-items: baseline;

    width: 45%;
    height: 50%;

    color: black;
}

.project-preview-item{
    width: 100%;
    font-family: 'Montserrat', sans-serif;
}

.project-preview-heading {
    font-size: 24px;
    font-weight: 400;
}

.project-preview-timestamp {
    font-size: 14px;
    font-style: italic;
}

.project-preview-description {
    font-size: 14px;
}

.project-preview-link {
    font-size: 14px;
    font-style: italic;
}
</style>

<script>
export default {
    name: 'ProjectPreview',
  }
</script>