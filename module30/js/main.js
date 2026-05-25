var input=document.getElementById('input_id');
var button=document.getElementById('btn_id');
var text=document.getElementById('text_id');


button.onclick=function(){
    if(input.value > 12 ){
        text.innerHTML="inputi eshte me i MADH se 12";
    }

    else if (input.value<12 ){

        text.innerHTML="inputi eshte me I VOGEL se 12";

    }

    else {
        text.innerHTML="inputi eshte me i barabarte se 12";
    }
}