import { addEvents } from "../../index.js";
import { exportedMethods } from "../globaldata.js";

export const exportedRetnMethods = {
    doAddEventsToARetn: doAddEventsToARetn,
    doFrissit: doFrissit,
    doUjratolt: doUjratolt,
    whataf: whataf
}

function doFrissit(retns){
    /**/
    for(let i = retns.length-1; i > -1 ; i--){
        const adatsorrend = retns[i].getAttribute("data-adatsorrend") || "*";
        const jsonResponse = "al;ko;szil|||1:::ajkarepo:::ala:::;;;1:::uqherguear:::ame;;;2:::argergoekq:::NN:::;;;1:::aareerear:::RR"//await exampleREST(retn.getAttribute("value"), "get", {/*visszakért oszlopnevek*/});
        whataf(retns[i], jsonResponse, retns[i].getAttribute("data-responsetype") || "text", "Frissit");
    }
}

function doUjratolt(retn, responseInput="", responseInputType="text"){
    doFrissit(retn.querySelectorAll(":scope>.immler>.retnrow .retn"), "LER");
    whataf(retn, responseInput, responseInputType);
    for(const retnmain of retn.querySelectorAll(":scope>.immler .retnmain")){
        retnmain.innerHTML = '';
    }
    addEvents(retn);
}

function whataf(retn, responseInput="", responseInputType="text"){
    let fullText = "";
    const retnID = retn.getAttribute("retnID");
    // const mezNames = retn.getAttribute("data-adatsorrend");
    const retnheaderD = retn.querySelector(":scope>.immler>.retnheader")?.cloneNode(true);
    const resPlit = responseInput.split(";;;");
    const r2 = resPlit[0].split("|||");
    const adatsorrend = r2 && r2.length > 1 ? r2[0].split(";") : [];
    if(r2 && r2.length>1) resPlit[0] = r2[1]; 

    const retnrowD = retn.querySelector(":scope>.immler>.retnrow")?.cloneNode(true);
    if(retnheaderD){
        if(adatsorrend){
            retnheaderD.value="-1";
            for(const mez of retnheaderD.querySelectorAll(".mez")){
                const mezContent = mez.getAttribute("dtag");    
                mez.innerHTML = mezContent && !isNaN(mezContent) ? adatsorrend[mezContent] : "null";
            }
            fullText += retnheaderD.outerHTML;
        }
    }
    
    if(retnrowD){
        for(const retnaa of retnrowD.querySelectorAll(".retn")){
            for(const immler of retnaa.querySelectorAll(".immler")){
                immler.remove();
            }
        }
      
        switch(responseInputType){
            case "text":
                for(const textRow of resPlit/*responseInput.split(";;;")*/){ // rekordokra bontás
                    const retnrowDE = retnrowD.cloneNode(true); // Sablon sor clone-ozása
                    const strA = textRow.split(":::"); // mezőkre bontás
                    // Eltárolt JSON létrehozása .retn funkciókhoz
                    const retnRowJSON = {};
                    for(let i = 0; i < adatsorrend.length; i++){
                        retnRowJSON[adatsorrend[i]] = strA[i];
                    }
                    retnrowDE.dataset.fiel = JSON.stringify(retnRowJSON);
                    // .retn mezők beállítása
                    for(const mez of retnrowDE.querySelectorAll("[dtag]:not([dtag='']):not(.retn.our *)")){
                        const mezContent = mez.getAttribute("dtag");
                        mez.innerHTML = mezContent && !isNaN(mezContent) ? strA[Number(mezContent)]: "null";
                    }
                    // No Comment...
                    for(const retnaa of retnrowDE.querySelectorAll(".retn:not(.our)")){
                        const sorszures = retnaa.getAttribute("data-clwhere")?.split(";") || ""; //client side
                        // cl check
                        for(let i = 0; i<sorszures.length; i++){
                            const r2 = sorszures[i].split("=");
                            if(!(sorszures.length > 0 && r2.length > 1 && retnRowJSON[r2[1]])){
                                sorszures.splice(i,1);
                                i--;
                            }
                        }
                        for(const retnrowAA of retnaa.querySelectorAll(":scope > .retnmain > .retnrow:not(.retn.our .retnrow)")){
                            const childData = JSON.parse(retnrowAA.dataset.fiel);
                            let both = true;
                            for(let i = 0; i < sorszures.length && both; i++){
                                const ye = sorszures[i].split("=");
                                both = childData[ye[0]] === retnRowJSON[ye[1]];
                            }
                            if(!both){ 
                                //   retnrowAA.style.setProperty("background-color", "red");
                                retnrowAA.remove();
                            }
                        }
                    }
                    //.retn láthatatlan értékek beállítása
                    const rDEntag = retnrowDE.getAttribute("ntag");
                    if(retnrowDE.getAttribute("ntag")) retnrowDE.value = rDEntag && !isNaN(rDEntag) ? strA[Number(rDEntag)] : "-1";
                    for(const tagValue of retnrowDE.querySelectorAll("[ntag]:not([ntag='']):not(.retn.our *)")){
                        const tagValueContent = tagValue.getAttribute("ntag");
                        //console\.log("EEEEEE: " + !isNaN(tagValueContent));
                        const tagVal = tagValueContent && !isNaN(tagValueContent) ? 
                                strA[Number(tagValueContent)] : "null";
                        tagValue.value = tagVal;
                        tagValue.setAttribute("value", tagVal);
                    }
                    for(const retnaa of retnrowDE.querySelectorAll(".retn")){
                        retnaa.classList.add("our");
                    }
                    fullText += retnrowDE.outerHTML;
                }
                // retn jelölések törlése a 
                
                break;
        // ELAVULT:
        /*   case "json":
                for(const jsonItem of responseInput){
                    const retnrowDE = retnrowD.cloneNode(true);
                    for(const mez of retnrowDE.getElementsByClassName("mez")){
                        mez.innerHTML = jsonItem[mez.textContent];
                    }
                    for(const tagValue of retnrowDE.querySelectorAll("[value]:not([value=''])")){
                        const tagValueContent = tagValue.getAttribute("value");
                        tagValue.value = jsonItem[tagValueContent];
                    }
                    fullText += retnrowDE.outerHTML;
                }
                break;*/
       }
      // //console\.log(retnrowD.outerHTML)
    }
    
    for(const retnmain of retn.querySelectorAll(":scope > .retnmain")){
        retnmain.innerHTML = fullText;
    }
}

function doAddEventsToARetn(retn, prot){
    const retnHeaders = retn.querySelectorAll(":scope > .retnmain > .retnheader");
    const retnRows = retn.querySelectorAll(":scope > .retnmain > .retnrow");
    const retnCA = retn.getAttribute("data-azon")?.split(";");
    const retnCE = retn.getAttribute("data-edit");
    
   /* */
    
    if(retnHeaders && retnHeaders[0]){
        exportedMethods.doMindenhezHozzaad(
            retnHeaders[0].querySelectorAll(".deleteall"+prot), 
            [doRetnKijelolteketTorol], 
            "indexRetnAllDelete", [[]]
        );
    }
    for(const retnRow of retnRows){
        exportedMethods.doMindenhezHozzaad(
            retnRow.querySelectorAll(".delete"+prot),
            [doRetnRowTorol],
            "indexRetnRowDelete",
            [[retnRow, ["korte"]]]
        );
        exportedMethods.doMindenhezHozzaad(
            retnRow.querySelectorAll(".edit"+prot),
            [doRetnRowSzerkeszt],
            "indexRetnRowEdit",
            [[retnRow, retnCA, retnCE]]
        );
        /*  
            exportedMethods.doMindenhezHozzaad(
                retnRow.querySelectorAll(".editsend"+prot),
                [doRetnRowKuldSzerkesztes],
                "indexRetnRowEditSend",
                [[]]
            );
            exportedMethods.doMindenhezHozzaad(
                retnRow.querySelectorAll(".canceledit"+prot),
                [doRetnRowMegseSzerkeszt],
                "indexRetnRowCancelEdit",
                [[]]
            );
        */
    } 
}

async function doRetnKijelolteketTorol(e){
    for(;;){
    }
}
async function doRetnRowTorol(e, retnrow, cAs = []){
    // azonosítási adatok összegyűjtése <0>
    const cAJSON = {};
    const fieldsJSON = JSON.parse(retnrow.dataset.fieldsJSON);
    for(const cA of cAs){
        cAJSON[cA] = fieldsJSON[cA]; 
    }
    //exampleREST("query", "delete", {}, cAJSON);
}
function doRetnRowSzerkeszt(e, retnrow, ca, ce){
    //Szerkeszthető mezők kijelölése
}
async function doRetnRowKuldSzerkesztes(e){
    //Szerkesztett mezők összegyűjtése
}
function doRetnRowMegseSzerkeszt(e){
    
}