// Return the first character that appears only once in a string.

function firstUniqueChar(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in result)) {
            result[arr[i]] = 1;
        } else {
            result[arr[i]]++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]] == 1) {
            console.log(arr[i]);
            return arr[i];
        }
    }

    console.log(null);
    return null;
}


firstUniqueChar('aabccdeff') // → 'b'
firstUniqueChar('abccdeff') // → 'a'
firstUniqueChar('aabbcceff') // → 'e'
firstUniqueChar('aabb')      // → null