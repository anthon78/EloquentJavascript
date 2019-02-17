
// recursive implementation of a for loop
function loop(val, test, update, body) {
    if(test(val)) {
        body(val);
        val = update(val)
        loop(val, test, update,body);
    }
}