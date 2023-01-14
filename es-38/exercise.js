function printName(){
    let helloName = 'Hello John';
    setTimeout(inner, 1000);
    function inner(){
        return helloName;
    }
    return inner;
}

console.log(printName()());
