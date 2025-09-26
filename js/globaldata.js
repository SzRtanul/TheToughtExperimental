export let eventTarget = new EventTarget();
export const outsideEventMethStores = [];
export const serverhost = "http://192.168.88.244:18080/";


let urlapButtons = [];
let hanyszor = /*Number(localStorage.getItem("ala")) ||*/ 0;
const aktuels = {
    nowDate: function(){
        return new Date().toISOString().replace("T", ";");
    },
    novaDate: gluck
};
function gluck(){
    return "Ernai";
}

function getHanyszor(){
    return hanyszor;
}

function doResetEventTarget(){
    eventTarget = new EventTarget();
}

function doNovelHanyszor(){
    hanyszor++;
}

function isArrayLike(obj) {
    return true;//obj && typeof obj === "object" && "length" in obj && typeof obj[Symbol.iterator] === "function";
}

function setUrlapButtons(iUrlapButtons){
    if(isArrayLike(iUrlapButtons)) urlapButtons = iUrlapButtons;
}

function getIDButtons(buttonID){
    let i = -1; // Egy merge rendezés itt talán lesz
    let ign = true;
    //console\.log("Paraméter: " + buttonID)
    while(i < urlapButtons.length - 1 && ign){
        i++;
        //console\.log("UrlapID: " + urlapButtons[i].id);
        ign = urlapButtons[i].id !== String(buttonID);
    };
    return !ign ? urlapButtons[i] : null;
}

function doMindenhezHozzaad(mikhez, methods=[], eventID="", parameters=[], eventtipus="click"){
    for(const elem of mikhez){
        if(!(eventID &&
                elem.dataset.events && 
                exportedMethods.isBenneVan(elem.dataset.events.split(";"), eventID))
        ){
            const eventcharchain = (elem.getAttribute(eventID+"Event") ?? eventtipus) || "";
            const eventtypeslist = eventcharchain.split(';') ?? [];
            for(let i = 0; i<eventtypeslist.length; i++){
                //console.log(eventtypeslist[i])
                elem.addEventListener(eventtypeslist[i], async function(e){
                    let both = true;
                    for(let i = 0; i < methods.length && both; i++){
                        const pr = parameters[i] ?? [];
                        const parame = await methods[i](e, ...pr);
                        both = typeof parame === "boolean" ? parame : true;
                    }
                   // console.log(eventtypeslist[i])
                });
            }
            if(!elem.dataset.events) elem.dataset.events = "";
            if(eventID.length > 0) elem.dataset.events += eventID + ";";
        }
    }
}

function doMindennelMegcsinál(miken, mitmethod, parameters=[]){
    for(const elem of miken){
        mitmethod(elem, ...parameters);
    }
}

function getanythingFromElement(elem, dimensions=[]){
    let both = elem && 
          dimensions && 
          typeof dimensions[Symbol.iterator] === 'function' && 
          dimensions.length > 0;
    let vegsoElem = elem;
    ////console\.log(vegsoElem);
    for(let i = 0; i < dimensions.length-1 && both; i++){
        vegsoElem = vegsoElem[String(dimensions[i])];
       // //console\.log(vegsoElem);
        both = vegsoElem ? true : false;
    }
    if(both){ 
        return vegsoElem[dimensions[dimensions.length-1]];
    }
}

function setAnythingOnElement(elem, dimensions=[], parameters){
    let both = elem && 
          dimensions && 
          typeof dimensions[Symbol.iterator] === 'function' && 
          dimensions.length > 0;
    let vegsoElem = elem;
    ////console\.log(vegsoElem);
    for(let i = 0; i < dimensions.length-1 && both; i++){
        vegsoElem = vegsoElem[String(dimensions[i])];
       // //console\.log(vegsoElem);
        both = vegsoElem ? true : false;
    }
    if(both){ 
        vegsoElem[dimensions[dimensions.length-1]](...parameters);
    }
}

function bennevan(myarray, value){
    let both = false;
    for(let i = 0; i < myarray.length && !both; i++){
        both = myarray[i] === value;
    }
    return both;
}

function bennehol(myarray, value){
    let hely = -1;
    for(let i = 0; i < myarray.length && !both; i++){
        hely = myarray[i] === value ? i : hely;
    }
    return hely;
}

function getUrlapFromE(e){
    const urlapKod = getComputedStyle(e.target).getPropertyValue("--data-urlapid");
    const urlap = exportedMethods.getIDButtons(urlapKod);
    return urlap;
}

//
// Film eleje -------------
//
function doEnvAutoJumpJelenet(environment, mialapjan="nextTo"){
    const hovas = environment.getAttribute(mialapjan)?.split(';');
    const film = environment.closest(".film");
    for(let i = 0; i < hovas?.length || 0; i++){
        const hova = hovas[i].split(':')
        if(hova?.length > 1){
            if(film) exportedMethods.doJelenetValtas(film, hova[1], hova[0])
        }
    }
}

function actionableAutoJumpJelenet(e, mialapjan="nextTo"){
    const hovas = e.target.getAttribute(mialapjan)?.split(';');
    const film = e.target.closest(".film");
    for(let i = 0; i < hovas?.length || 0; i++){
        const hova = hovas[i].split(':')
        if(hova?.length > 1){
            if(film) exportedMethods.doJelenetValtas(film, hova[1], hova[0])
        }
    }
}

function doJelenetValtas(urlap, hova, tipus="scen"){
    exportedMethods.doMindennelMegcsinál(
        urlap.querySelectorAll("."+tipus + ".sceneI"), 
        exportedMethods.setAnythingOnElement, 
        [["classList", "remove"], 
        ["sceneI"]]);
    exportedMethods.doMindennelMegcsinál(
        urlap.getElementsByClassName(tipus+hova), 
        exportedMethods.setAnythingOnElement, 
        [["classList", "add"], 
        ["sceneI"]]);
    //console\.log("Eljutott")
}
//
// Film vége -------------
//

function doaddIDTo(environment, classsName="", elotag=""){
    let cID = 0;
    const items = environment.getElementsByClassName(classsName);
    for(let i = 0; i<items.length; i++){
        items[i].id = elotag + cID;
        items[i].style.setProperty("--"+classsName+"ID", items[i].id+"");
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

async function getCryptoHash(text){
    /*const buffer = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, "0")).join("")*/
    const buffer = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(text));
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

async function getUrlapJSONs(urlap){
    const myUrlap = urlap.querySelectorAll("* [name]:not([name=''])");
    const jsonValue = {};
    for(const mezo of myUrlap){
       // if (typeof mezo.name !== "string" || mezo.name.trim() === "") mezo.name="";
        if(mezo.name && mezo.name.length > 0){
            if(!mezo.classList.contains("woap")){
                jsonValue[mezo.name] = 
                    mezo.type !== "checkbox" ? 
                        (mezo.classList.contains("xhr") ? 
                            await getCryptoHash(mezo.value) : 
                            mezo.value) : 
                        mezo.checked
                ;
            }
            else{
                let jsonMezoField = JSON.stringify(jsonValue);
                jsonMezoField = jsonMezoField.substring(0, jsonMezoField.length - 1) +
                    `${Object.keys(jsonValue).length > 0 ? "," : ""}`+
                    `"${mezo.name}":${mezo.type !== "checkbox" ?
                            mezo.value || null : mezo.checked}}`;
                console.log(jsonMezoField);
                jsonValue = JSON.parse(jsonMezoField);
            }
        }
    }
    return await jsonValue;
}

function getValueFromAll(Cname="", jsonValue={}, localAktuels={}){
    let oText = "";
    const mezoTagG = Cname.split("-");
    if(mezoTagG.length > 1 && !isNaN(mezoTagG[0])){
        switch(Number(mezoTagG[0])){
            case 0:
                oText = jsonValue[mezoTagG[1]] || "";
                break;
            case 1:
                oText = localStorage.getItem(mezoTagG[1]) || "";
                break;
            case 2:
                oText = localAktuels[mezoTagG[1]] || "";
                break;
            case 3:
                oText = sessionStorage.getItem(mezoTagG[1]) || "";
                break;
        }
    }
    return mezoTagG.length > 2 && !isNaN(mezoTagG[2]) ?
        oText.split(";")[Number(mezoTagG[2])] || "" : oText;
}
function getValueFromLocalStorage(Cname){
    return localStorage.getItem(Cname) || "null";
}

//Aktuel
async function doAktuel(e, urlap, MyEvent){
    const myConst = urlap.querySelectorAll("* [name][tag]"); // Rejtett mezők automatikus kitöltéssel
    const myConstas = urlap.querySelectorAll("* [tag].constas"); // Elemek, amikben változó van
    let jsonValue = await exportedMethods.getUrlapJSONs(urlap); // Ürlap mező értékek
    const localAktuels = exportedMethods.getMethodStoreObjectWithReturns(aktuels); // Values from Aktüel
    for(const mezo of myConst){ // értékcsere LocalStorage-ból vagy Aktüel-ből
        if(mezo.name.length > 0 && (!mezo.value || mezo.value.length == 0)){
            mezo.value = exportedMethods.getValueFromAll(mezo.getAttribute("tag"), jsonValue, localAktuels)
        }
    }
    jsonValue = await exportedMethods.getUrlapJSONs(urlap);
    for(const constas of myConstas){ // SzövegVáltozóCsere
        //console\.log("OOOOOOOOOOOOOOO")
        //console\.log(jsonValue)
        constas.innerHTML = exportedMethods.getValueFromAll(
            constas.getAttribute("tag"), jsonValue, localAktuels
        ) || "null";
    }
    if(MyEvent) eventTarget.dispatchEvent(MyEvent);
}

async function exampleREST(honnan="", 
    method="POST", db="", cAzon={}
){
    const fetchJSON = {
        method: method.toUpperCase(),
       /* wittCredentials: true,
        credentials: "include",*/
        headers: {
            //'Cache-Control': 'no-cache',
            cache: 'no-store',
          //  ContentType: 'application/text',
          //  Accept: '',
           // Others: others
        }
    };
    switch(method.toUpperCase()){
        case "GET":
        case "HEAD":
            break;
        default:
                fetchJSON["body"] = JSON.stringify({
                    token: Number(localStorage.getItem("token")) || 5,
                    CAzon: cAzon,
                    db: db,
                 //   ,CEdit: cEdit
                })
            break;
    }
    const response = await fetch(serverhost + honnan, fetchJSON).catch(error => { return null; });
    return await response ? await response.text() : "err:HIBA: A szerver elérhetetlen.";
}

async function simpleREST(honnan=""
){
    const fetchJSON = {
        method: 'GET',
        headers: {
            cache: 'no-store'
        }
    };
    const response = await fetch(honnan, fetchJSON).catch(error => { return null; });
    return await response ? "res:" + await response.text() : "";
}

export const exportedMethods = {
    doMindenhezHozzaad: doMindenhezHozzaad,
    doNovelHanyszor: doNovelHanyszor,
    doMindennelMegcsinál: doMindennelMegcsinál,
    doResetEventTarget: doResetEventTarget,
    doEnvAutoJumpJelenet: doEnvAutoJumpJelenet,
    actionableAutoJumpJelenet: actionableAutoJumpJelenet,
    doJelenetValtas: doJelenetValtas,
    //doaddIDTo: doaddIDTo,
    doUrlapAllapotFrissites: doUrlapAllapotFrissites,
    doAktuel: doAktuel,
    getIDButtons: getIDButtons,
    getHanyszor: getHanyszor,
    getanythingFromElement: getanythingFromElement,
    getUrlapFromE: getUrlapFromE,
    getMethodStoreObjectWithReturns: getMethodStoreObjectWithReturns,
    getUrlapJSONs: getUrlapJSONs,
    getValueFromAll: getValueFromAll,
    getValueFromLocalStorage: getValueFromLocalStorage,
    getCryptoHash: getCryptoHash,
    setUrlapButtons: setUrlapButtons,
    setAnythingOnElement: setAnythingOnElement,
    isBenneVan: bennevan,
    isBenneHol: bennehol,
    exampleREST: exampleREST,
    simpleREST: simpleREST
};