export let eventTarget = new EventTarget();
let urlapButtons = [];
let hanyszor = /*Number(localStorage.getItem("ala")) ||*/ 0;

export const exportedMethods = {
    doMindenhezHozzaad: doMindenhezHozzaad,
    doNovelHanyszor: doNovelHanyszor,
    doMindennelMegcsinál: doMindennelMegcsinál,
    getIDButtons: getIDButtons,
    getHanyszor: getHanyszor,
    setUrlapButtons: setUrlapButtons,
    setAnythingOnElement: setAnythingOnElement,
    doResetEventTarget: doResetEventTarget,
    isBenneVan: bennevan,
    isBenneHol: bennehol
};

export const exportVariables = {
    hanyszor: hanyszor
};

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
    console.log("Paraméter: " + buttonID)
    while(i < urlapButtons.length - 1 && ign){
        i++;
        console.log("UrlapID: " + urlapButtons[i].id);
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
            elem.addEventListener(eventtipus, function(e){
                for(const method of methods){
                    method(e, ...parameters);
                }
            })
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

function setAnythingOnElement(elem, dimensions=[], parameters){
    let both = elem && 
          dimensions && 
          typeof dimensions[Symbol.iterator] === 'function' && 
          dimensions.length > 0;
    let vegsoElem = elem;
    //console.log(vegsoElem);
    for(let i = 0; i < dimensions.length-1 && both; i++){
        vegsoElem = vegsoElem[String(dimensions[i])];
       // console.log(vegsoElem);
        both = vegsoElem ? true : false;
    }
    if(both){ 
        console.log(vegsoElem+"")
        //vegsoElem = vegsoElem.bind(elem)
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