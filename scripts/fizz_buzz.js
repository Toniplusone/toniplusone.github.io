//JS for fizzbuzz0


function formSubmit(){
	let firstName = document.getElementById('first_name').value;
	let lastName = document.getElementById('last_name').value;
	let middleInitial = document.getElementById('middle_initial').value;
	
	document.getElementById("greeting").textContent = "Welcome to Toni's Business Solutions, " + firstName +" " + middleInitial + "." + lastName + "!";
	let count = prompt(`How high do you want to count, ${firstName}?`);
buzz(count);
}

function buzz(count) {
for (let i = 0; i <= counter; i++) {
  var even_odd;
  
  if (i % 2 === 0) {
    even_odd = 'This number is even';
  } else {
    even_odd = 'This number is odd';
  }



   
    var element1 = document.createElement('li');
    
    
    var text = document.createTextNode(i + ' Business Solutions ' + even_odd);
    
    
    element1.appendChild(text);
    
    //element's postition
    var newPos = document.getElementsByTagName('ul')[0];
    
    
    newPos.appendChild(element1);
    
  }
}