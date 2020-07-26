import Header from "../../components/header/Header.vue";
import Blogpost from "../../components/blogpost/Blogpost.vue";
import Footer from "../../components/footer/Footer.vue";

export default {
    name: 'Home',
    components: {
      Header,
      Blogpost,
      Footer
    },

    // beforeMount(){
    //   window.addEventListener("scroll", ()=>{
    //     document.getElementById("banner").style.opacity = 1 - window.scrollY/400;
    //   })
    // }
  }