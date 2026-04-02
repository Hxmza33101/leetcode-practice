// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// This is my attempt at this leetcode question, I've used my knowledge on hashmaps to create a frequency object for the first string, and then I will iterate through the second string to check if the characters match the frequency of the first string. If they do, then it is an anagram, otherwise it is not.

var isAnagram = function(s, t) {
    let first = {};
    
    if (s.length != t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        let now = s[i];
        if (now in first) {
            first[now] += 1;
        } else {
            first[now] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!t[i] in first) {
            return false;
        } else {
            first[t[i]] -= 1;
            if (first[t[i]] < 0) {
                return false;
            }
        }
    }
    for (let value of Object.values(first)) {
        if (value > 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram')); // Output: true
console.log(isAnagram('rat', 'car')); // Output: false


// Another way to complete this question is instead of subtracting from the values of the 'first' object, we create a second object and compare the frequencies of each character using both objects.