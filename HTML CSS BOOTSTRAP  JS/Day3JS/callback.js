
// let printStmt = ()=> console.log('print');
// setTimeout(printStmt, 2000); // invokes a function after a set interval of time
// -----------------------------------------------------------------
// Asynchronous Execution
// let firstFunc = ()=>{
//     setTimeout(()=>{
//         console.log('first functon');
//     }, 2000);
// }
// let seconfFunc = ()=> console.log('second function');
// firstFunc();
// seconfFunc(); // second function printed first becoz of delay given to firstFunc

// console.log(1);
// setTimeout(() => console.log(2), 2000);
// console.log(3);
/**
 *  1
    3
    2
 */
// -------------------------------------------------------------
// let value;
// let firstFunc = ()=>{
//     value ='25'; // 'data coming from server'
//     setTimeout(()=>{
//         console.log('first functon');
//     }, 2000);
// }
// let seconfFunc = ()=> console.log(value);
// firstFunc();
// seconfFunc(); // second function printed first becoz of delay given to firstFunc

/**
 *  25
    first functon
 */
// ---------------------------------------------------
// let value;
// let firstFunc = ()=>{
//     setTimeout(()=>{
//         value ='25'; // 'data coming from server'
//         console.log('first functon');
//     }, 2000);
// }
// // JS will not wait and will jump to second func where value is undefined
// let seconfFunc = ()=> console.log(value);
// firstFunc();
// seconfFunc(); 

/**
 *  undefined
    first functon
 */
// -----------------------------------------------------------------
// let value;
// let firstFunc = ()=>{
//     setTimeout(()=>{
//         value ='25'; // 'data coming from server'
//         seconfFunc();// now value is set to 25 and after that we are displaying
//         console.log('first functon');
//     }, 2000);
// }
// // JS will not wait and will jump to second func where value is undefined
// let seconfFunc = ()=> console.log(value);
// firstFunc();
//seconfFunc(); 
/**
 *  25
    first functon
    > second func called only after setting value to 25
 */
// ---------------------------------------------------------------------
// callback **
let value;
let secondFunc = ()=> console.log(value);
let thirdFunc = ()=> console.log(value + 25);

let firstFunc = (callback)=>{
    setTimeout(function () {
        value =25; // 'data coming from server'
        callback();
        // /secondFunc();// now value is set to 25 and after that we are displaying
        //console.log('first functon');
    }, 2000);
}
// JS will not wait and will jump to second func where value is undefined

firstFunc(secondFunc);// secondFunc is called as a call back function
firstFunc(thirdFunc); 
/*
    25
    50
*/

// ------------------------------------------------------------------------------
// callback hell >> to many callback >> hence promises 

