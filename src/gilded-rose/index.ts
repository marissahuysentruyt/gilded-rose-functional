/* eslint-disable */
// @ts-nocheck

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
function isNotStandardItem(item) {
  return (item.name != 'Aged Brie' &&
    item.name != 'Backstage passes to a TAFKAL80ETC concert' &&
    item.name != 'Sulfuras, Hand of Ragnaros')
};

function isAgedBrie(item) {
  return (item.name === 'Aged Brie')
}
function isBackstagePasses(item) {
  return (item.name === 'Backstage passes to a TAFKAL80ETC concert')
}
function isSulfuras(item) {
  return (item.name === 'Sulfuras, Hand of Ragnaros')
}
function isAnythingButSulfuras(item) {
  return (item.name != 'Sulfuras, Hand of Ragnaros')
}
function isQualityStillLessThanFifty(item) {
  return (item.quality < 50)
}
function isQualityStillMoreThanZero(item) {
  return (item.quality > 0)
}
function isSellInBelowZero(item) {
  return (item.sellIn < 0) 
}
function decreaseQuality(item, amount = 1) {
  item.quality -= amount;
}
function decreaseQualityTwiceAsFast(item, amount = 2) {
  decreaseQuality(item, 2)
}
function increaseQuality(item, amount = 1) {
  item.quality += amount;
}
function decreaseSellIn(item, amount = 1) {
  item.sell_in -= 1;
}
function zeroQuality (item) {
  item.quality = item.quality - item.quality
}

function updateItem(item) {
  if (isNotStandardItem(item)) {
        if (isQualityStillMoreThanZero(item)) {
        decreaseQuality(item, 1)
      }
    }
   else {
    if (isQualityStillLessThanFifty(item)) {
      increaseQuality(item, 1);
      if (isBackstagePasses(item)) {
        if (item.sellIn < 11) {
          if (isQualityStillLessThanFifty(item)) {
            increaseQuality(item, 1);
          }
        }
        if (item.sellIn < 6) {
          if (isQualityStillLessThanFifty(item)) {
            increaseQuality(item, 1);
          }
        }
      }
    }
  }
  if (isAnythingButSulfuras(item)) {
    item.sellIn = item.sellIn - 1;
  }
  if (isSellInBelowZero(item)) {
      if (isNotStandardItem(item)) {
        if (isQualityStillMoreThanZero(item)) {
            increaseQuality(item, 1);
        }
      } else if (isAgedBrie(item)) {
        increaseQuality(item, 1)
      } else if (isBackstagePasses(item)) {
        zeroQuality(item);
      } else {
      if (isQualityStillLessThanFifty(item)) {
        increaseQuality(item, 1)
      }
    }
  }
    return item;

}

export function updateQuality2(items) {
  return items.map(updateItem);
}
