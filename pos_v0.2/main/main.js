function filterElements(val, allItems) {
  var changeResult = {};
  allItems.forEach(function(item) {
    if (val == item.barcode) {
      changeResult = {
        name: item.name,
        unit: item.unit,
        price: item.price,
        count: 1
      };
    }
  });
  return changeResult;
}

function resultPush(val, result) {
  result.push({
    name: val.name,
    count: 1,
    unit: val.unit,
    price: val.price,
    priceSum: val.price
  });
}

function countSameElements(result, element) {
  for (var i = 0; i < result.length; i++) {
    if (result[i].name == element.name) {
      result[i].count++;
      result[i].priceSum += element.price;
      return;
    }
  }
  resultPush(element,result);
  return;
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
  profit = concatGoodsInfo(result,profit);
  profit = concatProfit(profit,sum);
  return profit;
}

function countInfo()

function printReceipt(inputs) {
  "use strict";
  var allItems = loadAllItems();
  var result = [];
  inputs.map(function(val) {
    return filterElements(val, allItems);
  }).forEach(function(element) {
    countSameElements(result, element);
  });
  var profit = concatReceiptInfo(result);
  console.log(profit);
}
