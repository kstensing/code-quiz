var myInterval = setInterval(myTimer, 1000);
function myTimer() {
    var clock = new clock();
    document.getElementById("demo").innerHTML = clock.toLocaleTimeString();
}

function myStopFunction() {
    clearInterval(myInterval);
}