function Cart() {
  this.cartItems = [];
}

Cart.prototype._group = function(scannerResult) {
  var groupResult = {};
  scannerResult.forEach(function(val) {
    groupResult[val.barcode] = groupResult[val.barcode] || 0;
    groupResult[val.barcode] += val.count;
  });
  return groupResult;
};

Cart.prototype.add = function(scannerResult){
  var groupResult =  this._group(scannerResult);
  for (var item in groupResult) {
    var cartItem = new CartItem(item,groupResult[item]);
    this.cartItems.push(cartItem);
  }
};

Cart.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  this.cartItems.forEach(function(val) {
    totalPrice += val.getSubTotal();
  });
  return totalPrice;
};

Cart.prototype.getSaveMoney = function() {
  var TotalMoney = 0;
  this.cartItems.forEach(function(val) {
    TotalMoney += val.count * val._itemInfo.price;
  });
  return (TotalMoney - this.getTotalPrice());
};
