import { eventTarget } from "./globaldata.js";

eventTarget.addEventListener("urlapSlogined", function(e){
    //console.log("Király vagyok!");
    if(e.details.response.length > 1) localStorage.setItem("token", e.details.response.substring(2, e.details.response.length));
});

eventTarget.addEventListener("urlapAlogined", function(e){
    //console.log("Király lettem!");
});