var fibonacci = function (n) {
    if (n < 0) {
        throw new Error("The number must not be negative");
    }
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10));
