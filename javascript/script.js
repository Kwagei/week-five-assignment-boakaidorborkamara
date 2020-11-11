

var correctAnswer = Math.floor(Math.random() *100);
console.log(correctAnswer);

function evaluateInput(){
    var playerInput = document.getElementById("guess").value;
    console.log(playerInput);
    if(playerInput == correctAnswer)
    {
       document.getElementById("finalResult").innerHTML="You Win"
       document.getElementById("finalResult").style="padding: 15px; color:yellow"
    }
    else if(playerInput > correctAnswer && playerInput>100)
    {
        document.getElementById("finalResult").innerHTML="Oops, Out of Range"
        document.getElementById("finalResult").style="padding: 15px;"
    }
    else if(playerInput < correctAnswer)
    {
        document.getElementById("finalResult").innerHTML="Aww, Too Low"
        document.getElementById("finalResult").style="padding: 15px;"
    }
    else if(playerInput > correctAnswer)
    {
        document.getElementById("finalResult").innerHTML="Wow, Too High"
        document.getElementById("finalResult").style="padding: 15px;"
    }
    
    else
    {
        console.log("You Failed");
        document.getElementById("finalResult").style="padding: 15px;"
    }
}


function resetGame(){
    document.location.href="";
}