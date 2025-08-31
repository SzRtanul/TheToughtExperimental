import { UIUpdate } from "../index.js";

const s_sel = document.querySelector("select.tchange");
const s_but = document.querySelector("button.tchange");
const s_vft = sessionStorage.getItem("s_vft");
const s_retn = document.querySelector(".retn");

if(s_vft){
    s_retn.setAttribute("cjust", s_vft);
    s_sel.value = s_vft;
}
else{
    s_retn.setAttribute("cjust", s_sel.value);
}

function doTChange(){
    console.log("O1G")
    s_retn.setAttribute("cjust", s_sel.value);
    sessionStorage.setItem("s_vft", s_sel.value);
    UIUpdate();
}

s_sel.addEventListener("change", doTChange);
s_but.addEventListener("click", doTChange);