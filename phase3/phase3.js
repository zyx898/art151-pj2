window.onload = intialize;


function intialize(){
    
    setTimeout(function () {
        let saving = sessionStorage.getItem('saving');
        let investment = sessionStorage.getItem('investment');
        if(investment > 100){
            sessionStorage.setItem('investment', 50);
        }
        let coinCount = sessionStorage.getItem('coinCount');
        document.getElementById("your-saving").innerHTML = "Your Saving - $"+saving;
        document.getElementById("current-investment").innerHTML = "Your Current Investment - $"+investment;
        document.getElementById("current-coin").innerHTML = "Your Current coin: "+coinCount;

        displayRule();
    }, 0);

    setTimeout(() => {
        document.getElementById("buyButton").disabled  = false;
        document.getElementById("saveButton").disabled  = false;
        document.getElementById("researchButton").disabled  = false;
        document.getElementById("sellButon").disabled  = false;

        document.getElementById("buyButton").style.backgroundColor = "Red";
        document.getElementById("saveButton").style.backgroundColor = "Red";
        document.getElementById("researchButton").style.backgroundColor = "Red";
        document.getElementById("sellButon").style.backgroundColor = "Red";

        // document.getElementById("startButton").innerText  = "Let's Go";
    }, 13500);
    
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

function phase3Save(){
    setTimeout(() => {
        var saving = parseInt(document.getElementById("your-saving").innerHTML.split("$")[1]);
        saving+=200;
        sessionStorage.setItem('saving', saving);
        var investment = document.getElementById("current-investment").innerHTML.split("$")[1];
        sessionStorage.setItem('investment', investment);
        var coinCount = parseInt(document.getElementById("current-coin").innerHTML.split(": ")[1]);
        sessionStorage.setItem('coinCount', coinCount);
        if(coinCount > 9999){
            window.location.href = "../final/finalPhase.html";
        }else{
            window.location.href = "../final/normal.html";
        }
        
    }, 500);
    
}


function phase3Invest(){
    setTimeout(() => {
        var saving = parseInt(document.getElementById("your-saving").innerHTML.split("$")[1]);
        let inve = 0;
        while(saving > 200){
            saving -= 100;
            inve += 100;
        }
        saving+=300;
        sessionStorage.setItem('saving', saving);
        var investment = parseInt(document.getElementById("current-investment").innerHTML.split("$")[1]);
        let coinC = inve/0.005;
        let coinCount = sessionStorage.getItem('coinCount');
        coinCount+=coinC;
        sessionStorage.setItem('coinCount', coinCount);
        investment+=inve;
        sessionStorage.setItem('investment', investment);
        window.location.href = "../final/finalPhase.html";


    }, 500);
    
}

function phase3Sell(){
    setTimeout(() => {
        var saving = parseInt(document.getElementById("your-saving").innerHTML.split("$")[1]);
        var investment = parseInt(document.getElementById("current-investment").innerHTML.split("$")[1]);

        sessionStorage.setItem('saving', saving+investment);
        sessionStorage.setItem('coinCount', 0);
        sessionStorage.setItem('investment', 0);
        window.location.href = "../final/normal.html";

    }, 500);
    
}


function displayRule() {
    document.getElementById("title").style = "visible";
    var container = document.getElementById("words");
    displayRuleHelper("One More month passed by, The price of ShiftCoin have slowly decrease to 0.005, It's very cheap");
    displayRuleHelper("A lots of people are afraid that this Coin might be a scam and people panic and sell the coin");
    let investment = sessionStorage.getItem('investment');
        if(investment > 100){
            displayRuleHelper("Your Investment was 500$ now it's worth 50$, Do you still want to hold on to the coin?");
        }
    displayh4Helper("Do you want to research before you Buy Or Sell the coin?");
    displayRuleHelper("Keep in mind always research before you invest in anything.");
    document.getElementById("buyButton").disabled  = true;
    document.getElementById("saveButton").disabled  = true;
    document.getElementById("researchButton").disabled  = true;
    document.getElementById("sellButon").disabled  = true;

    document.getElementById("buyButton").style.backgroundColor = "Grey";
    document.getElementById("saveButton").style.backgroundColor = "Grey";
    document.getElementById("sellButon").style.backgroundColor = "Grey";
    document.getElementById("researchButton").style.backgroundColor = "Grey";
}
