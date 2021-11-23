var box=document.getElementById("box");
box.style.top="100px";
box.style.left="100px";

box.addEventListener("mouseenter",function(){
    var style=getComputedStyle(box);
var temp1=style.height.slice(0,-2);
var temp2=style.width.slice(0,-2);
    var screenheight=window.innerHeight-temp1;
    var screenwidth=window.innerWidth-temp2;
    var random1=Math.random() * (+screenheight - +10) + +10;
    var random2=Math.random() * (+screenwidth - +10) + +10;
    box.style.top=random1+"px";
    box.style.left=random2+"px";
    




});