function birthdayCounter(){
    var daysUntilMyBirthday = 60;

    while (daysUntilMyBirthday > 0){
        if(daysUntilMyBirthday > 30){
            console.log(daysUntilMyBirthday + ' days until my birthday. So so long...');
        }else if(daysUntilMyBirthday > 5){
            console.log(daysUntilMyBirthday + ' days until my birthday.  Getting closer!');
        }else{
            console.log(daysUntilMyBirthday + ' DAYS UNTIL MY BIRTHDAY!!!');
        }
        daysUntilMyBirthday--;
    }

    console.log("HAPPY BIRTHDAY TO ME!!!!!");
}

birthdayCounter();