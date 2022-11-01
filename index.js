let firstcard= getrandom();
let secondcard= getrandom();

let cards=[firstcard,secondcard];

let sum= firstcard + secondcard;
let hasblackjack=false;
let isalive=true;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("cards-el");

function startGame(){
    renderGame();
}

function renderGame(){
    sumEl.textContent="Sum: "+sum;
    cardEl.textContent="Cards: "+cards;
    if(sum<21){
        message="Do you want to continue ?";
    }
    else if(sum === 21){
        message="You have blackjack";
        hasblackjack=true;
    }
    else{
        message="You are out of game";
        isalive=false;
    }
    messageEl.textContent=message;
}

function newCard(){
    if(isalive===true && hasblackjack==false){
        let card=getrandom();
        cards.push(card);
        sum+=card;
        renderGame();
    }
}

function getrandom(){
    let n= Math.floor(Math.random()*13)+1;
    if(n===1){
        return 11;
    }
    else if(n>=10){
        return 10;
    }
    else{
        return n;
    }
}