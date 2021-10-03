function getInfo() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
  
     document.getElementById("greeting").textContent = "Welcome to Toni's Business Solutions, " + firstName + " " + middleInitial + ". " + lastName + "!";
   
  businessSol(firstDivisor, secondDivisor);
}

function divisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}

function businessSol(firstDivisor, secondDivisor) {
  for (let i = 1; i <= 140; i++) {
    var word = '';
    
    if (divisible(i, firstDivisor)) {
      word = word.concat('HELP');
    } 
    
    if (divisible(i, secondDivisor)) {
      word = word.concat('SOLUTIONS!');
    }
    
    if (word === '') {
      word = 'Business Solutions';
    }
      
      
    
   
      var newItem = document.createElement('li');
    
    
    var newText = document.createTextNode(i + " : " + word);
    
    
    newItem.appendChild(newText);
    
    
    var newPosition = document.getElementsByTagName('ul')[0];
    
    
    newPosition.appendChild(newItem);
    
  }
  
}