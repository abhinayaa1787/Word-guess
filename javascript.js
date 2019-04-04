var word = ["abhi", "sai", "aadhav"];
var currentWord=word[Math.floor(Math.random() * word.length)];
console.log(currentWord);
// var currentWord = word.pop();
// console.log(currentWord);
var letterArray = currentWord.split("");
// console.log(currentWord.split(""));
for (i = 0; i < letterArray.length; i++) {

    var letter = document.createElement("span");
    letter.textContent = (letterArray[i]);
    // console.log(letter);
     var x=document.getElementById("word").appendChild(letter);
    // letter.style.opacity = 0;
    // letter.style.display = "inline";
    console.log(x);

}
var guess = 15;
var win=0;
var loss=0;
// console.log(guess);



    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
        letterMatch(userGuess);
    }
function letterMatch(userGuess) {
    
    if (guess >= 1) {
        for (i = 0; i < letterArray.length; i++) {
            var x = letterArray[i];
            console.log(x);
            var y=document.getElementById("word");
        

        if (event.key === x) {
            console.log("match");
            y.style.opacity = 1;
            guess = guess - 1;

            console.log(guess);
        }


    }

    }
    else {
        var currentWord = word.pop();
        console.log(currentWord);

    }

}


