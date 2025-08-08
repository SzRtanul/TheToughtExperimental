const boreSplit = '<p class="inv">elva</p>';

export const templates = {
    minden: (gal) => ""+gal+"",
    min: (retnMinden, fallsz=[], usqresplit=[], gluk) => {
        let fallasz = "";
        for(let i = 0; i < 5; i++){

        }
        return `<div class="retnrow">
    <select name="" id="">${fallasz}</select>
</div>`
        },
        theade: (...args) => {
            let ret = "<tr>";
            for(let i = 0; i < args.length; i++){
                ret+="<th>"+args[i]+"</th>";
            }
            ret+= "</tr><tbody>";
            return ret;
        },
        tbodybef: () => "<tbody>",
        tablerow: (...args) => {
            let ret = "<tr>";
            for(let i = 0; i < args.length; i++){
                ret+="<td>"+args[i]+"</td>";
            }
            ret+= "</tr>";
            return ret;
        },
        withselect: (bef, bef2, ...arga) => {
            let ret = "<tr>";
            for(let i = 0; i < arga.length; i++){
                ret+="<td>"+arga[i]+"</td>";
            }
            ret+="<td><select name='frak'>"+bef+"</select></td>"+
                "<td><select name='frak'>"+bef2+"</select></td>";
            ret+= "</tr>";
            return ret;
        },
        seloption: (...args) => {
            let ret = "<option value='"+args[0]+"'>"
            for(let i = 0; i<args.length;i++){
                ret+=args[i];
            }
            ret +="</option>"
           // console.log("Rettenet: " + ret)
            return ret;
        },
        sela: (meka)=>`
<option class="retnrow" value="${meka}">
    <span>${meka}</span>
</option>`,
        tbodyend: () => "</tbody>",
        retndiv: (...args) => `
<div class="retnrow">
    <div>${args[0]}</div>
        <div class="film">
            <button
                class="scene sceneI scen scen0 mez" 
                nextTo="scen:1"
                dtag="1"
            >${args[1]}
            </button>
            <div 
                class="scene scen scen1 urlap"
                value="val"
                nextToIfSuccess="scen:0"
            >
                <input
                    name="id"
                    type="text"
                    class="inv" 
                >
                <input name="datum" type="text" value="${args[1]}">
                <button class="kuld">Küld</button>    
            </div>
        </div>
    </div>
</div>`,
    retndivhead: (...args) => `<p class="retnheader"><span>${args[0]}</span><span>${args[1]}</span></p>`,
    retrehen: (...args) => 
`<thead class="retnheader">
    <tr>
        <th>${args[0]}</th>
        <th>${args[1]}</th>
    </tr>
</thead><tbody>`,
    retrerown: (...args) => 
`<tr class="retnrow">
        <td>${args[0]}</td>
        <td>${args[1]}</td>
        <td class="urlap" usQ="1-3">
            <input type="number" name="jj" class="inv" value="${args[2]}">
            <input type="number" name="jj2" class="inv" value="${args[3]}">
            <button class="kuld">Kuka</button>
        </td>
    </tr>`,
    retrefoot: (retnart, retnart2, ...args) => 
`</tbody><tfoot class="retnfooter">
    <tr
        class="urlap"
        value="callquery"
        db-schemanames="sysadmin"
        db-tablenames="engedelyezettsema"
        db-query="insert into #$0.#%0 values (\-$oszl\-, \-$oszl2\-);"
    >
        <td>
            <select name="oszl">${retnart}</select>        
        </td>
        <td>
            <select name="oszl2" class="retnmain">${retnart2}</select>
        </td>
        <td><button class="kuld">Kűűűűűűggyed!</button></td>
    </tr>
</tfoot>`,
    retreopt: (...args)=> `<option class="retnrow" value="${args[0]}">${args[1]}</option>`
};

const retnCombinationTemplates = {

};

export const retnCombinations = {
    etlecta: 
        "theade:tablerow:tbodyend|||010002FF;002",
    etlecta2: 
        "theade:tablerow:tbodyend:withselect:seloption|||" +
        "04FFFFFF;001---04FFFFFF;002---030002FF;001-0:0-3-3-0-0",
    kolost: 
        "omla:ini:enela:kala;|||FFFFFFFF;3FF;"+
        "2-1=12,3-1=12:2-1=12,3-1=12:---",
    ujvacsora:
        "sela|||"+
        "00FFFFFF;001",
    nemtudni: 
        "retndiv:retndivhead|||"+
        "0001FFFF;001",
    oklamaha:
        "retrerown:retrehen:retrefoot:retreopt|||" +
        "03FFFFFF;001---03FFFFFF;001---000102FF;001-0:3:_0:0-:_-0:1"
}

export const retnCombinationResults = {

};