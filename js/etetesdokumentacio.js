import { eventTarget, exportedMethods } from "./globaldata.js";

console.log("Végrehajtja ezt?!");
exportedMethods.setUrlapButtons(
    document.querySelectorAll("[id]:not([id=''])")
); // exportedMethods.getIDButtons-hoz fontos meghhívni

// Eventek
exportedMethods.doMindenhezHozzaad(
    document.querySelectorAll(".urlap .datumedit"),
    [actionableJelenetValtas], "etetesDokumentacioDatumEdit", [2]
);
exportedMethods.doMindenhezHozzaad(
    document.querySelectorAll(".urlap .kirakat"),
    [actionableJelenetValtas],
    "etetesDokumentacioKirakat", [1]
);

eventTarget.addEventListener("actionretnFrissul", function(){

});

eventTarget.addEventListener("urlapShozzaadasutan", function(e){
    const urlap = exportedMethods.getIDButtons(e.detail.urlapID);
    const film = urlap.closest(".film");
    exportedMethods.doJelenetValtas(film, 1, "diszlet");
  /*  actionableJelenetValtas(e, 0);*/
});

eventTarget.addEventListener("urlapSmetafora", function(e){
    console.log("Ez sikerült!");
   // document.getElementById("k1023").style.setProperty("display", "inherit");
});

function actionableJelenetValtas(e, hova, mit="scen"){
    //const urlapKod = getComputedStyle(e.target).getPropertyValue("--data-urlapid");
    //const filmKod = getComputedStyle(e.target).getPropertyValue("--filmID");
    const urlap = /*filmKod ? exportedMethods.getIDButtons(filmKod) :*/
            e.target.closest(".film");
    exportedMethods.doJelenetValtas(urlap, hova, mit);
}