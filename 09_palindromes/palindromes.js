const palindromes = function (str) {
    const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const cleanStr = str.split('').toLower()
    .filter(char => alphanum.includes(char))
    .join('');

    const reverseStr = cleanStr.split('').reverse().join('');

    return cleanStr === reverseStr;

};

// Do not edit below this line
module.exports = palindromes;
