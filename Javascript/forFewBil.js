
function doubleOnceADay(days){
    var start = 0.01;
    var sum = start;
    for (var i = 0; i <= days; i++) {
        start *= 2;
        sum += start;   
    }
    return sum;
}

console.log("After 30 days you would have: $" + doubleOnceADay(30));