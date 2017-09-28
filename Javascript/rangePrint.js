function printRange(startPoint){
    var endPoint;
    var incAmt;

    if (arguments.length > 2){
        endPoint = arguments[1];
        incAmt = arguments[2];
    }else if (arguments.length > 1){
        incAmt = 1;
        endPoint = arguments[1];
    }else{
        endPoint = startPoint;
        startPoint = 0;
        incAmt = 1;
    }

    for (var i = startPoint; i < endPoint; i+=incAmt) {
        console.log(i);
        
    }
}

printRange(2, 10, 2);
printRange(4, 8);
printRange(4);
printRange(-10, 0, 2);