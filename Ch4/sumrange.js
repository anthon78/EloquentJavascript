
// TODO: quick ugly solution, come back and fix if enough time
function range(start, end, step = 1) {
    
    xs = [];

    if (step < 0) {
        while (start >= end) {
            xs.push(start);
            start += step;
        }
        return xs;   
    }
    
    while (start <= end) {
        xs.push(start);
        start += step;
    }
    return xs;
}


function sum(xs) {
    if (xs.length == 0) return 0;
    return xs[0] + sum(xs.slice(1));
}


