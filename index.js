import { eventTarget, exportedMethods } from "./js/globaldata.js";

const serverhost = "http://experimental.local:18080/";
const content = document.getElementsByTagName("main")[0];
const fieldDataTypes = {
    datum: "date"
}
let events = [];
let currentRequest = null;

callSite("mitettemma");
const aktuels = {
    nowDate: function(){
        return new Date().toISOString().replace("T", ";");
    },
    novaDate: gluck
};
function gluck(){
    return "Ernai";
}
//console.log(aktuels.nowDate())

//Kísérletek
console.log("MyRegex 2975hfuiHtE".match(/^\w+/)?.[0] || "");
//console.log(getValueFromLocalStorage(""));
/*
document.cookie = "Suzie=Gere"
console.log(document.cookie)

document.cookie = "Suzie=Geta"
console.log(document.cookie)
document.cookie = "Suzie="
console.log(document.cookie);
console.log(getValueFromCookie("Elekta"))*/
/*console.log(await exampleGET("exa"))
console.log(await examplePOST("exa/166"))
console.log(await exampleGET("exa"))*/
localStorage.setItem("ELEKTA", "HARakiri")
localStorage.setItem("datum", "2023-04-05")
//console.log(localStorage.getItem("ELEKTA"));
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
console.log(str, str.hashCode());*/

//console.log(await getCryptoHash(str));
  

async function exampleREST(honnan="", method="GET", others={}, cAzon={}, cEdit={}){
    const fetchJSON = {
        method: method.toUpperCase(),
        headers: {
            ContentType: 'application/text',
            Accept: '',
            Others: others
        }
    };
    switch(method.toUpperCase()){
        case "GET":
        case "HEAD":
            break;
        default:
            fetchJSON["body"] = {
                CAzon: cAzon,
                CEdit: cEdit
            };
            break;
    }
    const response = await fetch(serverhost + honnan, fetchJSON).catch(error => { return null; });
    return await response ? "res:" + await response.text() : "HIBA: A szerver elérhetetlen.";
}

let hanyszor = 0;

function callSite(melyik){
    //console.clear()
    //console.log("U")
    if (currentRequest) {
        currentRequest.abort();
    }
    //console.log("E")
    currentRequest = new XMLHttpRequest();
    //console.log("E")
    currentRequest.open("GET", "content/" + melyik + "?nocache=" + new Date().getTime(), true);
    currentRequest.setRequestHeader("Cache-Control", "no-store");
    currentRequest.setRequestHeader("Pragma", "no-cache");

    //console.log("E")
    currentRequest.onload = function () {
        if (currentRequest.status >= 200 && currentRequest.status < 300) {
            document.querySelectorAll(".guest").forEach(g => g.remove());
            let iHTML = currentRequest.responseText;
            content.innerHTML = iHTML;
            doCSSAddingToSite();
            doJSAddingToSite();
           // console.log("Igen?");
            addEvents();
            //console.log("Igen.");
            console.log(hanyszor)
            hanyszor++;
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

function vmi(e){
    callSite(e.target.name);
    console.log("Sok: " + hanyszor)
}

function vmi2(e){
   // console.log("VMnet")
}

function addEvents(){
    exportedMethods.doResetEventTarget();
    const jsA = [
        {datum: "EEEEA"},
        {datum: "AAAAE"}
    ];
    // 
    const txA = "alma;korte;szilva|||A:::A:::B:::;;;B:::B:::A"
    const retne = document.getElementsByClassName("retn");
   // console.log(retne.length);
  /*  //doFrissit();
    doUjratolt(retne[0], jsA, "json");
    doUjratolt(retne[2], txA);*/


    const contentLinks = document.getElementsByClassName("contentlink");
    const urlapok = document.querySelectorAll("[value].urlap");
    doAddingToButtons(document, "contentlink", [vmi], null, "indexContentLink");
    let urlapIDn = 0;
    for(const urlap of urlapok){
        const urlapActName = urlap.getAttribute("action");
        const urlapVariation = urlap.getAttribute("data-variation") || "";
        const whenSendEvent = urlapActName ? new CustomEvent("urlapS"+urlapActName, {detail: {urlapID: urlapIDn}}) : null;
        const whenAktuelEvent = urlapActName ? new CustomEvent("urlapA"+urlapActName, {detail: {urlapID: urlapIDn}}) : null;
        doAddingToButtons(urlap, "aktuel", [doAktuel], whenAktuelEvent, "indexAktuel");
        //doAddingToButtons(urlap, "kuld", [doKuld], whenSendEvent, "indexKuld");
        exportedMethods.doMindenhezHozzaad(urlap.getElementsByClassName("kuld"), [doKuld], "indexKuld", [urlap, whenSendEvent])
        doAddingToButtons(urlap, "kuldG", [doAktuel, doKuld], whenSendEvent, "indexKuldG");
        const hasID = urlap.hasAttribute("urlapided");
        const ids = urlap.querySelectorAll("[id]:not([id=''])");
        urlap.id = urlapIDn;
        urlap.setAttribute("urlapided", "");
        urlap.style.setProperty("--data-urlapid", urlapIDn+"");
        console.log(hasID)
        for(let i = 0;i < ids.length; i++){
            console.log(urlapIDn)
            if(hasID) ids[i].id = ids[i].id.replace(/^[^_]+_/, "");
            ids[i].id = urlapIDn + "_" + urlapVariation + ids[i].getAttribute("id");
        }
        urlapIDn++;
    }
}

function doAddingToButtons(urlap, buttonName, methodNames, myEvent, eventID=""){  
    //Aktüel
    for(const aktuel of urlap.getElementsByClassName(buttonName)){
        // console.log("GGGGGGGGGGGGG!" + buttonName)
        // console.log(aktuel)
        //console.log(aktuel.hasAttribute("actioned"))
        if(!(eventID &&
                aktuel.dataset.events &&
                exportedMethods.isBenneVan(aktuel.dataset.events.split(";"), eventID))
            ){
            aktuel.addEventListener("click", function(e){
                for(const method of methodNames){
                    method(e, urlap, myEvent);
                }
            });
            if(!aktuel.dataset.events) aktuel.dataset.events = "";
            if(eventID.length > 0) aktuel.dataset.events += eventID + ";";
        }
    }
}

function varFunction(){
    
}

async function doAktuel(e, urlap, MyEvent){
    const myConst = urlap.querySelectorAll("* [name][tag]"); // Rejtett mezők automatikus kitöltéssel
    const myConstas = urlap.querySelectorAll("* [tag].constas"); // Elemek, amikben változó van
    let jsonValue = await getUrlapJSONs(urlap); // Ürlap mező értékek
    const localAktuels = getMethodStoreObjectWithReturns(aktuels); // Values from Aktüel

    for(const mezo of myConst){ // értékcsere LocalStorage-ból vagy Aktüel-ből
        if(mezo.name.length > 0 && (!mezo.value || mezo.value.length == 0)){
            mezo.value = getValueFromAll(mezo.getAttribute("tag"), jsonValue, localAktuels)
        }
    }

    jsonValue = await getUrlapJSONs(urlap);
    for(const constas of myConstas){ // SzövegVáltozóCsere
        console.log(jsonValue)
        constas.innerHTML = getValueFromAll(
            constas.getAttribute("tag"), jsonValue, localAktuels
        ) || "null";
    }

    if(MyEvent) eventTarget.dispatchEvent(MyEvent);
}

async function doKuld(e, urlap, MyEvent){
    const jsonValue = await getUrlapJSONs(urlap);
    const allapotKijelzok = urlap.getElementsByClassName("allapot");
    console.log(jsonValue);
    const routG = urlap.getAttribute('value').split("/");
    let tr = "";
    for(const strE of routG){
        const strEs = strE.split("-");
        const strEs1 = strEs[1] ? strEs[1] : "ca";
        //console.log(jsonValue[strEs[1] ? strEs[1] : "ca"][strEs[0].replace("$", "")])
        tr += strE.startsWith("$") ?
            ((jsonValue[strEs1] && jsonValue[strEs1][strEs[0].replace("$", "")]) ||
             "null") +"/" : strE + "/";
        tr = tr.substring(0, tr.length-1);
    }
    let sikeresKeres = false;
    console.log("Lefut?")
    for(const btn of urlap.querySelectorAll("*:not(.urlap):not(.retn) .kuld, .kuldG")){
        btn.setAttribute("disabled", "");
    }
    doUrlapAllapotFrissites(allapotKijelzok, "Küldés folyamatban...");
    const response = "";// await exampleREST(tr, urlap.getAttribute("method"), jsonValue["oth"], jsonValue["ca"], jsonValue["ce"])
    doUrlapAllapotFrissites(allapotKijelzok, "Küldés sikeres!");
    console.log("Lefut.")
    for(const btn of urlap.querySelectorAll("*:not(.urlap):not(.retn) .kuld, .kuldG")){
        btn.removeAttribute("disabled");
    }

    if(MyEvent && response.startsWith("res:") && !sikeresKeres){
      //  console.log("Ez fut?");
        const tres = response.replace("res:", "");
        for(const retn of document.querySelectorAll(`[name=${urlap.getAttribute('name')}].retn`)){
            doUjratolt(retn, tres);
        }
        doFrissit();
        eventTarget.dispatchEvent(MyEvent);
    }
    else{
        const presentationLayer = "111:::222:::333:::;;;333:::555:::666:::"
        for(const retn of document.querySelectorAll(`[name=${urlap.getAttribute('name')}].retn`)){
            doUjratolt(retn, presentationLayer);
        }
    }

    if(MyEvent) {
        console.log("isDispatching: " + hanyszor)
        eventTarget.dispatchEvent(MyEvent);
    }
}

async function doFrissit(retns=document.querySelectorAll("[value].retn:not([name])")){
    for(const retn of retns){
        const adatsorrend = retn.getAttribute("data-adatsorrend") || "*";
        const jsonResponse = await exampleREST(retn.getAttribute("value"), "get", {/*visszakért oszlopnevek*/});
        doUjratolt(retn, jsonResponse, retn.getAttribute("data-resposetype") || "text");        
    }
}

async function doRetnKijelolteketTorol(e){
    console.log("EEEE: " + e.target.classList);
    ;
    for(;;){

    }
}

async function doRetnRowTorol(e, retnrow, ca){
    // azonosítási adatok összegyűjtése <0>
    console.log("EEEE: " + e.target.classList);
    
    ;
}

function doRetnRowSzerkeszt(e, retnrow, ca, ce){
    //Szerkeszthető mezők kijelölése
    console.log("EEEE: " + e.target.classList);
    ;
}

async function doRetnRowKuldSzerkesztes(e){
    //Szerkesztett mezők összegyűjtése
    console.log("EEEE: " + e.target.classList);
    ;
}

function doRetnRowMegseSzerkeszt(e){
    console.log("EEEE: " + e.target.classList);
    ;
}



function doUjratolt(retn, responseInput="", responseInputType="text"){
    let fullText = "";
    //const mezNames = retn.getAttribute("data-adatsorrend");
    const retnheaderD = retn.getElementsByClassName("retnheader")[0]?.cloneNode(true);
    const resPlit = responseInput.split(";;;");
    const adatsorrend = resPlit[0] && resPlit[0].split("|||").length > 1 ? resPlit[0].split("|||")[0].split(";"): "";
    const retnrowD = retn.getElementsByClassName("retnrow")[0]?.cloneNode(true);
    
    if(retnheaderD){
        if(adatsorrend){
            retnheaderD.value="-1";
            const strA = adatsorrend.split(";");
            for(const mez of retnheaderD.getElementsByClassName("mez")){
                const mezContent = mez.textContent;
                console.log("??: " + mezContent)
                mez.innerHTML = !isNaN(mezContent) ? strA[Number(mezContent)] : "null";
            }
            fullText += retnheaderD.outerHTML;
        }
    }
    
    if(retnrowD){
       switch(responseInputType){
            case "text":
                for(const textRow of responseInput.split(";;;")){
                    console.log("?: " + textRow);
                    const retnrowDE = retnrowD.cloneNode(true);
                    const strA = textRow.split(":::");
                    for(const mez of retnrowDE.getElementsByClassName("mez")){
                        const mezContent = mez.textContent;
                        console.log("??: " + mezContent)
                        mez.innerHTML = !isNaN(mezContent) ? strA[Number(mezContent)] : "null";
                    }
                    if(retnrowDE.value) retnrowDE.value = !isNaN(retnrowDE.value) ? strA[Number(retnrowDE.value)] : "-1";
                    for(const tagValue of retnrowDE.querySelectorAll("[value]:not([value=''])")){
                        const tagValueContent = tagValue.getAttribute("value");
                        tagValue.value = !isNaN(tagValueContent) ? strA[Number(tagValueContent)] : "";
                    }
                    fullText += retnrowDE.outerHTML;
                }
                break;
            case "json":
                for(const jsonItem of responseInput){
                    const retnrowDE = retnrowD.cloneNode(true);
                    for(const mez of retnrowDE.getElementsByClassName("mez")){
                        mez.innerHTML = jsonItem[mez.textContent];
                    }
                    for(const tagValue of retnrowDE.querySelectorAll("[value]:not([value=''])")){
                        const tagValueContent = tagValue.getAttribute("value");
                        tagValue.value = jsonItem[tagValueContent];
                    }
                    fullText += retnrowDE.outerHTML;
                }
                break;
       }
       doRefreshRetnEvents();
    }

    for(const retnmain of retn.getElementsByClassName("retnmain")){
        retnmain.innerHTML = fullText;
    }
}

function doRefreshRetnEvents(min=document.getElementsByClassName("retn")){
     //Retn
     for(const retn of min){
         const retnHeaders = retn.querySelectorAll(".retnmain>.retnheader");
         const retnRows = retn.querySelectorAll(".retnmain>.retnrow");
         const retnCA = retn.getAttribute("data-azon");
         const retnCE = retn.getAttribute("data-edit");
         if(retnHeaders && retnHeaders[0]){
             exportedMethods.doMindenhezHozzaad(
                 retnHeaders[0].getElementsByClassName("deleteall"), 
                 [doRetnKijelolteketTorol], 
                 "indexRetnAllDelete", []
             );
         }
         for(const retnRow of retnRows){
             exportedMethods.doMindenhezHozzaad(
                 retnRow.getElementsByClassName("delete"),
                 [doRetnRowTorol],
                 "indexRetnRowDelete",
                 [retnRow]
             );
             exportedMethods.doMindenhezHozzaad(
                 retnRow.getElementsByClassName("edit"),
                 [doRetnRowSzerkeszt],
                 "indexRetnRowEdit",
                 []
             );
     
           /*  exportedMethods.doMindenhezHozzaad(
                 retnRow.getElementsByClassName("editsend"),
                 [doRetnRowKuldSzerkesztes],
                 "indexRetnRowEditSend",
                 []
             );
     
             exportedMethods.doMindenhezHozzaad(
                 retnRow.getElementsByClassName("canceledit"),
                 [doRetnRowMegseSzerkeszt],
                 "indexRetnRowCancelEdit",
                 []
             );*/
         }
     }
}

function doUrlapAllapotFrissites(mezok, szoveg){
    for(const mezo of mezok){
        mezo.innerHTML = szoveg;
    }
}

function getMethodStoreObjectWithReturns(jsonAktuels){
    const localAktuels = {};
    for(const key in jsonAktuels){
        localAktuels[key] = aktuels[key]();
    }
    return localAktuels;
}

async function getUrlapJSONs(urlap){
    const myUrlap = urlap.querySelectorAll("* [name]:not([name=''])");
    const jsonValue = {};
    for(const mezo of myUrlap){
        const mezofieldType = mezo.getAttribute("data-fieldtype") || "ce";
        console.log("GGGGGG: " + mezo.name)
        if (typeof mezo.name !== "string" || mezo.name.trim() === "") mezo.name="";
        if(jsonValue[mezofieldType] && mezo.name.length > 0) jsonValue[mezofieldType][mezo.name] = mezo.type !== "checkbox" ? (mezo.classList.contains("chr") ? await getCryptoHash(mezo.value) : mezo.value) : mezo.checked;
    }
    return await jsonValue;
}

function getValueFromAll(Cname="", jsonValue={}, localAktuels={}){
    let oText = "";
    const mezoTagG = Cname.split("-");
    if(mezoTagG.length > 1 && !isNaN(mezoTagG[0])){
        switch(Number(mezoTagG[0])){
            case 0:
                oText = jsonValue[mezoTagG[2] ? mezoTagG[2] : "ce"][mezoTagG[1]] || "";
                break;
            case 1:
                oText = getValueFromLocalStorage(mezoTagG[1]) || "";
                break;
            case 2:
                oText = localAktuels[mezoTagG[1]] || "";
                break;
        }
    }
    return mezoTagG.length > 2 && !isNaN(mezoTagG[2]) ?
        oText.split(";")[Number(mezoTagG[2])] || "" : oText;
}

function getValueFromLocalStorage(Cname){
    console.log(Cname)
    return localStorage.getItem(Cname) || "null";
}

async function getCryptoHash(text){
    const buffer = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, "0")).join("")
}