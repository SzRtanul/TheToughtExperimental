export const qs = [
	//
	// 0.
	"pg_catalog?sysadmin@pg_namespace?jogcsoport?engedelyezettsema@oid?nspname?id?nev?jogcsoportid?semaid\x01" +
	"select #$1.#%1.#&3, #$0.#%0.#&1, #$1.#%2.#&4, #$1.#%2.#&5\n" +
	"from ((#$1.#%2\n" +
	"inner join #$0.#%0 on #$0.#%0.#&0=#$1.#%2.#&5)\n" +
	"inner join #$1.#%1 on #$1.#%1.#&2=#$1.#%2.#&4)\n",
	//
	// 1.
	"pg_catalog@pg_namespace@oid?nspname\x01" +
	"SELECT * FROM #$0.#%0\n",
	//
	// 2.
	"pg_catalog@pg_namespace?pg_proc@oid?nspname\x01" +
	"select * FROM #$0.#%1\n",
];

export const formQs = [
];

export const noRefreshQs = [
	//
	// 0.
	"pg_catalog?sysadmin@pg_namespace?jogcsoport?engedelyezettsema@oid?nspname?id?nev?jogcsoportid?semaid\x01" +
	"select #$1.#%1.#&3, #$0.#%0.#&1, #$1.#%2.#&4, #$1.#%2.#&5\n" +
	"from ((#$1.#%2\n" +
	"inner join #$0.#%0 on #$0.#%0.#&0=#$1.#%2.#&5)\n" +
	"inner join #$1.#%1 on #$1.#%1.#&2=#$1.#%2.#&4)\n",
	//
	// 1.
	"sysadmin@engedelyezettsema\x01" +
	"insert into #$0.#%0 values (\-$oszl\-, \-$oszl2\-);\n",
	//
	// 2.
	"pg_catalog@jogcsoport?pg_namespace@oid?nspname\x01" +
	"select #$0.#%1.#&0, #$0.#%1.#&1 from #$0.#%1;\n",
	//
	// 3.
	"pg_catalog?sysadmin@jogcsoport\x01" +
	"select * from #$1.#%0;\n",
];

