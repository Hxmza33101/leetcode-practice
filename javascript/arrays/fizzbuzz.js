// Problem 2: FizzBuzz
// Return an array of numbers from 1 to n, but replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'.

function fizzBuzz(n) {
    let result = [];
    let count = 1;

    while (count < n) {
        if (count % 3 == 0 && count % 5 == 0) {
            result.push("FizzBuzz");
        } else if (count % 3 == 0) {
            result.push("Fizz");
        } else if (count % 5 == 0) {
            result.push("Buzz")
        } else {
            result.push(count);
        }
        count++;
    }

    console.log(result);
    return result;
}

fizzBuzz(20);
fizzBuzz(10);