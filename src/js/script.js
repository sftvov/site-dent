let body = document.querySelector('body');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let page = document.querySelector('.page');
let forms = document.getElementsByTagName('form');
let loading = document.querySelector('.loading');
// ----------------------------------------------------------------------

let headerHeight;
function spaceForHeader() {
	headerHeight = header.offsetHeight;
	page.style.paddingTop = headerHeight + 'px';
}	

// ----------------------------------------------------------------------

@@include('functions/sendmail.js');
@@include('functions/isMobile.js');
@@include('functions/webp.js');
@@include('elements/burger.js');
@@include('elements/tabs.js');
@@include('elements/popups.js');
@@include('elements/sliders.js');
@@include('elements/gallery.js');
@@include('elements/scroll.js');
@@include('elements/spollers.js');

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

window.onresize = () => {
	spaceForHeader();
  addTouchClassForMobile();
  closeBurger();
}

window.onload = () => {	
	spaceForHeader();
}

// ----------------------------------------------------------------------
