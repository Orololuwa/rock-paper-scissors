import {elements} from '../test';

const hasClass = (element, className) => {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

export const dispPlayerMode = () => {
    const markup = `
        <div class="player__mode">
            <div class="single__player pick">Single Player</div>
            <div class="multi__player pick">Multi Player</div>
      </div>
    `;

    elements.focalBox.insertAdjacentHTML('afterend', markup);
};

export const delSinglePlayer = () => {
    const item = elements.singlePlayer;
    if (item) item.parentElement.removeChild(item);
};

export const delMultiPlayer = () => {
    const item = elements.multiPlayer;
    if (item) item.parentElement.removeChild(item);
};

export const grabCard = () => {
    elements.grab.textContent = "grab a card";
};

export const displayCards = (mode) => {
    let markup = "";
    if (mode === "normal"){
        markup = `
            <div class="paper paper--triangle">
            </div>
            <div class="scissors scissors--triangle">
            </div>
            <div class="rock rock--triangle">
            </div>
        `;    
        elements.playerComponents.classList.add('bg--triangle');
    }else if(mode === "advanced"){
        markup = `
            <div class="paper paper--pentagon">
            </div>
            <div class="scissors scissors--pentagon">
            </div>
            <div class="rock rock--pentagon">
            </div>
            <div class="lizard">
            </div>
            <div class="spock">
            </div>
        `;        
        elements.playerComponents.classList.add('bg--pentagon');
    }
    

    elements.playerComponents.insertAdjacentHTML('beforeend', markup);
};

export const delCards = () => {
    const rock =  document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    const lizard = document.querySelector('.lizard');
    const spock = document.querySelector('.spock');

    if (rock){
        rock.parentElement.removeChild(rock);
    };
    if (paper){
        paper.parentElement.removeChild(paper);
    };
    if (scissors){
        scissors.parentElement.removeChild(scissors);
    };
    if (lizard){
        lizard.parentElement.removeChild(lizard);
    };
    if (spock){
        spock.parentElement.removeChild(spock);
    };


    if (hasClass(elements.playerComponents, 'bg--triangle')){
        elements.playerComponents.classList.remove('bg--triangle');
    }
    else if (hasClass(elements.playerComponents, 'bg--pentagon')){
        elements.playerComponents.classList.remove('bg--pentagon');
    } 
};

export const displayPlayer = (card) => {
    const markup = `
     <div class="player player__${card}"><span class="player__text">you picked</span></div>
    `;

    elements.playerComponents.insertAdjacentHTML('beforeend', markup);
};

export const delPlayer = () => {
    const player = document.querySelector('.player');
    if (player){
        player.parentElement.removeChild(player);
    }
};

export const displayHouse = (card) => {
    let disp = '';
    if (card === 1){
        disp = 'rock';
    }
    else if (card === 2){
        disp = 'paper';
    }
    else if (card === 3){
        disp = 'scissors';
    }
    else if (card === 4){
        disp = 'lizard';
    }
    else if (card === 5){
        disp = 'spock';
    }

    const markup = `
    <div class="house"><span class="house__text">house picked</span></div>
   `;
   
   elements.playerComponents.insertAdjacentHTML('beforeend', markup);

   setTimeout(()=>{
    document.querySelector('.house').classList.add(`house__${disp}`);
   }, 3000);

};

export const delHouse = () => {
    const house = document.querySelector('.house');
    if (house){
        house.parentElement.removeChild(house);
    }
};

export const displayWinOrLose = (winner) => {


    if (winner === 'player'){
        //Display 'you win'
        const markup = `
            <div class="win">
                <span>you win</span>
                <span class="play__again">play again</span>
            </div>
        `;
        
        elements.playerComponents.insertAdjacentHTML('beforeend', markup);
    }
    else if (winner === 'house'){
        //display 'you lose'
        const markup = `
            <div class="lose">
                <span>you lose</span>
                <span class="play__again">play again</span>
            </div>
        `;
        
        elements.playerComponents.insertAdjacentHTML('beforeend', markup);
    }
    else {
        //display 'It's a tie'
        const markup = `
            <div class="lose">
                <span>It's a tie</span>
                <span class="play__again">play again</span>
            </div>
        `;
        
        elements.playerComponents.insertAdjacentHTML('beforeend', markup);
    }

    
};

export const delWinOrLose = (winner) => {
    if (winner === 'player'){
        const item = document.querySelector('.win');
        if (item) item.parentElement.removeChild(item);
    }
    else if (winner === 'house'){
        const item = document.querySelector('.lose');
        if (item) item.parentElement.removeChild(item);
    }
    else {
        const item = document.querySelector('.lose');
        if (item) item.parentElement.removeChild(item);
    }
};

export const highlightWinner = (winner) => {
    const markup = `
        <span class="${winner}__win_1"></span>
        <span class="${winner}__win_2"></span>
        <span class="${winner}__win_3"></span>
    `;

    if (winner !== 'none'){    
        elements.playerComponents.insertAdjacentHTML('beforeend', markup);
    }
};

export const removeHighlight = (winner) => {
    if (winner !== 'none'){
        const item1 = document.querySelector(`.${winner}__win_1`);
        const item2 = document.querySelector(`.${winner}__win_2`);
        const item3 = document.querySelector(`.${winner}__win_3`);
        if (item1) item1.parentElement.removeChild(item1);
        if (item2) item2.parentElement.removeChild(item2);
        if (item3) item3.parentElement.removeChild(item3);
    }
};

export const dispPlayerScore = (score, playername) => {
    const markup = `
    <div class="score__player">
        <span class="player__name">${playername}</span>
        <div class="score__box">
            score 
            <div class="score">${score}
            </div>
        </div>
    </div>
    `;
    elements.playerComponents.insertAdjacentHTML('beforebegin', markup)
};

export const updatePlayerScore = (score) => {
    document.querySelector('.score__player .score__box .score').textContent = score;
}
;
export const dispHouseScore = (score) => {
    const markup = `
    <div class="score__house">
    <span class="house__name">house</span>
      <div class="score__box">
        score 
        <div class="score">${score}
        </div>
      </div>
    </div>
    `;
    elements.playerComponents.insertAdjacentHTML('afterend', markup)
};

export const updateHouseScore = (score) => {
    document.querySelector('.score__house .score__box .score').textContent = score;
};

export const displayRules = (mode) => {
    let suffix = ""
    mode === "advanced" ? suffix = "-bonus" : suffix = "";
    const markup = `
    <div class="rules__display">
        <div class="rules__rules">
        <span>rules</span>
        <ion-icon name="close-outline" class="close-outline"></ion-icon>
        </div>
        <img src="./dist/images/image-rules${suffix}.svg" alt="rules image">
    </div>
    `;

    elements.playerComponents.insertAdjacentHTML('beforeend', markup);
};

export const delRules = (mode) => {
    const item = document.querySelector('.rules__display');

    item.parentElement.removeChild(item);
};

export const toggleSettingsDisp = () => {
    document.querySelector('.settings__list').classList.toggle('settings__list--js');
};

export const dispMode = () => {
    const markup = `
        <li class="normal" id="normal">normal</li>
        <li class="advanced">advanced</li>
    `;

    elements.mode.insertAdjacentHTML('afterend', markup);
}

export const delMode = () => {
    document.querySelector('.normal').parentElement.removeChild(document.querySelector('.normal'));
    document.querySelector('.advanced').parentElement.removeChild(document.querySelector('.advanced'));
};

export const delScores = () => {
    const player = document.querySelector('.score__player');
    const house = document.querySelector('.score_house');

    if (player) player.parentElement.removeChild(player);
    if (house) house.parentElement.removeChild(house);
}