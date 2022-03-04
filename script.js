var actor=document.getElementById("mrcold");
var say=document.getElementById("words");
var mybackground=document.body;

function res(){
    actor.style.display="block";
    actor.style.borderRadius="0";
    say.innerHTML="我是冷冷君!來跟我玩!";
    say.style.textAlign="center";
    say.style.fontSize="30px";
    say.style.color="black";
    actor.style.width="244px";
    actor.style.height="413px";
    mybackground.style.backgroundImage="none";
}
function bli(){
    mybackground.style.backgroundImage="url(blizzard.gif)";
    mybackground.style.backgroundSize="cover";
    say.innerHTML="賣火柴..1盒20...";
    actor.style.display="none";
}
function sml(){
    actor.style.transition="width 2s,height 2s";
    actor.style.width="122px";
    actor.style.height="210px";
    say.innerHTML="我是小小冰";
    say.style.fontSize="15px";
}
function bal(){
    actor.style.transition="border-radius 2s";
    actor.style.borderRadius="50%";
    say.innerHTML="QQQ";
}
