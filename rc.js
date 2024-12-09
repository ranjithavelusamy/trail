// Constants

const MINIMUM_AGE = 12; // Minimum age required to ride the roller-coaster
 
// Main Game Loop

let wantsToPlay = true;
 
do {

  // Prompt the user for their age

  let userAge = prompt("What is your age?", 12);
 
  // Cancel handling

  if (userAge === null) {

    alert("Game canceled. Goodbye!");

    break;

  }
 
  // Convert the input to a number and validate it

  userAge = Number(userAge.trim());

  if (isNaN(userAge) || userAge <= 0) {

    alert("Invalid input. Please enter a valid positive number for your age.");

    continue; // Restart the loop if input is invalid

  }
 
  // Check eligibility to ride the roller-coaster

  if (userAge >= MINIMUM_AGE) {

    alert("You meet the age requirement and are allowed to ride the roller-coaster. Enjoy!");

  } else {

    // Handle parental permission for underage riders

    const hasParentalPermission = confirm("You are underage. Do you have your parents' permission?");

    if (hasParentalPermission) {

      alert("You are allowed to ride the roller-coaster with parental permission. Have fun!");

    } else {

      alert("You are NOT allowed to ride the roller-coaster without parental permission.");

    }

  }
 
  // Ask the user if they want to play again

  wantsToPlay = confirm("Would you like to check eligibility for another rider?");

} while (wantsToPlay);
 
alert("Thank you for playing the Roller-Coaster Eligibility Checker!");

 