/**
 *     Sample script, you can code here and then 'Save As..' to another named file.
 *     Author: MyDiceBot
 **/

chance = 49.5;
multiplier = 2;
baseBet = 0.00000001;
betHigh = false;
nextBet = baseBet;

function dobet(){
    if (win) {
        nextBet = basebet;
    } else {
        nextBet = previousbet * multiplier;
    }
}

