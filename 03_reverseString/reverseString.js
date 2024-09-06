const reverseString = function(word) {
    let reversedStr = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedStr += word[i];
    }

    return reversedStr;

};

// Do not edit below this line
module.exports = reverseString;
