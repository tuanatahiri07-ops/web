// var person = {firstName: "JOHN", lastname:"DOE",age:25}

// var text = '';

// for(z in person){
//     text+=person[z];

// }

// console.log(text);

// console.log("---------------------")

// var names = ['STEVE','BILL', 'MARK'];

// for(y of names){
//     console.log(y);

// }

// console.log("---------------------");

// var txt = " Javascript";

// var l ;

// for(l of txt){
//     console.log(l)
// }

// console.log("---------------------");

var txt=" the best school in the world is digital school!";

var result= text.search("digital school ");

document.getElementById("result1").innerHTML=result;


var txt=" the best school in the world is digital school!";

var result= text.search("/digital school /");

document.getElementById("result2").innerHTML=result;



var txt=" the best school in the world is digital school!";
var result= text.search("/digital school /");

var result = text.replace("result3").interHTMl= result;





var text= "abcdef";

var regex= new RegExp('abc');

document.getElementById("result4").innerHTML=regex.test(text)



var text= "my school is the best school in thw world";

var regex=/school/g;

document.getElementById("result5").innerHTML=text.match(regex)


var text= " digital school is the best schhool in the world ";

var regax=/i/g;

document.getElementById("result6").innerHTML=text.match(regax)



var text= " digital school is the best schhool in the world ";

var regax=/[abc]/g;

document.getElementById("result7").innerHTML=text.match(regax)


var text= " digital school is in the top 10 schools fo the world ";

var regax=/[0.9]/g;

document.getElementById("result8").innerHTML=text.match(regax)


var text= " my school is the best in  the world ";

var regax= /(top| best | school|)/g;

document.getElementById("result9").innerHTML=text.match(regax)



var text= "100 percent 1 !"

var regax= /\d/g;

document.getElementById("result10").innerHTML=text.match(regax)


var text=" my school is the best school in the world";

var regax= /\s/g;

document.getElementById("result11").innerHTML=text.match(regax)


var text= " heeey , how are you?!";
var regax=/e+/g;

document.getElementById("result12").innerHTML=text.match(regax)


var text= " so , i hope we'll see each other again soon...?!";
var regax=/so*/g;

document.getElementById("result13").innerHTML=text.match(regax)


var text= " hey,hi,hiii";
 var regax=/hi?*/g;

document.getElementById("result14").innerHTML=text.match(regax)




var text= " hello,helloo,hellooo!!!";
 var regax=/o{3}/g;

document.getElementById("result15").innerHTML=text.match(regax)




var text= " hello,helloo,hellooo,helloooo,helloooooooo!!!";
 var regax=/o{3,5}/g;

document.getElementById("result16").innerHTML=text.match(regax)