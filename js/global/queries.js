export const qs = [
	//
	// 0. GQTcsoportHozRend
	"pg_catalog?sysadmin@pg_namespace?jogcsoport?engedelyezettsema@oid?nspname?id?nev?jogcsoportid?semaid\x01" +
	"select #$1.#%1.#&3, #$0.#%0.#&1, #$1.#%2.#&4, #$1.#%2.#&5\n" +
	"from ((#$1.#%2\n" +
	"inner join #$0.#%0 on #$0.#%0.#&0=#$1.#%2.#&5)\n" +
	"inner join #$1.#%1 on #$1.#%1.#&2=#$1.#%2.#&4)\n",
	//
	// 1. GQTnsp
	"pg_catalog@pg_namespace@oid?nspname\x01" +
	"SELECT * FROM #$0.#%0\n",
	//
	// 2. GQTproc
	"pg_catalog@pg_proc@oid?pronamespace?proname?proargtypes@@\x01" +
	"select #$0.#%0#&0, #$0.#%0#&1, #$0.#%0#&2, #$0.#%0#&3  FROM #$0.#%0\n",
	//
	// 3. GQTjogcsoport
	"sysadmin@jogcsoport\x01" +
	"select * FROM #$0.#%0\n",
	//
	// 4. GQTetetes
	"admin@etetes\x01" +
	"select * FROM #$0.#%0\n",
	//
	// 5. GQTmegetetett
	"admin@megetetettetelek\x01" +
	"select * FROM #$0.#%0\n",
	//
	// 6. GQTalany
	"admin@alany\x01" +
	"select * FROM #$0.#%0\n",
	//
	// 7. GQTfaj
	"admin@faj\x01" +
	"select * FROM #$0.#%0\n",
	//
	// 8. GQTprocpro
	"pg_catalog@pg_proc?pg_aggregate@oid?pronamespace?proname?proargtypes?proisagg?aggfnoid@pg_get_functiondef@funcsrc?p?a\x01" +
	"\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\n" +
	"select #(1.#&0, #(1.#&1, #(1.#&2, #(1.#&3, #$0.#'0(#(1.#&0) FROM #$0.#%0 #(1\n" +
	"LEFT JOIN #$0.#%1 #(2 ON #(2.#&5 = #(1.#&0\n" +
	"WHERE #(2.#&5 IS NULL\n" +
	"ORDER BY #(1.#&1 DESC;\n" +
	"\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\n",
];

export const formQs = [
	//
	// 0. FQTcsoportHozRend
	"pg_catalog?sysadmin@pg_namespace?jogcsoport?engedelyezettsema@oid?nspname?id?nev?jogcsoportid?semaid\x01" +
	"select #$1.#%1.#&3, #$0.#%0.#&1, #$1.#%2.#&4, #$1.#%2.#&5\n" +
	"from ((#$1.#%2\n" +
	"inner join #$0.#%0 on #$0.#%0.#&0=#$1.#%2.#&5)\n" +
	"inner join #$1.#%1 on #$1.#%1.#&2=#$1.#%2.#&4)\n" +
	"LIMIT \\-$limit\\-\n" +
	"OFFSET (\\-$site\\- * \\-$limit\\-);\n",
	//
	// 1. FQTsemas
	"pg_catalog@jogcsoport?pg_namespace@oid?nspname\x01" +
	"select #$0.#%1.#&0, #$0.#%1.#&1 from #$0.#%1;\n",
	//
	// 2. FQTjogcsoport
	"pg_catalog?sysadmin@jogcsoport\x01" +
	"select * from #$1.#%0;\n",
];

export const noRefreshQs = [
	//
	// 0. NQTsematorles
	"sysadmin@engedelyezettsema@jogcsoportID?semaid\x01" +
	"delete from #$0.#%0 \n" +
	"where #$0.#%0.#&0 = \\-$jj\\- \n" +
	"and #$0.#%0.#&1 = \\-$jj2\\-\n",
	//
	// 1. NQTsemahozzaadas
	"sysadmin@engedelyezettsema\x01" +
	"insert into #$0.#%0 values (\\-$oszl\\-, \\-$oszl2\\-);\n",
	//
	// 2. NQTregistration
	"lobby@felhasznaloview@@@@felhasznalonev?email?jelszohash?sysadmin\x01" +
	"insert into #$0.#%0 (#)0, #)1, #)2) values (#\-username, #\-emailaddress, #\-userpassword);\n",
	//
	// 3. NQTlogin
	"lobby@@@login\x01" +
	"select #$0.#'0(#\-username, #\-jelszoHash);\n",
	//
	// 4. NQTinsertprofile
	"users@personview@@@@id?kodnev?nev?nem?szuletes?fajid\x01" +
	"insert into #$0.#%0 () values (\\-$id\\-, #$\-kodnev, #$\-nev, '\\-$bit\\-', , \\-$fajID\\-);\n",
];

