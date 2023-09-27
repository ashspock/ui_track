// Syntax to create a promise
// new Promise(function (resolve, reject) {
//     resolve();
//     reject();
// })

// callback 
// new Promise(function (resolve, reject) {
//     resolve();
// })
// .then( _ => console.log('then invoked'));
// .catch();
//      then invoked

// new Promise(function (resolve, reject) {
//     //resolve();
// })
// .then( _ => console.log('then invoked')); // no output
// whenever resolved() is called .then is invoked 

// new Promise(function (resolve, reject) {
//     //resolve();
//     reject();
// })
// .catch( _ => console.log('catch invoked')); //   catch invoked

// new Promise(function (resolve, reject) {
//     resolve();
//     reject();
// })
// .catch( _ => console.log('catch invoked'))
// .then( _ => console.log('then invoked'));
/**
 * then invoked
 */
// -----------------------------------------------------------------------
// new Promise(function (resolve, reject) {
//     resolve('this is data');
//     //reject('catch data');
// })
// //.catch( _ => console.log('_'))
// .then( _ => {console.log(_)
// })
// .catch( _ => {// for error or reject called
//     console.log(_)
// })
// .then( _ => {
//     console.log('second then')
// }) 

/**
 *  this is data
    second then
 */


// let val;
// let func = () => console.log(val);

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         val = 26;
//         resolve();// will be called after 1sec, till then promise is in pending state
//     },1000);
// })
// .then(() => {
//     func();
// })

/**
 * resolved
 * rejected
 * pending
 */

// -----------------------------------------------------------------------------------------

// let val;
// let func = () => console.log(val);

// function promiseRet(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             val = 26;
//             resolve(val);// will be called after 1sec, till then promise is in pending state
//         },1000);
//     })
// }

// promiseRet().then(data => {
//     func(data);
//     throw new Error("Custom Error Message")
// })
// .catch( (some) => {
//     console.log(some.message);
// } )
/**
 *  26
    Custom Error Message
 */
// --------------------------------------------------------------------------------------------------

// let val;
// let func = () => console.log(val);

// function promiseRet(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             val = 26;
//             resolve(val);// will be called after 1sec, till then promise is in pending state
//         },1000);
//     })
// }
// //console.log(promiseRet()); // Promise { <pending> }
// promiseRet().then(data => { // promise invoked > wait 1 sec > resolve called > .then called
//     func(data);
//     console.log('1st then');
//     // throw new Error("Custom Error Message")
// })
// .catch( (data) => {
//     console.log(data);
// } )
// console.log(2);
// console.log(promiseRet());
/**
            2
            26
            1st then
 */

// -------------------------------------------------------------------------- 

// let val;
// let func = () => console.log(val);

// function promiseRet(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             val = 26;
//             resolve(val);// will be called after 1sec, till then promise is in pending state
//         },1000);
//     })
// }
// //console.log(promiseRet()); // Promise { <pending> }
// promiseRet().then(data => { // promise invoked > wait 1 sec > resolve called > .then called
//     func(data);
//     console.log('1st then');
//     // throw new Error("Custom Error Message")
// })
// .catch( (data) => {
//     console.log('1st catch');
// } )
// .then(() => {
//     console.log('2nd then');
// })
// .then(() => {
//     console.log('3rd then');
// })
//console.log(2);                                                       
            /***
             * 26 
            1st then
            2nd then
            3rd then
             */

//-------------------------------------------------------------------

// let val;
// let func = () => console.log(val);

// function promiseRet(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             val = 26;
//             reject(val);// will be called after 1sec, till then promise is in pending state
//         },1000);
//     })
// }
// //console.log(promiseRet()); // Promise { <pending> }
// promiseRet().then(data => { // promise invoked > wait 1 sec > resolve called > .then called
//     func(data);
//     console.log('1st then');
//     // throw new Error("Custom Error Message")
// })
// .catch( (data) => {
//     console.log('1st catch');
// } )
// .then(() => {
//     console.log('2nd then');
// })
// .then(() => {
//     console.log('3rd then');
// })

                /**
                 *  1st catch
                    2nd then
                    3rd then
                    >> assume reject is like an error
                 */
// ---------------------------------------------------------------------------------------

// let val;
// let func = () => console.log(val);

// function promiseRet(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             val = 26;
//             reject(val);// will be called after 1sec, till then promise is in pending state
//         },1000);
//     })
// }
// //console.log(promiseRet()); // Promise { <pending> }
// promiseRet().then(data => { // promise invoked > wait 1 sec > resolve called > .then called
//     func(data);
//     console.log('1st then');
//     // throw new Error("Custom Error Message")
    
// })
// .catch( (data) => {
//     console.log('1st catch');
//     throw new Error('error code');
// } )
// .then(() => {
//     console.log('coming from prev block', data);
//     console.log('2nd then');
// })
// .catch((e) => {
//     console.log(e.message);
//     console.log('2nd catch')
// })
// .then(() => {
//     console.log('3rd then');
// })

