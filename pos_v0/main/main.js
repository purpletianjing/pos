function countMoneySum(inputs) {
  var sum = 0;
  inputs.forEach(function(val) {
    sum += val.count * val.price;
  });
  return sum;
}

function concatGoodsInfo(inputs, profit) {
  inputs.forEach(function(item) {
    profit += "名称：" + item.name + "，数量：" + item.count +
      item.unit + "，单价：" + item.price.toFixed(2) + "(元)，小计：" +
      (item.count * item.price).toFixed(2) + "(元)\n";
  });
  return profit;
}

function concatReceiptInfo(inputs) {
  var profit = "***<没钱赚商店>收据***\n";
  var sum = 0;
  sum = countMoneySum(inputs);
  profit = concatGoodsInfo(inputs, profit);
  profit = concatProfit(profit, sum);
  return profit;
}

function concatProfit(profit, sum) {
  profit += "----------------------\n" +
    "总计：" + sum.toFixed(2) + "(元)\n" +
    "**********************";
  return profit;
}

function printReceipt(inputs) {
  var profit = concatReceiptInfo(inputs);
  console.log(profit);
}