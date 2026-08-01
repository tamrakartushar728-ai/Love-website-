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

}
