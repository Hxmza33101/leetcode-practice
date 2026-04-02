// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// This problem can be completed using JavaScript's inbuilt reverse method. An example of this is below:
// This, however, only works if the input is a string instead of an array. 
var reverseString0 = function(s) {
    s.reverse();
};



// The correct and intended solution for this problem is to use an array to reverse the string, ensuring O(1) extra memory is used. 
// The way I've completed this question is by using two pointers, one starting at the beginning of the string and the other starting at the end of the string. We will then swap the characters at these two pointers and move the pointers towards each other until they meet.
function reverseString(s) {
    let left = 0
    let right = s.length-1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}

console.log(reverseString(["h","e","l","l","o"])); // Output: ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // Output: ["h","a","n","n","a","H"]
