const add = function(x,y) {
  if(x===undefined){
    x=0;
  }
  if(y===undefined){
    y=0;
  }
  return x+y;
	
};

const subtract = function(x,y) {
  if(x===undefined){
    x=0;
  }
  if(y===undefined){
    y=0;
  }
	
  return x-y;
};

const sum = function(array) {
  let sum=0;
  if(array.length==0){
    return sum;
  } else {
    array.forEach(num=> {
      sum+=num;
    })
  }
	
  return sum;
};

const multiply = function(array) {
    let product=1;

    array.forEach(num=>{
      product*=num;
    })

    return product;
};

const power = function(x,y) {
  let original=x;
  for(;y>1;y--){
    x*=original;
  }
  return x;
	
};

const factorial = function(x) {
  if(x==0){
    return 1;
  }

  let result=1;
  for(;x>=1;x--){
    result*=x;
  }

  return result;
	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
