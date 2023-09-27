// function function_Name(parameters){//statements}

// function printNumber(){
//     console.log('hello');
// }
// printNumber();
// printNumber();
// printNumber();
// printNumber();

// function printNum(para1,para2){
//     console.log(para1,para2);
// }
// printNum(1,2);// 1 > if extra value is passed the it is not allocated if variable is not present


// ... > rest operator** 

// function printNum(para1, ... para2)
// {
//     console.log(para1);//   1
//     console.log(para2);//   [ 2, 3, 4, 5 ]
// }
// printNum(1,2,3,4,5);


/*  function printNum(para1, ... para2, para3)      //SyntaxError: Rest parameter must be last formal parameter**
{
    console.log(para1);
    console.log(para2);
    console.log(para3);

}
printNum(1,2,3,4,5);

*/

// function printNum(para1,para3, ...para2){
//     console.log(para1);// 1
//     console.log(para3);// 2
//     console.log(para2);// [ 3, 4, 5 ]
//     // return 'hello';// once a return is invoked, rest lines will not get executed
//     console.log('123');
//     return para3 + 3;
// }
// //returnValue = printNum(1,2,3,4,5);// whenever a function returns a value
// console.log('Returned Value', printNum(1,2,3,4,5));// Returned Value hello
// if function is not returning any value then output is undefined

// placesToVisit= ["Paris", "New York",  "Switzerland"];

// console.log(placesToVisit);

// function filterPlaces(val) {
//     if (val.length > 5) {
//         return true;
//     }
// }
// filteredPlaces = placesToVisit.filter(filterPlaces);
// console.log(filteredPlaces );

// function as a parameter
// function func1(){
//     console.log("Hello World");
// }
// function func2(){
//     console.log("Fuck the World");
// }
// function greet(choice){
//     choice();
// }
// greet(func1);
// greet(func2);

