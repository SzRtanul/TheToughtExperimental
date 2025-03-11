let serverhost = "http://192.168.1.18:18080/";

let content = document.getElementsByTagName("main")[0];
let a = document.getElementsByClassName("contentlink");

console.log("MyRegex 2975hfuiHtE".match(/^\w+/)?.[0] || "")

callSite("mitettemma");
/*console.log(await exampleGET("exa"))
console.log(await examplePOST("exa/166"))
console.log(await exampleGET("exa"))*/
console.log(document.cookie);

document.addEventListener("DOMContentLoaded", function() {
    //console.log("Az oldal betöltődött!");
    
});

async function examplePOST(hova, mit){
    let response = await fetch(serverhost + hova, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: mit
    })
    return await response.text();
}

async function exampleGET(honnan){
    let response = await fetch(serverhost + honnan, {
        method: "GET",
        headers: {
            'Content-Type': 'application/text'
        },
    })
    return await response.text();
}

class REST{

}

for(let i = 0; i< a.length; i++){
    a[i].addEventListener("click", function(e){
        callSite(e.target.name);
    });
}

function callSite(melyik){
    fetch("content/" + melyik, { cache: "no-store" })
        .then(async (res) => {
            if (res.ok) {
                document.querySelectorAll(".guest").forEach(g => g.remove());
                let iHTML = await res.text();
                content.innerHTML = iHTML;
                
                for(const lCSS of content.getElementsByClassName("lCSS")){
                    for(const jll of lCSS.getElementsByTagName("li")){
                        const cssName = jll.textContent;
                        document.head.innerHTML += 
                            `<link class="guest" rel="stylesheet" `+
                            `href="css/${ cssName.split('\.').length > 1 ? cssName : cssName +".css"}" async>`;
                    }
                }
                for(const lJS of content.getElementsByClassName("lJS"))
                    for(const jll of lJS.getElementsByTagName("li")){
                        const jsName = jll.textContent;
                        const sc = document.createElement("script");
                        sc.classList.add("guest");
                        sc.type = "module";
                        sc.src = `js/${jsName.split('\.').length > 1 ? jsName + "?v=" + new Date().getTime() : jsName + ".js" + "?v=" + new Date().getTime()}`;
                        document.body.appendChild(sc);
                    }
                addEvents();
            } else {
                content.innerHTML = await res.status + " Error";
            }
        })
        .catch(()=>{
            console.log("404")
        })
}

function addEvents(){
    let urlapok = document.querySelectorAll("[value].urlap");
    console.log(urlapok.length)
    
    for(const urlap of urlapok){
        console.log("Belép ide?");
        for(const kuld of urlap.getElementsByClassName("kuld")){
            console.log("adfadf")
            kuld.addEventListener("click", function(e){
                const myUrlap = urlap.querySelectorAll("* [name]");
                const jsonValue = {};
                for(const mezo of myUrlap){
                    if(mezo.name.length > 0) jsonValue[mezo.name] = mezo.type !== "checkbox" ? mezo.value : mezo.checked;
                }
                console.log(jsonValue);
                //Replace with JSON-s value
                console.log(urlap.getAttribute('value'));
                

                //examplePOST(urlap.name, JSON.stringify(jsonValue));
                //document.cookie = "Gemkapocs";
            })
        }
    }
    console.log("Fa")
    let dateInputs = document.getElementsByClassName("set-now");
    for(const dateInput of dateInputs){
        console.log("Fa")
        dateInput.value = new Date();
        console.log((new Date()).toISOString());
        console.log(new Date())
    }
}

function replaceWithFormOrCookieValue(text){
    
    return text;
}