export default {
    name: 'Blogpost',

    data(){
      return {
        isDefaultLayout: true,
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
    },

    methods: {
      getImagePath: function(){
        return require('../../assets/blogpost-photo-'+this.sequence+'.jpg');
      }
    }
  }