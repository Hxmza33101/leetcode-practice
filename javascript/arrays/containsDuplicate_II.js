// This function checks if within the array, there is a duplicate element within a range k of the same element.

function containsNearbyDuplicate(arr, k) {
    let map = {};

    for (i = 0; i < arr.length; i++) {
        if (!(arr[i] in map)) {
            map[arr[i]] = i;
        } else if (arr[i] in map) {
            if (i - map[arr[i]] <= k) {
                console.log(true);
                return true;
            }
        }
    }

    console.log(false);
    return false;
}

containsNearbyDuplicate([1,2,3,1], 3) // → true
containsNearbyDuplicate([1,2,10,30,3,1], 3) // → false
containsNearbyDuplicate([1,2,3,1], 1) // → false
// 👉 Same value appears within distance k
// 👉 Pattern: hashmap + index tracking