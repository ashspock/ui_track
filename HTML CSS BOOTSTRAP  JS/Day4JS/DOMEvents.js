// console.log('DOMEvents.js');

function loaded(e){// when body tag is completed / when page is loaded
    console.log('loaded');
    let obj = {
        "SET" : "System Engineer Trainee",
        "SE" : "System Engineer Trainee",
        "SSE" : "Senior System Engineer",
        "SSE2" : "Senior System Engineer"
    };

    let roleBlock = document.getElementById("roleBlock");
    // console.log(roleback);
    // roleBlock.innerHTML += '<option>1</option>';

    for (const key in obj){
        console.log(key);
        console.log(obj[key]);
        roleBlock.innerHTML += '<option value='+obj[key]+'</option>';
    }
}
function onMailChange(e){
    // console.log('inside function')
    // console.log(e);
    //  console.log(e.target);
    //  console.log(e.target.value);// access value in input
    let enteredValue = event.target.value;
    let regex = /^\w+@gmail\.(com|in)$/;
    if(new RegExp(regex).test(enteredValue)){
        document.getElementById('mailError').innerText = 'Correct';
        document.getElementById('submitBtn').disabled = 'false';
    }
    else{
        document.getElementById('mailError').innerText = 'Incorrect';
    }

}
//trigger an event based on select field
function onRoleChange(event) {
    console.log(event.target.value);
    if(event.enteredValue){
        document.getElementById('roleError').innerText = '';
    }
    else{
        document.getElementById('roleError').innerText = 'Incorrect Role';
    }
}

// on click event
function onPermaChange(event) {
    // console.log('hello');
    // console.log(event.target.checked);// returns checked status 
    // console.log(event.target.id);
    // console.log(event.target.value);
    // let saved = event.target.value;
    console.log('yes', document.getElementById('yes').checked);
    console.log('no', document.getElementById('no').checked);
}

//
function onSubmission(e) {
    console.log('submitted');
    e.preventDefault(); // stops default nature
    // event.stopPropagation(); // stops from refreshing // bubbling
    // let status = document.getElementById('submitBtn').disabled;
    alert("submitted");
    confirm('Shall i submit');
}


/**
 * console.log('DOM Events js ');
function loaded(){
    console.log('loaded');
    let obj ={
        "SET" : "System Engineer Trainee",
        "SE" : "System Engineer",
        "SSE" : "Senior System Engineer"
    };
}
function onMailChange(event){
    // console.log('inside func');
    let enteredValue = event.target.value;//access value in input field
    let regex = /\w+@gmail\.(com|in)/;
    if(new RegExp(regex).test(enteredValue)){
        document.getElementById('mailError').innerText='';
        document.getElementById('submitBtn').disabled = false;
    }else{
        document.getElementById('mailError').innerText='Incorrect email';
        document.getElementById('submitBtn').disabled = true;
    }
}
function onRoleChange(event) {
    console.log(event.target.value);
    if(event.target.value){
        document.getElementById('roleError').innerText = ''
    }else{
        document.getElementById('roleError').innerText = 'Incorrect role'
    }
}
from Chebolu Saiguptha (internal) to everyone:    12:20 PM
function onPermaChange(event) {
    // console.log(event.target.checked);//returns checked status of radio btn
    // console.log(event.target.id);
    // console.log(event.target.value);
    // let saved = event.target.value;
    console.log('yes',document.getElementById('yes').checked);
    console.log('no',document.getElementById('no').checked);
}
function onSubmission(e){
    console.log('submitted');
    e.preventDefault();// STOPS DEFAULT NATURE
    // alert("submmitted");
    // let data = confirm('Shall i submit')
    // console.log(data)
}

------------------------------------------------------------------------------
 let roleBlock = document.getElementById("roleBlock");
    // roleBlock.innerHTML = '<option>1</option>'
    // roleBlock.innerHTML += '<option>2</option>'
    for (const key in obj) {
        console.log(key);
        console.log(obj[key]);
        // roleBlock.innerHTML += '<option value='+key+'>'+obj[key]+'</option>'
        roleBlock.innerHTML = roleBlock.innerHTML+ '<option value='+key+'>'+obj[key]+'</option>'
    }

use map for the above code as well












 */