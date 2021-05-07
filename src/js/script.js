@@include('webp.js');

let burger = document.querySelector('.header__burger');

burger.onclick = function () {
	burger.classList.toggle('active');
	document.querySelector('.header__menu-wraper').classList.toggle('active');
};
