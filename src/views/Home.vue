<template>
  <div id="home">
    <div id="banner">
        <div id="intro">
            Hi, I am a young architect with a passion for experential architecture having a strong belief that we have a magnificient past with strong roots, new links has to be formed to take it forward with modern interpretations, considering present requirements. 
        </div>
    </div>
    <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
    <Blogpost sequence="1"/>
    <Blogpost sequence="2"/>
</div>
</template>

<style>
#banner {
    height: 85vh;

    display: flex;
    justify-content: left;
    align-items: center;

    margin: 0% 8%;

    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    
    background-image: url(../assets/calli.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

#intro {
    width: 50%;
    font-size: 24px;
}
</style>

<script>
import Blogpost from "@/components/blogpost/Blogpost.vue";

export default {
    name: 'Home',
    components: {
      Blogpost
    }
  }
</script>

