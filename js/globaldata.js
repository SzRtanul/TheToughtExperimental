
export const exportedMethods = {
    setUrlapButtons: setUrlapButtons,
    getIDButtons: getIDButtons
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
