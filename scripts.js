const $tabs = $('.accordion__tab');
const $pages = $('.accordion__page');

const toggleTab = event => {
  const index = $tabs.index(event.target)

  $tabs.removeClass('accordion__tab--selected')
  $pages.removeClass('accordion__page--selected')
  $tabs[index].classList.add('accordion__tab--selected')
  $pages[index].classList.add('accordion__page--selected')
}

$tabs.on('click', toggleTab);

const $menu = $('.header-bar__menu');

const toggleNav = () => {
  $('.header-bar__link').toggleClass('header-bar__link--hide');
  $('.header-bar').toggleClass('header-bar--small');
}

$menu.on('click', toggleNav);


