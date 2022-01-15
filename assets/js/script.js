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
var question2Obj = {
    question: "2What does 'DOM' stand for?",
    answer1: "1) 2Designated Operating Model",
    answer2: "2) 2Document Object Model",
    answer3: "3) 2Deliberate Operations Module",
    answer4: "4) 2Documented Objective Mode",
};
var question3Obj = {
    question: "What does 'DOM' stand for?",
    answer1: "1) Designated Operating Model",
    answer2: "2) Document Object Model",
    answer3: "3) Deliberate Operations Module",
    answer4: "4) Documented Objective Mode",
};

function nextQuestion() {
    document.getElementById("question").innerText = question1Obj.question
    document.getElementById("intro").remove()
    document.getElementById("proceed-button").remove()

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
    button1.id = "q1b1";
    button2.id = "q1b2";
    button3.id = "q1b3";
    button4.id = "q1b4";
    document.getElementById("quiz-contents").appendChild(button1);
    document.getElementById("quiz-contents").appendChild(button2);
    document.getElementById("quiz-contents").appendChild(button3);
    document.getElementById("quiz-contents").appendChild(button4);

    button2.addEventListener("click", function() {
        alert("Correct!")
        question2()
    });
} 

function question2() {
    document.getElementById("question").innerText = question2Obj.question
    document.getElementById("q1b1").innerText = question2Obj.answer1
    document.getElementById("q1b2").innerText = question2Obj.answer2
    document.getElementById("q1b3").innerText = question2Obj.answer3
    document.getElementById("q1b4").innerText = question2Obj.answer4
   

} 

//function resultsPage() {}
    //use this function to move to the results page


//countdown();