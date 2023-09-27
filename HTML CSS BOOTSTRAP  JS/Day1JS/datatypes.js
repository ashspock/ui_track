// number, string, boolean
//no need to mention type of variable
//varname; //declaring a variable -> camelcase
// fruit list -> fruitList
            //   -> fruit_List (snake_Case)  
            //  $ and _ at the start of varname acceptible **

// empName = "John Wick" ;  //String "" or ''  
// age = 40; //number datatype there is nothing like long int short double float in JS
// isPermanant = true //boolean capT will search for a variable; here we use small t
// // ; not mandatory but to write; is good practice

// console.log(typeof empName);  //string
// console.log(typeof age); // number
// console.log(typeof isPermanant); // boolean

// JS is dynamic type language

// //JS goes line-by-line execution : Interpreted Language
//  dummyVar gets overridden to last var
//console.log(typeof dummyVar);
 
//  -> null and undefined
// let var1;//without any value hence, undefined **
// // // let is use w.r.t variable scope
// var2 = null;//null is a dummy value assigned**
// console.log(var2, typeof var2) //   null object 
// console.log(var1, typeof var1) //   undefined undefined

//--->> Type Conversion
// num to string

// cost = 45000; // global sccope variable
// costToString = String(cost);// converts to string datatype String()
// console.log('cost', cost, typeof cost);// cost 45000 number
// console.log('costToString', costToString, typeof costToString);// costToString 45000 string
// console.log(String(true), typeof String(true));// converting a boolean to string  >> true string
// console.log(String(undefined), typeof String(undefined));// undefined string
// console.log(String(null), typeof String(null));// null string
/*No implicit conversion as there is no datatype declaration in JS
 only explicit conversion */

//  ---->> To Number  
// strgNumb = '123';
// console.log(strgNumb, typeof(strgNumb));// 123 string
// toNum = Number(strgNumb);// '123' -->> 123
// console.log(toNum, typeof toNum);// 123 number            //, used to print multiple lines
// //yellow color means number 
// console.log(Number('123'));//   123
// console.log(Number('123abc'));// NaN    : not a number*
// console.log(Number(true));// 1
// console.log(Number(false));// 0
// console.log(Number(null));// 0 : null, false**
// console.log(Number(undefined));// NaN*
// console.log((!!1), typeof (!!1));//   true boolean *


