window.addEventListener("resize", swiperSpaceBetween);
swiperSpaceBetween();
function swiperSpaceBetween(){
  if (window.innerWidth <= 1023) {
    const headerStoriesSwiper = new Swiper(".header-stories-swiper", {
      slidesPerView: "auto",
      spaceBetween: 14,
      freeMode: true,
      freeModeSticky: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    const headerStoriesSwiper = new Swiper(".header-stories-swiper", {
      slidesPerView: "auto",
      spaceBetween: 26.5,
      freeMode: true,
      freeModeSticky: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
} 



const headerSlidShow = new Swiper(".header-slideShow", {
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const mostSearchSwiper = new Swiper(".most-search-swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const selectInput = document.querySelector(".header-menu .search-container .search-box > input");
const selectBox = document.querySelector(".header-menu .search-container .search-box .search-input-container");
const selectBoxInput = document.querySelector(".header-menu .search-container .search-box .search-input-container > input");
const selectBoxClear = document.querySelector(".header-menu .search-container .search-box .search-input-container .search-close-icon");

selectInput.addEventListener("click" , function(){
  selectBox.classList.add("show");
  document.body.classList.add("bg-dark-50");
})

document.body.addEventListener("click" , function(event){
  if(!selectBox.contains(event.target) && selectInput !== event.target){
    selectBox.classList.remove("show");
    document.body.classList.remove("bg-dark-50");
  }
})

selectBoxInput.addEventListener("input" , function(){
  if(this.value !== ""){
    selectBoxClear.classList.remove("d-none");
  }else{
    selectBoxClear.classList.add("d-none");
  }
});

selectBoxClear.addEventListener("click" , function(){
  selectBoxInput.value = "";
  this.classList.add("d-none");
});
