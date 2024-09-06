const removeFromArray = function(arr, ...elements) {
    let newArr = arr.filter(element => !elements.includes(element));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
