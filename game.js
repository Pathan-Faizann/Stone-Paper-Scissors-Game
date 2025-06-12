let userside = document.querySelector(".userSide");
let choices = document.querySelectorAll(".choices img");
let play = document.querySelector(".submit");
let randomMoves = ['./stone.jpg','./paper.jpeg','./kechi.jpeg'];
let compSide = document.querySelector(".CompSide");
let userChoice ="";
let compMove ="";
let UScore =0;
let CScore=0;
let userScore = document.querySelector(".userScore");
let CompScore = document.querySelector(".CompScore");
let Upoint = document.querySelector(".uScore")
let Cpoint = document.querySelector(".cScore")


choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
  let src = choice.getAttribute("src");
  userside.classList.remove("thiswon");
  compSide.classList.remove("thiswon")
  compSide.classList.remove("thislose")
  userside.classList.remove("thislose")
  userside.innerHTML = ''; 
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
  compMove =compChoice.getAttribute("src")
  }
  setTimeout(()=>{
    
    if(userMove===compMove){
      alert("Tie Move")
    }
    else if(userMove==="./stone.jpg" && compMove==="./kechi.jpeg"||userMove==="./paper.jpeg" && compMove==="./stone.jpg"||userMove==="./kechi.jpeg" && compMove==="./paper.jpeg"){
      UScore++;
      Upoint.innerText=UScore;
      userside.classList.add("thiswon")
      compSide.classList.add("thislose")
    }
    else{
      CScore++;
      Cpoint.innerText=CScore;
      compSide.classList.add("thiswon")
      userside.classList.add("thislose")
    }
   
    if(UScore===3){
      let winnerBoard = document.createElement("div")
      let winnerText = document.createElement("h2")
      let reset = document.createElement("button")
      reset.classList.add("reset");
      reset.innerHTML="Replay";
      reset.addEventListener("click",()=>{
        location.reload();
      })
      winnerBoard.appendChild(winnerText);
      winnerBoard.appendChild(reset);
      winnerBoard.classList.add("winnerBoard");
      winnerText.innerText="You Won!"
      document.body.appendChild(winnerBoard);

    }
    else if(CScore===3){
      let winnerBoard = document.createElement("div")
      let winnerText = document.createElement("h2")
      let reset = document.createElement("button")
      reset.classList.add("reset");
      reset.innerHTML="Replay";
      reset.addEventListener("click",()=>{
        location.reload();
      })
      winnerBoard.appendChild(winnerText);
      winnerBoard.appendChild(reset);
      winnerBoard.classList.add("winnerBoard");
      winnerBoard.classList.add("winnerBoard2");
      winnerText.innerText="You Lose!"
      document.body.appendChild(winnerBoard);
    }

  },800)
})

