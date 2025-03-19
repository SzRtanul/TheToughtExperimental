let a = document.getElementsByClassName("urlap");
for(const ujvacsora of a){
    for(const kuld of ujvacsora.getElementsByClassName("kuld")){
        kuld.addEventListener("click", function(){
            document.getElementById("k1023").style.setProperty("display", "inherit");
        });
    }
}

document.addEventListener("urlapMetafora", function(e){
    console.log("Ez sikerült!")
})