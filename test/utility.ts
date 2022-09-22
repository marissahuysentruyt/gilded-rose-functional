/* eslint-disable */
// @ts-nocheck

export function doTimes(times, fn) {
  return [...Array(times)].map((_, index) => {
    // console.log(`${index + 1}`);
    return fn();
  })[times - 1];
}
