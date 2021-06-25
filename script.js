let score = 0;
let playOptions = ["paper", "scissors", "rock"];

document.getElementById("rock").addEventListener("click", function(){ init("rock")})
document.getElementById("paper").addEventListener("click", function(){ init("paper")})
document.getElementById("scissors").addEventListener("click", function(){ init("scissors")})

function init(user){
  document.querySelector(".options").classList.add("hidden");
  document.querySelector(".result").classList.remove("hidden");

  let computer = computerChoice();
  
  cleanClass("user", user); 
  cleanClass("computer", computer);
  
  compareOptions(user, computer);
}

function computerChoice(){
  const choice = Math.floor(Math.random()*3);
  const computerOption = playOptions[choice];
  return computerOption;
}

function cleanClass(player, option){
  document.querySelector("." + player + " " + ".player").classList.remove("rock", "scissors", "paper");
  addNewClass(player, option);
}

function addNewClass(player, option){
  img = "./images/icon-" + option + ".svg"
  document.querySelector("." + player + " " + ".player").classList.add(option);
  document.querySelector("." + player + " " + ".player img").src=img;
}

function compareOptions(user, computer){
  if(user === computer)
    document.getElementById("result").textContent = "EQUAL";
  else if(user === "rock" && computer ==="scissors" 
  || user === "scissors" && computer ==="paper"  
  || user === "paper" && computer ==="rock"){
    document.getElementById("result").textContent = "YOU WIN";
    score ++;
    document.getElementById("score").textContent = score;
  }else {
    document.getElementById("result").textContent = "YOU LOSE";
  }
}

document.querySelector(".play-again button").addEventListener("click", function(){
  setTimeout(function(){
    document.querySelector(".result").classList.add("hidden");
    document.querySelector(".options").classList.remove("hidden");
  }, 350);
})