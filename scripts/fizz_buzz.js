//JS for fizzbuzz0


function getInfo() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
  if (middleInitial) {
     document.getElementById("greeting").textContent = "Welcome to Toni's Business Solutions, " + firstName + " " + middleInitial + ". " + lastName + "!";
   } else {
     document.getElementById("greeting").textContent = "Welcome to Toni's Business Solutions, " + firstName + " " + lastName + "!";
   }
  
  let howHigh = prompt(`How high should we count, ${firstName}?`);
  businessSol(howHigh);
}

function businessSol(counter) {
  for(let i = 0; i <= counter; i++) {
    var evenOrOdd;
    
    if (i % 2 === 0) {
      evenOrOdd = 'This number is even';
    } else {
      evenOrOdd = 'This number is odd';
    }
    
    
    var newItem = document.createElement('li');
    
    
    var newText = document.createTextNode(i + ' Business Solutions - ' + evenOrOdd);
    
    
    newItem.appendChild(newText);
    
    
    var newPosition = document.getElementsByTagName('ul')[0];
    
    
    newPosition.appendChild(newItem);
    
  }
  
}