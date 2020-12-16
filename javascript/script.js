let correctAnswer = Math.floor(Math.random() *100);
let guess_chances = document.getElementById("guessesRemaining");
let number_guessed = document.getElementById("previousGuesses")
console.log(correctAnswer);
let submit_btn = document.getElementById("submitBtn");
let cancel_btn = document.getElementById("cancelBtn");
let playerInput = document.getElementById("guess");
let result = document.getElementById("finalResult");

//checking if user is equal to radom number
function evaluateInput(){

    if(parseInt(playerInput.value) === 0 || playerInput === undefined)
    {
        document.getElementById("finalResult").innerHTML="Guess a number greater than zero"
        document.getElementById("finalResult").style="padding: 15px;" 
        result.style.backgroundColor = "white";
        result.style.color = "red";
    }
    else if(parseInt(playerInput.value) === correctAnswer)
    {
       document.getElementById("finalResult").innerHTML="You Win"
       document.getElementById("finalResult").style="padding: 10px;"
       result.style.backgroundColor = "white";
        result.style.color = "rgb(2, 2, 54)";
    }
    else if(parseInt(playerInput.value) > 100)
    {
        document.getElementById("finalResult").innerHTML="Oops, Out of Range"
        document.getElementById("finalResult").style="padding: 6px;"
        result.style.backgroundColor = "white";
        result.style.color = "red";
        
    }
    else if(playerInput.value < correctAnswer)
    {
        document.getElementById("finalResult").innerHTML="Aww, Too Low"
        document.getElementById("finalResult").style="padding: 6px;"
        result.style.backgroundColor = "white";
        result.style.color = "red";
    }
    else if(parseInt(playerInput.value) > correctAnswer)
    {
        document.getElementById("finalResult").innerHTML="Wow, Too High"
        document.getElementById("finalResult").style="padding: 6px;"
        result.style.backgroundColor = "white";
        result.style.color = "red";
    }
    
    else
    {
        console.log("You Failed");
        document.getElementById("finalResult").style="padding: 6px;"
    }

}
//reducing the amout of the the player has to guess
let guess_counter = 10;
guess_chances.innerHTML = guess_counter;

//Reduce the amout of chance player has after the guess a wrong number
function reduceGuessChances(){
    if(parseInt(playerInput.value) !== correctAnswer){
        guess_counter--
        guess_chances.innerHTML = guess_counter;
    }
}

//show previous guesses made by player
let previous_guesses = [];
function displayPreviousGuesses(){
    previous_guesses.push(playerInput.value);
    number_guessed.innerHTML = previous_guesses; 
}

//clear previous result upon inputing another value
function clearPreviousResult(){
    result.innerHTML = "";
    // result.style.display = "none";
    result.style.backgroundColor="yellow";
    playerInput.value = "";
}

//reset the game to default
function resetGame(){
    document.location.href="";
}

//check if chances is over
function checkGuessChances(){
    if(guess_counter === 0){
        result.innerText = "Chances over, you loose.                                  The correct number is " + correctAnswer ;
        result.style.backgroundColor = "white";
        result.style.color = "red";
    }
}

submit_btn.addEventListener("click" , evaluateInput);
submit_btn.addEventListener("click" , reduceGuessChances);
submit_btn.addEventListener("click" , displayPreviousGuesses);
submit_btn.addEventListener("click" , checkGuessChances);
playerInput.addEventListener("focus" , clearPreviousResult);
cancel_btn.addEventListener("click" , resetGame);



