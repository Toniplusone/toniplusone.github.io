function getInfo() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
  
     document.getElementById("greeting").textContent = "Welcome to Toni's Business Solutions, " + firstName + " " + middleInitial + ". " + lastName + "!";
   
  businessSol();
}

function businessSol() {
  for (let i = 1; i <= 140; i++) {
    var word = '';
    
    if (i % 3 === 0) {
      word = word.concat('HELP');
    } 
    
    if (i % 5 === 0) {
      word = word.concat('SOLUTIONS!');
    }
    
    if (word === '') {
      word = 'Yea';
    }
      
      
    
   
      var newItem = document.createElement('li');
    
    
    var newText = document.createTextNode(i + " : " + word);
    
    
    newItem.appendChild(newText);
    
    
    var newPosition = document.getElementsByTagName('ul')[0];
    
    
    newPosition.appendChild(newItem);
    
  }
  
}