/* eslint-disable */
// @ts-nocheck
import { Item, GildedRose } from '../src/gilded-rose'

export const defaultItems = [
  { name: "+5 Dexterity Vest", sellIn: 10, quality: 20 },
  { name: "Aged Brie", sellIn: 2, quality: 0 },
  { name: "Elixir of the Mongoose", sellIn: 5, quality: 7 },
  { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
  { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 },
  // TODO:
  { name: "Conjured Mana Cake", sellIn: 3, quality: 6 }
];

export function getItem(string, items) {
  const regex = new RegExp(string, 'gi');
  return items.find((item) => regex.test(item.name));
}

export function createItem(string, overrides = {}) {
  const regex = new RegExp(string, 'gi');

  return {
    ...defaultItems.find((item) => regex.test(item.name)),
    ...overrides, 
  };
}
