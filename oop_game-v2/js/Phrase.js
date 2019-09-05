/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
        this.phrase = phrase; 
     }

    //  display phrase on game board
     addPhraseToDisplay() {
      let regex = /^[A-Za-z]+$/; 
      let test = new Boolean(character === regex); 
      let phraseDiv = document.getElementById('phrase'); 

      for (var character in phrase.phrase) { 
         
         if (test = true) {
            let letterLi = document.createElement('li'); 
            letterLi.className = 'hide letter ' + this.phrase[character]; 
            letterLi.innerHTML = this.phrase[character]; 
            phraseDiv.append(letterLi); 
            console.log('test is true')
            
         }

         //  if (test = false) {
         //    let space = document.createElement('li');
         //    space.className = 'space';
         //    phraseDiv.append('space'); 

         //    }
         }
      }
      
      checkLetter() {
         for (var letter in phrase.phrase) {
            if (chosenLetter === this.phrase[letter]) {
               console.log(chosenLetter) 
            } else {
            console.log('letter not matched'); 
         }
      }        
    }
 }

 