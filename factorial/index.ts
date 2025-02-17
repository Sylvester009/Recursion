const factorial = (n: number): number => {
    if (n < 0) {
        throw new Error("This is a negative number");
    }

    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(120));