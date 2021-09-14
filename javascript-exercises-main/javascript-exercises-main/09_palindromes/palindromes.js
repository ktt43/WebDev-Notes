//remove spaces and punctuation then lowercase 

const palindromes = function (word) {
    word = word.toLowerCase();
    const regex = /[a-z]/g;
    const found = word.match(regex);
    word = found.join('');

    let length = word.length-1;
    let result = "";

    while(length>=0){
        result+=found[length];
        length--;
    }
    if(word==result)
    return true;

    return false;
};

module.exports = palindromes;
