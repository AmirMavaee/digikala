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



// show search bar

const selectInput = document.querySelector(".header-menu .search-container .search-box > input");
const selectBox = document.querySelector(".header-menu .search-container .search-box .search-input-container");
const selectBoxInput = document.querySelector(".header-menu .search-container .search-box .search-input-container > input");
const selectBoxClear = document.querySelector(".header-menu .search-container .search-box .search-input-container .search-close-icon");
const selectBoxMobile = document.querySelector(".header-menu .search-responsive-container .search-input-responsive-container")


window.addEventListener("resize" , showSearchbar)
showSearchbar();
function showSearchbar(){
  document.body.classList.remove("bg-dark-50");
  document.body.classList.remove("bg-dark-50-mobile");
  if(this.screen.width <= 1023){
    showSearchBarMobile()
  }else{
    showSearchBarDesktop();
  }
}


function showSearchBarDesktop(){  
  selectBox.classList.remove("show");

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
}

function showSearchBarMobile(){
  selectBox.classList.remove("show");

  const selectInputMobile = document.querySelector(".header-menu .search-responsive-container > section");
  const selectBoxMobileClose = document.querySelector(".header-menu .search-responsive-container .search-input-responsive-container .search-box-icon");
  const selectBoxMobileInput = document.querySelector(".header-menu .search-responsive-container .search-input-responsive-container .search-input");
  const selectBoxMobileClear = document.querySelector(".header-menu .search-responsive-container .search-input-responsive-container .search-close-icon");
  console.log(selectBoxMobileInput);

  selectInputMobile.addEventListener("click" , function(){
    selectBoxMobile.classList.remove("d-none");
    setTimeout(() => {
      document.body.classList.add("bg-dark-50-mobile");
      selectBoxMobile.classList.add("show");
    }, 100);
  })
  selectBoxMobileClose.addEventListener("click" , function(){
    selectBoxMobile.classList.remove("show");
    setTimeout(() => {
      document.body.classList.remove("bg-dark-50-mobile");
      selectBoxMobile.classList.add("d-none");
    }, 150);
  })

  selectBoxMobileClear.classList.add("d-none");
  selectBoxMobileInput.addEventListener("input" , function(){
    if(this.value !== ""){
      selectBoxMobileClear.classList.remove("d-none");
    }else{
      selectBoxMobileClear.classList.add("d-none");
    }
  });
  
  selectBoxMobileClear.addEventListener("click" , function(){
    selectBoxMobileInput.value = "";
    this.classList.add("d-none");
  });
}


// add style when hover on navbar
const navbar = document.querySelector(".header .menu .menu-item");
const navbarItem = document.querySelectorAll(".header .menu .menu-item li");
const navbarItemBorder = document.querySelector(".header .menu .border-bottom-menu-item");

navbarItem.forEach(function(item){
  item.addEventListener('mouseenter' , function(){
    navbarItemBorder.style.width = "0";
    setTimeout(() => {
      const itemRect = item.getBoundingClientRect();
      const newLeft = itemRect.left + 'px';
      navbarItemBorder.style.left = newLeft;
      navbarItemBorder.style.width = item.clientWidth + "px";
    }, 200);
  })
  item.addEventListener("mouseleave" , function(){
    navbarItemBorder.style.width = "0";
  })
})
