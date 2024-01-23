const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          
        },
        // when window width is >= 768px
        1280: {
          slidesPerView: 3,
          
        }
      },
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active',
    },
  
    
    navigation: {
      nextEl: '.corousel-button.next',
      prevEl: '.corousel-button.prev',
    },
  
    
  });