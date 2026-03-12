// Flatten a Nested Array (without using .flat())
// Write a function deepFlatten(arr) that takes a deeply nested array and returns a single flat array.


function deepFlatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...deepFlatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

// This problem taught me about the ...spread feature in JavaScript.
// This feature is used to expand the elements of an array into individual elements.


console.log(deepFlatten([1, [2, [3, [4]], 5]])); // → [1, 2, 3, 4, 5]
console.log(deepFlatten([[1, 2], [3, [4, [5]]]])) // → [1, 2, 3, 4, 5]
console.log(deepFlatten([1, 2, 3])) // → [1, 2, 3]

console.log(deepFlatten([[5]])); // → [5]