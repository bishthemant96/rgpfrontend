export default {
  name: 'Header',

  data(){
    return {
      isToggled: false,
    }
  },

  methods: {
    toggleNavigation: function(){
      if(!this.isToggled){
        document.getElementById("title-container").style.order = '1';
        document.getElementById("nav-toggle").style.order = '2';
        document.getElementById("nav-container").style.order = '3';
        document.getElementById("nav-container").style.width = '100%';
        document.getElementById("nav-container").style.display = 'flex';
        document.getElementsByClassName("head-container")[0].style.flexWrap = "wrap";
      } else {
        document.getElementById("title-container").style.order = '1';
        document.getElementById("nav-toggle").style.order = '2';
        document.getElementById("nav-container").style.order = '3';
        document.getElementById("nav-container").style.width = '100%';
        document.getElementById("nav-container").style.display = 'none';
        document.getElementsByClassName("head-container")[0].style.flexWrap = "wrap";
      }
      
      this.isToggled = !this.isToggled;
    }
  }
}