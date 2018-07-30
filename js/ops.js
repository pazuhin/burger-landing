// const  Close = document.querySelector('.close');
// const  mobilPage = document.querySelector("#mobil-page");
// const  menuLink = document.querySelectorAll('.mobil-menu__item');
// console.log(menuLink);
//
// $(btnClose).on('click touchstart touchend', () => {
//     $(mobilPage).toggleClass('visible');
// });
//
// $(tabletsMenuClose).on('click touchstart touchend', () => {
//     $(tabletsMenu).toggleClass('visible');
// });
//
// $(menuLink).on('click touchstart', () => {
//     $(tabletsMenu).toggleClass('visible');
// });



// OPS
const wrapper = $(".wrapper");
const menu = $(".menu");
const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();



    const setActiveMenuItem = itemEq => {
        $('.sidebar__item').eq(itemEq).addClass('active').siblings().removeClass('active');
    }

    const performTransition = sectionEq => {


        if (inScroll) return;

        inScroll = true;
        const position = `${-sectionEq * 100}%`;

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

const defineSections = sections => {
    const activeSection = sections.filter('.active');

    return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
    }
}

const scrollToSection = direction => {
    const section = defineSections(sections);

    if (inScroll) return;

    if (direction === 'up' && section.nextSection.length) {
        performTransition(section.nextSection.index());
    }

    if (direction === 'down' && section.prevSection.length) {
        performTransition(section.prevSection.index());
    }
}

$('.wrapper').on( {
    wheel: e => {
        const deltaY = e.originalEvent.deltaY;
        let direction = (deltaY > 0) ? 'up' : 'down';

        scrollToSection(direction);
    },
    touchmove: e => (e.preventDefault())
});

$(document).on('keydown', e => {
    const section = defineSections(sections);

    if (inScroll) return

    switch (e.keyCode) {
        case 40:
            if (!section.nextSection.length) return ;
            performTransition(section.nextSection.index());
            break;

        case 38:
            if (!section.prevSection.length) return ;
            performTransition(section.prevSection.index());
            break;
    }

});

if (isMobile) {
  console.log(111);
    $(window).swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            scrollToSection(direction);
        }
    });
}

$('[data-scroll-to]').on('click touchstart', e => {

    e.preventDefault();

    const $this = $(e.currentTarget);
    const sectionIndex = parseInt($this.attr('data-scroll-to'));

    performTransition(sectionIndex);


});

