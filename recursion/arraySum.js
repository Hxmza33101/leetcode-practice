let array = [1, 2, 3];

function arraySum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + arraySum(arr.slice(1));
}

console.log(arraySum(array));