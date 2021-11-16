import { sumToString, getIncreasingArray, maxAndMin, countArray } from "./mild/mild_1.js";
import { identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys } from "./mild/mild_2.js";
import { getSum, getMedian, getStatistics } from "./medium/medium_1.js";

// mild 1 tests
/* console.log(sumToString(1,2));
console.log(getIncreasingArray(5, 8));
console.log(maxAndMin([3,7,8,2]));
console.log(countArray([3,3,5,6,5, 'a', 'a'])); */

// mild 2 tests
/*console.log(identifyVariable("13"));
console.log(identifyVariable(8));
console.log(identifyArray(["1", "apple", 17, 88]));
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
}
console.log(obj);
removeKey(obj, 'password');
console.log(obj); */

// medium 1 tests
console.log(getSum([1,2,3])); // 6
let array = [3,2,5,6,2,7,4,2,7,5];
console.log(getMedian(array)); // 4.5
//console.log(getMedian([7, 2, 3, 5 , 1])); // 3
console.log(getMedian([7, 7, 3, 2, 8, 5, 4])); // 5
console.log(getStatistics([3,2,4,5,5,5,2,6,7]));