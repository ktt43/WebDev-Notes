const sumAll = function(min,max) {
    let result=0;
    if(typeof(min)!='number' || typeof(max)!='number' || min <0 || max<0){
        return 'ERROR'
    } else{


        if(min<max){
            while(min<=max){
                result+=min;
                min++;
            }
        }  else {
            while(max<=min){
                result+=max;
                max++;
            }
        }
    }

    return result;
};

module.exports = sumAll;
