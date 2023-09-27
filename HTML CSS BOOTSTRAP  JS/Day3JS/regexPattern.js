// regex -> pattern used to check format of a value
//syntax > let regex = //;

// -> /el/ : hello, ello
/**
 *      ^[0-9] > 1st char should be (0-9)
 *      ^ => starts with : end condition not defined
 *         if [^] => acts as not operator
 *      $ => ends with
 *      ^[0-9]$ => only single number
 *    [], ^, $, * > meta characters
 *       
 *          Quantifiers >>>>
 *          ^[A-Z]+$ > at least one or more ACDNVDL
 *          ^[A-Z]?$ > none or only once A
 *          ^[A-Z]*$ > none or any number of times
 *          . => any one character
 *           ^\.$ > for . itself
 *           ^\+$ > escape regex
 * 
 *          {} > lenght of 
 * 
 *  Requirement of pattern for mail
 * 1. before @ -> any alphbet or number but should start with alphabtet
 * 2. after @ -> only alphabet 
 * 3. should end with .com or .in     
*/

let mailRegex = /^[A-Za-z][A-za-z0-9]*@[A-Za-z]+\.(com|in)$/; // **
let email = 'abc@gmail.com';
//shorter format*

// test() > works for both number or strings

let isMatched = new RegExp(mailRegex).test(email); // returns boolean
console.log(isMatched); // true

// match() > only for strings, doesn't return true or false

let op = new RegExp(/[0-9]+/).test(120);
console.log(op);

// match -> returns null or arrays
let matchop = email.match(mailRegex);
console.log(matchop);