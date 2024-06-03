//your JS code here. If require
//your JS code here. If required.
function secondHighest(arr) {
    // Check if array has less than 2 unique elements
    if (new Set(arr).size < 2) {
        return -Infinity;
    }

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Find the second unique number
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i];
        }
    }
}

const a = [12, 35, 1, 10, 34, 1];
let n = a.length;
let answer = findSecondLargest(a, n);
console.log("The second largest element in the array is: " + answer);