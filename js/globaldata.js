
export const exportedMethods = {
    setUrlapButtons: setUrlapButtons,
    getIDButtons: getIDButtons,
    doMindenhezHozzaad: doMindenhezHozzaad
}

let urlapButtons = [];

function isArrayLike(obj) {
    console.log
    return true;//obj && typeof obj === "object" && "length" in obj && typeof obj[Symbol.iterator] === "function";
}

function setUrlapButtons(iUrlapButtons){
    if(isArrayLike(iUrlapButtons)) urlapButtons = iUrlapButtons;
}

function getIDButtons(buttonID){
    let i = -1; // Egy merge rendezés itt talán lesz
    let ign = true;
    console.log(urlapButtons.length)
    while(i < urlapButtons.length - 1 && ign){
        i++;
        ign = urlapButtons[i].getAttribute("id") !== buttonID;
    };
    return !ign ? urlapButtons[i] : null;
}

function doMindenhezHozzaad(mikhez, milyenfuggvenyt, eventtipus="click"){
    for(const elem of mikhez){
        elem.addEventListener(eventtipus, function(e){
            milyenfuggvenyt(e);
        })
    }
}