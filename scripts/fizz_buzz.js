//JS for fizzbuzz0


function formSubmit(){
	let firstName = document.getElementById('first_name').value;
	let lastName = document.getElementById('last_name').value;
	let middleInitial = document.getElementById('middle_initial').value;
	
	document.getElementById("greeting").textContent = "Welcome to Toni's Business Solutions, " + firstName +" " + middleInitial + "." + lastName + "!";
	let count = prompt(`How high do you want to count, ${firstName}?`);
fizzBuzz(count);
}

function fizzBuzz(counter) {
for(let i = 0; i <= counter; i++) {
  var evenOrOdd;
  
  if (i % 2 == 0) {
    evenOrOdd = 'This number is even';
  } else {
    evenOrOdd = 'This number is odd';
  }



   
    var element1 = document.createElement('li');
    
    
    var newText = document.createTextNode(i + ' Business Solutions ' + evenOrOdd);
    
    
    element1.appendChild(newText);
    
    //element's postition
    var newPos = document.getElementsByTagName('ul')[0];
    
    
    newPos.appendChild(element1);
    
  }
}