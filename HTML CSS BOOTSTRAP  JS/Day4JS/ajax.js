// ajax -> used to make a requrest to the server -> used to get jason files
//

console.log('This is ajax.js');
function makeAjaxCall() {
    console.log('on load');

//     // 1. create xml http obj
    let xhr = new XMLHttpRequest();

//     //2. entering method name and url
    xhr.open('GET', './data.json');

//     //3. *handling incoming data
    xhr.onload = () => {  // automatically invoked once data.json is fetched
//         // onload func inside xhr
//         // we don't know when is the data.json is downloaded
//         // will make sure that data.json is loaded
//         //** different from onload method of html
        console.log('data received');
        console.log('inside onload', xhr.responseText);
        console.log(typeof xhr.responseText);
        console.log(JSON.parse(xhr.responseText));
    }
    console.log('outside onload',  xhr.responseText);

//     //4. sending request
    xhr.send();

//     // JS jumps to next line
//     // file open
//     // set
//     // promises    
}

// browser (request : xhr.send) -> server(data.json)
// server -> browser
// browser (xhr.send)--> data.json
// data.json when received--> .onload invoked--> xhr.responseText
// -------------------------------------------------------------------------------------------

//Error handling

// function makeAjaxCall() {
//     console.log('on load');

//     // 1. create xml http obj
//     let xhr = new XMLHttpRequest();

//     //2. entering method name and url
//     xhr.open('GET', './data.json');

//     //3. *handling incoming data
//     xhr.onload = () => {  // automatically invoked once data.json is fetched
//         // onload func inside xhr
//         // we don't know when is the data.json is downloaded
//         // will make sure that data.json is loaded
//         //** different from onload method of html
        
//         // console.log('data received');
//         // console.log('inside onload', xhr.responseText);
//         //console.log(typeof xhr.responseText);
//         // console.log(JSON.parse(xhr.responseText));

//         try{
//             let data = JSON.parse(xhr.responseText);
//             console.log(data);
//             console.log("2");
//         }catch(err){
//             console.log("Error Message: ", err.message);
//         }finally{
//             console.log('finally is invoked after try/catch');
//         }

//     }
    
//     //4. sending request
//     xhr.send();
//     console.log('outside onload',  xhr.responseText);

    
// }

// try{
//     throw new Error("custom error");
// }catch(e){
//     console.log(e.message);
// }

// try{
//     throw new Error("1")
// }catch(){

// }finally{
//     console.log('2');
// }

// try{
//     try{
//         throw new Error("1");
//     }
//     finally{
//         console.log('2');
//     }
// }catch(e){
//     console.log(e.message);
// } //first finally then catch 
//