let serverhost = "http://192.168.1.18:18080/";
let content = document.getElementsByTagName("main")[0];
callSite("mitettemma");

let a = document.getElementsByClassName("contentlink");
const aktuels = {
    nowDate: function(){
        return new Date().toISOString();
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

let szoveg = "Szia, a nevem $nev, $kor éves vagyok és $varos-ban élek. $varos";
let jsonData = {
    nev: "Roland",
    kor: 12,
    varos: "Budapest"
};


document.addEventListener("DOMContentLoaded", function() {
    //console.log("Az oldal betöltődött!");
    
});

async function examplePOST(hova, mit){
    let response = await fetch(serverhost + hova, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: mit
    })
    return await response.text();
}

async function exampleGET(honnan){
    let response = await fetch(serverhost + honnan, {
        method: "GET",
        headers: {
            'Content-Type': 'application/text'
        },
    })
    return await response.text();
}

class REST{

}

for(let i = 0; i< a.length; i++){
    a[i].addEventListener("click", function(e){
        callSite(e.target.name);
    });
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
    let urlapok = document.querySelectorAll("[value].urlap");
    console.log(urlapok.length)
    
    for(const urlap of urlapok){
        console.log("Belép ide?");
        doAddingToAktuelButtons(urlap);
        doAddingToKuldButtons(urlap);
    }
}

function doAddingToAktuelButtons(urlap){
    //Aktüel
    for(const aktuel of urlap.getElementsByClassName("aktuel")){
        aktuel.addEventListener("click", function(){
            const localAktuels = getMethodStoreObjectWithReturns(aktuels); // Values from Aktüel
            const myConst = urlap.querySelectorAll("* [name].consta"); // Rejtett mezők automatikus kitöltéssel
            const myConstas = urlap.querySelectorAll("* .constas"); // Elemek, amikben változó van
            const jsonValue = getUrlapJSONs(urlap); // Ürlap mező értékek

            for(const mezo of myConst){ // értékcsere LocalStorage-ból vagy Aktüel-ből
                console.log("ETA: " + mezo.getAttribute("value"));
                const mezoValue = mezo.getAttribute("value");
                if(mezo.name.length > 0) 
                    mezo.setAttribute("value",
                        mezoValue.startsWith("$-") ?
                            getValueFromLocalStorage(mezoValue.replace("$-", "")) :
                            localAktuels[mezoValue])
                    ;
                console.log("ETA: " + mezo.getAttribute("value"));
               // if(mezo.name.length > 0) mezo.value = getValueFromLocalStorage(mezo.value);
            }

            for(const constas of myConstas){ // SzövegVáltozóCsere
                constas.innerHTML = replaceWithFromLocalStorage(
                    replaceWithFromForm(
                        constas.innerHTML, jsonValue
                    )
                );
            }
            console.log(localAktuels)
        })
    }
}

function doAddingToKuldButtons(urlap){
    // Küld
    for(const kuld of urlap.getElementsByClassName("kuld")){
        kuld.addEventListener("click", function(e){
            const jsonValue = getUrlapJSONs(urlap);
            let tr = replaceWithFromLocalStorage(
                replaceWithFromForm(
                    urlap.getAttribute('value'), jsonValue
                )
            );
            console.log(jsonValue);
            console.log(tr);
            /* examplePOST(
                tr,
                JSON.stringify(jsonValue)
            ); */
        });
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
        if(mezo.name.length > 0) jsonValue[mezo.name] = mezo.type !== "checkbox" ? mezo.value : mezo.checked;
    }
    return jsonValue;
}

function replaceWithFromForm(text, jsonData){
    console.log(text);
    text = Object.entries(jsonData).reduce(
        (acc, [key, value]) => acc.replaceAll(`$${key}`, value ? value : "null"),
        text
    );
    return text;
}

function replaceWithFromAktuel(rText, localAktuels){

}

function replaceWithFromLocalStorage(rText){
    console.log(rText)
    let cookieTexts = rText.split("$");
    let oText = "";
    let repl = "";
    console.log("ETAN" + rText);
    for(const text of cookieTexts){
        repl = text.match(/^(?:\-)(\w+)/)?.[1] || " null ";
        console.log("ETAN: " + repl)
        oText += text.replace("-" + repl, getValueFromLocalStorage(repl));
    }
    //text = 
    return oText;
}

function getValueFromLocalStorage(Cname){
    console.log(Cname)
    return localStorage.getItem(Cname) || "null";
}