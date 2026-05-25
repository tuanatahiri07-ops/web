var wakeuptim;
var dstime;
var sleeptime;

var noon=12;


function showcurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime=new Date();

    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();

    var merdian="AM";

    if(hours>=12)
        merdian="PM"
    

    var clocktime= hours+ ":" + minutes + ":" + seconds + ":" + merdian;
    clock.innerText=clocktime;
    //na duhet nme thirr funksionin qe e ndrron foton


function changeImage(){}
 
    var time=new Date ().getHours;

    console.log(time);


    var image="image/ds.clock.png";
    var imageHTML=document.getElementById("timeImage");

    if(time==wakeuptime){

        image="img/morning.png";
        console.log("morning");
    }
        else if("time==dstime"){
            image="img/class.gif";

    }
        else if ("time==sleeptime"){
            image="img/night.gif";

    }



}