//56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


// The way I completed this leqa question is by first sorting the intervals in ascending order, then comparing the second element and the first element of adjacent arrays and comparing if they overlap, and then merging them, if required, into a new array called merge. 
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    // 1. Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [];
    let current = intervals[0];  // active interval

    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];

        // 2. Check overlap
        if (current[1] >= next[0]) {
            // Extend the current interval
            current[1] = Math.max(current[1], next[1]);
        } else {
            // No overlap → store current and move on
            merged.push(current);
            current = next;
        }
    }

    // 3. Push the last active interval
    merged.push(current);

    return merged;
};