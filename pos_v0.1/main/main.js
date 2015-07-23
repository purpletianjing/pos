function resultPush(val, result) {
  result.push({
    name: val.name,
    count: 1,
    unit: val.unit,
    price: val.price,
    priceSum: val.price
  });
}

function mergeSameElements(val, result) {
  for (var i = 0; i < result.length; i++) {
    if (result[i].name == val.name) {
      result[i].count++;
      result[i].priceSum += val.price;
      return;
    }
  }
  resultPush(val, result);
}

function countMoneySum(result) {
  var sum = 0;
  result.forEach(function(item) {
    sum += item.priceSum;
  });
  return sum;
}

function concatGoodsInfo(result, profit) {
  result.forEach(function(item) {
    profit += "名称：" + item.name + "，数量：" + item.count + item.unit +
      "，单价：" + item.price.toFixed(2) + "(元)，小计：" +
      item.priceSum.toFixed(2) + "(元)\n";
  });
  return profit;
}

function concatProfit(profit, sum) {
  profit += "----------------------\n" +
    "总计：" + sum.toFixed(2) + "(元)\n" +
    "**********************";
  return profit;
}

function concatReceiptInfo(result) {
  var profit = "***<没钱赚商店>收据***\n";
  var sum = countMoneySum(result);
  profit = concatGoodsInfo(result, profit);
  profit = concatProfit(profit, sum);
  return profit;
}

function printReceipt(inputs) {
  var result = [];
  inputs.forEach(function(val) {
    mergeSameElements(val, result);
  });
  var profit = concatReceiptInfo(result);
  console.log(profit);
}