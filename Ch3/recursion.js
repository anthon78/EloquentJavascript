function isEven(num) {
    num = Math.abs(num);
    if (num == 0) return true;
    if (num == 1) return false;
    return isEven(num -2);
}