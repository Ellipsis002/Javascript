function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    let product =  value * number;
      return product;
  }
  return inner;
}

console.log (multiplyByTwo(8)());