function printReceipt(inputs) {
  var receipt = '';
  // receipt += Datetime();
  //  var datetime = new Datetime();
  //  receipt += datetime.getFormattedDate();
  var scanner = new Scanner();
  var scannerResult = scanner.changeForm(inputs);
  var cart = new Cart();
  cart.add(scannerResult);
  var pos = new Pos();
  receipt += pos.concatReceiptString(cart);
  console.log(receipt);
}
