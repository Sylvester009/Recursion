var binary = function (n) {
    if (n < 0) {
        throw new Error("The number must not be negative");
    }
    if (n === 0) {
        return "0";
    }
    if (n === 1) {
        return "1";
    }
    return binary(Math.floor(n / 2)) + (n % 2);
};
console.log(binary(25));
