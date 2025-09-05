
let userScore = 0;
let computerScore = 0;


const choices =  document.querySelectorAll(".choices");
  
 const userScorePara =  document.querySelector("#user-score");
 const comScorePara = document.querySelector("#computer-score");
 

    const computerChoice = () =>{

    let choices = ["rock","paper","scissors"];


    const randIndex = Math.floor(Math.random() * 3);

    return choices[randIndex];

    }
    
       let msg = document.querySelector("#msg");
            
     const drawGame =() =>{   
        // console.log("the Game is Draw.");
        msg.innerText = "Game Draw,Try Again";
          msg.style.backgroundColor = "gray";
     }

     const gameWinner = (userWin,userChoice,comChoice) =>{
         
        if(userWin){
             userScore++;
             userScorePara.innerText = userScore;
            // console.log("you won the Game");
            msg.innerText = `You win! your ${userChoice} beats ${comChoice}`;
             msg.style.backgroundColor = "green";
        }
        else{
            
            computerScore++;
            comScorePara.innerText = computerScore;
            // console.log("computer won the Game");
            msg.innerText = `You lost!. ${userChoice} beats ${comChoice}`;
            msg.style.backgroundColor = "red";
            
        }
     
     };

   const playGame = (userChoice) =>{
    
      console.log("User choice is :",userChoice);

      const comChoice = computerChoice();

      console.log("the Computer choice is:",comChoice);
         

      if(userChoice === comChoice){
       // the Game is draw.
       drawGame();

      }
      else{
        let userWin = true;

        if(userChoice === "rock"){
            // paper,scissors
             userWin =  comChoice === "paper"? false: true;
        }
        else if(userChoice == "paper"){
            // scissors,rock
            userWin  = comChoice === "scissors"? false: true;
        }
        else{
        // rock,paper
        userWin = comChoice ==="rock"? false:true;

        }

        
        gameWinner(userWin,userChoice,comChoice);
       
          

      }



      // now Genenrate the choice for the  computer.


   };

   choices.forEach((choice) =>{
       
    choice.addEventListener("click",() => {
          let userChoice = choice.getAttribute("id");
        // console.log("the choices was clicked");

        playGame(userChoice);
         // Now the game is prepared.
        
    });
   });


