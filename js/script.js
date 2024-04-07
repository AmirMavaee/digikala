window.addEventListener("resize", swiperSpaceBetween);
swiperSpaceBetween();
function swiperSpaceBetween(){
  if (window.innerWidth <= 1023) {
    const headerStoriesSwiper = new Swiper(".header-stories-swiper", {
      slidesPerView: "auto",
      spaceBetween: 14,
      freeMode: true, // Enable free mode
      freeModeSticky: true, // Stick to the slides
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    const headerStoriesSwiper = new Swiper(".header-stories-swiper", {
      slidesPerView: "auto",
      spaceBetween: 26.5,
      freeMode: true, // Enable free mode
      freeModeSticky: true, // Stick to the slides
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
} 
