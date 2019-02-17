function arrayToList(xs) {
    if (xs.length == 0) return null;
    return {
        value: xs[0],
        rest: arrayToList(xs.slice(1)),
    }
}

function listToArray(list) {
    if (list.rest == null) return [list.value];
    return [list.value].concat(
        listToArray(list.rest)
    );
}

function prepend(e, list) {
    return {
        value: e,
        rest: list,
    }
}

function nth(list, n) {
    if (n == 0) return list.value;
    if (n > 0 && list.rest == null) return undefined; 
    return nth(list.rest, n-1);
}