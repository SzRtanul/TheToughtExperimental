import { exactTime } from "../time.js";
import { addEvents } from "../../index.js";
import { exportedMethods } from "../globaldata.js";
import { queryResults, endpointResults, staticQueryWithJSONResults, endpointWithDateResults } from "./queriessetup.js";
import { retnCombinations } from "./retntemplates.js";
import { templates } from "./rowtemplates.js";

const whd = [
    queryResults, 
    endpointResults, 
    staticQueryWithJSONResults,
    endpointWithDateResults
];

const columnSep = ":::";

export const exportedRetnMethods = {
    doFrissit: doFrissit,
    doUjratolt: doUjratolt,
    whataf: whataf
}

function doFrissit(retns){
//console.log("Sört akarok!")
//console.log(retns.length)
    let result = "";
    for(let i = retns.length-1; i > -1 ; i--){ // "al;ko;szil|||1:::ajkarepo:::ala:::;;;1:::uqherguear:::ame;;;2:::argergoekq:::NN:::;;;1:::aareerear:::RR"
//console.log("Sört akarok!: " + i);
        let elozo = window.performance.now();
       // retns[i].innerHTML = ''; //
        const cja=retns[i].getAttribute("cjust");
//console.log("cjust: " + cja);
        result = doUjratolt(cja);
//console.log(result);
        retns[i].innerHTML = result.substring(1, result.length);
    }
}

function doUjratolt(cjust="", responseInput=0){
    let res = [];
    const two = retnCombinations[cjust]?.split("|||");
console.log("GEVI");
console.log()
    if(!two || two.length<2){
console.log("GEVIS");
        return;
    }
console.log("GEVI");
    const metnames = two[0].split(":");
    const templeBefs = [];
    const templeUsq = [];
    const befRowsNum = [];
    let templeLast = -1;
    let yeP = 0;
    const ye = two[1]?.split("---");
    const yelen = ye.length-1;
////console.log("bemegy?");
    for(const cja of ye){
////console.log("Igen")
        if(cja.length > 10){
//console.log("Igen.")
//console.log(cja)
            const methods = [];
            for(let i = 0; i < 8; i+=2){
                const metnum = Number("0x"+cja.substring(i,i+2));
                methods.push(!isNaN(metnum) && metnum != 255 ? templates[metnames[metnum]] : 0);
            }
//console.log(cja.substring(9, 10) + ":" + cja.substring(10, 12));
            const reqType = Number("0x"+ cja.substring(9, 10));
            const reqNum = Number("0x"+ cja.substring(10, 12));
////console.log(reqType + ":" + reqNum)
            if(!isNaN(reqType) && !isNaN(reqNum) && reqType < whd.length && reqNum<whd[reqType].length){
////console.log("Oh")
                templeUsq.push(
                    yeP==yelen && responseInput != 0 ? responseInput : whd[reqType][reqNum]
                );
                templeLast++;
            }
            else{
////console.log("Oh")
                break;
            }
////console.log("Igen: " + cja.length)
            if(cja.length>13){
                const materia = cja.substring(12, cja.length).split(":_"); // retnrowType selecter(választó)
                let mal = "";
                const resultBef = [];
                const resultQ = [];
                const befIlter = [];
                let anex = 0;
                const resrownums = [];
                const resultsBefRowsNums = [];
                const whereBef = [];
                let befsNum = 0;
                let mata = 0;
                for(const len of materia){
////console.log("len: " + len)
                    const lklen = len.split(":");
                    let lastResBefIndex = whereBef.push((resultBef.length + lklen.length)) -1;
////console.log("WhereBef: ")
////console.log(whereBef)
                    for(const lk of lklen){ // To retnrow
////console.log("LK: " + lk);
                        const matre = lk.split(/[-,=]+/).filter(Boolean); // filter parameters with retnrow
////console.log(matre)
                        let hirF = Number(matre[0]);
                        console.log("AMRE: " + matre.length +": " + matre[0])
                        if(matre && matre.length > 0 && !isNaN(hirF) && hirF < yeP){
                            resultBef.push(templeBefs[hirF]);
                            resultQ.push(templeUsq[hirF]);
//console.log("Cloth");
////console.log("FEEEEELTOOOOOLT!!!\n");
//console.log(resultBef);
                            resultsBefRowsNums.push(befRowsNum[hirF]);
                        }
                        else{
//console.log("Ahn!");
                            whereBef[lastResBefIndex]--; // Utolsó hiba: --2025. 08. 08. 15:46--
                        }
////console.log("MATAAAA:"+ mata);
                        if(mata < 1){
                            befIlter.push(matre.length);
////console.log("FELTÖLTÉÉÉÉÉÉÉS!");
                            for(let mat = 1; mat < matre.length; mat++){
////console.log("BRUHHHHH");
                                befIlter.push(isNaN(matre[mat]) ? matre[mat] : Number(matre[mat]));
                            }
                        }
                        befsNum++;
                    }
                    mata++;
                }
////console.log("Halál:W");
////console.log(whereBef);
                templeBefs.push(whataf(
                    templeUsq[templeLast], methods, 
                    resrownums, resultBef, resultsBefRowsNums, resultQ, 
                    befIlter, whereBef
                ));
                befRowsNum.push(resrownums);
            }
            else{
////console.log("doUjrtolt->els");
                const resrownums = [];
//console.log("FKKKKKK:");
//console.log(templeUsq[templeLast]),
                templeBefs.push(whataf(
                    templeUsq[templeLast], methods, resrownums
                ));
                befRowsNum.push(resrownums);
            }
        }
        yeP++;
    }
  /*  console.log("BefReCreat: ");
    let szen = "";
    for(let i = 0; i<befRowsNum[0].length; i++){
        szen += "\n"+i+". "+ templeBefs[0].substring(befRowsNum[0][i], befRowsNum[0][i+1]);
    }
    console.log(szen);*/
////console.log("Ki is jön.");
    //whataf(retn, responseInput, responseInputType);
    // await doFrissit();
    // addEvents(retn);
////console.log(templeLast +":"+templeBefs.length);

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
    wherebef=[]
){
//console.log("Rese: ");
//console.log(befretns);
//console.log("Rese.");
//console.log("WHATF befIlter: ")
//console.log(befFilters)
//console.log("WHATF WhereBef: ")
//console.log(wherebef)
console.log("WHATF BefRowsNums: ")
console.log(befrownums)
let fullText = "F";
    const resHaveThead = responseInput.startsWith("T") ? 1 : 0;
    const leptek = responseInput.charCodeAt(1);
    const resPlit = replaceLast(responseInput.substring(2, responseInput.length), ":::\n", "").split(":::");
//console.log("Lépték: " + leptek);
    //const adatsorrend = retn.getAttribute("adatsorrend")?.split(";");
    const error = responseInput.startsWith("err:") ? 1 : 0;
    outResBefNums.push(1);
    // Fejléckiírás
    const eleje = wherebef[0];
//console.log("Eleje: " + eleje)
    if(resHaveThead && retnrows[1] != 0){
        fullText = "T"+retnrows[1](...befretns.slice(eleje, wherebef[1]), ...resPlit.slice(0, leptek));
        outResBefNums.push(fullText.length); // ALAMÉAEA
    }
console.log(befFilters)
    if(error == 0 && retnrows[0] != 0){
////console.log("KAKAÓÓÓÓ!");
        for(let row = resHaveThead, i = resHaveThead * leptek; i < resPlit.length-1; row++, i+=leptek){
////console.log("ROW")
//console.log("KAKAÓÓÓÓ!");
            const resultsBef = [];
            let qruak=1;
//console.log("Eeeee: "+qruak+":"+eleje)
            for(let usqT = 0; usqT < eleje; usqT++){ // befs
////console.log("BEF: " + usqT)
                const memqruak = qruak;
                console.log("KMeMQruaK: " + memqruak)
//console.log("OTL");
//console.log(befFilters)
//console.log("OCL");
                //qruak = memqruak; //
//console.log(befFilters.length+":"+befFilters[qruak-1]+":"+qruak)
                const qruakLiminal = befFilters[qruak-1];  // FONTOS!
                if(befFilters.length > qruak-1 && befFilters[qruak-1] > 1){
////console.log(befrownums[usqT])
////console.log("IFBEF");
                    const actualBef = befretns[usqT];
                    const resLast = resultsBef.push(
                        actualBef.startsWith("T") ? actualBef.substring(2, befrownums[usqT][1]) : ""
                    )-1;
//console.log("BefUqs: "+befusqs[usqT])
//console.log(usqT)
                    const usLeptek = befusqs[usqT].charCodeAt(1);
                    const fra = befusqs[usqT].split(columnSep);
                    const qruakArray = [];
//console.log(usLeptek+":"+fra.length+":"+befusqs[usqT].charCodeAt(1));
//console.log(befusqs[usqT])
                    let memoryRef = false;
                    const usqThaveHead = befusqs[usqT].startsWith("T") ? 1 : 0;
                    let usqTrow=0;
                    let usqTitem=0;
                    for(
                       usqTrow = 0, usqTitem = usqThaveHead * usLeptek;
                       usqTitem < fra.length-1;
                       usqTrow++, usqTitem+=usLeptek
                    ){
////console.log("BEFROW: " + usqTrow)
                        let ortami = true;
//console.log("memQR: " + memqruak + "\nqlim: " + Number(qruakLiminal));
                        for(qruak = memqruak; ortami && qruak < memqruak+qruakLiminal-1; qruak += 2){ // befFilters
                            ortami = resPlit[i+befFilters[qruak]] === 
                                fra[usqTitem + befFilters[qruak+1]];
console.log(qruak +". BEFIF: "+ortami+"---"+resPlit[i+befFilters[qruak]]+"---"+fra[usqTitem + befFilters[qruak]])
//console.log("usqTrow: " + resPlit[i+befFilters[qruak]] +":"+fra[usqTrow + befFilters[qruak]])
                        }
                        if(ortami){
console.log("OLOME: " + actualBef.substring(befrownums[usqT][usqTrow-1], befrownums[usqT][usqTrow]));
                        }
                        if(ortami != memoryRef){
console.log("UsqTRow: " + usqT+":"+usqTrow+":"+befrownums[usqT][usqTrow]);
//console.log("Ortami: "+ortami+". memom: " + memoryRef)
//console.log("OO: " +usqT+":"+usqTrow);
                            qruakArray.push(usqTrow);
                            //Szétválasztás, csoportosítás
                            memoryRef = ortami;
                        }
console.log(memoryRef)
                    }
                    if(usqTrow>0 && qruakArray.length & 1 == 1) 
                        qruakArray.push(usqTrow)
                    ;
//console.log("KAKAÓÓÓÓ!");
                    // betáplálás
//console.log(qruakArray)
//console.log(qruakArray.length)
                 /*   let szen = "";
                    for(let qruakResult = 0; qruakResult < qruakArray.length-1; qruakResult+=2){
//console.log(qruakArray[qruakResult]+":"+qruakArray[qruakResult + 1]);
//console.log("ResLast: "+resLast)
                        szen += actualBef.slice(
                            qruakArray[qruakResult], qruakArray[qruakResult + 1]
                        );
                    }*/
console.log(qruakArray)
                    let szen = "";
                    for(let qere = 0; qere<qruakArray.length; qere+=2){
console.log("Qqere: " + qruakArray[qere] + "\nQqere2: " + qruakArray[qere+1])
                        szen += "\n"+qere+". "+ actualBef.substring(
                            befrownums[usqT][qruakArray[qere]], 
                            befrownums[usqT][qruakArray[qere+1]]
                        );
                    }
console.log("Szen")
console.log(szen);
                    resultsBef[resLast] += szen;


                }
                else{
////console.log("ELSE")
//console.log("KAKAÓÓÓÓ!--");
                    resultsBef.push(befretns[usqT]);
                    qruak++;
//console.log("OHEEEEEE: " + usqT);
//console.log(resultsBef);
                }
            }
//console.log("rYEEEEEY");
//console.log(resultsBef)
            fullText += retnrows[0](...resultsBef, ...resPlit.slice(i, i + leptek));
           //fullText += retnrows[0](...resultsBef, ...resPlit.slice(i, i + leptek)); // 2x
            outResBefNums.push(fullText.length)
//console.log("FliTex: " + fullText)
//console.log("KAKAÓÓÓÓ!: " + i);
        }
        // tfoot
        if(retnrows[2]!=0) {
            console.log("ARMA: " + wherebef[1] +":"+wherebef[2]);
            fullText += wherebef.length > 2 ? retnrows[2](
                ...befretns.slice(wherebef[1], wherebef[2])
            ) : retnrows[2]();
        }
    }
    else if(retnrows[3] != 0){
        for(const textrow of resPlit){
            fullText += retnrows[3](...resPlit.split(columnSep));
            outResBefNums.push(fullText.length)
        }
    }
//console.log("FullText: " + fullText)
    return fullText;
}