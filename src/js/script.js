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

// const spollersArray = document.querySelectorAll('[data-spollers');
// if (spollersArray.length > 0) {
// 	const spollersRegular = Array.from(spollersArray).filter((item,index,self) => {
// 		return !item.dataset.spollers.split(',')[0];
// 	});
// 	if (spollersRegular.length > 0) {
// 		initSpollers(spollersRegular);
// 	}
// }

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

// ----------------------------------------------------------------------

window.onresize = () => {
	spaceForHeader();
  addTouchClassForMobile();
  closeBurger();
}



