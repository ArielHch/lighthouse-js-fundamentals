const temperature = 45  ;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else if (temperature > 32) {
  console.log("It\'s time for Bikini");
} else {
  console.log("Short sleeves are fine.");
}console.log("Now you're ready to go outside!");


//Logical operators - example 1//
const isCitizen = true;
const age = 25 ;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//Logical operators - example 2//

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//Logical operators - example 3//

if (!raining) {
  console.log("Leave your umbrella at home!");
}