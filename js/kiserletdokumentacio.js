import { eventTarget } from "./globaldata.js";
import { outsideEventMethStores } from "./globaldata.js";

function addEvents(){
    eventTarget.addEventListener("urlapShozzaadasutan", function(e){
       // const urlapKod = e.detail.urlapID;
        //console\.log("Elvesztettem zsebkendőmet: " + urlapKod);
    });
}
