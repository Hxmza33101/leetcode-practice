// This factorial function recursively returns the factorial of a given number x.

function factorial(x) {
    if (x < 0) {
        throw new Error("Input must be positive");
    }
    if (x == 0) {
        return 1;
    }
    return x * factorial(x-1);
}

console.log(factorial(5))

console.log(factorial(-10))