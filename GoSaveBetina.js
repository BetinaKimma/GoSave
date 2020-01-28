// Dette er vores Javascript
// Denne funktion åbner en ny side i samme vindue ved tryk på button. en mulig løsning til vores

// BS. Dette er funktionen til beregning af procentvis besparelse. Det er en færdig implementeret funktion.
function calculatePercentSaving() {
    document.getElementById("resultDivPercent").style.display = "block";

    let before = document.getElementById("previousPricePercent").value;
    let after = document.getElementById("newPricePercent").value;
    if (!isNaN(before) && !isNaN(after)) {

        if (before > after) {
            let saved = before - after;
            let percentsavings = (saved / before) * 100;
            document.getElementById("savings").innerHTML = percentsavings.toFixed(2) + "%";
        }
    }
}

// BS. Dette er funktionen til beregning af procentvis stigning. Det er en færdig implementeret funktion.
function calculatePercentDiff() {
    document.getElementById("resultDivDiff").style.display = "block";

    let before = document.getElementById("previousPriceDiff").value;
    let after = document.getElementById("newPriceDiff").value;
    if (!isNaN(before) && !isNaN(after)) {

        if (before < after) {
            let saved = after - before;
            let percentDifference = (saved / before) * 100;

            document.getElementById("difference").innerHTML = percentDifference.toFixed(2) + "%";
        }
    }
}

// BS. Dette er funktionen til beregning af pris efter en procentrabat. Det er en færdig implementeret funktion.
function calculatePriceAfterDiscount() {
    document.getElementById("resultDivDisc").style.display = "block";

    let before = document.getElementById("previousPriceDiscount").value;
    let percent = document.getElementById("discountPercentage").value;
    if (!isNaN(before) && !isNaN(percent)) {

                let percentPrice = before / 100;
                let saved = percent * percentPrice;
                let discountPrice = before - saved;

                document.getElementById("discount").innerHTML = discountPrice.toFixed(2) + "Kr";
            }
}
var logoIndex = 0;
showLogos();

function showLogos() {
    var i;
    var logos = document.getElementsByClassName("myLogos");
    for (i = 0; i < logos.length; i++) {
        logos[i].style.display = "none";
    }
    logoIndex++;
    if (logoIndex > logos.length) {logoIndex = 1}
    logos[logoIndex-1].style.display = "block";
    setTimeout(showLogos, 400); // Change image every 2 seconds
}