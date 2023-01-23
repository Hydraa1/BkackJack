let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack =false;
let cardshw = document.getElementById("card");
let sumshw = document.getElementById("sum");
let playshw = document.getElementById("play");

let player = {
    name:"Sam",
    chips: 200
}
let playerEl = document.getElementById("playerinfo");
playerEl.textContent= player.name + ": $" + player.chips;


function randomcard(){
    let randomcard = Math.floor( Math.random()*13) + 1;
    if(randomcard ==1){
        return 11;
    }else if(randomcard > 10){
        return 10;
    }else{
        return randomcard;
    }
    return randomcard;
}
function startgame(){
    isAlive = true;
    // hasBlackjack =false;
    let firstcard = randomcard();
    let secondcard = randomcard();
    cards = [firstcard,secondcard];
    sum = firstcard + secondcard;
    rendergame()
}
function rendergame(){
    cardshw.textContent = "Cards: ";
    for(let i =0;i<cards.length;i++){
        cardshw.textContent +=cards[i] + " "
    }
    sumshw.textContent = "Sum: " + sum;
    if(sum <21){
        playshw.textContent="Do you want to pick a card?";
    }
    else if(sum === 21){
        playshw.textContent="You won Blackjack!!";
        hasBlackjack = true;
   }
   else{
       playshw.textContent = "You are out of the game"
       isAlive = false;
   }
}


function newcard(){
    if(isAlive == true && hasBlackjack ==false){
        let tcard = randomcard();
        cards.push(tcard);
        sum += tcard;
        rendergame()
    }
    
}

