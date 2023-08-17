"use strict";
// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
function canPlaceFlowers(flowerbed, n) {
    const plotLength = flowerbed.length;
    if (plotLength === 0)
        return true;
    let count = 0;
    for (let plotIndex = 0; plotIndex < plotLength; plotIndex++) {
        if (flowerbed[plotIndex] === 0 &&
            (plotIndex === 0 || flowerbed[plotIndex - 1] === 0) &&
            (plotIndex === plotLength - 1 || flowerbed[plotIndex + 1] === 0)) {
            flowerbed[plotIndex] = 1;
            count++;
            if (count > n)
                break;
        }
    }
    return (count >= n) ? true : false;
}
;
const replaceFlowerResult = canPlaceFlowers([1, 0, 0, 0, 1], 1);
console.log(replaceFlowerResult);
