// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const list = [1, 2, 3, 'this'];
function changeArr(arr, cb) {
  return cb(arr);
}
function getLength(arr) {
  // getLength passes the length of the array into the callback.
  return arr.length
}

function last(arr) {
  // last passes the last item of the array into the callback.
  return arr[arr.length-1];
}
console.log(changeArr(list, last));
function nums(x, y, cb) {
  return cb(x, y);
}
function sumNums(x, y) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return x+y;
}

function multiplyNums(x, y) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return x*y;
}
console.log(nums(2, 4, multiplyNums));


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}
function find(item, list){
  for (i =0; i < list.length; i++) {
    if (list[i] == item){
      return true;
    }
  } 
  if (i == list.length) {
    return false;
  }
  
}
console.log(contains(7, list, find));
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}
const nodup = [];
const first = [1, 2 , 3, 3, 3, 3, 4]
function remdup(array) {
  let check = 0;
  for (i=0;i<array.length;i++) {
    for (p=0;p<array.length;p++){
      if (array[p] != array[i]) {
        check = 0;
      } else{
        check = 1;
      }
    }
    if (check == 0) {
      nodup.push(array[i]);
    }
    
  }
  return nodup;

}
console.log(removeDuplicates(first, remdup));