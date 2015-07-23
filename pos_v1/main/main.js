// function filterElements(val, allItems) {
//   var changeResult = {};
//
//   allItems.forEach(function(item) {
//     if (val.split('-')[0] == item.barcode) {
//       changeResult = {
//         barcode: item.barcode,
//         name: item.name,
//         unit: item.unit,
//         price: item.price,
//         count: parseInt(val.split('-')[1] || 1)
//       };
//     }
//   });
//
//   return changeResult;
// }
//
// function countSameElements(element) {
//   var result = [];
//   for (var i = 0; i < result.length; i++) {
//     if (result[i].name == element.name) {
//       result[i].count++;
//       result[i].priceSum += element.price * element.count;
//       return;
//     }
//   }
//
//   result.push({
//     barcode: element.barcode,
//     name: element.name,
//     count: element.count,
//     unit: element.unit,
//     price: element.price,
//     priceSum: (element.price * element.count)
//   });
//   return result;
// }
//
// function isPromotions(val, giveGoods) {
//   promotionBarcode = loadPromotions();
//
//   promotionBarcode[0].barcodes.forEach(function(item) {
//     if ((val.count > 2) && (val.barcode == item)) {
//       val.priceSum -= parseInt(val.count / 3) * val.price;
//       giveGoods.push({
//         name: val.name,
//         count: parseInt(val.count / 3),
//         unit: val.unit,
//         priceSum: parseInt(val.count / 3) * val.price
//       });
//     }
//   });
//
//   return giveGoods;
// }
//
// function countGiveGoods(result, giveGoods) {
//   result.forEach(function(val) {
//     isPromotions(val, giveGoods);
//   });
// }
//
// function outputGiveReceipt(outputStr, giveGoods, sum) {
//   var outputSum = 0;
//   outputStr += '----------------------\n' + '挥泪赠送商品：\n';
//
//   giveGoods.forEach(function(item) {
//     outputStr += '名称：' + item.name + '，数量：' + item.count + item.unit + '\n';
//     outputSum += item.priceSum;
//   });
//   outputStr += '----------------------\n';
//   outputStr += '总计：' + sum.toFixed(2) + '(元)\n' + '节省：' + outputSum.toFixed(2) +
//     '(元)\n' + '**********************';
//
//   return outputStr;
// }
//
// function outputReceipt(outputStr, result, giveGoods) {
//   var sum = 0;
//
//   result.forEach(function(val) {
//     outputStr += '名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' +
//       val.price.toFixed(2) + '(元)，小计：' + val.priceSum.toFixed(2) + '(元)\n';
//     sum += val.priceSum;
//   });
//
//   outputStr = outputGiveReceipt(outputStr, giveGoods, sum);
//
//   return outputStr;
// }
//
// function printReceipt(inputs) {
//   allItems = loadAllItems();
//   var result = [];
//   var giveGoods = [];
//   var outputStr = '***<没钱赚商店>收据***\n';
//
//   result = inputs.map(function(val) {
//     return filterElements(val, allItems);
//   }).forEach(function(element) {
//     countSameElements( element);
//   });
//
//   countGiveGoods(result, giveGoods);
//   outputStr = outputReceipt(outputStr, result, giveGoods);
//
//   console.log(outputStr);
// }







function mapInputs(val) {
  var splitResult = val.split('-');
  allItems = loadAllItems();
  for (var i = 0; i < allItems.length; i++) {
    if (allItems[i].barcode === splitResult[0]) {
      return {
        barcode: allItems[i].barcode,
        name: allItems[i].name,
        count: splitResult[1] || 1,
        price: allItems[i].price,
        realMoney: (splitResult[1] || 1) * allItems[i].price
      };
    }
  }
}

function promotionSaveMoney(val) {
  val.realSum = val.count * val.money;
  if(val.count > 2 ) {
    val.saveMoney = 5;
  }
}

function countMapResult(mapResult) {
  var countResult = [];
  //mapResult.forEach(function(val)
  for(var i = 0; i < mapResult.length; i++){    
    countResult.forEach(function(item) {
      if(mapResult[i].barcode === item.barcode) {
        item.count += mapResult[i].count;
        item.realMoney += mapResult[i].count * item.price;
      }
    });
  }
}

function printReceipt(inputs) {
  var mapResult = inputs.map(function(val) {
    return mapInputs(val);
  });
  countMapResult(mapResult);
  console.log(mapResult);
}
