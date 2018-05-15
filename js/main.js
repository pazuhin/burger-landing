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


teamAcco.addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target;
  var teamAccoItem = document.querySelector('.team-acco__item');

  if(target.classList.contains('team-acco__trigger')) {

    var content = target.nextElementSibling;
    var contentHeight = parseInt(content.style.height);

    if(contentHeight) {
      content.style.height = 0;
    } else {
      content.style.height = content.scrollHeight + 'px';
    }
  }
});
