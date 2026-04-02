// Simple function to count the frequency of a character in a string

//This function takes in a string and a character and counts the number of times the character appears in the string. It does this by iterating through each character in the string and comparing it to the input character. If they match, it increments the count variable. Finally, it returns the count.
function charFrequency(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}


//This function takes in a string and counts the frequency of each character in the string. It does this by iterating through each character in the string and using an object to keep track of the count of each character. If the character is already a key in the object, it increments the count. If not, it adds the character as a key with a count of 1. Finally, it returns the frequency object.
function charFrequency2(str) {
    let frequency = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}

console.log(charFrequency('hello world', 'o')); // Output: 2
console.log(charFrequency2('hello world')); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }