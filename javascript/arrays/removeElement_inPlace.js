function removeElement(arr, n) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] != n) {
            result.push(arr[i]);
        }
    }

    console.log(result);
    return result;
}

removeElement([3,2,2,3], 3) // → [2,2]
removeElement([1,2,3,4,5,1,2,3,5,1,3], 1) // → [2,3,4,5,2,3,5,3]