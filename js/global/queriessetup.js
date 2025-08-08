import { formQs, qs } from "./queries.js";
import { exportedMethods } from "../globaldata.js"

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

export const staticQueryWithJSONResults = [

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
            fr[i] = jsonValue["ca"][fr[i].replace("$", "")];
        }
        dbFro += fr[i];
    }
    return dbFro;
}

async function doQueryUpdates(){
    queryResults.length = 0;
    for(let i = 0; i<qs.length; i++){
        queryResults.push(
            await exportedMethods.exampleREST("callquery", "POST", qs[i])
        );
    }
    console.log("Szeretem én ezt?: ");
    console.log(queryResults);
}

export const exportedQMethods = {
    qTextReform: qTextReform,
    doQueryUpdates: doQueryUpdates,
}