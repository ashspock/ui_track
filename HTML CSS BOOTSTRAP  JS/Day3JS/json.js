// JSON > Javascript Object Notation
// JSON > Object + Notation('')

let normalObj = {empName : 'John', age : 26};
// normal object -> JSON
// 1. object should have ' at start and end > '{}'
// 2. each key name should be embedded with "" > {"keyname":value }
// 3. string values should also be double quotes

let jsonObj = '{"empName" : "John", "age" : 26}'; // json // manual
console.log(typeof jsonObj); // *** String
// uses :> performance 
    //   >  transfer of data b/w one server(client) to another(user) is done using json
    //      beco'z there might be different framework in frontend and backend  
// Object to JSON -> stringify
let normalToJSON = JSON.stringify(normalObj);
console.log('normalToJSON', normalObj, typeof normalToJSON); // normalToJSON { empName: 'John', age: 26 } string **
console.log('string', String(normalObj)); // string [object Object] // wrong way to stringify obj
//     
    //  JSON to obj -> JSON.parse
let jsonToObj = JSON.parse(normalToJSON);
console.log(jsonToObj, typeof jsonToObj); // { empName: 'John', age: 26 } object
// inside string we cannot access keynames and values ***
// JSON itself is a string
// console.log(JSON.parse({empName : 'hello'}));// error improper value passed to parse only jason allowed