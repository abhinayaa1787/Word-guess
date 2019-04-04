var computerGuess;
var wordArray=["html","css","javascript"];
function guess(){
computerGuess=wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(computerGuess.length);
}
guess();
console.log(computerGuess);
var win=0;
var loss=0;
var guess=15;
var emptyArray=[];
// var str=" ";
// console.log(str);
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    letterMatch(userGuess);
}
function letterMatch(userGuess){
    console.log(computerGuess.length);
     for(var i = 0; i < computerGuess.length; i++)
{
        emptyArray[i] ="-";
        console.log(emptyArray[i]);

}
var htmlArray=emptyArray.join('');
 document.getElementById("word").innerHTML =htmlArray;
// document.getElementById("word").innerHTML =emptyArray.join('');
console.log(htmlArray);


console.log(emptyArray.length);
letterCheck(emptyArray,userGuess);
console.log("calling");



function letterCheck(){
for(i=0; i< computerGuess.length; i++)
{
    console.log(userGuess);
    console.log(computerGuess);

    console.log(computerGuess.length);


    if(userGuess==computerGuess[i]){
emptyArray.splice(i,i,userGuess);
 console.log(emptyArray);

 console.log(emptyArray);


}
document.getElementById("word").innerHTML = emptyArray;
if(emptyArray===computerGuess){
guess();
console.log("calling");

}

}
}

}