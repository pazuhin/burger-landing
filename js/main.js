var  btn = document.getElementById('menu__link');
var  mobilPage = document.querySelector("#mobil-page");
const  btnClose = document.querySelector('.close');
let currentTop = 0;

btn.addEventListener('click', function(e) {
 e.preventDefault();
 mobilPage.style.top = currentTop + 'px';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  mobilPage.style.top = currentTop + 9999 + 'px';
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
console.log(target);
    var content = target.nextElementSibling;
    var item = target.parentNode;
    var contentHeight = parseInt(content.style.height);

    if(!item.classList.contains('team-acco__item--active')) {

      for (var i = 0; i < itemsTeam.length; i++) {
        itemsTeam[i].classList.remove('team-acco__item--active');
      }
      item.classList.add('team-acco__item--active');

      for (var i = 0; i < contents.length; i++) {
        console.log(contents);
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

var menuAcco = document.querySelector('.menu-acco');
var items = menuAcco.getElementsByClassName('menu-acco__item');
var contentsMenu = menuAcco.getElementsByClassName('menu-acco__block');
//var section = document.querySelector('.team__section');


menuAcco.addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target;

  if(target.classList.contains('menu-acco__trigger')) {

    var content = target.nextElementSibling;
    var item = target.parentNode;
    var contentWidth = parseInt(content.style.width);

    if(!item.classList.contains('menu-acco__item--active')) {

      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('menu-acco__item--active');
      }
      item.classList.add('menu-acco__item--active');

      for (var i = 0; i < contentsMenu.length; i++) {
        contentsMenu[i].style.width = 0;
      }

      content.style.width = '400px';

    } else {
      item.classList.remove('menu-acco__item--active');
      content.style.width = 0;
    }
  }
});

window.addEventListener('resize', function() {
  var client_w = document.body.clientWidth;


  if(client_w <=768) {
    color = 'red';
  }
});

// section.addEventListener('click', function(e) {
//   var targetClose = e.target;
//
//   if(!targetClose.classList.contains('team-acco__trigger')) {
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('team-acco__item--active');
//         contents[i].style.height = 0;
//       }
//     }
// });



//review-mobilPage

var reviews_list = document.querySelector('.reviews__list');
var review_page = document.querySelector('.review_page');

reviews_list.addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target;

  if(target.classList.contains('review__btn-link')){

    if(!review_page.classList.contains('is-active')) {

      review_page.classList.add('is-active');

      } else {
      review_page.classList.remove('is-active');
    }
  }

  if(target.classList.contains('review__btn-lin-mobil')){

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


//slider__controls

var leftArrow = document.querySelector('.scroll-btn__link--left');
var rightArrow = document.querySelector('.scroll-btn__link--right');
var sliderList = document.querySelector('.slider__list');
var slider = document.querySelector('.slider');
var size = parseInt(getComputedStyle(slider).width);
let start = 1;

leftArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));
  console.log(currentLeft);
  console.log(size);


    if (start > 1) {
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
console.log(currentLeft);
    if (start < 2 && currentLeft % size == 0) {

        sliderList.style.left = currentLeft - size + 'px';
        start++;

    } else if (currentLeft % size == 0) {
      sliderList.style.left = 0 + 'px';
      start = 1;
    }
})
