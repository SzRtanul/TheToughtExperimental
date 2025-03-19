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

/*async function examplePOST(hova, mit){
    let response = await fetch(serverhost + hova, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: mit
    })
    return await response.text();
}*/

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
    const response = await fetch(serverhost + honnan, fetchJSON);
    return await response.text();
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
    const retne = document.getElementsByClassName("retn");
    console.log(retne.length);
    //doFrissit();
    //doUjratolt(retne[0], jsA);


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

function doAktuel(urlap){
    const myConst = urlap.querySelectorAll("* [name][tag]"); // Rejtett mezők automatikus kitöltéssel
    const myConstas = urlap.querySelectorAll("* [tag].constas"); // Elemek, amikben változó van
    const jsonValue = getUrlapJSONs(urlap); // Ürlap mező értékek
    const localAktuels = getMethodStoreObjectWithReturns(aktuels); // Values from Aktüel

    for(const mezo of myConst){ // értékcsere LocalStorage-ból vagy Aktüel-ből
        if(mezo.name.length > 0 && (!mezo.value || mezo.value.length == 0)){
            mezo.value = getValueFromAll(mezo.getAttribute("tag"), jsonValue, localAktuels)
        }
    }

    for(const constas of myConstas){ // SzövegVáltozóCsere
        constas.innerHTML = getValueFromAll(
            constas.getAttribute("tag"), jsonValue, localAktuels
        );
    }
}

async function doKuld(urlap, MyEvent){
    const jsonValue = getUrlapJSONs(urlap);
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
    const jsonResponse = await exampleREST(tr, urlap.getAttribute("method"), jsonValue["oth"], jsonValue["ca"], jsonValue["ce"])
    
    if(MyEvent && !sikeresKeres){
        for(const retn of document.querySelectorAll(`[name=${urlap.getAttribute('name')}].retn`)){
            doUjratolt(retn, jsonResponse);
        }
        doFrissit();
        document.dispatchEvent(MyEvent);
    }
}

async function doFrissit(retns=document.querySelectorAll("[value].retn")){
    const jsonResponse = await exampleREST(retn.getAttribute("value"));
    for(const retn of retns){
        doUjratolt(retn, jsonResponse);        
    }
}

function doUjratolt(retn, jsonArray=[]){
    let fullText = "";
    let retnrowD = null;
    
    for(const retnrow of retn.getElementsByClassName("retnrow")){
        retnrowD = retnrow.cloneNode(true);
    }
    
    if(retnrowD){
        for(const jsonItem of jsonArray){
            const retnrowDE = retnrowD.cloneNode(true);
            for(const mez of retnrowDE.getElementsByClassName("mez")){
                mez.innerHTML = jsonItem[mez.textContent];
            }
            fullText += retnrowDE.outerHTML;
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

function getUrlapJSONs(urlap){
    const myUrlap = urlap.querySelectorAll("* [name]");
    const jsonValue = {};
    for(const mezo of myUrlap){
        const mezofieldType = mezo.getAttribute("data-fieldtype") || "ce";
        if(!jsonValue[mezofieldType]) jsonValue[mezofieldType] = {};
        if(mezo.name.length > 0) jsonValue[mezofieldType][mezo.name] = mezo.type !== "checkbox" ? mezo.value : mezo.checked;
    }
    return jsonValue;
}

function getValueFromAll(Cname="", jsonValue={}, localAktuels={}){
    let oText = "";
    const mezoTagG = Cname.split("-");
    if(mezoTagG.length > 1 && !isNaN(mezoTagG[0])){
        switch(Number(mezoTagG[0])){
            case 0:
                oText = jsonValue[mezoTagG[2] ? mezoTagG[2] : "ce"][mezoTagG[1]];
                break;
            case 1:
                oText = getValueFromLocalStorage(mezoTagG[1]);
                break;
            case 2:
                oText = localAktuels[mezoTagG[1]];
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