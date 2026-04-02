// You’re given temperatures for each day.
// For each day, find how many days until a warmer temperature.


function dailyTemps(arr) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        for (j=i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                result.push(j-i);
                break;
            } else if (j == arr.length-1) {
                result.push(0);
            }
        }
    }

    console.log(result);
    return result;
}

dailyTemps([73,74,75,71,69,72,76,73])
// → [1,1,4,2,1,1,0,0]