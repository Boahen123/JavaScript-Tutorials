// Comparison Operators
let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
}
else {
  console.log('We can eat later!')
}

// Logical Operators
let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && !tirednessLevel) {
  console.log('time to sleep');
}
else {
  console.log('not bed time yet');
}

// Truthy and falsy
let wordCount = 5;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


// Truthy and falsy assignment
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator