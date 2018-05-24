!function (){
  var view = document.getElementsByClassName('swiper-container');
  var controller = {
      view: null,
      swiper: null,
      swiperOptions:{
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    },
    init: function(view){
        this.view = view;
        this.swiperInit();
    },
    swiperInit: function(){
            this.swiper = new Swiper(this.view,this.swiperOptions);
    }
  }  

controller.init(view);
}.call()