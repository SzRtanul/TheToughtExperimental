import { formQs, qs } from "./queries.js";
import { exportedMethods } from "../globaldata.js"
import { endpoints, endpointswithdate } from "./endpoints.js";
import { staticQueryWithJSONs } from "./retntemplates.js"

export const queryDatas = {
    
};

const qsJSON = [

];

const rDate = [

];

export const queryResults = [

];

export const endpointResults = [

];

export const staticQueryWithJSONResults = [ // formQ

];

export const endpointWithDateResults = [

];

//FormQ selection
let fQnum = 0;
const numOfFormQ = [

];

const formQJSON = [

];

const formQresults = [

];

export function addOrEditFormQ(numOfQ, qJSON={}, formName="", response=""){
    const EusQ = queryDatas[formName];
    const fbol = formName.length > 0 && typeof EusQ != 'undefined';
    const usQ = fbol ? EusQ : formQresults.push(response) - 1;
    if(fbol){
        const ffbol = numOfFormQ.length - 1 < usQ;
        for(let i = numOfFormQ.length; ffbol && i < usQ+5; i++){
            numOfFormQ.push(0);
            formQJSON.push({});
        }
    }
    else{
        formQresults[usQ] = response;
    }
    numOfFormQ[usQ] = numOfQ;
    formQJSON[usQ] = qJSON;
    return usQ;
}

function qTextReform(qtext="", jsonValue){
    let dbFro = "";
    const fr = qtext.split('\\-');
    for(let i = 0; i < fr.length; i++){
        if(fr[i].startsWith('$')){
            fr[i] = jsonValue[fr[i].replace("$", "")];
        }
        dbFro += fr[i];
    }
    return dbFro;
}

async function QSBeWrite(i, number){
    queryResults[number] = await exportedMethods.exampleREST("callquery", "POST", qs[i]);
}

async function QStaticBeWrite(i, quer, number){
    staticQueryWithJSONResults[number] = 
        await exportedMethods.exampleREST(
            "callquery", "POST", 
            qTextReform(formQs[quer], 
            staticQueryWithJSONs[i+1]),
            staticQueryWithJSONs[i+1]
        );
}

async function QEnds(array, ltext, method, number){
    array[number] = await exportedMethods.exampleREST(ltext + "?alk=" + Number(Math.random() * 5000), method, "") || "";
}

async function doQueryUpdates(){
    queryResults.length = 0;
    endpointResults.length = 0;
    staticQueryWithJSONResults.length = 0;
    endpointWithDateResults.length = 0;

    let promises = [];
    
       /* for(let i = 0; i < endpoints.length; i++){
    
        }*/
    
    for(let i = 0; i<qs.length; i++){
        promises.push(QSBeWrite(i, queryResults.push("")-1));
    }

    for(let i = 0; i < staticQueryWithJSONs.length+1; i+=2){
        const quer = Number(staticQueryWithJSONs[i]);
//console.log(staticQueryWithJSONs[i+1])
        if(!isNaN(quer) && quer > -1){
            promises.push(QStaticBeWrite(i, quer, staticQueryWithJSONResults.push("")-1));
        }
        else{
            staticQueryWithJSONResults.push("");
        }
    }
    let promises2 = [];
    
    let linmeth = "";
    for(let i = 0; i < endpointswithdate.length; i++){
        linmeth = endpointswithdate[i].split(":");
        const foszlam = endpointWithDateResults.push("")-1;
        promises.push(QEnds(endpointWithDateResults, linmeth[0]+"/0", linmeth[1] || "POST", foszlam))
        // console.log(endpointswithdate[i]);
        console.log("YESSSSD")
        // 
    }
    
    console.log("Szeretem én ezt?: ");
    console.log(staticQueryWithJSONResults);
    await Promise.all(promises);
    console.log(endpointWithDateResults[0]);
}

function hasRow(res=""){
    return false;
}

export const exportedQMethods = {
    qTextReform: qTextReform,
    doQueryUpdates: doQueryUpdates,
    hasRow : hasRow
}