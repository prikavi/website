let userScore=0;
let compScore=0;
const userScoreDom = document.getElementById('user-score');
const compScoreDom = document.getElementById('comp-score');
const scoreDom = document.querySelector('.score-label');
const resultDom =document.querySelector('.result > p');
const rockDom=document.getElementById("r");
const paperDom =document.getElementById('p');
const scissorDom =document.getElementById('s');


function compchoice(){
  const choices=['r','p','s'];
  const randomNumbers=Math.floor(Math.random()*3);
 return choices[randomNumbers];
}
// console.log(computerchoice());

function big(LETTERS){
  if (LETTERS === "p") return "PAPER";
    if (LETTERS === "r") return "ROCK";
      return "SCISSORS";
}

function win(user,computer) {
  const sw1=" (user) ".fontsize(3).sub();
  const sw2=" (comp) ".fontsize(3).sub();
  userScore++;
 console.log("compWins");
  userScoreDom.innerHTML=userScore;
  compScoreDom.innerHTML=compScore;
  resultDom.innerHTML= big(user) +sw1+ " beats " + big(computer) +sw2+"! USER WIN 💥"
  document.getElementById(user).classList.add('green');
 setTimeout(function () {
      document.getElementById(user).classList.remove('green');
 }, 400);
}


function lose(user,computer) {
  const sw1=" (user) ".fontsize(3).sub();
  const sw2=" (comp) ".fontsize(3).sub();
  compScore++;
 console.log("compWins");
  userScoreDom.innerHTML=userScore;
  compScoreDom.innerHTML=compScore;
  resultDom.innerHTML= big(computer) +sw1+ " beats " + big(user) +sw2+"! COMP WIN 😁"
  document.getElementById(user).classList.add('red');
  setTimeout(function () {
       document.getElementById(user).classList.remove('red');
  }, 400);
 }

function draw(user,computer) {
  const sw1=" (user) ".fontsize(3).sub();
  const sw2=" (comp) ".fontsize(3).sub();;
 console.log("it's A Draw");
  userScoreDom.innerHTML=userScore;
  compScoreDom.innerHTML=compScore;
  resultDom.innerHTML= big(user) +sw1+ " AND " + big(computer) +sw2+"! MATCH DRAWS 👻"
    document.getElementById(user).classList.add('grey');
    setTimeout(function () {
         document.getElementById(user).classList.remove('grey');
    }, 400);
   }

function rps(userChoice){
 const thecomputerchoice=compchoice();
 console.log(userChoice)
 console.log(thecomputerchoice)
 switch (userChoice + thecomputerchoice) {
   case "rs":
   case "pr":
   case "sp":
   win(userChoice,thecomputerchoice);
     break;

   case "rp":
   case "ps":
   case "sr":
      lose(userChoice,thecomputerchoice)
    break;
    case "rr":
    case "pp":
    case "ss":
       draw(userChoice,thecomputerchoice)
     break;
}

};

function rpsmain(){
 rockDom.addEventListener('click',function(){
  rps('r');
 })
 paperDom.addEventListener('click',function(){
  rps('p');
 })
 scissorDom.addEventListener('click',function(){
   rps('s')
  })
  };
 rpsmain();
