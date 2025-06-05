let userside = document.querySelector(".userSide");
let choices = document.querySelectorAll(".choices img");
let play = document.querySelector(".submit");
let randomMoves = ['stone.jpg','paper.jpeg','kechi.jpeg'];
let compSide = document.querySelector(".CompSide");
let userChoice ="";
let compMove ="";
let userMoveMove ="";

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
  let src = choice.getAttribute("src");
      // console.log("Image source:", src); // Debug log

    userside.innerHTML = ''; 
// userside.innerHTML = '<img src="stone.jpeg" class="Uchoice">';
  userChoice = document.createElement("img");
  userChoice.setAttribute("src",src)
  userChoice.classList.add("Uchoice");
  userside.appendChild(userChoice);
})

  
})
play.addEventListener("click",()=>{
  if (userside.innerHTML==""){
    alert("Please choose your Move First..! ")
  }
  else{
  let random = Math.floor(Math.random()*randomMoves.length);
  console.log(random)
  let src2 = randomMoves[random];
  // console.log(randomMoves[2]);
  compSide.innerHTML = "";
  let compChoice = document.createElement("img");
  compChoice.setAttribute("src",src2);
  compChoice.classList.add("Uchoice");
  compSide.appendChild(compChoice);
  userMove = userChoice.getAttribute("src")
  console.log(userMove);
  compMove =compChoice.getAttribute("src")

  console.log(userMove,compMove)

  }
  setTimeout(()=>{
    
    if(userMove===compMove){
      alert("Tie Move")

    }
    

  },1200)
})

