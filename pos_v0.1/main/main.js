function mergeSameElements(val,result) {
  // var sign = 0;
  // result.forEach(function(item) {
  //   if(item.name == val.name) {
  //     item.count++;
  //     item.priceSum += val.price;
  //     sign = 1;
  //   }
  // });
  // if(sign === 0) {
  //   result.push({name:val.name,count:1,unit:val.unit,price:val.price,priceSum:val.price});
  // }
  for (var i = 0; i < result.length; i++) {
    if(result[i].name == val.name) {
      result[i].count++;
      result[i].priceSum += val.price;
      return;
    }
  }
  result.push({name:val.name,count:1,unit:val.unit,price:val.price,priceSum:val.price});
  return;
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
  var profit = "***<没钱赚商店>收据***\n";
  var result = [];
  inputs.forEach(function(val) {
    mergeSameElements(val,result);
  });
  profit = produceResult(result,profit);
  console.log(profit);
}
