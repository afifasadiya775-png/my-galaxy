// Cursor Glow

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});


// Create Stars

const stars=document.getElementById("stars");

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.classList.add("star");

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=(2+Math.random()*4)+"s";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}