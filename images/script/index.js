//get key value after prees a button into button
function handleKeyboardKey(value) {
   const playerPressed = value.key;


   //game over with the button 'esc'
   if(playerPressed==='Escape'){
      gameOver();
   }
   //kon key ta pressed korar ucit cilo seta id dara nia aslam
   const expectedKey = document.getElementById('current-letter').innerText;
   const expectedKeyLower = expectedKey.toLowerCase();
   //   console.log(expectedKeyLower)


   if (expectedKeyLower === playerPressed) {
      // console.log("you won the game");
      const updateCoreLine = getTextById('score-line')
      const value = updateCoreLine + 1;
      //set the score in the score button
      setText('score-line', value);

      const getTotalScoreElement = document.getElementById('total-score');
      const getTotalScoreElementText = getTotalScoreElement.innerText;
      getTotalScoreElement.innerText = value;
      //round of the game
      removeBackgroundColorById(expectedKeyLower)
      cotineuGame();
   }
   else {

      const LifeScore = getTextById('life-line');
      const valueOfLife = LifeScore - 1;
      setText('life-line', valueOfLife);


      if (valueOfLife === 0) {
         gameOver()
      }
   }
}
document.addEventListener('keyup', handleKeyboardKey);

function cotineuGame() {
   const alphabet = getARandomALphabet();
   // console.log(alphabet);

   const currentLetter = document.getElementById('current-letter');
   currentLetter.innerText = alphabet;
   addBackgroundColor(alphabet);
}
function play() {
   //    add a classlist hide my home page "hidden" with the classList
   hiddenElementById('home-screen');
   RemoveIDwithelemnet('play-ground');
   cotineuGame();
}

function gameOver() {
   hiddenElementById('play-ground');
   RemoveIDwithelemnet('final-score');

   //clear the last alphba bet

   const cAlphabet=curretLatter('current-letter');
 console.log(cAlphabet)
 removeBackgroundColorById(cAlphabet)
}

//play again with the click of play now btn
function playAgain() {
   hiddenElementById('final-score');
   RemoveIDwithelemnet('play-ground');
   cotineuGame();
   //reset the scoreLine
   setText('life-line', 5)
   getTextById('score-line')
   setText('score-line', 0)

   //clear the last highling element
}