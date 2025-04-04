import { eventTarget, exportedMethods } from "./globaldata.js";

console.log("Végrehajtja ezt?!");
exportedMethods.setUrlapButtons(document.querySelectorAll("[id]:not([id=''])"));
//const urlapButtons = document.querySelectorAll(".urlap [id]button:not(.kuld):not(.aktuel):not(.kuldG)");
exportedMethods.doMindenhezHozzaad(document.querySelectorAll(".urlap .datumedit"), [latszat], "etetesDokumentacioDatumEdit");
exportedMethods.doMindenhezHozzaad(document.querySelectorAll(".urlap .kirakat"), [gere], "etetesDokumentacioKirakat");


/*for(const button of urlapButtons){
    button.style.setProperty("background-color", "red");
}*/

//console.log("EEE: "+exportedMethods.getHanyszor());
/*if(exportedMethods.getHanyszor() == 0){ 
    console.log(exportVariables.hanyszor)
    console.log("VÉÉÉÉÉÉÉG")
    exportedMethods.doNovelHanyszor();
}*/

eventTarget.addEventListener("urlapShozzaadasutan", function(e){
    console.log(e.detail.urlapID)
    const urlap = exportedMethods.getIDButtons(e.detail.urlapID);
    console.log(urlap ? "not null" : "null")
    exportedMethods.doMindennelMegcsinál(
        urlap.getElementsByClassName("scene"), 
        exportedMethods.setAnythingOnElement, 
        [["setAttribute"], 
        ["ela", "testing"]]);
    exportedMethods.doMindennelMegcsinál(
        urlap.getElementsByClassName("scene"), 
        exportedMethods.setAnythingOnElement, 
        [["style", "setProperty"], 
        ["display", "none "]]);
});

eventTarget.addEventListener("urlapSmetafora", function(e){
    console.log("Ez sikerült!");
   // document.getElementById("k1023").style.setProperty("display", "inherit");
});

function latszat(e){
    const urlapKod = e.target.id.split("_")[0]+"_";
    const scene1 = exportedMethods.getIDButtons(urlapKod+"ujvacsoraScene1");
    const scene2 = exportedMethods.getIDButtons(urlapKod+"ujvacsoraScene2");
    scene1?.classList.add("d-none");
    scene2?.classList.remove("d-none");
}


function gere(e){
    const urlapKod = getComputedStyle(e.target).getPropertyValue("--data-urlapid") + "_";
    const uvSC1 = exportedMethods.getIDButtons(urlapKod+"ujvacsoraScene0");
    const kirakat = exportedMethods.getIDButtons(urlapKod+"kirakat")
    uvSC1?.classList.remove("d-none");
    kirakat?.classList.add("d-none")
    const urlap = exportedMethods.getIDButtons(urlapKod.substring(0, urlapKod.length-1));
    //exportedMethods.doMindennelMegcsinál(urlap.getElementsByClassName("aktuel"), vmi222);
}

function vmi222(elem){
    elem.classList.add("d-none");
    console.log("ELA");
}
