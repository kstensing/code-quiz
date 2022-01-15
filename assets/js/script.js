var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var buttonEl = document.querySelector("#proceed-button");
buttonEl.addEventListener("click", function() {
    countdown()
    questionOne()
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


function questionOne() {
var nextEl = document.querySelector("#question");
var question1El = document.createElement("h4");
question1El.textContent = "What does 'DOM' stand for?";
question1El.className ="title";
nextEl.appendChild(question1El)

var answersEl = document.querySelector("#question");
var answer1El = document.createElement("button");
var answer2El = document.createElement("button");
var answer3El = document.createElement("button");
var answer4El = document.createElement("button");
answer1El.textContent = "1) Designated Operating Model";
answer2El.textContent = "2) Document Object Model";
answer3El.textContent = "3) Deliberate Operations Module";
answer4El.textContent = "4) Documented Objective Mode";
answer1El.className = "btn";
answer2El.className = "btn";
answer3El.className = "btn";
answer4El.className = "btn";
answersEl.appendChild(answer1El)
answersEl.appendChild(answer2El)
answersEl.appendChild(answer3El)
answersEl.appendChild(answer4El)


};


//function resultsPage() {}
    //use this function to move to the results page


//countdown();