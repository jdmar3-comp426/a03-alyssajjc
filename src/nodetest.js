import { sumToString, getIncreasingArray, maxAndMin, countArray } from "./mild/mild_1.js";
import { identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys } from "./mild/mild_2.js";
import { getMedian } from "./medium/medium_1.js";

// mild 1 tests
/* console.log(sumToString(1,2));
console.log(getIncreasingArray(5, 8));
console.log(maxAndMin([3,7,8,2]));
console.log(countArray([3,3,5,6,5, 'a', 'a'])); */

// mild 2 tests
console.log(identifyVariable("13"));
console.log(identifyVariable(8));
console.log(identifyArray(["1", "apple", 17, 88]));

// medium 1 tests
console.log(getMedian([2, 8, 4, 5, 3]));