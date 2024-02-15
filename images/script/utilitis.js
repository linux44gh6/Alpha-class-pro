function curretLatter(id){
    const currentAlphabet=document.getElementById(id);
    const currentAlphabetText=currentAlphabet.innerText;
    return currentAlphabetText;
}

function hiddenElementById(id){
    const addHiddenID=document.getElementById(id);
    addHiddenID.classList.add('hidden');
}

function RemoveIDwithelemnet(id){
    const addHiddenID=document.getElementById(id);
    addHiddenID.classList.remove('hidden');
}
//Genarate a random alphabet number
function getARandomALphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabets=alphabetString.split('');
   
    const getRandomNumber=Math.random()*25;
    const number=Math.round(getRandomNumber);
  const alphabet=alphabets[number];
  return alphabet;
}


function addBackgroundColor(element){
    const CurrentValue=document.getElementById(element);
    CurrentValue.classList.add('bg-orange-400')
}
function removeBackgroundColorById(element){
    const CurrentValue=document.getElementById(element);
    CurrentValue.classList.remove('bg-orange-400')
}


// funtion for get text of score and life line

function getTextById(id){
    const scoreLIne=document.getElementById(id);
 const scoreLIneText=scoreLIne.innerText;
 const scoreLIneNumber=parseInt(scoreLIneText);
 return scoreLIneNumber;
}

//for set the value to the score line

function setText(id,value){
    const getText=document.getElementById(id);
    getText.innerText=value
}
