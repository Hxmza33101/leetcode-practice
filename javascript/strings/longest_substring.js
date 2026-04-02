// 3. Longest substring without repeating characters
// Given a string s, find the length of the longest substring without duplicate characters.

// This is my first, bruteforce attempt at this question:
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let seen = new Set();

        for (let j = i; j < s.length; j++) {
            if (seen.has(s[j])) {
                break;
            }
            seen.add(s[j]);
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    return maxLength;
};
// This solution has a time complexity of O(n^2) because we have two nested loops. The outer loop iterates through each character in the string, and the inner loop checks for duplicates until it finds one. The space complexity is O(min(m, n)) where m is the size of the character set and n is the length of the string, because we are using a set to store the characters in the current substring.