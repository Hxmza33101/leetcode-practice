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

