import { serverhost, eventTarget, exportedMethods } from "./js/globaldata.js";
import { exportedRetnMethods } from "./js/global/events.js";
const content = document.getElementsByTagName("main")[0];
 
let currentRequest = null;
console.log("baz: "+ sessionStorage.getItem("oldal"));
sessionStorage.setItem("oldal", sessionStorage.getItem("oldal") ?? "mitettemma")
console.log(sessionStorage.getItem("oldal"));
callSite(sessionStorage.getItem("oldal"));
//Kísérletek
//console\.log("MyRegex 2975hfuiHtE".match(/^\w+/)?.[0] || "");
/*
document.cookie = "Suzie=Gere"
//console\.log(document.cookie)
document.cookie = "Suzie=Geta"
//console\.log(document.cookie)
document.cookie = "Suzie="
//console\.log(document.cookie);
//console\.log(getValueFromCookie("Elekta"))*/
/*//console\.log(await exampleGET("exa"))
//console\.log(await examplePOST("exa/166"))
//console\.log(await exampleGET("exa"))*/
localStorage.setItem("ELEKTA", "HARakiri")
localStorage.setItem("datum", "2023-04-05")
;
//localStorage.clear();
const str = 'revenue895erwhgh9reji#íKDSFKI9ÜW'
/*String.prototype.hashCode = function() {
    let hash = 0n,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = BigInt(this.charCodeAt(i));
      hash = ((hash << 5) - hash) + chr;
      //hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
//console\.log(str, str.hashCode());*/
;

let hanyszor = 0;
function callSite(melyik){
    //console.clear()
    
    if (currentRequest) {
        currentRequest.abort();
    }
    
    currentRequest = new XMLHttpRequest();
    
    currentRequest.open("GET", "content/" + melyik + "?nocache=" + new Date().getTime(), true);
    currentRequest.setRequestHeader("Cache-Control", "no-store");
    currentRequest.setRequestHeader("Pragma", "no-cache");
    
    currentRequest.onload = function () {
        if (currentRequest.status >= 200 && currentRequest.status < 300) {
            document.querySelectorAll(".guest").forEach(g => g.remove());
            let iHTML = currentRequest.responseText;
            content.innerHTML = iHTML;
            doCSSAddingToSite();
            doJSAddingToSite();
            addEvents();
            doFrissit();
            sessionStorage.setItem("oldal", melyik);
        } else {
            console.error("Request failed with status:", currentRequest.status);
        }
    };
    currentRequest.onerror = function () {
        console.error("Request failed due to network error");
    };
    currentRequest.send();
}
function doCSSAddingToSite(){
    for(const lCSS of content.getElementsByClassName("lCSS")){
        for(const jll of lCSS.getElementsByTagName("li")){
            const cssName = jll.textContent;
            document.head.innerHTML +=
                `<link class="guest" rel="stylesheet" `+
                `href="css/${ cssName.split('\.').length > 1 ? cssName : cssName +".css"}" async>`;
        }
    }
}
function doJSAddingToSite(){
    for(const lJS of content.getElementsByClassName("lJS"))
        for(const jll of lJS.getElementsByTagName("li")){
            const jsName = jll.textContent;
            const sc = document.createElement("script");
            sc.classList.add("guest");
            sc.type = "module";
            sc.src = `js/${jsName.split('\.').length > 1 ? jsName + "?v=" + new Date().getTime() : jsName + ".js" + "?v=" + new Date().getTime()}`;
            document.body.appendChild(sc);
        }
}
function getEventName(text){
    return text ? text.toLowerCase()
                        /*.replace(/^\w/, (match) => match.toUpperCase())*/ : "";
}

function avmi(e){
    let url = new URL(window.location.href);
    sessionStorage.setItem("oldal", url.searchParams.get("site"));
    console.log("KURVAAAAA")
}

function vmi(e){
    callSite(e.target.name);
}

export function addEvents(environment=document){ 
    doFrissit(environment);
    const prot = ":not(.immler *)";
    exportedMethods.doResetEventTarget();
    const jsA = [
        {datum: "EEEEA"},
        {datum: "AAAAE"}
    ];
    // 
    const txA = "alma;korte;szilva|||A:::A:::B:::;;;B:::B:::A";
    const contentLinks = environment.getElementsByClassName("contentlink");
    const urlapok = environment.querySelectorAll("[value].urlap"+prot);
    
    exportedMethods.doMindenhezHozzaad(
        environment.querySelectorAll("a.contentlink"+prot),
        [avmi], "indexAContentLink"
    );
    exportedMethods.doMindenhezHozzaad(
        environment.querySelectorAll("button.contentlink"+prot),
        [vmi], "indexButtonContentLink"
    );
    let retnIDn = 0;
    // Retn
    for(const retn of environment.getElementsByClassName("retn")){
        let retnK = '';
        const NNretn = retn.closest("[id].retn:not([id=''])");
        if(NNretn) retnK = NNretn.getAttribute("id");
        retn.id = retnK + "retn_" + retnIDn;
        retn.style.setProperty("--data-retnID", retnK + "retn_" + retnIDn)
        exportedRetnMethods.doAddEventsToARetn(retn, prot);
        retnIDn++;
    }
    // Urlap
    let urlapIDn = 0;
    for(const urlap of urlapok){
        urlap.querySelectorAll(".urlap").forEach(g => g.remove());
        let retnK = '';
        const NNretn = urlap.closest("[id].retn:not([id=''])");
        if(NNretn) retnK = NNretn.getAttribute("id");
        const fullID = retnK+urlapIDn;
        const urlapActName = urlap.getAttribute("action");
        const urlapVariation = urlap.getAttribute("data-variation") || "";
        const whenSendEvent = urlapActName ? new CustomEvent("urlapS"+urlapActName, {detail: {urlapID: fullID}}) : null;
        const whenAktuelEvent = urlapActName ? new CustomEvent("urlapA"+urlapActName, {detail: {urlapID: fullID}}) : null;
        
        exportedMethods.doMindenhezHozzaad(
            urlap.querySelectorAll(".aktuel"+prot),
            [exportedMethods.doAktuel], "indexAktuel",
            [[urlap, whenAktuelEvent]]
        );
        exportedMethods.doMindenhezHozzaad(
            urlap.querySelectorAll(".kuld"+prot),
            [ron], "indexKuld",
            [[urlap, whenSendEvent]]
        );
        exportedMethods.doMindenhezHozzaad(
            urlap.querySelectorAll(".kuldG"+prot),
            [exportedMethods.doAktuel, doKuld], "indexKuldG",
            [[urlap, whenSendEvent]]
        );

        const hasID = urlap.hasAttribute("urlapided");
        const ids = urlap.querySelectorAll("[id]:not([id=''])" + prot);
        urlap.id = fullID;
        urlap.setAttribute("urlapided", "");
        urlap.style.setProperty("--data-urlapid", fullID+"");
        for(let i = 0;i < ids.length; i++){        
            if(hasID) ids[i].id = ids[i].id.replace(/^[^_]+_/, "");
            ids[i].id = fullID + "_" + urlapVariation + ids[i].getAttribute("id");
        }
        const fors = urlap.querySelectorAll("[for]:not([for=''])" + prot);
        for(let i = 0;i < fors.length; i++){        
            if(hasID) fors[i].for = fors[i].getAttribute("for").replace(/^[^_]+_/, "");
            fors[i].setAttribute("for", fullID + "_" + urlapVariation + fors[i].getAttribute("for"));
        }
        urlapIDn++;
    }
    //exportedMethods.doaddIDTo(document, "film", "def");
   exportedMethods.doMindenhezHozzaad(
    environment.querySelectorAll(".film [nextTo]:not([nextTo=''])" + prot),
        [exportedMethods.actionableAutoJumpJelenet], "filmAutoJump"
    );

    exportedMethods.doMindenhezHozzaad(
        environment.querySelectorAll(".refreshall"+prot), 
        [actionableDoFrissit], 
        "indexRefresh", []
    );
}

function ron(e, urlap, MyEvent){
  /*  for(let i = 0; i<1000; i++){
    }*/
   doKuld(e, urlap, MyEvent);
}

//Kuld
async function doKuld(e, urlap, MyEvent){
    const jsonValue = await exportedMethods.getUrlapJSONs(urlap);
    jsonValue["db"] = {
        schemanames: urlap.getAttribute("db-schemanames") || "",
        tablenames: urlap.getAttribute("db-tablenames") || "",
        columnnames: urlap.getAttribute("db-columnnames") || "",
        methodnames: urlap.getAttribute("db-methodnames") || "",
        aliases: urlap.getAttribute("db-aliases") || "",
        query: urlap.getAttribute("db-query") || "",
    };
    const allapotKijelzok = urlap.getElementsByClassName("allapot");
    const routG = urlap.getAttribute('value').split("/");
    let tr = "";
    for(const strE of routG){
        const strEs = strE.split("-");
        const strEs1 = /*strEs[1] ? strEs[1] :*/ "ca";
        tr += strE.startsWith("$") ?
        ((jsonValue[strEs1] && jsonValue[strEs1][strEs[0].replace("$", "")]) ||
        "null") +"/" : strE + "/";
    }
    
    for(const strE in jsonValue.db ){
        let dbFro = "";
        const fr = jsonValue.db[strE].split('\\-');
        for(let i = 0; i < fr.length; i++){
            if(fr[i].startsWith('$')){
                console.log(fr[i]);
                fr[i] = jsonValue["ca"][fr[i].replace("$", "")];
                console.log(fr[i]);
            }
            dbFro += fr[i];
        }
        jsonValue.db[strE] = dbFro;
        console.log(jsonValue.db[strE]);
    }



    tr = tr.substring(0, tr.length-1);
    let sikeresKeres = false;
    for(const btn of urlap.querySelectorAll("*:not(.urlap):not(.retn) .kuld, .kuldG")){
        btn.setAttribute("disabled", "");
    }
    exportedMethods.doUrlapAllapotFrissites(allapotKijelzok, "Küldés folyamatban...");
    //jsonValue["ca"].datum = 2;
    //
    // ExampleRest;;
    //
    const response = await exportedMethods.exampleREST(
        tr, urlap.getAttribute("method") || "post",
        jsonValue["db"], jsonValue["ca"], jsonValue["ce"]
    );
    console.log(response);
    exportedMethods.doUrlapAllapotFrissites(allapotKijelzok, "Küldés sikeres!");
    console.log(jsonValue)
    for(const btn of urlap.querySelectorAll("*:not(.urlap):not(.retn) .kuld, .kuldG")){
        btn.removeAttribute("disabled");
    }
    if(!sikeresKeres){
        const tres = response.replace("res:", "");
        for(const retn of document.querySelectorAll(`[name=${urlap.getAttribute('name')}].retn`)){
            exportedRetnMethods.doUjratolt(retn, tres);
        }
      //  doFrissit();
        exportedMethods.doEnvAutoJumpJelenet(urlap, "NextToIfSuccess");
       
    }
    else{
        const presentationLayer = "alma;korte;szilva|||1:::Érd:::P:::N:::;;;2:::V:::6:::666:::"
        for(const retn of document.querySelectorAll(`[name=${urlap.getAttribute('name')}].retn`)){
            await exportedRetnMethods.doUjratolt(retn, presentationLayer, "text", "Ürlap");
        }
        //doFrissit();
        exportedMethods.doEnvAutoJumpJelenet(urlap, "NextToIfSuccess");
    }
    if(MyEvent) {    
        eventTarget.dispatchEvent(urlap.hasAttribute("useRespInEvent") ? 
            new CustomEvent("urlapS"+urlapActName, 
                {detail: 
                    {
                        urlapID: fullID,
                        response: response
                    }
                }
            ) : MyEvent
        );
    }
    const dipes = urlap.getAttribute("disp") ?? "";
    for(const dipe of dipes.split(';')) {
        for(const vutton of document.querySelectorAll(".remt:not(.immler *)")){
            vutton.dispatchEvent(new Event(dipe));
        }
    }
}

async function actionableDoFrissit(e, retns){
    await doFrissit(retns);
}

async function doFrissit(retns=document.querySelectorAll("[value].retn:not([name]:not(.retn.bigboose))")){
    await exportedRetnMethods.doFrissit(retns);
}

eventTarget.addEventListener("urlapSlogined", function(e){
    localStorage.setItem("token", e.detail.response);
});