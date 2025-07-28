import { exactTime } from "../time.js";
import { addEvents } from "../../index.js";
import { exportedMethods } from "../globaldata.js";
import { queryResults, endpointResults, staticQueryWithJSONResults } from "./queriessetup.js";
import { templates, retnCombinations } from "./retntemplates.js";

const whd = [
    queryResults, 
    endpointResults, 
    staticQueryWithJSONResults
];

const columnSep = ":::";



export const exportedRetnMethods = {
    doFrissit: doFrissit,
    doUjratolt: doUjratolt,
    whataf: whataf
}

function doFrissit(retns){
    /**/
    console.log("Sört akarok!")
    console.log(retns.length)
    let result = "";
    for(let i = retns.length-1; i > -1 ; i--){// "al;ko;szil|||1:::ajkarepo:::ala:::;;;1:::uqherguear:::ame;;;2:::argergoekq:::NN:::;;;1:::aareerear:::RR"
        console.log("Sört akarok!: " + i)
        let elozo = window.performance.now();
        retns[i].innerHTML = '';
        result = doUjratolt(retns[i].getAttribute("cjust"));
        console.log(result);
        retns[i].innerHTML = result;
    }
}

function doUjratolt(cjust="", responseInput=0){
    let res = [];
    const two = retnCombinations[cjust].split("|||")
    const metnames = two[0]?.split(":");
    const templeBefs = [];
    const templeUsq = [];
    const befRowsNum = [];
    let templeLast = -1;

    let yeP = 0;
    const ye = two[1]?.split("---");
    const yelen = ye.length-1;
    console.log("bemegy?");
    for(const cja of ye){
        console.log("Igen")
        if(cja.length > 10){
            console.log("Igen")
            const methods = [];
            for(let i = 0; i < 8; i+=2){
                const metnum = Number("0x"+cja.substring(i,i+2));
                methods.push(!isNaN(metnum) && metnum != 255 ? templates[metnames[metnum]] : 0);
            }
            console.log(cja.substring(9, 10) + ":" + cja.substring(10, 12));
            const reqType = Number("0x"+ cja.substring(9, 10));
            const reqNum = Number("0x"+ cja.substring(10, 12));
            console.log(reqType + ":" + reqNum)
            if(!isNaN(reqType) && !isNaN(reqNum) && reqType < whd.length && reqNum<whd[reqType].length){
                console.log("Oh")
                templeUsq.push(
                    yeP==yelen && responseInput != 0 ? responseInput : whd[reqType][reqNum]
                );
                templeLast++;
            }
            else{
                console.log("Oh")
                break;
            }
            console.log("Igen")
            if(cja.length>13){
                const materia = cja.substring(12, cja.length).split(":-");
                let mal = "";
                const resultBef = [];
                const resultQ = [];
                const befIlter = [];
                const whereBef = [];
                const resrownums = [];
                const resultsBefRowsNums = [];

                let befsNum = 0;
                let mata = 0;
                for(const len of materia){
                    for(const lk of len.split(":")){
                        const matre = lk.split("-|,|=")
                        let hirF = Number(matre[0]);
                        if(!isNaN(hirF) && hirF < mata){
                            resultBef.push(templates[hirF])
                            resultQ.push(templeUsq[hirF]);
                            resultsBefRowsNums.push(befRowsNum[hirF])
                        }
                        if(mata < 1){
                            befIlter.push(matre.length-1)
                            for(let mat = 1; mat < matre.length; mat++){
                                befIlter.push(isNaN(matre[mat]) ? matre[mat] : Number(matre[mat]));
                            }
                        }
                        befsNum++;
                    }
                    whereBef.push(befsNum)
                    mata++;
                }
                templeBefs.push(whataf(
                    templeUsq[templeLast], methods, 
                    resultBef, befRowsNum, resultQ, 
                    befIlter, whereBef, resrownums
                ));
                befRowsNum.push(resrownums);
            }
            else{
                console.log("doUjrtolt->els")
                const resrownums = [];
                templeBefs.push(whataf(
                    templeUsq[templeLast], methods, resrownums
                ));
                befRowsNum.push(resrownums);
            }
        }
        yeP++;
    }
    console.log("Ki is jön.")
    //whataf(retn, responseInput, responseInputType);
    // await doFrissit();
    // addEvents(retn);
    console.log(templeLast +":"+templeBefs.length)

    return templeLast > -1 ? templeBefs[templeLast] : "";
}

function replaceLast(str, search, replace) {
    const pos = str.lastIndexOf(search);
    if (pos === -1) return str;
    return str.slice(0, pos) + replace + str.slice(pos + search.length);
}


function whataf(
    responseInput = "",
    retnrows = [0, 0, 0, 0], 
    outResBefNums = [],
    befretns = [],
    befrownums=[],
    befusqs = [],
    befFilters=[],
    whereBef = [], // row, thead, tfoot, error
){
    const resHaveThead = responseInput.startsWith("T") ? 1 : 0;
    let fullText = "F";
    const resPlit = replaceLast(responseInput, ":::;;;\n", "").split(":::");
    const leptek = responseInput.charCodeAt(1);
    console.log("Lépték: " + leptek);
    //const adatsorrend = retn.getAttribute("adatsorrend")?.split(";");
    const error = responseInput.startsWith("err:") ? 1 : 0;

    // Fejléckiírás
    const eleje = befretns[0];
    if(resHaveThead && retnrows[1] != 0){
        fullText = "T"+retnrows[1](...befretns.slice(eleje, befretns[eleje]), ...resPlit.slice(0, leptek));
    }
    
    if(error == 0 && retnrows[0] != 0){
        console.log("KAKAÓÓÓÓ!");
        let memoryRef = false;
        for(let i = resHaveThead * leptek; i < resPlit.length; i+=leptek){
            console.log("KAKAÓÓÓÓ!");
            const resultsBef = [];
            let qruak=1;
            for(let usqT = 0; usqT < eleje; usqT++){ // befs
                console.log("KAKAÓÓÓÓ!");
                if(befFilters[qruak-1]-qruak != 1){
                    const actualBef = befretns[i];
                    const resLast = resultsBef.push(
                        actualBef.startsWith("T") ? actualBef.substring(1, befrownums[i]) : ""
                    );
                    const usLeptek = befusqs[i].charCodeAt(1);
                    const fra = befusqs[i].split(":::");
                    const qruakArray = [];
                    for(let usqTrow = befusqs[usqT].startsWith("T") ? usLeptek : 0; fra.length; usqTrow+=usLeptek){
                        let ortami = true;
                        memoryRef = false;
                        const qruakLiminal = befFilters[qruak-1];
                        for(; ortami && qruak < qruakLiminal; qruak += 2){ // befFilters
                            ortami = resPlit[i+befFilters[qruak]] === 
                                befusqs[usqTrow + befFilters[qruak+1]];
                        }
                        if(ortami != memoryRef){
                            qruakArray.push(befrownums[usqT][usqTrow]);
                            memoryRef = ortami;
                        }
                        qruak = qruakLiminal+1;
                    }
                    console.log("KAKAÓÓÓÓ!");
                    // betáplálás
                    for(let qruakResult = 0; qruakResult < qruakArray.length; i+=2){
                        console.log("KAKAÓÓÓÓ!");
                        resultsBef[resLast] += actualBef.slice(
                            qruakArray[qruakResult], qruakArray[qruakResult + 1]
                        );
                    }
                }
                else{
                    console.log("KAKAÓÓÓÓ!");
                    resultsBef.push(befretns[i]);
                }
            }
            fullText += retnrows[0](...resultsBef, ...resPlit.slice(i, i + leptek))
           // console.log("FliTex: " + fullText)
            console.log("KAKAÓÓÓÓ!: " + i);
        }
        // tfoot
        if(retnrows[2]!=0) fullText += retnrows[2]();
    }
    else if(retnrows[3] != 0){
        for(const textrow of resPlit){
            fullText += retnrows[3](...resPlit.split(columnSep));
        }
    }
    // console.log("FullText: " + fullText)
    return fullText;
}