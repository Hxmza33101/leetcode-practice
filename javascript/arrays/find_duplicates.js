function findDuplicates(arr) {
    let map = {};
    let duplicates = [];

    for (i=0; i < arr.length; i++) {
        if (arr[i] in map) {
            if (map[arr[i]] >= 1 && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            map[arr[i]] = 1;
        }
    }
    duplicates = duplicates.sort();
    console.log(duplicates);
    return duplicates;
}

findDuplicates([1, 2, 3, 2, 4, 1]) // → [1, 2]
findDuplicates([1, 2, 3])           // → []