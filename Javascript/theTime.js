var HOUR = 8;
var MINUTE = 10;
var PERIOD = "AM";
var perStr;
var minStr;

if(PERIOD == "AM"){
    perStr = "morning";
}else if(PERIOD =="PM"){
    perStr = 'evening';
}

if (MINUTE >= 30){
    minStr = 'almost ';
    HOUR+=1;
}else{
    minStr = 'just after ';
}

console.log("It's " + minStr + HOUR + " in the " + perStr);
