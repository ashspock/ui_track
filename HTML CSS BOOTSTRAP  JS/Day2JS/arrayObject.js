// placesToVisit = ["Paris", "New York", "Switzerland"];
// console.log(placesToVisit[0]);
// // Paris
// console.log(placesToVisit[2]);
// // Switzerland
// console.log(placesToVisit);
//  [ 'Paris', 'New York', 'Switzerland' ]

// Array Functions
// 1. push() > insertion at end
placesToVisit = ["Paris", "New York", "Switzerland"];
placesToVisit.push("London","New Delhi");
console.log(placesToVisit);

//2. pop() > remove from last
//console.log(placesToVisit.pop());
//console.log(placesToVisit);

// 3. indexOf()
//console.log(placesToVisit.indexOf("New York"));

// slice(pos, n) >> will remove n elements from pos index
//console.log(placesToVisit.slice(2,3));

// forEach()
// placesToVisit.forEach( (place) => {
//     console.log(place);
// })

// map()
// 1.  The map() array function generates a new array.
// 2. It iterates over each element in the array, just like forEach.
// 3. map()creates a new array based on what the function does

// The map() method creates a new array populated with the results of 
// calling a provided function on every element in the calling array.



// function display_uppercase(place) {
//     return place.toUpperCase();
// }
// placesUpparCase = placesToVisit.map(display_uppercase);
// console.log(placesUpparCase);
