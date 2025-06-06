import { addEvents } from "../../index.js";
import { exportedMethods } from "../globaldata.js";


export const exportedRetnMethods = {
    doAddEventsToARetn: doAddEventsToARetn,
    doFrissit: doFrissit,
    doUjratolt: doUjratolt,
    whataf: whataf
}

async function doFrissit(retns){
    /**/
    
    for(let i = retns.length-1; i > -1 ; i--){// "al;ko;szil|||1:::ajkarepo:::ala:::;;;1:::uqherguear:::ame;;;2:::argergoekq:::NN:::;;;1:::aareerear:::RR"
        let dbDat = {
            schemanames: retns[i].getAttribute("db-schemanames") || "",
            tablenames: retns[i].getAttribute("db-tablenames") || "",
            columnnames: retns[i].getAttribute("db-columnnames") || "",
            methodnames: retns[i].getAttribute("db-methodnames") || "",
            aliases: retns[i].getAttribute("db-aliases") || "",
            query: retns[i].getAttribute("db-query") || "",
        };
        const jsonResponse = await exportedMethods.exampleREST(retns[i].getAttribute("value"), "post", dbDat, retns[i].getAttribute("db-fieldjson"));
        whataf(retns[i], jsonResponse.replace("res:", ""), retns[i].getAttribute("data-responsetype") || "text", "Frissit");
    }
}

async function doUjratolt(retn, responseInput="", responseInputType="text"){
    whataf(retn, responseInput, responseInputType);
    for(const retnmain of retn.querySelectorAll(":scope>.immler .retnmain")){
        retnmain.innerHTML = '';
    }
    addEvents(retn);
}

function replaceLast(str, search, replace) {
    const pos = str.lastIndexOf(search);
    if (pos === -1) return str;
    return str.slice(0, pos) + replace + str.slice(pos + search.length);
}


function whataf(retn, responseInput="", responseInputType="text"){
    let fullText = "";
    const retnID = retn.getAttribute("retnID");
    // const mezNames = retn.getAttribute("data-adatsorrend");
    //const retnheaderD = ;
    const resPlit = replaceLast(responseInput, ":::;;;\n", "").split(":::;;;\n");
    const adatsorrend = retn.getAttribute("adatsorrend")?.split(";");
    let retnRIndex = resPlit[0].startsWith("-;") ? 1 : 0;
    let lastRetnRIndex = retnRIndex;
    if(retnRIndex) resPlit[0] = resPlit[0].replace("-;", "");
    
    const retnrowD = [
        retn.querySelector(":scope>.immler .retnrow:not(.retn.our *)")?.cloneNode(true),
        retn.querySelector(":scope>.immler>.retnheader")?.cloneNode(true),
        retn.querySelector(":scope>.immler>.retnerror")?.cloneNode(true),
        retn.querySelector(":scope>.immler>.retnfooter")?.cloneNode(true),
    ];

    // dtag='*'
    for(const dtagstar of retnrowD){
        if (!dtagstar) continue; 
        let dshtext = "";
        let dshtlen = 0;
        dshtlen = resPlit[0].split(":::").length;
        
        for(const dtas of dtagstar.querySelectorAll("[dtag='*']:not(.retn.our *)")){
            for(let i = 0; i < dshtlen; i++){
                dtas.setAttribute("dtag", i+"");
                dshtext += dtas.outerHTML;
            }
            dtas.outerHTML = dshtext;
        }
    }

    if(!retnRIndex && retnrowD[1]){
        fullText += retnrowD[1].outerHTML + (retnrowD[1].getAttribute("safter") || "");
        console.log("Ehn: " + retnrowD[1].outerHTML)
    }

    if(retnrowD[0]){
        for(const retnaa of retnrowD[0].querySelectorAll(".retn")){
            for(const immler of retnaa.querySelectorAll(".immler")){
                immler.remove();
            }
        }
            
        for(const textRow of resPlit){ // rekordokra bontás
            const retnrowDE = retnrowD[retnRIndex]?.cloneNode(true); // Sablon sor clone-ozása        
            // repont
            if(!retnRIndex || (retnRIndex && retnrowDE)){
                const strA = textRow.split(":::"); // mezőkre bontás
                // Eltárolt JSON létrehozása .retn funkciókhoz
                const retnRowJSON = {};
                const adn = typeof adatsorrend === "object";
                if(adn){
                    for(let i = 0; i < strA.length; i++){
                        retnRowJSON[adatsorrend[i] ? adatsorrend[i] : "mez_" + i] = strA[i];
                    }
                }
                else{
                    for(let i = 0; i < strA.length; i++){
                        retnRowJSON["mez_" + i] = strA[i];
                    }
                }
                retnrowDE.dataset.fiel = JSON.stringify(retnRowJSON);
                // .retn mezők beállítása
                const rDEdtag = retnrowDE.getAttribute("dtag");
                if(retnrowDE.getAttribute("dtag")) 
                    retnrowDE.innerHTML = rDEdtag && !isNaN(rDEdtag) ? strA[Number(rDEdtag)] : "nnull";
                for(const mez of retnrowDE.querySelectorAll("[dtag]:not([dtag='']):not([dtag='*']):not(.retn.our *)")){
                    const mezContent = mez.getAttribute("dtag");
                    mez.innerHTML = mezContent && !isNaN(mezContent) ? strA[Number(mezContent)]: "nnull";
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
            retnRIndex = 0;
            // retn jelölések törlése a 
        }
        if(retnrowD[3]){
            fullText += (retnrowD[3].getAttribute("sbefore") || "") +
                    retnrowD[3].outerHTML + (retnrowD[3].getAttribute("safter") || "");
        }
       //console\.log(retnrowD.outerHTML)
    }
    
    for(const retnmain of retn.querySelectorAll(":scope > .retnmain")){
        retnmain.innerHTML = fullText;
        console.log("FAAA: " + fullText)
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