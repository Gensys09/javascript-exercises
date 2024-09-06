const leapYears = function(year) {
    const DivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;
    if (DivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
