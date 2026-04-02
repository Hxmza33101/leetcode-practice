// This problem provides an array (nums) and asks, what 2 numbers within the array add to equal the 'target'. (only one right answer)

var twoSum = function(nums, target) {
    let sumObj = {};
    for (i = 0; i < nums.length; i++) {
        const value = nums[i];
        let remNum = target - value;
        if (remNum in sumObj) {
            let arrRes = [sumObj[remNum], i];
            return arrRes;
        } else {
            sumObj[value] = i;
        }
    }
};

//This code works, by creating an object, that is used as a hash map. It stores all numbers that have been seen. Subtracts the current number from the target and checks whether the result is in the hash map. If it is, it returns the value (the i index) from the hashmap


/*
e.g.

nums: [1, 2, 3]
target: 4

hash: 
    1 -> 0
    2 -> 1

4 - 3 = 1. Is 1 in the hashmap? Yes, so it returns the current and the value associated to the "key" 1.
*/


//Another, more crude way to do this is:

var twoSum1 = function(nums, target) {
    let arr = []

    for (i=0; i < nums.length; i++) {
        let num1 = i

        for (a=i+1; a < nums.length; a++) {
            let num2 = a

            if (nums[num1] + nums[num2] == target) {
                arr.push(i, a)
            }
        }

    }

    return arr
};

