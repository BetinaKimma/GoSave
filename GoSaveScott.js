//Dette er vores JS for TaxFree og Meangderabat
//Dette er funktionen til beregning af pris efter TaxFree procenten
function udregnTaxfreeSaving() {
    document.getElementById(elementid: "resultatDivTax").style.display = "block";

    let foer = document.getElementById(elementid: "prisFørTax").value;
    let taxfree = document.getElementById(elementid "nyPrisTax").value;
    if (!isNaN(foer) && !isNaN(taxfree)) {

            let taxFreePris = foer / 100;
            let taxFreeSaving = taxfree * taxFreePris;
            let taxFreeRabat = foer - taxFreeSaving;

            document.getElementById(elementid: "taxrabat").innerHTML = taxFreeRabat.toFixed(fractionDigits: 2) + "kr";
        }

    }

    //Dette er funktionen til beregning af mængderabat
function udregnMaengdeRabat() {
    document.getElementById(elementid: "resultatDivMaengde").style.diplay = "block";
    let antal = document.getElementById(elementid: "antalProdukter").value;
    let foer = document.getElementById(elementid: "stykPrisFørR").value;
    let maengderabat = document.getElementById(elementid: "antalBetaler").value;
    if (!isNaN(antal) && !isNaN(foer) && !isNaN(maengderabat)) {

        let antalBetaling = maengderabat * foer;
        let maengdeRabat = antalBetaling / antal;

        document.getElementById("maengderabat").innerHTML = maengdeRabat.toFixed(2) + "Kr";
    }
}