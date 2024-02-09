const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    effect: 'coverflow',

    coverflowEffect: {
      rotate: 10,
      
    },
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  