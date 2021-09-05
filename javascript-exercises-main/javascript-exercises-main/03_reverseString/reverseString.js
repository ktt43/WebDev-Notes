const reverseString = function(str) {
    let strLength = str.length;
    let result="";
    while(strLength>=0){
        result = result+str.charAt(strLength);
        strLength--;
    }
    return result;
};

module.exports = reverseString;
