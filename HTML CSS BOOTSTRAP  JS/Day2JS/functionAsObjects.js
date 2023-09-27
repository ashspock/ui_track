// Referening a function

// function printSomething(){
//     console.log('Something');
// }
// printSomething();// ordinary function call
// console.log( printSomething); //    [Function: printSomething]

                //  >>  use let or const
// let funcRef = printSomething; //creating a reference pointing to the function
//funcRef();// calling function by reference
// console.log('funcRef', funcRef); // funcRef [Function: printSomething] // the function that it is pointing to
// funcRef();  //  Something

// let difVar = function calculate(){
//     console.log('Total Cost is' +250);
// }
// // calculate(); //error
// console.log(difVar); // [Function: calculate]    


// Anonymous Function >> function without names
// let fun2 = function (){
//     console.log('Print');
// }
// //fun1(); //fun1 is not defined
// fun2(); //Print
// console.log(fun2);   // [Function: fun2]

//  Functions as params
// Function which takes function as a parameter or returns function >> Higher Order Functions**
// function func2(para){
//     console.log(para1); // referring to func1
//     para();
// }
// function func1(){
//     console.log(para1); // referring to func1
//     console.log('inside anonymous');
// }
// func2(func1);   //  inside anonymous

// func2('hello'); // hello
// let func1 = function (){console.log('inside anonymous')};   // function type parameter passed in func2
//  func2(func1); //    [Function: func1]
// func2(); //undefined

// Higher Order Function >> function which accepts/return other functions
// function greet(){
//     var hello = function welcome(){
//         console.log("hello world");
//     }
//     return hello;
// }
// var returnFunc = greet();
// returnFunc();

// Pass a function as an Argument
// function func1(){
//     return "Hello, ";
// }
// function func2(func, name){
//     console.log(func()+name);
// }
// func2(func1, "JavaScript!");// we are passing func1 as an argument to func2 >> treating function as a value
//The function that we pass as an argument to another function, 
//is called a Callback function. 
//func1 is a Callback function.

// Return a function

//1. invoked using a variable
const sayHello = function(){
    return function(){
        console.log("Hello!");
    }
}
//const myFunc = sayHello();

// 2. directly invoking
sayHello()();
