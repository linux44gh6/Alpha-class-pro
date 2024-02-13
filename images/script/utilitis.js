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