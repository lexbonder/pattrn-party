const $tabs = $('.accordion__tab');
const $pages = $('.accordion__page');

const toggleTab = event => {
  const index = $tabs.index(event.target)

  $tabs.removeClass('accordion__tab--selected')
  $pages.removeClass('accordion__page--selected')
  $tabs[index].classList.add('accordion__tab--selected')
  $pages[index].classList.add('accordion__page--selected')
}

$tabs.on('click', toggleTab)


