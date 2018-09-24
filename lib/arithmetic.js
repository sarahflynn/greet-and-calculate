function add(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error('supplied values must both be numbers');
    }
    return num1 + num2;
}

module.exports = {
    add
};