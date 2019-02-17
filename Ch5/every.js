
// implemented with for loop
function everyFor(array, test) {
    for (let element of array) {
        if ((test(element) == false)) return false;
    }
    return true;
}

// implemented with some method
function everySome(array, test) {
    return !array.some(n => !test(n));
}