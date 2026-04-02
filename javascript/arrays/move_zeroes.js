//283. Move Zeroes
//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zeroes.
//
//Example:
//
//Input: [0,1,0,3,12]
//Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    let i = 0;
    let l = nums.length;

    for (let j = 0; j < l; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
}

// This works by using two pointers. The first pointer i is used to keep track of the position of the last non-zero element, while the second pointer j iterates through the array. Whenever a non-zero element is found, it is swapped with the element at index i, and i is incremented. This way, all non-zero elements are moved to the front of the array, and all zeroes are moved to the end.


// Another faster solution involves using a fill method, in where we first make sure all non-zero elements are moved to the front of the array, and then we fill the rest of the array with zeroes. This is also O(n) time complexity, but it may be faster in practice due to less swapping.

var moveZeroes = function(nums) {
    let fillNumsPointer = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[fillNumsPointer] = nums[i];
            fillNumsPointer++;
        }
    }
    while(fillNumsPointer<nums.length){
        nums[fillNumsPointer]=0;
        fillNumsPointer++;
    }
};