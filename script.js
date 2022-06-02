async function fetchData() {
    const caseAll = await fetch ("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all");
    const th = await caseAll.json();
    //th
    document.getElementById("date").innerHTML=th[0].txn_date;
    document.getElementById("new_case").innerHTML=th[0].new_case.toLocaleString("en-US");
    document.getElementById("new_recovered").innerHTML=th[0].new_recovered.toLocaleString("en-US");
    document.getElementById("new_death").innerHTML=th[0].new_death.toLocaleString("en-US");
    document.getElementById("total_death").innerHTML=th[0].total_death.toLocaleString("en-US");
    document.getElementById("total_case").innerHTML=th[0].total_case.toLocaleString("en-US");
    //songkhla
    // const caseProvince=await fetch ("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces");
    // const songkhla=await caseProvince.json();
    // document.getElementById("songkhla_date").innerHTML=songkhla[50].txn_date;
    // document.getElementById("songkhla_new_case").innerHTML=songkhla[50].new_case;
    // document.getElementById("songkhla_new_death").innerHTML=songkhla[50].new_death;
    // document.getElementById("songkhla_total_death").innerHTML=songkhla[50].total_death;
    // document.getElementById("songkhla_total_case").innerHTML=songkhla[50].total_case;
}
fetchData();