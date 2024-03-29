/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed = 0; 
         this.phrases = [
             {phrase: "Sell the hole, not the nail"},
             {phrase:  "Keep it simple and superb"},
             {phrase: "The bug will outlive your program"},
             {phrase:  "What you conceive, you can achieve"},
             {phrase: "Our finest work will come"} 
            ];
         this.activePhrase = null; 
     }
     /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases() {

    };

    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
    let randomNumber = Math.round(Math.random() * 4); 
    let randomPhrase = this.phrases[randomNumber]; 
    return randomPhrase;

    };

    startGame() {
        const overlay = $('#overlay').hide(); 
        const game = new Game(); 
        const phrase = new Phrase(this.getRandomPhrase().phrase); 
        this.activePhrase = phrase; 
        this.activePhrase.addPhraseToDisplay();

        // test code to check the phrase formatting
        console.log(this.activePhrase) 

    }

    handleInteraction() {
        
    }

 } 
