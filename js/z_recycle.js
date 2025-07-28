// Eshetőség, ha nincs useDB
function routGSplit(fvalue=""){
    const routG = fvalue.split("/");
    let tr = "";
    for(const strE of routG){
        const strEs = strE.split("-");
        const strEs1 = /*strEs[1] ? strEs[1] :*/ "ca";
        tr += strE.startsWith("$") ?
        ((jsonValue[strEs1] && jsonValue[strEs1][strEs[0].replace("$", "")]) ||
        "null") +"/" : strE + "/";
    }
    return tr.substring(0, tr.length-1);
}

export const exportedRcyclMethods = {
    routGSplit: routGSplit,
};

/*
let dbDat =
	(retns[i].getAttribute("db-schemanames") || "")+ "@" +
	(retns[i].getAttribute("db-tablenames") || "")+ "@" +
	(retns[i].getAttribute("db-columnnames") || "")+ "@" +
	(retns[i].getAttribute("db-methodnames") || "")+ "@" +
	(retns[i].getAttribute("db-aliases") || "")+ "\x01" +
	(retns[i].getAttribute("db-query") || "")
;
*/

// event.js
/*async function doTAddingToSite(){
    let Stemplate = "";
    for(const lAxios of content.getElementsByClassName("lAxios")){
        for(const jll of lAxios.getElementsByTagName("li")){
            Stemplate += await exportedMethods.simpleREST(
                "templates/" + jll.textContent + "?nocache="+new Date().getTime()
            );
        }
    }
    templates[0].innerHTML = Stemplate;
}*/