var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

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

function resultsPage() {
    //use this function to move to the results page
}

countdown();