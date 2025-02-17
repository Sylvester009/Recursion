const isPalindrome = (str: string): string => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (str.length === 0 || str.length === 1) {
        return `The word is a palindrome`;
    }

    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return isPalindrome(str.substring(1, str.length - 1))
    }

    return `The word is not palindrome`;
}

console.log(isPalindrome("Kayak"));