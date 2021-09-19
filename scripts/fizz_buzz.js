//JS for fizzbuzz0


function formSubmit(){
	let firstName = document.getElementById('first_name').value;
	let lastName = document.getElementById('last_name').value;
	let middleInitial = document.getElementById('middle_initial').value;
	
	document.getElementById("greeting").textContent = "Welcome to Toni's Business Solutions, " + firstName +" " + middleInitial + "." + lastName + "!";
	