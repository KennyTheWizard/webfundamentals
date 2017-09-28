
function randomChance(numQuarts){

    while (numQuarts > 0){
        numQuarts--;
        var winnings = playSlot();
        if (winnings > 0){
            return numQuarts + winnings;
        }
    }

    return 0;
}

function playSlot(){
    var chance = Math.floor(Math.random() * 100 + 1);
    if (chance == 1) {
        return Math.floor(Math.random() * 51 + 50);
    }else{
        return 0;
    }
}

console.log(randomChance(50));