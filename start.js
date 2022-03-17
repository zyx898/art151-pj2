

function intialize(){
    
    setTimeout(function () {
        sessionStorage.clear();
        displayRule();
    }, 0);

    setTimeout(() => {
        document.getElementById("startButton").style.backgroundColor = "Red";
        document.getElementById("startButton").innerText  = "Let's Go";
        document.getElementById("startButton").onclick  = startPlay();
    }, 13500);
    
}

function startPlay(){
    setTimeout(() => {
        window.location.href = "./phase1/firstPhase.html";
    }, 1500);
    
}


function displayRuleHelper(string){
    var container = document.getElementById("words");
    setTimeout(() => {
        var word1 = document.createElement("p");
        word1.className = "typewriter anim-typewriter";
        word1.innerHTML = string;
        container.appendChild(word1);
    },0);
}


function displayRule() {
    var temp = document.getElementById("ruleTitle").style = "visible";
    var container = document.getElementById("words");
    displayRuleHelper("You will have 500$ in your saving when you start the game. Your goal is to make decisions with your own money and see if you can ");
    displayRuleHelper("manage your money in a good way so you don't go homeless. This game will weekly Investment game. Every week you have a chances ");
    displayRuleHelper("to decide if you want to invtest your money in Crypto, Buy more crypto, sell your crypto, or hold your crypto. You can choose");
    displayRuleHelper("to discover other coin as well. Every week you will need 300$ or more in your saving account for you not going homeless. Random");
    displayRuleHelper("event will occurs in the weekly bases which will cost you money. Every week you will get 500$ for working 6 day part time job.");
    document.getElementById("startButton").disabled  = true;
    document.getElementById("startButton").style.backgroundColor = "Grey";
}
