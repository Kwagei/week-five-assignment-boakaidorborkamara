// The random number generated by the computer 
let correctAnswer = Math.floor(Math.random() *100);

let guess_chances = document.getElementById("guessesRemaining");
let number_guessed = document.getElementById("previousGuesses")
let submit_btn = document.getElementById("submitBtn");
let cancel_btn = document.getElementById("cancelBtn");
let playerInput = document.getElementById("guess");
let result = document.getElementById("finalResult");
let start_game_btn = document.getElementById("start-game-btn");
let done_reading_instructions_btn = document.getElementById("done-reading-btn");
let player_name = document.getElementById("player-name");

//execute all the necessary functions needed for the game to work
function executeGame(){
    //start game after providing your name
    start_game_btn.addEventListener("click", startGame);

    //display game board after reading the instructions
    done_reading_instructions_btn.addEventListener("click", displayPlayGroundSection);


    submit_btn.addEventListener("click" , evaluateInput);
    submit_btn.addEventListener("click" , reduceGuessChances);
    submit_btn.addEventListener("click" , displayPreviousGuesses);
    submit_btn.addEventListener("click" , checkGuessChances);
    playerInput.addEventListener("focus" , clearPreviousResult);
    cancel_btn.addEventListener("click" , resetGame);
}

//enable game to start after player provide their name
function startGame(){
    if(player_name.value === ""){
        alert("To Start The Game, Enter Player Name");
    }
    else{
        toggleWelcomeMessageSectionDisplay();
        toggleInstructionGroundDisplay();
    }
}

//hide welcome-message-section if the display value is not equal to none, and show if it is
function toggleWelcomeMessageSectionDisplay(){
    let signup_section = document.getElementById("welcome-message-section");
    if(signup_section.style.display !== "none"){
        signup_section.style.display = "none";
    }
    else
    {
        signup_section.style.display = "flex";
    }
   
}

//hide instruction ground if the display value is not equal to none, and show if it is
function toggleInstructionGroundDisplay(){
    let instruction_ground = document.getElementById("instructions-ground");
    if(instruction_ground.style.display !== "flex"){
        instruction_ground.style.display = "flex";
    }
    else
    {
        instruction_ground.style.display = "none";
    }
}

//hide instruction ground if the display value is not equal to none, and show if it is
function togglePlayGroundDisplay(){
    let game_play_ground = document.getElementById("game-play-ground");
    if(game_play_ground.style.display !== "none"){
        game_play_ground.style.display = "flex";
    }
    else
    {
        game_play_ground.style.display = "none";
    }
}

//show the game field or the actual playground after reading the instruction
function displayPlayGroundSection(){
    toggleInstructionGroundDisplay();
    togglePlayGroundDisplay();
}

//checking if user guess the correct number
function evaluateInput(){

    if(parseInt(playerInput.value) === 0 || playerInput.value === undefined || playerInput.value === "")
    {
        document.getElementById("finalResult").innerHTML = player_name.value + ", " + "Guess a number greater than zero"
        document.getElementById("finalResult").style="padding: 15px;" 
        result.style.backgroundColor = "white";
        result.style.color = "red";
        console.log(playerInput.value);
    }
    else if(parseInt(playerInput.value) === correctAnswer)
    {
       document.getElementById("finalResult").innerHTML="Congratulations " + player_name.value + ", You Win"
       document.getElementById("finalResult").style="padding: 10px;"
       result.style.backgroundColor = "white";
        result.style.color = "green";
        if( document.getElementById("finalResult").innerHTML==="Congratulations " + player_name.value + ", You Win")
        playerInput.disabled = true;
        submit_btn.disabled = true;
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
        document.getElementById("finalResult").innerHTML="Aww " + player_name.value + " , You are Too Low"
        document.getElementById("finalResult").style="padding: 6px;"
        result.style.backgroundColor = "white";
        result.style.color = "red";
    }
    else if(parseInt(playerInput.value) > correctAnswer)
    {
        document.getElementById("finalResult").innerHTML="Wow " + player_name.value + " , Too High"
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

//Reduce the amout of chance player has after the guess a wrong number
let guess_counter = 10;
function reduceGuessChances(){
    
    guess_chances.innerHTML = guess_counter;

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
    result.style.backgroundColor="white";
    playerInput.value = "";
}

//check if guess chances is over and end the game if it is
function checkGuessChances(){
    if(guess_counter === 0){
        result.innerText = "Chances over, " + player_name.value + " you loose. The correct number is " + correctAnswer ;
        result.style.backgroundColor = "white";
        result.style.color = "red";
        playerInput.disabled = true;
        submit_btn.disabled = true;
    }
}

//reset the game to default
function resetGame(){
    document.location.href="";
}


//envoking the executeGame fnx
executeGame();



