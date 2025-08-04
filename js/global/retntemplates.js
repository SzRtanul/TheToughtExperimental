const boreSplit = '<p class="inv">elva</p>';

export const templates = {
    minden: (gal) => ""+gal+"",
    min: (retnMinden, fallsz=[], usqresplit=[], gluk) => {
        let fallasz = "";
        for(let i = 0; i < 5; i++){

        }
        return ```
<div class="retnrow">
    <select name="" id="">${fallasz}</select>
</div>```
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
        tbodyend: () => "</tbody>",
};

const retnCombinationTemplates = {

}

export const retnCombinations = {
    etlecta: 
        "theade:tablerow:tbodyend|||010002FF;002",
    etlecta2: 
        "theade:tablerow:tbodyend:withselect:seloption|||" +
        "04FFFFFF;001---04FFFFFF;002---030002FF;001-0:0-0-0",
    kolost: 
        "omla:ini:enela:kala;|||FFFFFFFF;3FF;"+
        "2-1=12,3-1=12:2-1=12,3-1=12:---"
}

export const retnCombinationResults = {

};