document.createElement('main');

//----------------Main-nav------------

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  }
});


//----------------Modal-login------------

var modalLogin = document.querySelector(".modal-login");
var modalClose = document.querySelector(".modal-login__modal-close");
var userLogin = document.querySelector(".user-list__login");
var overlay = document.querySelector(".overlay");

userLogin.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('test');
  modalLogin.classList.toggle("modal-shown");
  overlay.classList.add("overlay-shown");
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('test');
  modalLogin.classList.remove("modal-shown");
  overlay.classList.remove("overlay-shown");
});


//----------------Advantages------------

var sliderToggleFirst = document.querySelector(".advantages__toggles .slider__toggle:first-child");
var sliderToggleSecond = document.querySelector(".advantages__toggles .slider__toggle:nth-child(2n)");
var sliderToggleThird = document.querySelector(".advantages__toggles .slider__toggle:last-child");

var sliderItemFast = document.querySelector(".advantages__item--fast");
var sliderItemCool = document.querySelector(".advantages__item--cool");
var sliderItemExpensive = document.querySelector(".advantages__item--expensive");

sliderToggleFirst.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (sliderItemFast.classList.contains("slider__item--active")) {
  } else {
    sliderToggleFirst.classList.add("slider__toggle--active");
    sliderToggleSecond.classList.remove("slider__toggle--active");
    sliderToggleThird.classList.remove("slider__toggle--active");

    sliderItemFast.classList.add("slider__item--active");
    sliderItemExpensive.classList.remove("slider__item--active");
    sliderItemCool.classList.remove("slider__item--active");
  }
});

sliderToggleSecond.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (sliderItemCool.classList.contains("slider__item--active")) {
  } else {
    sliderToggleSecond.classList.add("slider__toggle--active");
    sliderToggleFirst.classList.remove("slider__toggle--active");
    sliderToggleThird.classList.remove("slider__toggle--active");

    sliderItemCool.classList.add("slider__item--active");
    sliderItemFast.classList.remove("slider__item--active");
    sliderItemExpensive.classList.remove("slider__item--active");
  }
});

sliderToggleThird.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (sliderItemExpensive.classList.contains("slider__item--active")) {
  } else {
    sliderToggleThird.classList.add("slider__toggle--active");
    sliderToggleFirst.classList.remove("slider__toggle--active");
    sliderToggleSecond.classList.remove("slider__toggle--active");

    sliderItemExpensive.classList.add("slider__item--active");
    sliderItemCool.classList.remove("slider__item--active");
    sliderItemFast.classList.remove("slider__item--active");
  }
});

//----------------News------------

var newsToAll = document.querySelector(".news__to-all");
var newsItemThird = document.querySelector(".news__item--third");
var newsItemFourth = document.querySelector(".news__item--fourth");

newsToAll.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('test');
  if (newsItemThird.classList.contains("news__item--shown")) {
    newsItemThird.classList.remove("news__item--shown");
    newsItemFourth.classList.remove("news__item--shown");
  } else {
    newsItemThird.classList.add("news__item--shown");
    newsItemFourth.classList.add("news__item--shown");
  }
});

//----------Reviews---------

var reviewsItemFirst = document.querySelector(".reviews__list .reviews__item:first-of-type");
var reviewsItemSecond = document.querySelector(".reviews__list .reviews__item:nth-of-type(2n)");
var reviewsItemThird = document.querySelector(".reviews__list .reviews__item:last-of-type");

var RsliderToggleFirst = document.querySelector(".reviews__toggles .slider__toggle:first-child");
var RsliderToggleSecond = document.querySelector(".reviews__toggles .slider__toggle:nth-child(2n)");
var RsliderToggleThird = document.querySelector(".reviews__toggles .slider__toggle:last-child");


RsliderToggleFirst.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (reviewsItemFirst.classList.contains("slider__item--active")) {
  } else {
    RsliderToggleFirst.classList.add("slider__toggle--active");
    RsliderToggleSecond.classList.remove("slider__toggle--active");
    RsliderToggleThird.classList.remove("slider__toggle--active");

    reviewsItemFirst.classList.add("slider__item--active");
    reviewsItemThird.classList.remove("slider__item--active");
    reviewsItemSecond.classList.remove("slider__item--active");
  }
});

RsliderToggleSecond.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (reviewsItemSecond.classList.contains("slider__item--active")) {
  } else {
    RsliderToggleSecond.classList.add("slider__toggle--active");
    RsliderToggleFirst.classList.remove("slider__toggle--active");
    RsliderToggleThird.classList.remove("slider__toggle--active");

    reviewsItemSecond.classList.add("slider__item--active");
    reviewsItemFirst.classList.remove("slider__item--active");
    reviewsItemThird.classList.remove("slider__item--active");
  }
});

RsliderToggleThird.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (reviewsItemThird.classList.contains("slider__item--active")) {
  } else {
    RsliderToggleThird.classList.add("slider__toggle--active");
    RsliderToggleFirst.classList.remove("slider__toggle--active");
    RsliderToggleSecond.classList.remove("slider__toggle--active");

    reviewsItemThird.classList.add("slider__item--active");
    reviewsItemSecond.classList.remove("slider__item--active");
    reviewsItemFirst.classList.remove("slider__item--active");
  }
});
