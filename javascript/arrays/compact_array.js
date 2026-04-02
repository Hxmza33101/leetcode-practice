// Remove all falsy values from an array.
// Falsy values in JS: false, 0, "", null, undefined, NaN

function compact(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    console.log(result);
    return result;
}

compact([0, 1, false, 2, '', 3, null]) // → [1, 2, 3]
compact(['a', '21', false, NaN, 210, 3, null, undefined]) // → [1, 2, 3]
