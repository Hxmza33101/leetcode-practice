function productExceptSelf(arr) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (arr.length == 0) {
            break;
        }

        let current = 1;

        for (j = i+1; j < arr.length; j++) {
            current *= arr[j];
        }

        result.push(current);
    }

    console.log(result);
    return result
}

productExceptSelf([1,2,3,4]) // → [24,12,8,6]