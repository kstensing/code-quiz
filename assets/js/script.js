var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var buttonEl = document.querySelector("#proceed-button");
buttonEl.addEventListener("click", function() {
    countdown()
    nextQuestion()
    });

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        
        timerEl.textContent = "Time: " + timeLeft + " seconds"
        timeLeft--;

        if (timeLeft === -1) {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
            resultsPage()
        }
    } ,1000);
}


var question1Obj = {
    question: "What does 'DOM' stand for?",
    answer1: "1) Designated Operating Model",
    answer2: "2) Document Object Model",
    answer3: "3) Deliberate Operations Module",
    answer4: "4) Documented Objective Mode",
};

function nextQuestion() {
    document.getElementById("question").innerText = question1Obj.question
    document.getElementById("intro").innerText = ""
    
    document.getElementById("proceed-button").textContent = ""
    document.getElementById("quiz-contents").appendChild
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    button1.textContent = question1Obj.answer1;
    button2.textContent = question1Obj.answer2;
    button3.textContent = question1Obj.answer3;
    button4.textContent = question1Obj.answer4;
    button1.className = "btn";
    button2.className = "btn";
    button3.className = "btn";
    button4.className = "btn";
    document.getElementById("quiz-contents").appendChild(button1);
    document.getElementById("quiz-contents").appendChild(button2);
    document.getElementById("quiz-contents").appendChild(button3);
    document.getElementById("quiz-contents").appendChild(button4);
} 

//function resultsPage() {}
    //use this function to move to the results page


//countdown();