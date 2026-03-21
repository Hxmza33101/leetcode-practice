// Countdown is a function that recursively counts down from a given number n.

function countDown(n) {
    if (n <= 0) {
        console.log('Done!')
        return;
    }
    console.log(n);
    countDown(n-1);
}

countDown(10);