// Scope => to what part of the code a variable is accessible
/**
 * 1. GLobal
 * 2. Local 
 * 3. Block Level 
*/ 

//Global: >>> can be created anywhere and is accessible everywhere  **not used
// j =45;// create a variable anytime that will be accessible to all program
// function defineVar(){
//     i=90;
// }
// if(true){
//     k=97;
// }
// defineVar();// if commented will throw an error becoz dunc not invoked
// console.log(i);
// console.log(j);
// console.log(k);

// Local/Functional Scope*
// variable created inside a function is not accessible outside the function
// var varName = 'Helo';

// function createLocalVar(){ 
//     var fruitName = 'apple'; // local variable
// }
// createLocalVar();
// console.log(fruitName); //  ReferenceError: fruitName is not defined


/**
 
 */


// var v2 = 'hello';//as a global variable 
// function createLocalVar(){  
//     var fruitName = 'apple';//Local Scope
//     console.log('inside func', fruitName);// inside func apple
//     console.log('inside func', v2);// inside func hello
// }
// createLocalVar();// function invoked
// //console.log('outside func', fruitName);// error: fruitName is not defined
// console.log('outside func', v2);// outside func hello
// console.log(fruitName);//error


/* Hoisting -> local scope
    JS is an interpreted language, that is goes line by line
*/

// console.log(v4);//error: undefined  ReferenceError: v4 is not defined
// console.log(v3);//undefined
// v4;
// var v3 = 'hello';
// console.log(v3);//hello

// Variable Hoisting -> local scope > before code starts running, 
//                              all variables with var scope will be defined

// console.log(v3);// undefined
// var v3 = 'hello';

// var v3;
// console.log(v3);// hello
// var v3 = 'hello';

// console.log(v4);//undefined
// if(true){
//     var v4 = 'hello';
// }

// console.log(v2); //    ** ReferenceError: v2 is not defined
// function decl(params){
//     var v2 = 'Hello';
// }
// decl();

 //   **not an error   
// function decl(params){
//     console.log(v2); //     Undefined
//     var v2 = 'Hello';
// }
// decl();

// *** global scope variables are not good to use
// a variable that is not declared should never be accessable

// Block scope variable -> variable created inside block won't be accessible outside a block
/*
    {
        Block
    }
    1. let
    2. const
*/

//let v6 = '12'; //ouside block
//if(true){
    //console.log(v5); // ReferenceError: Cannot access 'v5' before initialization
    //let v5 = 'hey';
    //console.log(v5); // hey
    //console.log(v6);    // 12
//}
//console.log(v5); //     ReferenceError: v5 is not defined

// const -> block scope variable >constant >cannot be changed
//const v7 = 'man';
//v7 = 'hello'; //    TypeError: Assignment to constant variable.
//console.log(v7);
