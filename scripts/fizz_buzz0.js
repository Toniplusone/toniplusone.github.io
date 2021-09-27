
function formSubmit() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let middleInitial = document.getElementById('middleInitial').value;
        
   document.getElementById("greeting").textContent = "Welcome to Tonis Business Solutinos, " + firstName + " " + middleInitial + ". " + lastName + "!";
  let count = prompt(`How high do you want to count, ${firstName}?`);
  fizzBuzz(count);
}

function fizzBuzz(counter) {
  for(let i = 0; i <= counter; i++) {
    var even_odd;
    
    if (i % 2 === 0) {
      even_odd = 'the number is even';
    } else {
      even_odd = 'the number is odd';
    }
    
    //creates new element & stores in variable
    var newElement = document.createElement('li');
    
    //creates text node & stores in variable
    var newText = document.createTextNode(i + ' Business SOlutions - ' + even_odd);
    
    //attaches text node to new element
    newElement.appendChild(newText);
    
    //find position where element should be added
    var newPosition = document.getElementsByTagName('ul')[0];
    
    //insert new element in correct position
    newPosition.appendChild(newElement);
    
  }
  
}