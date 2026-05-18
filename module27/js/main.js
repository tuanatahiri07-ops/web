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

car.starEngine();

function computer ( name,cpu,ram,rom){

    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.rom=rom;


}


var com1=new Computer ("mackbook","8-core","8gb","8gb");
var com2=new Computer ("mackbook","6-core","8gb","8gb");


function car ( name,color,year,modelin){

    this.name=name;
    this.color=color;
    this.year=year;
    this.modelin=modelin;




}


var car1=new Car("audi","black","2026","rsq8");