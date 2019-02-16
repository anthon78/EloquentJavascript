function countBs(str) {
    total = 0;
    for (let char of str) {
        if (char == "B") total += 1; 
    }
    return total;
}

function countChar(str,char) {
    total = 0;
    for (let c of str) {
        if (c == char) total +=1;
    }
    return total;
}

function countBsUpdated(str) {
    return countChar(str,"B");
}