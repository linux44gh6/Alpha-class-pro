function cotineuGame(){
   const alphabet= getARandomALphabet();
   console.log(alphabet);

   const currentLetter=document.getElementById('current-letter');
   currentLetter.innerText=alphabet;

   addBackgroundColor(alphabet);
}
function play(){
//    add a classlist hide my home page "hidden" with the classList
   hiddenElementById('home-screen');
    RemoveIDwithelemnet('play-ground');
 cotineuGame();
}