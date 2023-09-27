
// var empOne = {
//     name : "John",
//     empNumber : 1001,
//     emailId : "John@gmail.com"
// };

// //to get property names
// console.log("property names:")
// for(let property in empOne){
//   console.log(property);
// }


// // to get the values of property
// console.log("property values:")
// for(let property in empOne){
//   console.log(property," : ",empOne[property]);
// }

// // to get the values of property using Object.values()
// console.log("property values using Object.values():")
// console.log(typeof(Object.values(empOne)), Object.values(empOne));

// Good Questions from here on >>>


//1.
// function Ticket(from, to, name){
//     this.from = from;
//     this.to = to;
//     this.name = name;
// }

// var ticket = new Ticket("Mysor", "Chennai", "kris");

// console.log(ticket.from);
// //"Mysor"

// // console.log(ticket{to});
// // erro  >> VM477:1 Uncaught SyntaxError: Unexpected token '{'

// // console.log(ticket[to]);
// //error  >> VM506:1 Uncaught ReferenceError: to is not defined
// //    at <anonymous>:1:8
// //(anonymous) @ VM506:1

// console.log(ticket["to"]);
//"Chennai"

//2.
// class shelter {
//     constructor(para) {
//         this.para = para;
//     }
// }
// class cage extends shelter {
//     constructor(para, lock) {
//         super(para, lock);
//         this.lock = lock;
//     }
//     getCage() {
//         console.log(this.para + "-" + this.lock + ' d');
//     }
// }
// obj = new cage("monkey", "closed");
// //cage {para1: "monkey", lock: "closed"}
// obj.getCage();
// // monkey-closed d

// ------------------------------------------------------------------
// var mobJson='{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'

// const obj = JSON.parse(mobJson);
// console.log(obj.seller.name,
//     " shipped a ",
//      obj.product.name,
//      obj.product.series,
//       " worth ",
//     obj.price,
//      " with productId ", 
//      obj.productId
// );
// xyz Mobile  shipped a  Moto G5+  worth  14900  with productId  1001
// -----------------------------------------------------------------------------------


// try{
//     try{
//         throw new Error('oopa');
//     }
//     finally{
//         console.log('finally');
//     }
// }catch(ex){
//     console.log("outer", ex.message);
// }

// ---------------------------------------------------

// function foo(){
//     try{
//         try{
//             bar();
//         }
//         catch(ex){
//             console.log('inner', ex.message);
//             throw ex;
//         }
//         finally{
//             console.log('finally');
//             return;
//         }
//     }
//     catch(ex){
//         console.log('outer', ex.message);
//     }
// };

// function bar(){
//     try{
//         throw new Error('oops');
//     }
//     finally{
//         console.log('over');
//     }
// }foo();

// ------------------------------------------------

// try{
//     console.log("A");
//     var result = 10+b;
//     console.log("B");
// }catch(err){
//     console.log("C");
// }finally{
//     console.log("D");
// }

// -------------------------------------------------

// JSON & Exception Handling Exercise

// var input = {  key1 : "value1", key2 : "value2" };
var input = '{  "key1" : "value1", "key2" : "value2" }';
// // if(typeof(input) === "object")
// // console.log("Yes");
// console.log(typeof(input));
// console.log(JSON.parse(input));
// console.log(typeof(JSON.parse(input)));
function is_json(value){
    return toString.call(value) === '[object Object]'
}
console.log(is_json(input));
console.log(typeof(input));

/**
 * Every object has a toString() method 
 * that is automatically called when the object 
 * is to be represented as a text value or 
 * when an object is referred to in a manner 
 * in which a string is expected.
 */

 const o = new Object();
console.log(o.toString()); 

// JS object ass.
// var student = { 
//     name : "David Rayy", 
//     sclass : "VI", 
//     rollno : 12 
// };
// console.log(student.name,",",student.sclass,",",student.rollno);

