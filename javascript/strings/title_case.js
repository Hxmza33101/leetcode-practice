function titleCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');

}

console.log(titleCase('hello world')) // → 'Hello World'
console.log(titleCase('the quick brown fox')) // → 'The Quick Brown Fox'