var randomnumber1 = Math.random()*6;
var randomnumber2 = Math.random()*6;
randomnumber1 = Math.ceil(randomnumber1);
randomnumber2 = Math.ceil(randomnumber2);
document.querySelector(".player1").setAttribute("src","./images/dice"+randomnumber1+".png");
document.querySelector(".player2").setAttribute("src","./images/dice"+randomnumber2+".png");

if(randomnumber1>randomnumber2){
    document.querySelector(".refresh h1").innerHTML="player1 win !";
}
else{
    document.querySelector(".refresh h1").innerHTML="player2 win !";
}