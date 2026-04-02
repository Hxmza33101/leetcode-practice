// This is a method of sorting an unsorted array. It uses a divide and conquer strategy in which the array is halved multiple times until the base case of single elements remain in their own arrays
// A helper function is then called to merge each of these arrays into one result array.

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid))


    // console.log(merge(left, right));
    return(merge(left, right));
}


function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++
        }
    }

    let end = result.concat(left.slice(i)).concat(right.slice(j));


    return end;
}

console.log(mergeSort([1, 20, 3, 58, 12]));
mergeSort([1, 20, 3, 58, 12]);
