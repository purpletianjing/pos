function Pos() {

}

function pay(val) {
  var receiptString = "";
  val.getItemInfo();
  receiptString += '名称：' + val._itemInfo.name + '，数量：' +
    val.count + val._itemInfo.unit + '，单价：' +
    val._itemInfo.price.toFixed(2) + '(元)' + '，小计：' +
    val.getSubTotal().toFixed(2) + '(元)\n';
  return receiptString;
}

function everySaveGood(val, item) {
  var saveString = '';
  for (var i = 0; i < item.barcodes.length; i++) {
    if ((val.barcode === item.barcodes[i]) && val.count >= 3) {
      saveString += '名称：' + val._itemInfo.name + '，数量：' +
        parseInt(val.count / 3) + val._itemInfo.unit + '\n';
      return saveString;
    }
  }
}

function saveGoods(val) {
  var promotionItems = loadPromotions();
  var saveString = '';
  promotionItems.forEach(function(item) {
    if (everySaveGood(val, item)) {
      saveString += everySaveGood(val, item);
    }
  });
  return saveString;
}

Pos.prototype.concatReceiptString = function(cart) {
  var receiptString = '***<没钱赚商店>收据***\n';
  receiptString += '打印时间：' + Datetime['getFormattedDate']() + '\n' +
    '----------------------\n';
  var saveString = "";
  var subTotal = 0;
  cart.cartItems.forEach(function(val) {
    receiptString += pay(val);
    saveString += saveGoods(val) || '';
  });
  receiptString += '----------------------\n' + '挥泪赠送商品：\n' +
    saveString + '----------------------\n' +
    '总计：' + cart.getTotalPrice().toFixed(2) + '(元)\n' +
    '节省：' + cart.getSaveMoney().toFixed(2) + '(元)\n' + '**********************';
  return receiptString;

};