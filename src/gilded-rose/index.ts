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
function isStandardItem(item) {
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
function agedBrieQuality(item) {
  // const { quality } = item;
  // no matter what, decrease the sell_in
  decreaseSellIn(item, 1);
  if (isQualityStillMoreThanZero 
      && isQualityStillLessThanFifty) {
    switch (true) {
      // if the sell_in is negative (and quality is not exactly 50), increase the brie quality by 2
      case (isSellInBelowZero):
        // if(quality !== 50) {
          increaseQuality(item, 2);
          break;
        // }
      // if the quality is between 0-50, increase the brie quality by 1
      default: 
        // if(quality !== 50) {
          increaseQuality(item, 1);
          break;
        // }
    }
  }
}
function backstagePassesQuality(item) {
  const { sell_in }= item;
  // decrease the sell_in no matter what
  decreaseSellIn(item);
  // then check if the quality is less than 50
  if(item.quality < 50){
    switch (true) {
      //increase the quality by 1 if the sell_in is between 11-50
      case sell_in > 10: 
        increaseQuality(item, 1);
        break;
      // //increase the quality by 2 if the sell_in is between 6-10
      case sell_in > 5 && sell_in <= 10:
        increaseQuality(item, 2);
        break;
      // //increase the quality by 3 if the sell_in is between 1-5
      case sell_in > 0 && sell_in <= 5:
        increaseQuality(item, 3);
        break;
      //decrease quality all the way if the sell_in is 0 or less
      case sell_in <= 0: 
        item.quality = item.quality - item.quality;
        break;
    }
  }
}
function standardItemChanges(item) {
  // then check that the quality between 0-50, and decrease the quality by 1
  if (item.quality > 0 && item.quality < 50) {
    decreaseQuality(item, 1);
    // if the sell_in becomes negative, decrease quality again by 1
    if(item.sell_in < 0) {
      decreaseQuality(item, 1);
    }
  }
}


function updateItem(item) {
  if (isStandardItem(item)) {
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
    if (isStandardItem(item)) {
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

// accumulative value of item?
// items.reduce((item) => item decrease )
// items composition that handles conditionals
// cond in Ramda send items 

export function updateQuality2(items) {
  return items.map(updateItem);
}
