// let func = () => console.log(val);
// let val;
// function promiseRet(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             val = 26;
//             resolve(val);// will be called after 1sec, till then promise is in pending state
//         },1000);
//     })
// }

// //  *handle promise using async-await

// function handlingPromise(){
//     let ret = promiseRet();
//     console.log(val);
// }

// handlingPromise();
// output : undefined  
// ------------------------------------------

// let func = () => console.log(val);
// let val;
// function promiseRet(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             val = 26;
//             resolve(val);// will be called after 1sec, till then promise is in pending state
//         },1000);
//     })
// }

// //  handle promise using async-await >> waits till promise is rej or res

// async function handlingPromise(){
//     let ret = await promiseRet();
//     console.log(val);
// }

// handlingPromise();

// output 26

// --------------------------------------------------------------
/**
 * Sir's Code
 * 
 * 
let val;

let func = () => console.log(val)
function promiseRet() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            val = 26;
            resolve(val);
        }, 2009);
    })
}

// handle promise using async-await - waits till promise is rej or res
async function handlingPromise(){
    let ret = await promiseRet();
    console.log('ret',ret);
    console.log('val', val);
}
handlingPromise();
 */
