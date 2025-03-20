let serverhost = "http://192.168.1.18:18080/";
let content = document.getElementsByTagName("main")[0];
callSite("mitettemma");
let events = [];

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
/*document.cookie = "Elekta=Fakkkjú";
document.cookie = "Suzie=Gere"
console.log(document.cookie)
document.cookie = "Elekta=Fakkkj";
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


document.addEventListener("DOMContentLoaded", function() {
    //console.log("Az oldal betöltődött!");

});

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

function callSite(melyik){
    fetch("content/" + melyik, { cache: "no-store" })
        .then(async (res) => {
            if (res.ok) {
                document.querySelectorAll(".guest").forEach(g => g.remove());
                let iHTML = await res.text();
                content.innerHTML = iHTML;
                doCSSAddingToSite();
                doJSAddingToSite();
                addEvents();
            } else {
                content.innerHTML = await res.status + " Error";
            }
        })
        .catch(()=>{
            console.log("ISMERETLEN HIBA")
        })
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

function addEvents(){
    const jsA = [
        {datum: "EEEEA"},
        {datum: "AAAAE"}
    ];
    // 
    const txA = "A:::A:::B;;;B:::B:::A"
    const retne = document.getElementsByClassName("retn");
    console.log(retne.length);
    //doFrissit();
    doUjratolt(retne[0], jsA, "json");
    doUjratolt(retne[2], txA);


    const contentLinks = document.getElementsByClassName("contentlink");
    const urlapok = document.querySelectorAll("[value].urlap");

    for(let i = 0; i< contentLinks.length; i++){
        contentLinks[i].addEventListener("click", function(e){
            callSite(e.target.name);
        });
    }
    
    for(const urlap of urlapok){
        const urlapAct = urlap.getAttribute("action");
        const stA =  urlapAct ? urlapAct
            .toLowerCase().replace(/^\w/, (match) => match.toUpperCase()) : "";
        const MyEvent = stA ? new Event("urlap"+stA) : null;
        doAddingToButtons(urlap, "aktuel", [doAktuel], MyEvent);
        doAddingToButtons(urlap, "kuld", [doKuld], MyEvent);
        doAddingToButtons(urlap, "kuldG", [doAktuel, doKuld], MyEvent);
    }
}

function doAddingToButtons(urlap, buttonName, methodNames, myEvent){
    //Aktüel
    for(const aktuel of urlap.getElementsByClassName(buttonName)){
        aktuel.addEventListener("click", function(){
           for(const method of methodNames){
                method(urlap, myEvent);
           }
        })
    }
}

async function doAktuel(urlap){
    const myConst = urlap.querySelectorAll("* [name][tag]"); // Rejtett mezők automatikus kitöltéssel
    const myConstas = urlap.querySelectorAll("* [tag].constas"); // Elemek, amikben változó van
    const jsonValue = await getUrlapJSONs(urlap); // Ürlap mező értékek
    const localAktuels = getMethodStoreObjectWithReturns(aktuels); // Values from Aktüel

    for(const mezo of myConst){ // értékcsere LocalStorage-ból vagy Aktüel-ből
        if(mezo.name.length > 0 && (!mezo.value || mezo.value.length == 0)){
            mezo.value = getValueFromAll(mezo.getAttribute("tag"), jsonValue, localAktuels)
        }
    }

    for(const constas of myConstas){ // SzövegVáltozóCsere
        console.log(jsonValue)
        constas.innerHTML = getValueFromAll(
            constas.getAttribute("tag"), jsonValue, localAktuels
        ) || "null";
    }
}

async function doKuld(urlap, MyEvent){
    const jsonValue = await getUrlapJSONs(urlap);
    console.log(jsonValue);
    const routG = urlap.getAttribute('value').split("/");
    let tr = "";
    for(const strE of routG){
        const strEs = strE.split("-");
        const strEs1 = strEs[1] ? strEs[1] : "ca";
        console.log(strEs1)
        //console.log(jsonValue[strEs[1] ? strEs[1] : "ca"][strEs[0].replace("$", "")])
        tr += strE.startsWith("$") ?
            ((jsonValue[strEs1] && jsonValue[strEs1][strEs[0].replace("$", "")]) ||
             "null") +"/" : strE + "/";
    }
    console.log(tr)
    let sikeresKeres = false;
    console.log("Küldés folyamatban...")
    const response = await exampleREST(tr, urlap.getAttribute("method"), jsonValue["oth"], jsonValue["ca"], jsonValue["ce"])
    console.log("Küldés sikeres!");

    if(MyEvent && response.startsWith("res:") && !sikeresKeres){
        for(const retn of document.querySelectorAll(`[name=${urlap.getAttribute('name')}].retn`)){
            doUjratolt(retn, response);
        }
        doFrissit();
        document.dispatchEvent(MyEvent);
    }

    if(MyEvent) document.dispatchEvent(MyEvent);
}

async function doFrissit(retns=document.querySelectorAll("[value].retn")){
    const jsonResponse = await exampleREST(retn.getAttribute("value"));
    for(const retn of retns){
        doUjratolt(retn, jsonResponse, retn.getAttribute("data-resposetype") || "text");        
    }
}

function doUjratolt(retn, responseInput="", responseInputType="text"){
    let fullText = "";
    let retnrowD = null;
    
    for(const retnrow of retn.getElementsByClassName("retnrow")){
        retnrowD = retnrow.cloneNode(true);
    }
    
    if(retnrowD){
       switch(responseInputType){
            case "text":
                for(const textRow of responseInput.split(";;;")){
                    console.log("?: "+textRow);
                    const retnrowDE = retnrowD.cloneNode(true);
                    const strA = textRow.split(":::");
                    for(const mez of retnrowDE.getElementsByClassName("mez")){
                        const mezContent = mez.textContent;
                        console.log("??: "+mezContent)
                        mez.innerHTML = !isNaN(mezContent) ? strA[Number(mezContent)] : "null";
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
                    fullText += retnrowDE.outerHTML;
                }
                break;
       }
    }

    for(const retnmain of retn.getElementsByClassName("retnmain")){
        retnmain.innerHTML = fullText;
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
    const myUrlap = urlap.querySelectorAll("* [name]");
    const jsonValue = {};
    for(const mezo of myUrlap){
        const mezofieldType = mezo.getAttribute("data-fieldtype") || "ce";
        if(!jsonValue[mezofieldType]) jsonValue[mezofieldType] = {};
        if(mezo.name.length > 0) jsonValue[mezofieldType][mezo.name] = mezo.type !== "checkbox" ? (mezo.classList.contains("chr") ? await getCryptoHash(mezo.value) : mezo.value) : mezo.checked;
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