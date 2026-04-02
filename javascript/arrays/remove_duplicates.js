// Remove Duplicates (but keep order)

// Return a new array with duplicates removed, but preserve the original order.

// There are 2 possible solutions to this problem, one using the .include() method in js and the other using objects/maps

// .include() solution:
function removedDuplicates(arr) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    console.log(result);
    return result;
}


// object/map solution:

function removeDuplicates(arr) {
    let map = {};
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (!(arr[i] in map)) {
            map[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    console.log(result);
    return result;
}


removedDuplicates([1, 2, 2, 3, 1, 4]) // → [1, 2, 3, 4]
removedDuplicates(['a', 'b', 'a', 'c']) // → ['a', 'b', 'c']

removeDuplicates([1, 2, 2, 3, 1, 4]);
removeDuplicates(['a', 'b', 'a', 'c'])