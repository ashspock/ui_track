// Objects

// let fruitList = [1, 2, 3]; // Homogeneous Array
// let fruitList = [1, 'hello', false, null, [1,2,3]]; // Hetrogeneous Array
// let arrSyn = [ 1, 'hello', false, null ];
// // console.log(typeof arrSyn); //  ** object //In JS everything is an object
// console.log(arrSyn[8]); //  **  undefined > no value (not null)

// // push
// arrSyn.push('new Value');
// console.log(arrSyn);    //  [ 1, 'hello', false, null, 'new Value' ]
// let poppedElem = arrSyn.pop();  // popped element stored in a variable 
// console.log(poppedElem, arrSyn);    //  new Value [ 1, 'hello', false, null ]

// // indexOf
// console.log(arrSyn.indexOf('hello')); // 1
// console.log(arrSyn.indexOf('new Value')); // -1 element not present

// // slice
// console.log(arrSyn.slice(1,2)); //  [ 'hello' ] > end index not included
// console.log(arrSyn.slice(1,9)); //  [ 'hello', false, null ]
// console.log(arrSyn.length);

// Array Destructuring

// let a = [1,2,3];
// // let [b,,c] = [4,5,6]
// let [b,,c,...e] = [4,5,6,7,8,9]; // using rest opr 
// console.log('a = ', a); //  a =  [ 1, 2, 3 ]
// // console.log('b = ', b); //  b =  4
// // console.log(b,c);   //    4 6
// console.log('b = ',b,'c = ',c,'e = ',e);   //    b =  4 c =  6 e =  [ 7, 8, 9 ]

// const a = [1,2,3]; //   not re-assigning the value // a in not a varible but a reference pointing to array 
// a.push(5); // adding a value
// console.log(a); //  [ 1, 2, 3, 5 ]