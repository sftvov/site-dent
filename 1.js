let vidget = document.querySelector('.sc-toggle');
if (vidget) {
	function timerVidget() {
		function appearanceVidget() {
			vidget.classList.remove('left10000');
		}
		setTimeout(appearanceVidget, 5000);
	}
	vidget.classList.add('left10000');
	document.addEventListener('DOMContentLoaded', timerVidget);
}
