import { eventTarget } from "./globaldata.js";

eventTarget.addEventListener("urlapShozzaadasutan", function(e){
    const urlapKod = e.detail.urlapID;
    //console\.log("Elvesztettem zsebkendőmet: " + urlapKod);
});