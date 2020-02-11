//Dette er vores JS for TaxFree og Meangderabat. lavet af Scott

//SB. Dette er funktionen til beregning af pris efter TaxFree procenten
function udregnTaxfreeSaving() {
    document.getElementById("resultatDivTax").style.display = "block";

    let foer = document.getElementById("prisFørTax").value;
    let taxfree = document.getElementById("nyPrisTax").value;
    if (!isNaN(foer) && !isNaN(taxfree)) {

            let taxFreePris = foer / 100;
            let taxFreeSaving = taxfree * taxFreePris;
            let taxFreeRabat = foer - taxFreeSaving;

            document.getElementById("taxrabat").innerHTML = taxFreeRabat.toFixed(2) + "kr";
        }
    }

    //SB. Dette er funktionen til beregning af mængderabat
function udregnMaengdeRabat() {
    document.getElementById("resultatDivMaengde").style.diplay = "block";
    let antal = document.getElementById("antalProdukter").value;
    let foer = document.getElementById("stykPrisFørR").value;
    let maengderabat = document.getElementById("antalBetaler").value;
    if (!isNaN(antal) && !isNaN(foer) && !isNaN(maengderabat)) {

        let antalBetaling = maengderabat * foer;
        let maengdeRabat = antalBetaling / antal;

        document.getElementById("maengderabat").innerHTML = maengdeRabat.toFixed(2) + "Kr";
    }
}