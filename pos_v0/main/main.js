function printReceipt(inputs) {
  var profit = "***<没钱赚商店>收据***\n";
  var sum = 0;
  inputs.forEach(function(item) {
    sum += item.count * item.price;
    profit += "名称：" + item.name + "，数量：" + item.count + item.unit +"，单价：" + item.price.toFixed(2) + "(元)，小计：" + (item.count * item.price).toFixed(2) + "(元)\n";
  });
  sum = sum.toFixed(2);
  profit += "----------------------\n";
  profit += "总计：" + sum + "(元)\n";
  profit += "**********************";
  console.log(profit);
}
