function filterElements(val,allItems) {
  var changeResult = {};
  allItems.forEach(function(item) {
    if(val == item.barcode) {
      changeResult = {name:item.name,unit:item.unit,price:item.price,count:1};
    }
  });
  return changeResult;
}

function countSameElements(result,element) {
  var sign = 0;
  result.forEach(function(item) {
    if(item.name == element.name) {
      item.count++;
      item.priceSum += element.price;
      sign = 1;
    }
  });
  if(sign === 0) {
    result.push({name:element.name,count:1,unit:element.unit,price:element.price,priceSum:element.price});
  }
}

function produceResult(result,profit) {
  var sum = 0;
  result.forEach(function(item) {
    profit += "名称：" + item.name + "，数量：" + item.count + item.unit + "，单价：" +
              item.price.toFixed(2) + "(元)，小计：" + item.priceSum.toFixed(2) + "(元)\n";
    sum += item.priceSum;
  });
  profit += "----------------------\n" + "总计：" + sum.toFixed(2) + "(元)\n**********************";
  return profit;
}

function printReceipt(inputs) {
  allItems = loadAllItems();
  var profit = "***<没钱赚商店>收据***\n";
  var result = [];
  inputs.map(function(val) {
    return filterElements(val,allItems);
  }).forEach(function(element) {
    countSameElements(result,element);
  });
  profit = produceResult(result,profit);
  console.log(profit);
}
