// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.


// The way I completed this leetcode problem is by using the knowledge I learned from the reverse array problem, adding it as a helper function within this rotate function, and calling it three times in order to play out the logic that occurs when an array is "rotated". 
// Shifting elements a certain amount in one direction is the same as reversing the whole array, reversing from zero to the amount that's to be shifted, and reversing from the amount to be shifted to the end of the resultant array 

var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    function reverse(start,end) { //helper array that uses the logic from reverse_array.js
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }

    reverse(0, n-1);
    reverse (0, k-1);
    reverse (k, n-1);
}

