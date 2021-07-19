let body = document.querySelector('body');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let page = document.querySelector('.page');

// ----------------------------------------------------------------------
function spaceForHeader() {
	let headerHeight = header.offsetHeight;
	page.style.paddingTop = headerHeight + 'px';
}
spaceForHeader();

// ----------------------------------------------------------------------

@@include('isMobile.js');
@@include('webp.js');
@@include('burger.js');
@@include('tabs.js');

// ----------------------------------------------------------------------

window.onresize = () => {
	spaceForHeader();
  addTouchClassForMobile();
  closeBurger();
}



