function flatten(xs) {
    return xs.reduce((x,y) => x.concat(y), []);
}



// made a recursive version that can flatten lists of
// arbitrary levels of nesting
function flattenRecursive(xs) {
    if (xs.length == 0) return [];
    if (!Array.isArray(xs[0])) {
        return [xs[0]].concat(flattenRecursive(xs.slice(1)));
    }
    return (flattenRecursive(xs[0])).concat(
        flattenRecursive(xs.slice(1))
    );
}
