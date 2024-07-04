
const guessBtn = document.getElementById('guessBtn');

guessBtn.addEventListener('click', ()=>{
    const wrongGuess = ["Close one!", "Keep trying!", "Nice effort!", "Almost there!", "Don't give up!", "Not quite, but good try!", "Keep going!", "So close!", "Try Again!"]
    const rightGuess= ["Spot on!", "You nailed it!", "That's correct!", "Great job!", "You're on fire!", "Perfect guess!", "You got it!", "Well done!", "Absolutely right!"]
    const compAnswer = Math.floor(Math.random() * 4 + 1);
    const inputNumber = document.getElementById('guessField').value;
    const computerGuess = document.getElementById('computerGuess');
    const YourGuess = document.getElementById('YourGuess');
    const displayResult = document.getElementById('displayResult');
    computerGuess.innerHTML = compAnswer;
    YourGuess.innerHTML = inputNumber;

    inputNumber.value = "";

    
    function complimentRandomWrong(){
        return Math.floor(Math.random() * wrongGuess.length);
    }
    function complimentRandomRight(){
        return Math.floor(Math.random() * rightGuess.length);
    }
    const wrongCompliment = complimentRandomWrong()
    const rightCompliment = complimentRandomRight()

    if(compAnswer == inputNumber){
        displayResult.textContent = rightGuess[rightCompliment];
        displayResult.style.color = "#0ed80e";
    }
    else{
        displayResult.textContent = wrongGuess[wrongCompliment];
        displayResult.style.color = "red";
    }
    if(inputNumber > 4){
        displayResult.textContent = "Number should be between 1-3"
        displayResult.style.color = "white";
        YourGuess.innerHTML = "";
        computerGuess.innerHTML = "";
    }
   
})



