// problem statment
// You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
// Input: arr[] = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.
// Input: arr[] = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.

const arr = [10, 20, 30];
arr.map((item) => {
  if (item === 0) {
    arr.splice(item, 0);
    arr.push(0);
  }
});
console.log(arr);

//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === 0) {
//      arr.splice(i, 0);
//      arr.push(0);
//    }
//  }
// console.log(arr);

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      arr[i - count] = arr[i];
    }
  }
  for (let i = arr.length - count; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
// console.log(moveZeros(arr));
