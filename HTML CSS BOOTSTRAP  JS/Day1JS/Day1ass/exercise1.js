let str = "thequickbrownfoxjumpsoverthelazydog";
let v = "";
for(i=0;i<str.length;i++){
    if(v.indexOf(str[i]) === -1)
        v += str[i];
}
console.log(v);