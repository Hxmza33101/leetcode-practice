function reverseWords(str) {
    let words = str.split(' ');
    let reversedWords = words.reverse();
    return reversedWords.join(' ');
}


console.log(reverseWords('hello world foo')) // → 'foo world hello'
console.log(reverseWords('one'))             // → 'one'