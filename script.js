function getFormvalue(event) {
	event.preventDefault();
	const firstNameInput= document.getElementById('fname').value;
	const lastNameInput= document.getElementById('lname').value;

	alert( firstNameInput+""+lastNameInput);	
}

