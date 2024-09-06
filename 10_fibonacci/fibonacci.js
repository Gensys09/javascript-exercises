const fibonacci = function(n) {
    if (!Number.isInteger(n)) return 'ERROR';
    if (n <= 0) return 0;
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        let temp = a;
        a = b;
        b += temp;
    }

    return a;

};

// Do not edit below this line
module.exports = fibonacci;
