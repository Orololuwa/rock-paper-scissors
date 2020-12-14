export default class GameCtrl {
    constructor(){
        this.mode = 'advanced'
        this.rock = 1;
        this.paper = 2;
        this.scissors = 3;
        this.lizard = 4;
        this.spock = 5;
        this.scores = {
            player: 0,
            house: 0
        };
        this.winner = '';
        this.playername = 'player';
    }

    checkWinner(player, house){
        if (player === 1 && house === 2){
            //rock and paper (paper wins rock)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 1 && house === 3){
            //rock and scissors (rock wins scissors)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 2 && house === 1){
            //paper and rock (paper wins rock)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 2 && house === 3){
            //paper and scissors (scissors wins paper)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 3 && house === 1){
            //scissors and rock (rock wins scissors)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 3 && house === 2){
            //scissors and paper (scissors wins paper)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 1 && house === 4){
            //rock and lizard (rock wins lizard)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 4 && house === 1){
            //rock and lizard (rock wins lizard)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 2 && house === 5){
            //paper and spock (paper wins spock)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 5 && house === 2){
            //paper and spock (paper wins spock)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 3 && house === 4){
            //scissors and lizard (scissors wins lizard)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 4 && house === 3){
            //scissors and lizard (scissors wins lizard)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 4 && house === 5){
            //lizard and spock (lizard wins spock)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 4 && house === 2){
            //lizard and paper (lizard wins paper)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 5 && house === 4){
            //lizard and spock (lizard wins spock)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 2 && house === 4){
            //lizard and paper (lizard wins paper)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 5 && house === 3){
            //spock and scissors (spock wins scissors)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 5 && house === 1){
            //spock and rock (spock wins rock)
            //player wins
            this.scores.player += 3;
            this.winner = 'player';
        }
        else if (player === 3 && house === 5){
            //spock and scissors (spock wins scissors)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else if (player === 1 && house === 5){
            //spock and rock (spock wins rock)
            //house wins
            this.scores.house += 3;
            this.winner = 'house';
        }
        else {
            //draw
            this.scores.player += 1;
            this.scores.house += 1;
            this.winner = 'none';
            
        }
    }

    persistScore(score){
        localStorage.setItem('scores', JSON.stringify(score));
    }

    readScore(){
        const storage = JSON.parse(localStorage.getItem('scores'));

        //Restore scores from the local storage
        if (storage) this.scores = storage;
    }

    resetScores(){
        this.scores.player = 0;
        this.scores.house = 0;
        this.playername = 'player';
        return this.scores
    }

    persistName(name){
        localStorage.setItem('name', JSON.stringify(name));
    }

    readName(){
        const storage = JSON.parse(localStorage.getItem('name'));
        
        //Restore name from the local storage
        if (storage) this.playername = storage;
    }

    persistMode(mode){
        localStorage.setItem('mode', JSON.stringify(mode));
    }

    readMode(){
        const storage = JSON.parse(localStorage.getItem('mode'));
        
        //Restore mode from the local storage
        if (storage) this.mode = storage;
    }
}