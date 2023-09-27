//
let fruitName = ['apple','banana','citrius'];
// for-of
// 
// for(const eachFruit of fruitName) {
//     let   newFruitName = eachFruit + 'hello';
//     console.log(newFruitName);
// }

// function dummyFun() {
//     console.log('invoked');    
// }
// fruitName.forEach(dummyFun);
/**
 * invoked 3 times = len of fruitName
 */

// function dummyFun(para) {
//     console.log(para);    
// }
// fruitName.forEach(dummyFun);
/**
 *  apple
    banana 
    citrius
 */

// fruitName.forEach(( _ ) => {  //  > arrow function
//     console.log( _ + ' hello');
// } )
/**
 *      applehello
        bananahello
        citriushello
 */

// for-each > only runs for loop
 let printFun = (eachFruit) => {
     //console.log(eachFruit + ' hello');
     return   eachFruit;
 }
 let retFromForEach = fruitName.forEach(printFun);
 console.log('forEach',retFromForEach);   //  forEach undefined 

 // Map > only for array methods
 let retFromMap = fruitName.map(printFun);
 console.log('map', retFromMap);  //  map [ 'apple', 'banana', 'citrius' ]















 
 // go through filter and find
 // date, objects & class
