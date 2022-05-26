"use strict";

window.onload = resizeIW ;
window.onresize = resizeIW ; 

function resizeIW(){
    let innerWth = window.innerWidth;
    let innerHt = window.innerHeight;
    let outerWth = window.outerWidth;
    let outerHt = window.outerHeight;

    document.getElementById("text").innerHTML= `Inner Width: ${innerWth}`;
    document.getElementById("text2").innerHTML= `Outer Width: ${outerWth}`;
    document.getElementById("text3").innerHTML= `Inner Height: ${innerHt}`;
    document.getElementById("text4").innerHTML= `Outer Height: ${outerHt}`;
}

