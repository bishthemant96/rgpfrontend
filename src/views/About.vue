<template>
<div id="about">
    <div class="introduction">
        <div class="about-introduction">
            I am a architecture graduate with a  keen interest in learning the art of space
            making with good work ethics. <br> <br> For me best designs are outcome of thoughtful iterations. 
            I intend to unlearn and learn the basics of practise while contributing in a firm to built 
            living spaces.
        </div>
        <img class="about-photo" src="../assets/about-photo.jpg">
    </div>

    <div class="academics">
        <div class="about-academics">
            I graduated from MBS School of Planning and Architecture with Bachelors of Architecture in 2020 
            with a specialisation in building biology.
        </div>

    </div>

    <div class="filler">

    </div>
</div>
</template>

<style>
.introduction {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 90vh;

    margin: 0% 8%;

}

.about-introduction {
    display: block;
    width: 50%;

    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    text-align: right;
}

.about-photo {
    height: 500px;
    width: 500px;
    border-radius: 50% 0% 50% 50%;
}

.academics {

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(../assets/university.jpeg);
    background-size: cover;
    
    margin: 2% 8%;
    width: auto;
    height: 40vh;

    color: white !important;
}

.about-academics{
    width: 50%;
    text-align: center;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
}
</style>

<script>
export default {
    name: 'About',
    components: {
    }
  }
</script>

