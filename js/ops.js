// OPS

const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;
// var md = new MobileDetect(window.navigator.userAgent);
// const isMobile = md.mobile();

const setActiveMenuItem = itemEq => {
  $('.sidebar__item').eq(itemEq).addClass('active').siblings().removeClass('active');
}

const performTransition = sectionEq => {
  const position = `${-sectionEq * 100}%`;

  if (inScroll) return;

  inScroll = true;
  sections.eq(sectionEq).addClass('active').siblings().removeClass('active');

  display.css({
    transform: `translate(0, ${position})`,
    "-webkit-transform": `translate(0, ${position})`
  });

  const transitionDuration = parseInt(display.css('transition-duration')) * 1000; // получаем время в мс

   setTimeout(() => {
     inScroll = false;
     setActiveMenuItem(sectionEq)
   }, transitionDuration + 300);

};

const scrollToSection = direction => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'up' && prevSection.length) {
    performTransition(prevSection.index());
  }

  else if (direction === 'down' && nextSection.length) {
    performTransition(nextSection.index());
  }

}

$(document).on({
  wheel: e => {
  console.log(e);
    const deltaY = e.originalEvent.deltaY;
    if (deltaY > 0) {
      scrollToSection('down');
      console.log('down');
    } else {
        scrollToSection('up');
        console.log('up');
    }
  },
  touchmove: e => e.preventDefault()
});

document.addEventListener("keydown", function(e){
  console.log(e.keyCode);
  switch (e.keyCode) {
      case 40:
        scrollToSection("down");
        break;

      case 38:
        scrollToSection("up");
        break;
    }
});

$('[data-scroll-to]').on('click', e => {
  e.preventDefault();
  const targer = $(e.currentTarget).data('scroll-to');
  performTransition(targer);

})

// const mobilMenuLink = $('.mobil-menu__link');
// mobilMenuLink.addEventListener("click", function(e){
//   e.preventDefault();
//   $('#mobil-page').css("top", "9999px");
// });
