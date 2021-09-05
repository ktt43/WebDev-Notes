const repeatString = function(word,num) {  
    let result="";

    if(num<0){
        return "ERROR";
    }
    while(num){
        result=result+word;
        num--;
    }
    return result;
};

module.exports = repeatString;
