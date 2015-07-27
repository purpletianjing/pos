function Scanner() {

}

Scanner.prototype.changeForm = function(inputs) {
  var changeResult = inputs.map(function(val) {
    return ({
      barcode: val.split("-")[0],
      count: parseInt(val.split("-")[1]) || 1
    });
  });
  return changeResult;
};
