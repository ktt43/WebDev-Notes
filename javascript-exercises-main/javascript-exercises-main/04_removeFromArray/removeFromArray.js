const removeFromArray = function(arr,...args) {
    let inArray = arr;
    args.forEach(num=> {
        if(typeof(num)=='number' && inArray.indexOf(num) >= 0){
            inArray.splice(inArray.indexOf(num),1)
        }
    });
    return inArray;

};

module.exports = removeFromArray;
