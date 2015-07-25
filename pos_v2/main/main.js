function getName() {
  
}

function cartItem(barcode,count,promotionCount) {
  this.iBarcode = barcode;
  this.iCount = count;
  // promotionCount写成get方法;
  //有函数
  this.iGetName = getName();
}

function cart() {
  this.list = new cartItem();

}

function printReceipt(inputs) {

}
