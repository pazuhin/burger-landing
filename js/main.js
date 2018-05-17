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
var items = teamAcco.getElementsByClassName('team-acco__item');
var contents = teamAcco.getElementsByClassName('person');
var section = document.querySelector('.team__section');


teamAcco.addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target;
  var teamAccoItem = document.querySelector('.team-acco__item');

  if(target.classList.contains('team-acco__trigger')) {

    var content = target.nextElementSibling;
    var item = target.parentNode;
    var contentHeight = parseInt(content.style.height);

    if(!item.classList.contains('team-acco__item--active')) {

      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('team-acco__item--active');
      }
      item.classList.add('team-acco__item--active');

      for (var i = 0; i < items.length; i++) {
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
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('team-acco__item--active');
        contents[i].style.height = 0;
      }
    }
});
