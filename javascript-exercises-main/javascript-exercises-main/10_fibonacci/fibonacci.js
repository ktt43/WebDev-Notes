const fibonacci = function(x) {
    if(!isNaN(x)){
        x=parseInt(x);
    } else if(x<0){
        return "OOPS";
    }

    if(x<=1){
        return x;
    }

    return fibonacci(x-1)+fibonacci(x-2);

};



//4
//0,1,1,2,3

module.exports = fibonacci;
