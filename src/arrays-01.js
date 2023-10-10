/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/*
 * arrays-01.js
 * Language: javascript
 * Test: tests/arrays-01.test.js
 * Path: src/arrays-01.js
 *
 * Description: Basic array operations
 *
 * ? Arrays are a collection of values and are passed by reference
 * ? Arrays are zero-indexed
 * ? Arrays are mutable
 * ? Arrays are iterable
 * ? Arrays are objects
 * ? Because they are passed by reference, arrays can be modified
 * ? in a function and the changes will be permanent
 */

/**
 * Returns the first element (indexing from 0) of an array
 * @param {array} arr - the array
 * @returns {*} - the first (0th) element in the array
 * ? example: [1, 2, 3, 4, 5] => 1
 */
function getFirstValue(arr) {
  return arr[0];
}

/**
 * Returns a new array with 4 elements
 * @param {*} a - 0th element of the array
 * @param {*} b - 1st element of the array
 * @param {*} c - 2nd element of the array
 * @param {*} d - 3rd element of the array
 * @returns {array} - array of the 4 elements
 */
function makeArray(a, b, c, d) {
  return [a, b, c, d];
}

/**
 * Creates a new array of the first 5 prime numbers
 * @returns {array} array of the first 5 prime numbers
 * starting at 2
 * ? hint: use an array literal
 *
 */
function createFirstFivePrimes() {
  return [2, 3, 5, 7, 11];
}
/**
 * Creates a new array with a number of elements
 * @param {number} size - number of elements in the array
 * @returns {array} - new array with the specified number of elements
 * ? create an array of numbers from 0 to size - 1
 * ? example: size = 3 => [0, 1, 2]
 * ? must use a for loop
 */
function createSizedArray(size) {
  const arr = new Array(size);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = i;
  }
  return arr;
}

/**
 * Modifies the array by adding the number 1
 * both to the front and the back of the array
 * @param {array} arr - array to be modified
 * @returns modified array
 */
function modifyArrayByAdding(arr) {
  // Append to beginning
  arr.unshift(1);
  // Append to end
  arr.push(1);
  return arr;
}

/**
 * Modifies the array by deleting the beginning and end elements
 * @param {array} arr - the array to modify
 * @returns {array} - the modified array
 * ? example: [1, 2, 3, 4, 5] => [2, 3, 4]
 */
function modifyArrayByDeleting(arr) {
  // Delete from beginning
  arr.shift();
  // Delete from end
  arr.splice((arr.length - 1), 1);
  return arr;
}

/**
 * Finds and returns the element in the array at a particular index
 * @param {array} arr - the passed in array
 * @param {number} index - the index at which to find the element
 * @returns {*} - the element at the specified index
 * ? example: [1, 2, 3, 4, 5], index = 2 => 3
 */
function findElementAtIndex(arr, index) {
  return arr[index];
}

/**
 * Finds the first index of an element in an array
 * @param {array} arr - the array
 * @returns {number} - integer index of the first occurrence of the element
 * ? example: [1, 2, 3, 4, 5], value = 3 => 2
 * ? example: [1, 2, 3, 4, 5], value = 6 => -1
 * ? hint: https://bit.ly/2ZyFaAj - Array Searching and Sorting Methods
 */
function findElementByValue(arr, value) {
  const isValue = (element) => element === value;
  return arr.findIndex(isValue);
}

/**
 * Modifies the array replacing a value at index with a new value
 * @param {array} arr - the passed in array
 * @param {number} index - the index at which to find the element
 * @param {*} value - the value to be swapped
 * @returns {array} - the modified array
 * ? example: [1, 2, 3, 4, 5], index = 2, value = 0 => [1, 2, 0, 4, 5]
 */
function changeElementAtIndex(arr, index, value) {
  arr[index] = value;
  return arr;
}

/**
 * Creates a string from an array of letters
 * @param {array} arr - array to use
 * @returns {string} - made from array elements
 * ? example: ['a', 'b', 'c'] => 'abc'
 * ? https://mzl.la/3ib7Dm3
 */
function makeStringFromArray(arr) {
  let string = '';
  arr.forEach((element) => {
    string += element;
  });
  return string;
}

/**
 * Create a shallow copy of an array
 * @param {array} arr - array to be cloned
 * @returns {array} - a new array with the same elements as the passed in array
 * ? example: [1, 2, 3, 4, 5] => [1, 2, 3, 4, 5]
 * ? https://bit.ly/39ASLc0 - The spread operator
 */
function createShallowCopy(arr) {
  return [...arr];
}

module.exports = {
  getFirstValue,
  makeArray,
  createFirstFivePrimes,
  createSizedArray,
  modifyArrayByAdding,
  modifyArrayByDeleting,
  findElementAtIndex,
  findElementByValue,
  changeElementAtIndex,
  makeStringFromArray,
  createShallowCopy,
};
