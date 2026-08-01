// =============================
// Floating Hearts
// =============================

const hearts = document.querySelector(".hearts");

function createHeart(){

const heart = document.createElement("span");

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100+"%";

heart.style.fontSize = (15+Math.random()*30)+"px";

heart.style.animationDuration = (5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,350);


// =============================
// Songs
// =============================

const yesSong=document.getElementById("yesSong");
const waitSong=document.getElementById("waitSong");

function playYesSong(){

waitSong.pause();
waitSong.currentTime=0;

yesSong.play();

}

function playWaitSong(){

yesSong.pause();
yesSong.currentTime=0;

waitSong.play();

}


// =============================
// Fade Animation
// =============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section,.card").forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});


// =============================
// Proposal Button
// =============================

document.getElementById("proposal").onclick=function(){

alert("Yayyyy ❤️\nI Love You Forever 🥹💍");

for(let i=0;i<40;i++){

createHeart();

}

}


// =============================
// First YES Buttons
// =============================

document.getElementById("yesBtn").onclick=function(){

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

}

document.getElementById("yesBtn2").onclick=function(){

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

}// Surprise Button

document.getElementById("surpriseBtn").onclick=function(){

document.getElementById("surpriseBox").style.display="block";

for(let i=0;i<70;i++){

createHeart();

}

};


// Countdown

const startDate=new Date("2025-01-01");

function updateTimer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff/(1000*60*60))%24);

const mins=Math.floor((diff/(1000*60))%60);

document.getElementById("loveTimer").innerHTML=

days+" Days ❤️ "+hours+" Hours ❤️ "+mins+" Minutes";

}

setInterval(updateTimer,1000);

updateTimer();
