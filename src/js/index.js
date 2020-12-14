//StartUp Page
import {elements} from './test';
import * as UICtrl from './Views/UIController';
import GameCtrl from './Models/GameController';

const state = {};
state.gameOn = new GameCtrl();

const playerNumber = (playerCard) => {
    let player = 0;
    if (playerCard === 'rock'){
        player = 1;
    }
    else if (playerCard === 'paper'){
        player = 2;
    }
    else if (playerCard === 'scissors'){
        player = 3;
    }
    else if (playerCard === 'lizard'){
        player = 4;
    }
    else if (playerCard === 'spock'){
        player = 5;
    }
    return player;
}

const cardNumber = (mode) => {
    let card = 0;
    if (mode === "normal"){
        card = Math.floor(Math.random() * 3) + 1;
    }
    else if(mode === "advanced"){
        card = Math.floor(Math.random() * 5) + 1;
    }
    return card;
}

//Single Player or Multi Player
elements.singlePlayer.addEventListener('click', (e) => {
    if (e.target.matches('.single__player')){
        //remove the single player and Multi player elements from the UI.
        UICtrl.delSinglePlayer();
        UICtrl.delMultiPlayer();

        //Add the grab a card element to the UI
        UICtrl.grabCard();

        //Display the cards on the UI
        UICtrl.displayCards(state.gameOn.mode);

        //display scores
        UICtrl.dispPlayerScore(state.gameOn.scores.player, state.gameOn.playername);
        UICtrl.dispHouseScore(state.gameOn.scores.house);
    }    
    
});
//If Single Player? Grab a card
elements.playerComponents.addEventListener('click', (e) => {
    if (e.target.matches('.rock, .rock *') || e.target.matches('.paper, .paper *') || e.target.matches('.scissors, .scissors *') || e.target.matches('.lizard, .lizard *') || e.target.matches('.spock, .spock *')) {
        UICtrl.delCards();

        //Save Player Card Number
        const cards = e.target.classList.value.split(" ");
        const card = cards[0]
        const playerNum = playerNumber(card);

        //Display Player card
        UICtrl.displayPlayer(card);

        //Save House Card Number
        const cardNum = cardNumber(state.gameOn.mode);

        //Display House Card
        UICtrl.displayHouse(cardNum);

        //chech Winner
        state.gameOn.checkWinner(playerNum, cardNum);

        //Displayer Win or Loose
        setTimeout(() => {
            UICtrl.displayWinOrLose(state.gameOn.winner);
            UICtrl.highlightWinner(state.gameOn.winner);
        }, 4000);

        //Update Scores
        setTimeout(() => {
            UICtrl.updatePlayerScore(state.gameOn.scores.player);
            UICtrl.updateHouseScore(state.gameOn.scores.house);
            state.gameOn.persistScore(state.gameOn.scores);
        }, 4000)

    }
       
});

//Home View on Logo Click
elements.logo.addEventListener('click', () => {
    window.location.reload();
});

//Play again?
elements.playerComponents.addEventListener('click', (e) => {
    if (e.target.matches('.play__again')) {
        UICtrl.removeHighlight(state.gameOn.winner);
        UICtrl.delWinOrLose(state.gameOn.winner);
        UICtrl.delHouse();
        UICtrl.delPlayer();
        UICtrl.displayCards(state.gameOn.mode);
    }
});

//Display Rules
elements.rules.addEventListener('click', () => {
    const rules = document.querySelector('.rules__display');
    if (rules) UICtrl.delRules();
    UICtrl.displayRules(state.gameOn.mode);
});

//Remove Rules
elements.playerComponents.addEventListener('click', (e) => {
    if (e.target.matches('.close-outline')){
        UICtrl.delRules();
    }
});

//Update scores from the local storage when page reloads
window.addEventListener('load', () => {
    state.gameOn.readScore();
    state.gameOn.readName();
    state.gameOn.readMode();
});

//settings UI
elements.settings.addEventListener('click', UICtrl.toggleSettingsDisp);

//toggle modes
elements.mode.addEventListener('click', ()=>{
    var element =  document.getElementById('normal');
    if (typeof(element) != 'undefined' && element != null){
        // Exists.
        UICtrl.delMode();
    }else{
        UICtrl.dispMode();
    }
});

//Change Name and reset
document.querySelector('.settings').addEventListener('click', (e) => {
    if (e.target.matches('.name__change')){
        const el = document.querySelector('.player__name');
        if (el){
            const name = prompt('Enter your Name');
            el.textContent = name;
            state.gameOn.persistName(name);
        }
    }
    else if (e.target.matches('.reset__scores')){
        const el = document.querySelector('.score__player');
        if (el){
            state.gameOn.persistScore(state.gameOn.resetScores());
            // UICtrl.updatePlayerScore(state.gameOn.scores.player);
            // UICtrl.updateHouseScore(state.gameOn.scores.house);
            state.gameOn.persistName(state.gameOn.playername);
            // document.querySelector('.player__name').textContent = state.gameOn.playername;
            window.location.reload();
        }
    }
    else if(e.target.matches('.normal')){
        const el = document.querySelector('.normal');
        if(el){
            state.gameOn.mode = "normal";
            state.gameOn.persistMode(state.gameOn.mode);
            window.location.reload();
        }
    }
    else if(e.target.matches('.advanced')){
        const el = document.querySelector('.advanced');
        if(el){
            state.gameOn.mode = "advanced";
            state.gameOn.persistMode(state.gameOn.mode);
            window.location.reload();
        }
    }
    else if(e.target.matches(".save")){
        window.location.reload();
    }
});
