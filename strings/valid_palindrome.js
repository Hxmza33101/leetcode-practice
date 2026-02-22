//2 solutions i came up with for the following question:

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. 
*/

//The first solution has both a space and time complexity of O(n). It works by making the string lower case and then pushing each character into another array to easily check the front and back to see if the characters are different.

var isPalindrome = function(s) {
    
    s = s.toLowerCase();
    let forward = []

    for (let i = 0; i < s.length; i++) {
        if(/^[a-z0-9]$/i.test(s[i])) {
            forward.push(s[i]);
        }
    }

    for (let j = 0; j < forward.length/2; j++) {
        if (forward[j] !== forward[forward.length-1-j]) {
            return false;
        } 
    }
    return true;

};


//The second solution works similarly; however, this uses a two-pointer system in which it iterates through the string from both ends (left and right) and checks if the current character at each pointer is alphanumerical. It has an if statement that checks if the current character at each pointer is the same. 
var isPalindrome = function(s) {
    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left<right) {
        while (left<right && !/[a-z0-9]/i.test(s[left])) {
            left++;
        }
        while (left<right && !/[a-z0-9]/i.test(s[right])) {
            right--
        }
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};