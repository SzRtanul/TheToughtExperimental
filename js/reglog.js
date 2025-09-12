import { eventTarget } from "./globaldata.js";
import { outsideEventMethStores } from "./globaldata.js";

console.log("Hozzáadva!");
outsideEventMethStores.push(addevents);

function addevents(){
    eventTarget.addEventListener("urlapSlogined", function(e){
        console.log("Király vagyok!");
        if(e.detail.response.length > 1) localStorage.setItem("token", e.detail.response/*.substring(2, e.details.response.length)*/);
        console.log("FEEEETA: "+localStorage.getItem("token"));
        localStorage.setItem("token", "5");
    });

    eventTarget.addEventListener("urlapAlogined", function(e){
        //console.log("Király lettem!");
    });
}


console.log(eventTarget);