//Dette er vores JS for TaxFree og Meangde
//Dette er funktionen til beregning af pris efter TaxFree procenten
function calculateTaxfreeSaving() {
    document.getElementById(elementid: "resultDivTax").style.display = "block";

    let before = document.getElementById(elementid: "priceBeforeTax").value;
    let taxfree = document.getElementById(elementid "newPriceTax").value;
    if (!isNaN(before) && !isNaN(taxfree)) {

            let taxFreePrice = before / 100;
            let taxFreeSaving = taxfree * taxFreePrice;
            let taxFreeDiscount = before - taxFreeSaving;

            document.getElementById(elementid: "taxdiscount").innerHTML = taxFreeDiscount.toFixed(fractionDigits: 2) + "kr";
        }

    }
