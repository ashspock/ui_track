// Arrow Functions

// let func = function (){
//     console.log('Hello World');
// }
// // func(); //  Hello World
// func;
// console.log(func); //    [Function: func]
// //Function without a name > anonymous function 
// console.log(function (){
//     console.log('Hello World'); 
// }); // [Function (anonymous)] 

// Short Hand Syntax Functions
//  1. no need of function keyword
//  2. arrow b/w ()  and {}

// 1>
// let func2 = () => {
//     return 'hello';
// }
// console.log(func2); // [Function: func2]
// console.log(func2()); // hello

// 2> 
// let func2 = (para1 ,para2) => {
//     return para1+para2;
// }
// console.log(func2); // [Function: func2]
// console.log(func2(1,2)); // 3

// 3>
// let func3 = para1 => {    // for single parameter () not needed
//     return para1 + 4;
// }
// console.log(func3(4));  //  8

// 4>
// let func4 = _ => { //  _ is used to hold single param value
//     console.log(_); //  4
//     return;
// }
// //  // console.log(func4());
// func4(4);

// 5>   // shortest way 
//   1. no return keyword
//   2. no {}
//   3. applicable only for function with 1 line of code
//   4. value rhs to => will be automatically returned
// let func5 = _ =>  _ * 6;
// console.log(func5(2)); //   12

// let func5 = _ =>  {_ * 6}; // {} used but no return keyword
// console.log(func5(2));  //  undefined **
// let func5 = _ =>  {return _ * 6}; // {} used but no return keyword
// console.log(func5(2));  //  12


// *** 
// var discount = 10;
// var amount = 1000;
// // if(true){
// //     var discount = 15;
// //     amount = 1200;
// //     console.log("in discount: " + discount);
// //     console.log("in amount: " + amount);
// // }
// function changeVal(){
//     var discount = 15;
//     amount = 1200;
//     console.log("in discount: " + discount);
//     console.log("in amount: " + amount);
// }
// changeVal();
// console.log("out discount: " + discount);
// console.log("out amount: " + amount);

