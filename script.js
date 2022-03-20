var actor=document.getElementById("mrcold");
var say=document.getElementById("words");
var mybackground=document.body;
var sneeze=new Audio("baby-sneeze.wav");
var hahaha=new Audio("cartoon-laugh.wav");
var slide=new Audio("vehicle-movement.wav");




function res(){
    actor.src="冷冷君.png";
    actor.style.visibility="visible";
    actor.style.borderRadius="0";
    say.innerHTML="我是冷冷君!來跟我玩!";
    say.style.textAlign="center";
    say.style.fontSize="30px";
    say.style.color="black";
    actor.style.width="244px";
    actor.style.height="413px";
    mybackground.style.backgroundImage="none";
    actor.style.animationName="none";
}
function sli(){
   actor.src="冷冷君.png";
   actor.style.visibility="visible";
   actor.style.animationName="slide";
   actor.style.animationDuration="1.5s";
   actor.style.animationTimingFunction="linear";
   mybackground.style.backgroundImage="none";
   slide.play();
   
}
function hor(){
    actor.src="horse.svg";
    actor.style.visibility="visible";
    actor.style.width="344px";
    actor.style.height="413px";
    say.innerHTML="馬牽到阿拉伯是什麼?馬來西亞!";
    say.style.fontSize="30px";
    mybackground.style.backgroundImage="none";
    actor.style.animationName="none";
}
function fak(){
    actor.src="fake.jpg";
    actor.style.visibility="visible";
    actor.style.borderRadius="0";
    actor.style.width="244px";
    actor.style.height="413px";
    say.innerHTML="";
    mybackground.style.backgroundImage="none";
    actor.style.animationName="none";
    hahaha.play();
}
function rot(){
    actor.src="冷冷君.png";
    actor.style.visibility="visible";
    actor.style.animationName="rotat";
    actor.style.animationDuration="2s";
    actor.style.animationTimingFunction="linear";
    mybackground.style.backgroundImage="none";
}
function bli(){
    mybackground.style.backgroundImage="url(blizzard.gif)";
    mybackground.style.backgroundSize="cover";
    say.innerHTML="賣火柴..1盒20...";
    actor.style.visibility="hidden";
    actor.style.width="244px";
    actor.style.height="413px";
    actor.style.animationName="none";
    sneeze.play();
}
function sml(){
    actor.src="冷冷君.png";
    actor.style.visibility="visible";
    actor.style.transition="width 2s,height 2s";
    actor.style.width="122px";
    actor.style.height="210px";
    say.innerHTML="我是小小冰";
    say.style.fontSize="15px";
    actor.style.animationName="none";
    mybackground.style.backgroundImage="none";
   
}
function bal(){
    actor.src="冷冷君.png";
    actor.style.visibility="visible";
    actor.style.transition="border-radius 2s";
    actor.style.borderRadius="50%";
    say.innerHTML="QQQ";
    actor.style.animationName="none";
    mybackground.style.backgroundImage="none";
    
}
