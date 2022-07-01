var op1 = "Stone";
var op2 = "Paper";
var op3 = "Scissors";
var user;
var computer;
var aleatorio = Math.floor(Math.random()*3);        

        
switch (aleatorio) {
    case 1:
        computer = op1;
        break;
    case 2:
        computer = op2;
        break;
    default:
        computer = op3;            
}

function message() {
switch (true) {
    case (user === computer):                
        result1.innerHTML = "<p><h1> Computer chose </h1></p>"; result3.innerHTML = "<p><h1>" + computer + "</h1></p>"; result4.innerHTML = "<p><h1>TIE, PLAY AGAIN</h1></p>";
        break 
    case (user == "Stone" && computer == "Paper"): 
        result1.innerHTML = "<p><h1> Computer chose </h1></p>"; result3.innerHTML = "<p><h1>" + computer + "</h1></p>"; result4.innerHTML = "<p><h1>YOU LOST, TRY AGAIN</h1></p>";
        break;
    case (user == "Stone" && computer == "Scissors"):
    result1.innerHTML = "<p><h1> Computer chose </h1></p>"; result3.innerHTML = "<p><h1>" + computer + "</h1></p>"; result4.innerHTML = "<p><h1>YOU WIN, CONGRATULATIONS!</h1></p>";
        break;
    case (user == "Paper" && computer == "Stone"):
    result1.innerHTML = "<p><h1> Computer chose </h1></p>"; result3.innerHTML = "<p><h1>" + computer + "</h1></p>"; result4.innerHTML = "<p><h1>YOU WIN, CONGRATULATIONS!</h1></p>";
        break;
    case (user == "Paper" && computer == "Scissors"):
    result1.innerHTML = "<p><h1> Computer chose </h1></p>"; result3.innerHTML = "<p><h1>" + computer + "</h1></p>"; result4.innerHTML = "<p><h1>YOU LOST, TRY AGAIN</h1></p>";
        break;
    case (user == "Scissors" && computer == "Stone"):
    result1.innerHTML = "<p><h1> Computer chose </h1></p>"; result3.innerHTML = "<p><h1>" + computer + "</h1></p>"; result4.innerHTML = "<p><h1>YOU LOST, TRY AGAINn</h1></p>";
        break;
    default:
    result1.innerHTML = "<p><h1> Computer chose </h1></p>"; result3.innerHTML = "<p><h1>" + computer + "</h1></p>"; result4.innerHTML = "<p><h1>YOU WIN, CONGRATULATIONS!</h1></p>"; 
    }
}
function choose () {
        document.getElementById("Stone").addEventListener('click', user = op1, false);                    
        
}
function choose1 () {
        document.getElementById("Paper").addEventListener('click', user = op2, false);
        
}
function choose2 () {
        document.getElementById("Scissors").addEventListener('click', user = op3, false);
        
}
function run() {
        document.getElementById("Stone").addEventListener( 'click', choose, false );
        document.getElementById("Stone").addEventListener( 'click', message, false );

}
function run1()
{
        document.getElementById("Paper").addEventListener( 'click', choose1, false );
        document.getElementById("Paper").addEventListener( 'click', message, false );

}
function run2()
{
        document.getElementById("Scissors").addEventListener( 'click', choose2, false );
        document.getElementById("Scissors").addEventListener( 'click', message, false );
        
}

var refresh = document.getElementById("refresca");
refresh.addEventListener("click", refrescaPorClick);

function refrescaPorClick(){
    location.reload()
}
