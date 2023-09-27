// DOM -> Document Object Model
// nested objects
// {
//     html :{
        
//         children:{
//             head:{

//                 }
//             body:{
//                 div:{

//                 }
//                 span:{

//                 }
//             }
        
//     }}
// }

// console.log('This is inside DOM.JS');
// console.log(document); // DOM -> created by browser

// access by tag name
// tags -> array
let tags = document.getElementsByTagName('span'); // fetch all p tags
console.log(tags);

// access by class
// let classDoc = document.getElementsByClassName('special'); // fetch all classes named 'special'
// console.log(classDoc);

// access by id
// let idDoc = document.getElementById('id1');
// console.log(idDoc);

// let pById = document.getElementById('id1');
// console.log(pById);
// console.log(pById.id); // id1
// console.log(pById.innerText); // Parag1
// changing inner text
// pById.innerText = 'Change text';
// pById.innerText = '<h1>text</h1>';
// console.log(pById.innerText); // Change text   // <h1>text</h1>

// **changing html
// let spanById = document.getElementById('spanId');
// console.log(spanById);
// spanById.innerText = 'hello world';

// spanById.innerHTML = "<h1 style = 'color:red'>Hey</h1>";

// input by id
// let inputById = document.getElementById('name');
// console.log(inputById); // null
// console.log(inputById.value);// retrieves value entered

// radio
// let radioByID = document.getElementById('radioBtn');
// console.log(radioByID.checked);
