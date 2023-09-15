// Declare and assign the variables below

let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof milesPerKm);

// Calculate a space mission below

let miToMars = distanceToMars * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

console.log(milesToMars);
console.log(hoursToMars);
console.log(daysToMars);


// Print the results of the space mission calculations below

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")

// Calculate a trip to the moon below

let shuttleSpeed2 = "17500";
let distanceToMoon = 384400;
let milesPerKm2 = 0.621;

let milesToMoon = distanceToMoon * milesPerKm2;
let hoursToMoon = milesToMoon / shuttleSpeed2;
let daysToMoon = hoursToMoon / 24;

console.log(distanceToMoon);
console.log(hoursToMoon);
console.log(daysToMoon);

// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");