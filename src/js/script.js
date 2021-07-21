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

// ----------------------------------------------------------------------

const spollersRegular = document.querySelectorAll('[data-spollers]');
if (spollersRegular.length > 0) {
	initSpollers(spollersRegular);
}

function initSpollers(spollersArray) {
	spollersArray.forEach(spollersBlock => {
		spollersBlock.classList.add('_init');
		initSpollerBody(spollersBlock);
		spollersBlock.addEventListener('click', setSpollerAction);
	})
}

function initSpollerBody(spollersBlock) {
	const spollersTitles = spollersBlock.querySelectorAll('[data-spoller]');
	if (spollersTitles.length > 0) {
		spollersTitles.forEach(spollerTitle => {
			spollerTitle.removeAttribute('tabindex');
			if (!spollerTitle.classList.contains('_active')) {
				spollerTitle.nextElementSibling.hidden = true;
			}
		})
	}
}

function setSpollerAction(e) {
	const spollerTitle = e.target.closest('[data-spoller]');
	spollerTitle.classList.toggle('_active');
	_slideToggle(spollerTitle.nextElementSibling);
}

let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	target.hidden = false;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height +'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {		
	target.style.removeProperty('height');
	target.style.removeProperty('overflow');
	target.style.removeProperty('transition-duration');
	target.style.removeProperty('transition-property');
	}, duration);
}

let _slideUp = (target, duration = 500) => {	
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight +'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.style.display = 'none';
		target.hidden = true;
	}, duration);
}

let _slideToggle = (target, duration = 500) => {
	if (target.hidden) _slideDown (target, duration)
	else  _slideUp (target, duration);
}