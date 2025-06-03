let stone = document.querySelector(".stone");
let userside = document.querySelector(".userSide");
let choices = document.querySelectorAll(".choices img");

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
  let src = choice.getAttribute("src");
      console.log("Image source:", src); // Debug log

    userside.innerHTML = ''; 
// userside.innerHTML = '<img src="stone.jpeg" class="Uchoice">';
  let userChoice = document.createElement("img");
  userChoice.setAttribute("src",src)
  userChoice.classList.add("Uchoice");
  userside.appendChild(userChoice);
})
  
})
