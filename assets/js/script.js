var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var score = 0;

var buttonEl = document.querySelector("#proceed-button");
buttonEl.addEventListener("click", function() {
    countdown()
    startGame()
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

// var testQue = Object.keys(answer1);
// console.log(testQue)


// //iterate over keys
// for (let i = 0; i< testVar.length; i++) {
//     testVar2 = testVar[i] //iterate over key
//     testvar3 = scores.[testVar2]; // passing key into
// }

 
var questionBank = [

    { 
    questionText: "What does 'DOM' stand for?",
    options: ["Designated Operating Model", "Document Object Model", "Deliberate Operations Module", "Documented Objective Mode"],
    correctAnswer: 1
    },
    { 
    questionText: "What is an event listener used for?",
    options: ["the observation of an event", "data", "a response to an event", "create an HTML element"],
    correctAnswer: 0
    },
    { 
    questionText: "question 3?",
    options: ["Dsdfel", "Dsfodel", "DeliberatsdfModule", "DocumsdfMode"],
    correctAnswer: 1
    },
    { 
    questionText: "question 4?",
    options: ["ya", "ok", "raer", "dsfa"],
    correctAnswer: 1
    },
    { 
    questionText: "question 5?",
    options: ["Desigfsdodel", "Docufdt Model", "Deliberasdfations Module", "Docufdstive Mode"],
    correctAnswer: 1
    },
    { 
    questionText: "sadf?",
    options: ["Desasdf Model", "Documeadfodel", "Deliberatfds Module", "Documensdfe Mode"],
    correctAnswer: 1
    },
    { 
    questionText: "What does 'DOM' stand for?",
    options: ["Designated Operating Model", "Document Object Model", "Deliberate Operations Module", "Documented Objective Mode"],
    correctAnswer: 1
    },
    { 
    questionText: "What does 'DOM' stand for?",
    options: ["Designated Operating Model", "Document Object Model", "Deliberate Operations Module", "Documented Objective Mode"],
    correctAnswer: 1
    },
    { 
    questionText: "What does 'DOM' stand for?",
    options: ["Designated Operating Model", "Document Object Model", "Deliberate Operations Module", "Documented Objective Mode"],
    correctAnswer: 1
    },

    
];

var i = 0;

function nextQuestion() {
    
    if (i < questionBank.length) {
        i++;
        document.getElementById("question").innerText = questionBank[i].questionText
        document.getElementById("b1").innerText = questionBank[i].options[0]
        document.getElementById("b2").innerText = questionBank[i].options[1]
        document.getElementById("b3").innerText = questionBank[i].options[2]
        document.getElementById("b4").innerText = questionBank[i].options[3]
     
    } //else if {

   //}

};

 
//function addScore {


function startGame() {
    document.getElementById("question").innerText = questionBank[i].questionText;

    document.getElementById("quiz-contents").appendChild
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    button1.textContent = questionBank[i].options[0];
    button2.textContent = questionBank[i].options[1];
    button3.textContent = questionBank[i].options[2];
    button4.textContent = questionBank[i].options[3];
    button1.className = "btn";
    button2.className = "btn";
    button3.className = "btn";
    button4.className = "btn";
    button1.id = "b1";
    button2.id = "b2";
    button3.id = "b3";
    button4.id = "b4";
    document.getElementById("quiz-contents").appendChild(button1);
    document.getElementById("quiz-contents").appendChild(button2);
    document.getElementById("quiz-contents").appendChild(button3);
    document.getElementById("quiz-contents").appendChild(button4);

    document.getElementById("intro").remove()
    document.getElementById("proceed-button").remove()

    button2.addEventListener("click", function() {
    nextQuestion()
    });

} 



//function resultsPage() {}
    //use this function to move to the results page


//countdown();