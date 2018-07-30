const  btn = document.getElementById('menu__link');
const  mobilPage = document.querySelector("#mobil-page");
const  btnClose = document.querySelector('.close');
const  mobilList = document.querySelector('.mobil-menu__list');
let currentTop = 0;

btn.addEventListener('click', function(e) {
 e.preventDefault();
 mobilPage.style.top = currentTop + 'px';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  mobilPage.style.top = currentTop + 9999 + 'px';
});

mobilList.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target);
    if(e.target) {
        mobilPage.style.top = currentTop + 9999 + 'px';
    }
});

//acco-team

var teamAcco = document.querySelector('.team-acco');
var itemsTeam = teamAcco.getElementsByClassName('team-acco__item');
var contents = document.getElementsByClassName('person');
var section = document.querySelector('.team__section');


teamAcco.addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target;

  if(target.classList.contains('team-acco__trigger')) {
// console.log(target);
    var content = target.nextElementSibling;
    var item = target.parentNode;
    var contentHeight = parseInt(content.style.height);

    if(!item.classList.contains('team-acco__item--active')) {

      for (var i = 0; i < itemsTeam.length; i++) {
        itemsTeam[i].classList.remove('team-acco__item--active');
      }
      item.classList.add('team-acco__item--active');

      for (var i = 0; i < contents.length; i++) {
        // console.log(contents);
        contents[i].style.height = 0;
      }

      content.style.height = content.scrollHeight + 'px';
    } else {
      item.classList.remove('team-acco__item--active');
      content.style.height = 0;
    }
  }
});

section.addEventListener('click', function(e) {
  var targetClose = e.target;

  if(!targetClose.classList.contains('team-acco__trigger')) {
      for (var i = 0; i < itemsTeam.length; i++) {
        itemsTeam[i].classList.remove('team-acco__item--active');
        contents[i].style.height = '0px';
      }
    }
});

//acco-menu

var accordion = document.getElementById("accordion");
var i;

accordion.addEventListener("click", function(e) {
  e.preventDefault();
  var contentWidth = '540px';
  var items = accordion.getElementsByClassName("menu-acco__item"),
    contents = accordion.getElementsByClassName("menu-acco__block");



  if (e.target.classList.contains("menu-acco__trigger") || e.target.classList.contains("menu-acco__trigger-text")) {

    var trigger;

    if (e.target.classList.contains("menu-acco__trigger")) {
      trigger = e.target;
    } else {
      trigger = e.target.parentNode;
    }

    var content = trigger.nextElementSibling;
    var item = trigger.parentNode;
    var textContents = content.firstElementChild;


     // console.log("window.innerWidth");
     // console.log(window.innerWidth);
     // console.log("textContents.offsetWidth");
     // console.log(textContents.clientWidth);


    if(window.innerWidth<740){
       contentWidth = window.innerWidth - (trigger.offsetWidth * items.length) + 'px';

    }

    if (!item.classList.contains("menu-acco__item--active")) {
      for (i = 0; i < items.length; i++) {
        items[i].classList.remove("menu-acco__item--active");
      }

      item.classList.add("menu-acco__item--active");


      for (i = 0; i < contents.length; i++) {
        contents[i].style.width = null;
      }

      content.style.width = contentWidth;
      textContents.style.width = contentWidth;

    } else {
      item.classList.remove("menu-acco__item--active");
      content.style.width = null;
    }
  }
});



//review-mobilPage

var reviews_list = document.querySelector('.reviews__list');
var review_page = document.querySelector('.review-page');

reviews_list.addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target;

  if(target.classList.contains('review__btn-link') || target.classList.contains('review__btn-lin-mobil')){

    if(!review_page.classList.contains('is-active')) {

      review_page.classList.add('is-active');

      } else {
      review_page.classList.remove('is-active');
    }
  }
});

var close = review_page.querySelector('.content__close');
close.addEventListener('click', function() {
  review_page.classList.remove('is-active');
});

review_page.addEventListener('click', function(e){
  if(e.target === review_page){
    review_page.classList.remove('is-active');
  }
});


//slider

var leftArrow = document.querySelector('.scroll-btn__link--left');
var rightArrow = document.querySelector('.scroll-btn__link--right');
var sliderList = document.querySelector('.slider__list');
var slider = document.querySelector('.slider');
var size = parseInt(getComputedStyle(slider).width);
let start = 1;

leftArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));
  // console.log(currentLeft);
  // console.log(size);


    if (start > 1 && currentLeft % size == 0) {
      sliderList.style.left = currentLeft + size + 'px';
      start--;

    } else if (currentLeft % size == 0) {
      sliderList.style.left = currentLeft - 1 * size + 'px';
      start = 2;
    }
 })

rightArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));
// console.log(currentLeft);
    if (start < 2 && currentLeft % size == 0) {

        sliderList.style.left = currentLeft - size + 'px';
        start++;

    } else if (currentLeft % size == 0) {
      sliderList.style.left = 0 + 'px';
      start = 1;
    }
});

window.addEventListener('resize', function() {
  size = parseInt(getComputedStyle(slider).width);
  // console.log("size: " + size);
  // console.log("start: " + start);
  // console.log(-size * start);
  sliderList.style.left = -size * (start-1) + 'px';
});


//подключение яндекс карты

ymaps.ready(init);

var placemarks = [
  {
    latitude: 57.77,
    longitude: 40.93,
    hintContent: '<div class="map__hint">Мира пр-кт д.7</div>',
    balloonContent: ['<div class="map__balloon">Самые вкусные бургеры по адресу: Мира пр-кт д.7</div>']
  },
  {
    latitude: 57.787,
    longitude: 40.865,
    hintContent: '<div class="map__hint">ш.Некрасовское д.58</div>',
    balloonContent: ['<div class="map__balloon">Самые вкусные бургеры по адресу: ш.Некрасовское д.58</div>']
  },
  {
    latitude: 57.760,
    longitude: 40.960,
    hintContent: '<div class="map__hint">ул.Советская  д.103б</div>',
    balloonContent: ['<div class="map__balloon">Самые вкусные бургеры по адресу: ул.Советская  д.103б</div>']
  }
],
  geoObjects = [];

function init() {
  var map = new ymaps.Map('map', {
    center: [57.77, 40.90],
    zoom: 12,
    //controls: []
    behaviors: ['drag']
  });

  for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
        {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent} ,
        {
          iconLayout: 'default#image',
          iconImageHref: 'img/content/map-icon.png',
          iconImageSize: [46, 57],
          iconImageOffset: [-10, -100]
        });
    }

      var clasterer = new ymaps.Clusterer({
        clusterIcons: [
          {
            href: 'img/content/drops.png',
            size: [70, 70],
            offset: [-50, -50]
          }
        ],
        clusterIconContentLayout: null

      });

      map.geoObjects.add(clasterer);
      //map.geoObjects.add(placemark);
      clasterer.add(geoObjects);
  }
