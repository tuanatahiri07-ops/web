function showsms(){

    alert("ky eshte vetem nje mesazh");
}


showsms();

function sum(nr1,nr3){
    return nr1 +nr3;
}

console.log(sum(2,4));
document.write(sum(3,4));


function localvariable(){
    var vl="shkolla digjitale";
    alert(vl);

}

localvariable();
 
var car={
    name:"audi",
    color:"red",
    years:2000,
    kilometers:0,
    starEngine:function(){
        alert("vroom");

    },
    get getkilometres(){
        return this.getkilometres;

    },
    set setkilometres(km){
        this.kilometers=km;

    }

};


console.log(car.getkilometres);

car.setkilometres=100;

console.log(car.getkilometres);

alert(car.name); 
alert(car["color"]);