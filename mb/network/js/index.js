var mySwiper = new Swiper('.banner', {
  loop: true, // 循环模式选项
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  //autoplay:true, //自动播放

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChangeTransitionEnd: function () {
      var activeDom = this.slides[this.activeIndex];
      if ( activeDom == this.prevSlide ) return;
      $(activeDom).find('.animated').each(function (index, ele) {
        var type = $(ele).data('animated-type');
        var delay = $(ele).data('animated-delay');
        $(ele).css({
          animationName: type,
          animationDelay: delay,
          visibility: 'visible'
        })
      })
      if (this.prevSlide){
        $(this.prevSlide).find('.animated').css({
          animationName: '',
          visibility: 'hidden'
        })
      }
      this.prevSlide = activeDom; //把上一个slide的dom元素存起来
    }
  }
})

// wow.js 初始化
new WOW().init();


