var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var score = 0;

var i = 0;
var timeLeft = 75;
var highScore = []
var scores = []

// button to begin the timer
var buttonEl = document.querySelector("#proceed-button");
buttonEl.addEventListener("click", function() {
    countdown()
    startGame()
    });

function countdown() {

    var timeInterval = setInterval (function() {
        // adding time left to the timer element
        timerEl.textContent = "Time: " + timeLeft + " seconds"
        timeLeft--;

        if (timeLeft <= -1) {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
            endGame()
        }
    } ,1000);
}

// var testQue = Object.keys(answer1);
// console.log(testQue)


 
var questionBank = [
    { 
    questionText: "Commonly used data types do not include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 2
    },
    { 
    questionText: "The condition in an if/else statement is enclosed with_______.",
    options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctAnswer: 2
    },
    { 
    questionText: "Arrays in JavaScript can be used to store:",
    options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: 3
    },
    { 
    questionText: "String values must be enclosed within _______ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: 2
    },
    { 
    questionText: "A very useful tool in during development and debugging for printing content to the debugger is:",
    options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correctAnswer: 3
    },
];



function nextQuestion() {
    // if i is less than the questionBank, continue on to the next question
    i++;
    if (i < questionBank.length) {
        document.getElementById("question").innerText = questionBank[i].questionText
        document.getElementById("b1").innerText = questionBank[i].options[0]
        document.getElementById("b2").innerText = questionBank[i].options[1]
        document.getElementById("b3").innerText = questionBank[i].options[2]
        document.getElementById("b4").innerText = questionBank[i].options[3]
       
    } else {
        endGame()
    }
};

function correct() {
    // element to appear that says "correct!"
    document.getElementById("message").innerText = "Correct!"
    // add score++
    score++
    console.log(score)
    // proceed with nextQuestion
    nextQuestion()
};

function incorrect() {
    // element to appear that says "wrong!"
    document.getElementById("message").innerText = "Wrong!"
    // subtract time 
    timeLeft = timeLeft - 10;
    // proceed with nextQuestion
    nextQuestion()
};


function startGame() {
    // changing the welcome statement to question 1
    document.getElementById("question").innerText = questionBank[i].questionText;

    // creating the buttons showing answer options
    document.getElementById("quiz-contents").appendChild
    var button0 = document.createElement("button");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    // setting the text content of the buttons to the appropriate answer option from the array
    button0.textContent = questionBank[i].options[0];
    button1.textContent = questionBank[i].options[1];
    button2.textContent = questionBank[i].options[2];
    button3.textContent = questionBank[i].options[3];
    // adding the button class names for styling 
    button0.className = "btn";
    button1.className = "btn";
    button2.className = "btn";
    button3.className = "btn";
    // adding the button id's for selecting use later
    button0.id = "b1";
    button1.id = "b2";
    button2.id = "b3";
    button3.id = "b4";
    // appending the new button to the quiz-content elements
    document.getElementById("quiz-contents").appendChild(button0);
    document.getElementById("quiz-contents").appendChild(button1);
    document.getElementById("quiz-contents").appendChild(button2);
    document.getElementById("quiz-contents").appendChild(button3);
    // removing the intro P and Begin Quiz button
    document.getElementById("intro").remove()
    document.getElementById("proceed-button").remove()

    // add event listeners to know when the correct answer is hit to proceed with the "correct" function
    switch (questionBank[i].correctAnswer) {
        case 0:
            button0.addEventListener("click", correct);
            break;
        case 1:
            button1.addEventListener("click", correct);
            break;
        case 2:
            button2.addEventListener("click", correct);
            break;
        case 3:
            button3.addEventListener("click", correct);
            break;
    } 

    // add event listeners to the buttons to move to the "incorrect" function when the incorrect answer button is selected
    if (questionBank[i].correctAnswer !== 0) {
        button0.addEventListener("click", incorrect)
    } 
    if (questionBank[i].correctAnswer !== 1) {
        button1.addEventListener("click", incorrect)
    } 
    if (questionBank[i].correctAnswer !== 2) {
        button2.addEventListener("click", incorrect)
    } 
    if (questionBank[i].correctAnswer !== 3) {
        button3.addEventListener("click", incorrect)
    }
} 

function endGame() {
    // changing question to say "All done!"
    document.getElementById("question").innerText = "All done!"

    // remove the buttons
    document.getElementById("b1").remove()
    document.getElementById("b2").remove()
    document.getElementById("b3").remove()
    document.getElementById("b4").remove()
    document.getElementById("message").remove()
    // add score print out
    var scorePrint = document.createElement("div");
    scorePrint.textContent = "Your final score is " + score + ".";
    scorePrint.className = "intro";
    document.getElementById("question").appendChild(scorePrint);
  
    // addform for initials
    var formEl = document.createElement("form");
    //form.setAttribute(score, "initials");
    var initialsEl = document.createElement("input");
    initialsEl.setAttribute("type", "text");
    initialsEl.setAttribute("name", "initial");
    initialsEl.setAttribute("placeholder", "Initials");
    initialsEl.setAttribute("value", "");
    initialsEl.id = "initialsInput"
    var submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    submitEl.setAttribute("type", "submit");
    submitEl.id = "submit";
    document.getElementById("results").appendChild(formEl);
    formEl.appendChild(initialsEl);
    formEl.appendChild(submitEl);
    
    // event listener: when initial submit button is pressed...
    formEl.addEventListener("submit", highScoreHandler);
};

var refreshPage = function () {
    refreshPage = location.reload();    
};
    //function to create the highScore Object 
var highScoreHandler = function (event) {
    event.preventDefault();
    document.getElementById("question").innerText = "High scores"
    document.getElementById("submit").remove()
    

    
    // go back button
    var refreshEl = document.createElement("button");
    refreshEl.textContent = "Go back";
    refreshEl.id = "refresh";
    refreshEl.setAttribute("type", "submit");
    document.getElementById("results").appendChild(refreshEl);
    refreshEl.addEventListener("click", refreshPage, false);

    var initialsInput = document.querySelector("input[name='initial']").value;
    var scoreObj =
        {  
            name: initialsInput, 
            scoreOf: score.toString(),
        };

    if (!initialsInput) {
        alert("You must provide your initials!");
        return false;
    };

    var highScores = localStorage.getItem("highScores");
    var highScore = JSON.parse(highScores);

    if (highScore == null) {
        highScore = [];
    };
    
    highScore.push(scoreObj);
    
    for (var i = 0; i < highScore.length; i++) {
        var highScoreLi = document.createElement("li");
        highScoreLi.textContent = highScore[i].name + " - " + highScore[i].scoreOf;
        document.getElementById("results").appendChild(highScoreLi);
    };
    
    localStorage.setItem("highScores", JSON.stringify(highScore));
    document.getElementById("initialsInput").remove()
};



//function resultsPage() 