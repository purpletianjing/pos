
var allItems = loadAllItems();

function CartItem(barcode,count) {
  this.barcode = barcode;
  this.count = count;
  this._itemInfo = null;
}

CartItem.prototype.getItemInfo = function() {
  var itemInfo = {};
  if(this._itemInfo) {
    return this._itemInfo;
  }
  var that = this;
  allItems.forEach(function(val) {
    if(that.barcode === val.barcode) {
      itemInfo.name = val.name;
      itemInfo.unit = val.unit;
      itemInfo.price = val.price;
    }
  });
  this._itemInfo = itemInfo;
  return this._itemInfo;
};

function judgeWhetherPromote(val,count,barcode) {
  var promotioncount = 0;
  val.barcodes.forEach(function(item) {
    if((barcode === item) && (count >= 3)) {
      promotioncount = (count - parseInt(count / 3));
    }
  });
  return promotioncount || count;
}

CartItem.prototype.getPromotionCount = function() {
  var promotionRule = loadPromotions();
  var promotioncount = 0;
  var that = this;
  promotionRule.forEach(function(val) {
    promotioncount = judgeWhetherPromote(val,that.count,that.barcode);
  });
  return promotioncount;
};

CartItem.prototype.getSubTotal = function() {
  return this._itemInfo.price * this.getPromotionCount();
};
