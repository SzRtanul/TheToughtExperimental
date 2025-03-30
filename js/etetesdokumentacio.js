console.log("Végrehajtja ezt?!");
//const urlapButtons = document.querySelectorAll(".urlap [id]button:not(.kuld):not(.aktuel):not(.kuldG)");
const urlapButtons = document.querySelectorAll("[id]:not([id=''])");
doMindenhezHozzaad(document.querySelectorAll(".urlap .datumedit"), latszat);
doMindenhezHozzaad(document.querySelectorAll(".urlap .kirakat"), gere);


/*for(const button of urlapButtons){
    button.style.setProperty("background-color", "red");
}*/

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

function getOsszefuz(){
    
}

function latszat(e){
    const urlapKod = e.target.id.split("_")[0]+"_";
    const scene1 = getIDButtons(urlapKod+"ujvacsoraScene1");
    const scene2 = getIDButtons(urlapKod+"ujvacsoraScene2");
    scene1?.classList.add("d-none");
    scene2?.classList.remove("d-none");
}

function gere(e){
    const urlapKod = e.target.id.split("_")[0]+"_";
    const uvSC1 = getIDButtons(urlapKod+"ujvacsoraScene0");
    const kirakat = getIDButtons(urlapKod+"kirakat")
    uvSC1?.classList.remove("d-none");
    kirakat?.classList.add("d-none")
}

function doMindenhezHozzaad(mikhez, milyenfuggvenyt, eventtipus="click"){
    for(const elem of mikhez){
        elem.addEventListener(eventtipus, function(e){
            milyenfuggvenyt(e);
        })
    }
}

document.addEventListener("urlapSmetafora", function(e){
    console.log("Ez sikerült!");
    document.getElementById("k1023").style.setProperty("display", "inherit");
});

/*document.addEventListener("urlapAhozzaadasutan", function(e){
    
});*/

/*let ev = document.createEvent("EA");
ev*/