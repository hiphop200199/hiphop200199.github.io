var actor=document.getElementById("mrcold");
var say=document.getElementById("words");
var mybackground=document.body;

function bli(){
    mybackground.style.backgroundImage="url(blizzard.gif)";
}
function sml(){
    actor.style.transition="2s";
    actor.style.scale="0.1";
    say.innerHTML="我是小小冰";
    say.style.fontSize="15px";
}
function bal(){
    actor.style.borderRadius="50%";
    say.innerHTML="QQQ";
}