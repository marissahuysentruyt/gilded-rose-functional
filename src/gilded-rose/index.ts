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
  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    return item.sellIn = item.sellIn - 1;
  }
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
  item.sellIn -= 1;
}
function zeroQuality (item) {
  item.quality = item.quality - item.quality
  }

function agedBrieQuality(item) {
  const { quality } = item;
  decreaseSellIn(item, 1);

  // quality has to be between 0-50
  if (quality >= 0 && quality < 50) {
    switch (true) {
      // if the sell_in is negative, increase the brie quality by 2
      case item.sellIn <= 0:
        increaseQuality(item, 2);
        decreaseSellIn(item, 1);
        break;
      // if the quality is between 0-50, increase the brie quality by 1
      default: 
        increaseQuality(item, 1);
        break;
    }
  }
};
function backstagePassesQuality(item) {
  const { sell_in } = item;
  // decrease the sell_in no matter what
  decreaseSellIn(item);
  // then check if the quality is less than 50
  if (isQualityStillLessThanFifty(item)) {
    if (item.sellIn < 11) {
      // if (isQualityStillLessThanFifty(item)) {
        increaseQuality(item, 1)
      }
    
    if (item.sellIn < 6) {
    // then check if the quality is still less than 50
      if (isQualityStillLessThanFifty(item)) {
        increaseQuality(item, 1)
      }
    }
    if (item.sellIn < 0) {
      zeroQuality(item)
    }
  }
}
function standardItemUpdates(item) {
  // then check that the quality between 0-50, and decrease the quality by 1
  if (item.quality > 0 && item.quality < 50) {
    decreaseQuality(item, 1);
    // if the sell_in becomes negative, decrease quality again by 1
    if(item.sellIn < 0) {
      decreaseQuality(item, 1);
    }
  }
}

function updateItem(item) {
  // switch(item.name) {
  //   case 'Aged Brie': 
  //     agedBrieQuality(item);
  //     break;
  //   case 'Backstage passes to a TAFKAL80ETC concert':
  //     backstagePassesQuality(item);
  //     break;
  //   case 'Sulfuras, Hand of Ragnaros':
  //     break;
  //   default: 
  //     standardItemUpdates(item);
  // }
  //   return item;

  // this if statement checks for a standard item, then decreases the sell_in & quality accordingly
  if (isStandardItem(item)) {
    standardItemUpdates(item);
  } else {
    if (isQualityStillLessThanFifty(item)) {
      increaseQuality(item, 1)
      if (isBackstagePasses(item)) {
        backstagePassesQuality(item)
      }
    }
  }
  // this decreases the sell_in of every item EXCEPT sulfuras
  isAnythingButSulfuras(item)
  
  if (isSellInBelowZero(item)) {
    
    if (item.name != 'Aged Brie') {
      if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (isQualityStillMoreThanZero(item)) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            decreaseQuality(item, 1);

          }
        }
      } else {
        zeroQuality(item)
      }
    } 
    else {
      if (isQualityStillLessThanFifty(item)) {
        increaseQuality(item, 1);
      }
    }
  }
  // if (isSellInBelowZero(item)) {
  //   if (item.name != 'Aged Brie') {
  //     if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (isQualityStillMoreThanZero(item)) {
  //         if (item.name != 'Sulfuras, Hand of Ragnaros') {
  //           decreaseQuality(item, 1);

  //         }
  //       }
  //     } else {
  //       zeroQuality(item)
  //     }
  //   } 
  //   else {
  //     if (isQualityStillLessThanFifty(item)) {
  //       increaseQuality(item, 1);
  //     }
  //   }
  // }
  return item;
}


// accumulative value of item?
// items.reduce((item) => item decrease )
// items composition that handles conditionals
// cond in Ramda send items 

export function updateQuality2(items) {
  return items.map(updateItem);
}
