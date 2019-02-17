
// tried recursive solution
function reverseArray(xs) {
    if (xs.length == 0) return [];
    restReversed = reverseArray(xs.slice(1));
    return restReversed.concat(xs[0]);
}

// iterative solution
function reverseArrayInPlace(xs) {
    for (let i=0; i < Math.floor(xs.length / 2); i++) {
        let temp = xs[i];
        xs[i] = xs[xs.length - 1 - i];
        xs[xs.length - 1 - i] = temp;
    }
}