export const formDRef = [
    "1-0",
    "1-1",
    "1-2",
    "1-3"
];

export const retnDRef = [
    
];

export const retnCombinationTemplates = {
    
};

const retEx = [
    (data, theade="theade") => theade + ":tablerow:tbodyend|||010002FF;" + data,
    (data)=>"theadevcslist:tablerow:tbodyend|||FFFFFFFF;F---FFFFFFFF;F---010002FF;"+data,
    (sendQ, data, h1="") => retEx[0](data, "")
]

export const retnCombinations = {
    etlecta: retEx[0]("002"),
    vacsoralist: 
        "theadevcslist:tablerow:tbodyend:vcstablerow|||" +
        "01FFFFFF;005---FFFFFFFF;F---FFFFFFFF;F---030002FF;004;0-0=0",
    eatedlist: retEx[0]("005"),
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
        "03FFFFFF;003---03FFFFFF;001---000102FF;200-:_-:_-0:1",
    alanylist: retEx[0]("006"),
    fajlist: retEx[0]("300"),
    pg_class: retEx[0]("302"),
    pg_type: retEx[0]("303"),
    pg_views: retEx[0]("305"),
    felh: retEx[0]("306"),
    pg_namespace: retEx[0]("307"),
    pg_columns: retEx[0]("308"),
    pg_proc: retEx[0]("002"),
    pg_procpro: retEx[0]("008"),
    userperson: "getDataLength:theadevcslist:tablerow:tbodyend:personev|||00FFFFFF;30A---020103FF;309---FF04FFFF;30A;:0,1",
    profilev: retEx[0]("309"),
    personev: retEx[0]("30A")
}

export const retnCombinationResults = {

};

// QUERRRRRRRRRRRRRRRRRRY
const exmplJSONs= [{
        limit: 50,
        site: 0
    }
];

export const staticQueryWithJSONs = [
    0,
    exmplJSONs[0],
];




