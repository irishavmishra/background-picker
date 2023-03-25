// partyPurple
// partyGreen
// partyBlue

document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("red").onclick = partyRed;



function partyPurple(){
  document.querySelector("body").style.backgroundColor = "purple";
  document.querySelector("body").style.color = "white";
};

function partyGreen(){
  document.querySelector("body").style.background = "green";
  document.querySelector("body").style.color = "white";
}

function partyBlue(){
  document.querySelector("body").style.background = "blue";
  document.querySelector("body").style.color = "white";
}

function partyRed(){
  document.querySelector("body").style.background = "red";
  document.querySelector("body").style.color = "white";
}

