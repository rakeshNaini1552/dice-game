var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var image1 = "dice" + randomNumber1 + ".png";
var image2 = "dice" + randomNumber2 + ".png";

console.log(image1 + "," + image2);
console.log(randomNumber1>randomNumber2);
document.getElementsByClassName("img1")[0].setAttribute("src","images/"+image1);
document.getElementsByClassName("img2")[0].setAttribute("src","images/"+image2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}