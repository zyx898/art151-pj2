window.onload = intialize;


function intialize(){
    
    setTimeout(function () {
        
        displayRule();
    }, 0);

    setTimeout(() => {
        document.getElementById("buyButton").disabled  = false;
        document.getElementById("saveButton").disabled  = false;

        document.getElementById("buyButton").style.backgroundColor = "Red";
        document.getElementById("saveButton").style.backgroundColor = "Red";

        // document.getElementById("startButton").innerText  = "Let's Go";
    }, 13500);
    
}

function homeless(){
    setTimeout(() => {
        window.location.href = "../homeless/homeless.html";
    }, 500);
    
}

function phase2(){
    setTimeout(() => {
        window.location.href = "../phase2/secondPhase.html";
    }, 500);
    
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

function displayh4Helper(string){
    var container = document.getElementById("words");
    setTimeout(() => {
        var word1 = document.createElement("p");
        var head4 = document.createElement("h4");
        head4.innerHTML = string;
        word1.className = "typewriter anim-typewriter";
        word1.appendChild(head4);
        container.appendChild(word1);
    },0);
}


function displayRule() {
    document.getElementById("title").style = "visible";
    var container = document.getElementById("words");
    displayRuleHelper("You were told by a friend that ShiftCoin is the best cryptocurrency out there in the market right now! It will go up to 1$");
    displayRuleHelper("really soon, they tell you that you should buy it right now. Right now the price is 0.07 percoin. But you only have 500$ in saving.");
    displayRuleHelper("You need 300$ to cover the rent and food for the week, and you don't get paid till next week.");
    displayh4Helper("BUY 200$ of ShiftCoin Right Now（Risk of Going Homeless and No one know if this Coin has any real value.)");
    displayRuleHelper("You need the 200$ for emergence incase something happens. Or You Can Save Your Money wait and See.");
    document.getElementById("buyButton").disabled  = true;
    document.getElementById("saveButton").disabled  = true;
    document.getElementById("buyButton").style.backgroundColor = "Grey";
    document.getElementById("saveButton").style.backgroundColor = "Grey";
}
