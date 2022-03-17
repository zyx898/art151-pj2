window.onload = intialize;


function intialize(){
    
    setTimeout(function () {
        
        displayRule();
    }, 0);

    setTimeout(() => {
        document.getElementById("buyButton").disabled  = false;
        document.getElementById("saveButton").disabled  = false;
        document.getElementById("researchButton").disabled  = false;

        document.getElementById("buyButton").style.backgroundColor = "Red";
        document.getElementById("saveButton").style.backgroundColor = "Red";
        document.getElementById("researchButton").style.backgroundColor = "Red";

        // document.getElementById("startButton").innerText  = "Let's Go";
    }, 13500);
    
}

// function displayResearch(){
//     var saving = parseInt(document.getElementById("your-saving").innerHTML.split("$")[1]);
//     saving-=100;
//     document.getElementById("your-saving").innerHTML = "Your Saving - $"+saving;
// }

function phase3Invest(){
    setTimeout(() => {
        var saving = parseInt(document.getElementById("your-saving").innerHTML.split("$")[1]);
        saving= saving-500;
        saving+=300;
        sessionStorage.setItem('saving', saving);



        var investment = parseInt(document.getElementById("current-investment").innerHTML.split("$")[1]);
        investment+=500;
        sessionStorage.setItem('investment', investment);

        var coinCount = parseInt(document.getElementById("current-coin").innerHTML.split(": ")[1]);
        coinCount+=10000;
        sessionStorage.setItem('coinCount', coinCount);




        window.location.href = "../phase3/thirdPhase.html";
    }, 500);
    
}


function phase3Save(){
    setTimeout(() => {
        var saving = parseInt(document.getElementById("your-saving").innerHTML.split("$")[1]);
        saving+=200;
        sessionStorage.setItem('saving', saving);
        var investment = document.getElementById("current-investment").innerHTML.split("$")[1];
        sessionStorage.setItem('investment', investment);
        var coinCount = parseInt(document.getElementById("current-coin").innerHTML.split(": ")[1]);
        sessionStorage.setItem('coinCount', coinCount);
        window.location.href = "../phase3/thirdPhase.html";
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
    displayRuleHelper("One Month later, You have been working hard and you save up another 500$ Now you have more money to invest.");
    displayRuleHelper("A lot have happen over the month, They price of ShiftCoin have dropped down to 0.05 and been consitiancly ");
    displayRuleHelper("staying at the price of 0.04, 0.05 and 0.06 Today's price is 0.06");
    displayh4Helper("Do you want to Invest in ShiftCoin, or Do some more research and Find other coins.");
    displayRuleHelper("Keep in mind you need 200$ in your saving incase emergnyce happen.");
    document.getElementById("buyButton").disabled  = true;
    document.getElementById("saveButton").disabled  = true;
    document.getElementById("buyButton").style.backgroundColor = "Grey";
    document.getElementById("saveButton").style.backgroundColor = "Grey";
    document.getElementById("researchButton").style.backgroundColor = "Grey";
}
