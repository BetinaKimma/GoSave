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

/*

    function udregnPrisEfterProcent() {
        if (!$('#besparelsepris').is(":visible")) {
            $('#besparelsepris').show();
        }

        var foer = document.getElementById('foerpris').value;
        var procent = document.getElementById('procentsats').value;
        if (!isNaN(foer) && !isNaN(efter)) {

            if (foer > efter) {
                var procentpris = foer/100;
                var kronersparet = procentsats*procentpris;
                var prisefterrabat = foer-kronersparet;

                document.getElementById('besparelse').innerHTML = procentbesparelse.toFixed(2) + "Kr";
            }
        }
}
*/