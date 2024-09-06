const repeatString = function(value, repeat) {
    if (repeat < 0) return 'ERROR';
    let resString = '';
    for (let i = 0; i < repeat; i++) {
        resString += value;
    }

    return resString;

};

// Do not edit below this line
module.exports = repeatString;
