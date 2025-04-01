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
    doResetEventTarget: doResetEventTarget,
    isBenneVan: bennevan,
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
    while(i < urlapButtons.length - 1 && ign){
        i++;
        ign = urlapButtons[i].getAttribute("id") !== buttonID;
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

function bennevan(myarray, value){
    let both = false;
    for(let i = 0; i < myarray.length && !both; i++){
        both = myarray[i] === value;
    }
    return both;
}