function topKFrequent(arr, k) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }

    let entries = Object.entries(map);
    entries.sort((a, b) => b[1] - a[1]);

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Number(entries[i][0])); 
    }

    console.log(result);
    return result;
}

// Example
topKFrequent([1,1,1,2,2,3,4,4,4,4,4,5,5,5,5], 4); // [1, 2]