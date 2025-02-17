var sumOfDigits = function (n) {
    if (n < 0) {
        throw new Error("There should be integers");
    }
    if (n < 10) {
        return n;
    }
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
};
console.log(sumOfDigits(123));
