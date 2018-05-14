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
