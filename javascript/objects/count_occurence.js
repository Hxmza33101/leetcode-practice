// Count occurrences
// Write a function countOccurrences(arr) that takes an array and returns an object with the count of each value.

function countOccurrences(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = ((count[arr[i]] || 0) + 1);
    }
    console.log(count);
    return count;
}

// This works by using objects as a map, adding the value within the array, adding the element within the array as a key, and the count as the value within the object.
// This problem helped me understand how to access key-value pairs within objects, as well as how to change/modify their values.

countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']) // → { a: 3, b: 2, c: 1 }
countOccurrences([1, 2, 1, 3, 2, 1])              // → { 1: 3, 2: 2, 3: 1 }
countOccurrences([])                               // → {}