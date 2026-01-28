// Returns string length including spaces
function Count(value) {
    return value.length;
}
// Returns string length without leading/trailing spaces
function CountTrim(val) {
    return val.trim().length;
}
// Returns string length based on spaces flag
function Both(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.trim().length;
    }
    return count;
}
console.log(Count(" test1 "));
console.log(CountTrim(" test2 "));
console.log(Both(" test3 ", true));
console.log(Both(" test3 ", false));
console.log(Both(" test3 "));
