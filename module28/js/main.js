//var button1=document.getElementById('btn1');

//button1.onclick=function(){
  //  alert("hello");

//}


var button2=document.getElementById('btn2');
var button3=document.getElementById('btn3');


button2.onmouseover=function(){
    alert("bye");
}


button2.onmouseleave=function(){
    alert("elaaa");
}


var button=document.getElementById('btn1');
var text1=document.getElementById('text1');



button.onclick=function(){
    text1.style.color="blue";
    text1.style.backgroundColor="purple";
    text1.style.padding="20px";
    text1.style.fontSize="100px";

}