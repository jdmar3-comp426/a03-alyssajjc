import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let sorted = array.sort();
    let len = array.length;
    if (len % 2 == 0) {
        let a = array[len/2];
        let b = array[len/2 - 1];
        return (a + b)/2;   
    } else if (len % 2 == 1) {
        return array[len/2 - 0.5];
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let ret_object = {}
    ret_object.length = array.length;
    ret_object.sum = getSum(array);
    ret_object.mean = getSum(array) / array.length;
    ret_object.median = getMedian(array);
    ret_object.min = Math.min(...array);
    ret_object.max = Math.max(...array);
    ret_object.variance = variance(array, ret_object.mean);
    ret_object.st_dev = Math.sqrt(ret_object.variance);
    return ret_object;
}

