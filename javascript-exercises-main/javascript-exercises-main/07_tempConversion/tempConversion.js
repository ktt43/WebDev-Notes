const ftoc = function(temperature) {
    let result = Math.round(((temperature -32)*(5/9))*100)/100;
    return result;
};

const ctof = function(temerature) {
    return Math.round(((temperature*(9/5))+32)*100)/100;
};

module.exports = {
  ftoc,
  ctof
};
