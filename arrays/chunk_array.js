// Split an array into groups of size n:

function chunk(arr, n) {
    let result = [];

    let temp = [];
    let count = 0;
    let i = 0;

    while (i < arr.length) {
        if (count == n) {
            result.push(temp);
            temp = [];
            count = 0;
        }
        temp.push(arr[i]);
        i++;
        count++;
    }
    if (temp.length > 0) {
        result.push(temp);
    }
    
    console.log(result);
    return result;
}

chunk([1, 2, 3, 4, 5], 2) // → [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4], 2)    // → [[1, 2], [3, 4]]