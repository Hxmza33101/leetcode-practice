//Given an array of integers, how many subarrays within array 'nums', equals k.

var subarraySum = function(nums, k) {
    const freq = new Map();
    freq.set(0,1);
    let count = 0;
    let currSum = 0;
    for (i = 0; i < nums.length; i++) {
        currSum += nums[i];
        if (freq.has(currSum - k)) {
            count += freq.get(currSum - k)
        }
        freq.set(currSum, (freq.get(currSum) || 0) + 1);
    }
    return count;
};

// This code works using the inbuilt Map() feature. The first value of the map is set as 1, in case the current value of nums = k.
// We create a count and current sum variable. The array is then itterated through to check if the value we are on, - k = something in the map.
// If this number exists in the hash, we increment the count by 1. At the end of the itteration, we return count.