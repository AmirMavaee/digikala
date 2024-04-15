window.addEventListener("resize", swiperSpaceBetween);
swiperSpaceBetween();
function swiperSpaceBetween() {
  if (window.innerWidth <= 1023) {
    const headerStoriesSwiper = new Swiper(".header-stories-swiper", {
      slidesPerView: "auto",
      spaceBetween: 14,
      freeMode: true,
      freeModeSticky: true,
      navigation: {
        nextEl: ".swiper-button-next-header-stories",
        prevEl: ".swiper-button-prev-header-stories",
      },
    });
  } else {
    const headerStoriesSwiper = new Swiper(".header-stories-swiper", {
      slidesPerView: "auto",
      spaceBetween: 26.5,
      freeMode: true,
      freeModeSticky: true,
      navigation: {
        nextEl: ".swiper-button-next-header-stories",
        prevEl: ".swiper-button-prev-header-stories",
      },
    });
  }
}

const headerSlidShow = new Swiper(".header-slideShow", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-slideShow",
    prevEl: ".swiper-button-prev-slideShow",
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
    nextEl: ".swiper-button-next-most-search",
    prevEl: ".swiper-button-prev-most-search",
  },
});

// show search bar

const selectInput = document.querySelector(
  ".header-menu .search-container .search-box > input"
);
const selectBox = document.querySelector(
  ".header-menu .search-container .search-box .search-input-container"
);
const selectBoxInput = document.querySelector(
  ".header-menu .search-container .search-box .search-input-container > input"
);
const selectBoxClear = document.querySelector(
  ".header-menu .search-container .search-box .search-input-container .search-close-icon"
);
const selectBoxMobile = document.querySelector(
  ".header-menu .search-responsive-container .search-input-responsive-container"
);

window.addEventListener("resize", showSearchbar);
showSearchbar();
function showSearchbar() {
  document.body.classList.remove("bg-dark-50");
  document.body.classList.remove("bg-dark-50-mobile");
  if (this.screen.width <= 1023) {
    showSearchBarMobile();
  } else {
    showSearchBarDesktop();
  }
}

function showSearchBarDesktop() {
  selectBox.classList.remove("show");

  selectInput.addEventListener("click", function () {
    selectBox.classList.add("show");
    document.body.classList.add("bg-dark-50");
  });

  document.body.addEventListener("click", function (event) {
    if (!selectBox.contains(event.target) && selectInput !== event.target) {
      selectBox.classList.remove("show");
      document.body.classList.remove("bg-dark-50");
    }
  });

  selectBoxInput.addEventListener("input", function () {
    if (this.value !== "") {
      selectBoxClear.classList.remove("d-none");
    } else {
      selectBoxClear.classList.add("d-none");
    }
  });

  selectBoxClear.addEventListener("click", function () {
    selectBoxInput.value = "";
    this.classList.add("d-none");
  });
}

function showSearchBarMobile() {
  selectBox.classList.remove("show");

  const selectInputMobile = document.querySelector(
    ".header-menu .search-responsive-container > section"
  );
  const selectBoxMobileClose = document.querySelector(
    ".header-menu .search-responsive-container .search-input-responsive-container .search-box-icon"
  );
  const selectBoxMobileInput = document.querySelector(
    ".header-menu .search-responsive-container .search-input-responsive-container .search-input"
  );
  const selectBoxMobileClear = document.querySelector(
    ".header-menu .search-responsive-container .search-input-responsive-container .search-close-icon"
  );
  console.log(selectBoxMobileInput);

  selectInputMobile.addEventListener("click", function () {
    selectBoxMobile.classList.remove("d-none");
    setTimeout(() => {
      document.body.classList.add("bg-dark-50-mobile");
      selectBoxMobile.classList.add("show");
    }, 100);
  });
  selectBoxMobileClose.addEventListener("click", function () {
    selectBoxMobile.classList.remove("show");
    setTimeout(() => {
      document.body.classList.remove("bg-dark-50-mobile");
      selectBoxMobile.classList.add("d-none");
    }, 150);
  });

  selectBoxMobileClear.classList.add("d-none");
  selectBoxMobileInput.addEventListener("input", function () {
    if (this.value !== "") {
      selectBoxMobileClear.classList.remove("d-none");
    } else {
      selectBoxMobileClear.classList.add("d-none");
    }
  });

  selectBoxMobileClear.addEventListener("click", function () {
    selectBoxMobileInput.value = "";
    this.classList.add("d-none");
  });
}

// add style when hover on navbar
const navbar = document.querySelector(".header .menu .menu-item");
const navbarItem = document.querySelectorAll(".header .menu .menu-item > li");
const navbarItemBorder = document.querySelector(
  ".header .menu .border-bottom-menu-item"
);

navbarItem.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    navbarItemBorder.style.width = "0";
    setTimeout(() => {
      navbarItemBorder.classList.add("show");
      const itemRect = item.getBoundingClientRect();
      const newLeft = itemRect.left + "px";
      navbarItemBorder.style.left = newLeft;
      navbarItemBorder.style.width = item.clientWidth + "px";
    }, 200);
  });

  item.addEventListener("mouseleave", function () {
    navbarItemBorder.style.width = "0";
    setTimeout(() => {
      navbarItemBorder.classList.remove("show");
    }, 200);
  });
});

// kala grouping
const kalaNameItem = document.querySelectorAll(".header .menu .kala-name li");
const kalaNameItemImg = document.querySelectorAll(
  ".header .menu .kala-name img"
);
const svg = document.querySelectorAll(".kala-icon");

kalaNameItem[0].classList.add("bg-white");
kalaNameItem[0].classList.add("text-danger");
svg[0].style.color = "red";

kalaNameItem.forEach(function (item, index) {
  item.addEventListener("mouseenter", function () {
    if (
      kalaNameItem[0].classList.contains("bg-white") &&
      kalaNameItem[0].classList.contains("text-danger")
    ) {
      kalaNameItem[0].classList.remove("bg-white");
      kalaNameItem[0].classList.remove("text-danger");
      svg[0].style.color = "#3f4064";
    }
    item.classList.add("bg-white");
    item.classList.add("text-danger");
    svg[index].style.color = "red";
  });
  item.addEventListener("mouseleave", function () {
    item.classList.remove("bg-white");
    item.classList.remove("text-danger");
    svg[index].style.color = "#3f4064";
  });
});

const kalaDec = document.querySelector(".header .menu .kala-dec");
kalaDec.addEventListener("mouseenter", function () {
  kalaNameItem[0].classList.add("bg-white");
  kalaNameItem[0].classList.add("text-danger");
  svg[0].style.color = "red";
});

// show kala grouping
const kalaItem = document.querySelector(
  ".header .menu .menu-item li:first-child"
);
const kalaGrouping = document.querySelector(".header .menu .kala-grouping");
kalaItem.addEventListener("mouseenter", function () {
  kalaGrouping.classList.remove("d-none");
  kalaGrouping.classList.add("d-flex");
  document.body.classList.add("bg-dark-50-kala-grouping");
});
kalaItem.addEventListener("mouseleave", function () {
  kalaGrouping.classList.add("d-none");
  kalaGrouping.classList.remove("d-flex");
  document.body.classList.remove("bg-dark-50-kala-grouping");
});
