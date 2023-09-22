function getFormvalue() {
	const firstNameInput= document.querySelector('input[name="fname"]');
	const lastNameInput= document.querySelector('input [name="lname"]');

	const fname=firstNameInput.value;
	const lname= lastNameInput.value;

	const fullName = '${fname} ${lname}';
	alert('${fullName}');
	
}

