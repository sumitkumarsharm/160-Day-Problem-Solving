// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.
// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 and the second largest element does not exist.
let arr = [10, 14, 20];
function maxvalue(arr) {
  let max = arr[0];
  let secondLargest = -1;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      secondLargest = max;
      max = arr[index];
    } else if (arr[index] > secondLargest && arr[index] < max) {
      secondLargest = arr[index];
    }
  }
  return secondLargest;
}
console.log(maxvalue(arr));
