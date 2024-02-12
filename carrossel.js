const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
  
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
