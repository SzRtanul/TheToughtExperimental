console.log ("Végre vagy hajtva?!!!!!!!!!!!");
let a = document.getElementsByClassName("urlap");
for(const ujvacsora of a){
    for(const kuld of ujvacsora.getElementsByClassName("kuld")){
        kuld.addEventListener("click", function(){
            console.log("Belépsz ide?");
            document.getElementById("k1023").style.setProperty("display", "inherit");
            console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        });
    }
}

document.addEventListener("urlapMetafora", function(e){
    console.log("Ez sikerült!")
})