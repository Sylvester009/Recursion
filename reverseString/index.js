var reverseString = function (s) {
    if (s.length <= 1) {
        return s;
    }
    return reverseString(s.slice(1)) + s.charAt(0);
};
console.log(reverseString("Hello"));
