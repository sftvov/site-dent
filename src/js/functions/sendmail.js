for (form of forms) {
	form.addEventListener('submit', formSend);
}

async function formSend(e) {
	e.preventDefault();
	let form = e.target.parentNode;
	let error = formValidate(form);
	let formData = new FormData(form);

	if (error === 0) {
		form.classList.add('_sending');
		let response = await fetch('../sendmail.php', {
			method: 'POST',
			body: formData,
		});
		if (response.ok) {
			let result = await response.json();
			alert(result.message);
			form.reset();
		} else {
			alert('ошибка');
		}
	} else {
		alert('заполните обязательные поля');
	}
}

function formValidate(form) {
	let error = 0;
	formReq = form.querySelectorAll('._req');
	for (input of formReq) {
		form_remove_error(input);
		if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
			error++;
			form_add_error(input);
		}

		if (input.value === '') {
			error++;
			form_add_error(input);
		}
	}
	return error;
}

function form_add_error(input) {
	input.classList.add('_error');
}
function form_remove_error(input) {
	input.classList.remove('_error');
}
