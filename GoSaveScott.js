//Dette er vores JS for TaxFree og Meangde
//Dette er funktionen til beregning af pris efter TaxFree procenten
function udregnTaxfreeSaving() {
    document.getElementById(elementid: "resultatDivTax").style.display = "block";

    let før = document.getElementById(elementid: "prisFørTax").value;
    let taxfree = document.getElementById(elementid "nyPrisTax").value;
    if (!isNaN(before) && !isNaN(taxfree)) {

            let taxFreePris = før / 100;
            let taxFreeSaving = taxfree * taxFreePris;
            let taxFreeRabat = før - taxFreeSaving;

            document.getElementById(elementid: "taxrabat").innerHTML = taxFreeRabat.toFixed(fractionDigits: 2) + "kr";
        }

    }
