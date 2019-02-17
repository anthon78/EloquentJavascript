
// return true only if same values or objects
// with the same properties, where the values
// of the properties are equal when copared
// with a recursive call to deepEqual
function deepEqual(value1, value2){
    
    if (typeof value1 != typeof value2) return false;

    if (typeof value1 != "object") {
        if (value1 != value2) return false;
    } else {
        // take care of 'null' special case
        if (value1 == null || value2 == null) {
            if (!(value1 == null && value2 == null)) return false;
        }

        // value1 and value2 are both objects
        if (Object.keys(value1).length != Object.keys(value2).length) {
            return false;
        }

        for (let key of Object.keys(value1)) {
            let value = deepEqual(value1[key], value2[key]);
            if (value == false) return false;
        }
    }
    return true;
}