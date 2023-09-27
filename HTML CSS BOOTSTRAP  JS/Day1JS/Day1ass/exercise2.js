//Palindrome

let str = "madam";
let nstr;
for(i=str.length;i>=0;i--)
{
    nstr += str[i];
}
if(nstr.localeCompare(str)){
//if(nstr === (str)){
    console.log('True');
}
else{
    console.log('False');
}
console.log(nstr);