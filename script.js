function checkAge() {
    const ageInput = document.getElementById("ageInput");
    const age = parseInt(ageInput.value);
  
    while (true) {
      if (isNaN(age) || age < 1) {
        alert("Please enter a valid age.");
        break;
      }
  
      if (age < 18) {
        alert("Sorry! You must be 18+ to access Gamer Haven.");
        ageInput.value = '';
        break;
      }
  
      document.getElementById("ageOverlay").style.display = "none";
      break;
    }
  }
  