// directly create object without classes
let obj = {
    key : 'value',// overriding key
    // key : 'value2',
    age : 26,
    name : 'Jason', 
    '123hello' : 'This is a value', // not valid key name
    skills : ['react','node'],
    dummyObj : {nestedobj : {dummyKey : "dummyValue"}},
    addSkill(){
        //console.log('add skill is here');
        //console.log(this);
        this.skills.push('mongoDb');// modifying object values
        console.log(this.skills); // [ 'react', 'node', 'mongoDb' ]
    }
}
//console.log(obj); // { key: 'value', name: 'Jason' }
// console.log(obj.name); // Jason
// console.log(obj.key); // value
// console.log(obj["123hello"]); // ** accessing the other way
//console.log(obj.dummyObj.nestedobj.dummyKey); // ** dummyValue
//obj.addSkill();
// fruitName = ['apple','banana'];
// fruitCost = [26,40];
// console.log(fruitCost[fruitName.indexOf('apple') ]);     // 26

// for loop of object to print all values
// for(const key2 in obj){
//     // console.log(key);
//     console.log(obj.key2); // ** searching for key itself which is undefined
// }

// for(const key2 in obj){
//     // console.log(key);
//     console.log(obj[key2]); // ** returns all 
// }

// Easier Way
// *** Object.keys(<<Obj>>) -> creates a list of key names
// let keyNames = Object.keys(obj);
// console.log(keyNames); // retruns all keys in a list/array form
/***
 * [
  'key',      'age',
  'name',     '123hello',
  'skills',   'dummyObj',
  'addSkill'
    ]
 */
// let values = Object.values(obj);
// console.log(values);// return all the keys' values 
/**
 * [
  'value',
  26,
  'Jason',
  'This is a value',
  [ 'react', 'node' ],
  { nestedobj: { dummyKey: 'dummyValue' } },
  [Function: addSkill]
    ]
 */
// obj.age=30 // modifying age to 30

// Concatenation
let obj1 = {key1: 'value3',key2 : 'value4' };
let obj2 = {key1: 'value1',key2 : 'value2' };
let obj3 = {};
// 1.
// for (const key in obj2){
//     obj3[key] = obj2[key]; // obj 2 >>> obj2  
// }

// 2. **>spread operator
// obj3 = {...obj2};
// console.log('Obj3', obj3);
//obj3 = obj2; // not valid for more than single object
obj3 = {...obj1,...obj2};
console.log('Obj3', obj3);
 
// Object Destructuring > self