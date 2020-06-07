import backgroundUrl1 from "../../assets/blogpost-photo-1.jpg";
import backgroundUrl2 from "../../assets/blogpost-photo-2.jpg";

export default {
    name: 'Blogpost',
    data(){
      return {
        isDefaultLayout: true,
        backgroundUrl1,
        backgroundUrl2
      }
    },
    props: {
      sequence: String,
    },
    beforeMount() {
      if(this.sequence % 2 == 0 ){
        this.isDefaultLayout = true;
      } else {
        this.isDefaultLayout = false;
      }
    }
  }