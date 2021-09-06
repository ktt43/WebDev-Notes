const removeFromArray = function(arr,...args) {
    let inArray = arr;
    args.forEach(value=> {
     //   let valueIndex = inArray.indexOf(value);

        if( inArray.indexOf(value)>=0){
            inArray.splice(inArray.indexOf(value),1)
        }
    });
    return inArray;

};

module.exports = removeFromArray;
