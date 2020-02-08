// Dette er Javascript lavet af Betina

// BS. Dette er funktionen til beregning af procentvis besparelse. Det er en færdig implementeret funktion.
function calculatePercentSaving() {
    document.getElementById("resultDivPercent").style.display = "block";

    let before = document.getElementById("previousPricePercent").value;
    let after = document.getElementById("newPricePercent").value;
    if (!isNaN(before) && !isNaN(after)) {

        if (before > after) {
            let saved = before - after;
            let percentSavings = (saved / before) * 100;

            document.getElementById("savings").innerHTML = percentSavings.toFixed(2) + "%";
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

// BS. Dette er funktionen til beregning af procent af pris. Det er en færdig implementeret funktion.
function calculatePercentOff() {
    document.getElementById("resultDivPercentOff").style.display = "block";

    let before = document.getElementById("previousPriceFull").value;
    let percent = document.getElementById("discountPercentOff").value;
    if (!isNaN(before) && !isNaN(percent)) {

        let percentOff = percent * before / 100;

        document.getElementById("priceOff").innerHTML = percentOff.toFixed(2) + "Kr";
    }
}

// BS. Dette er funktionen der får logoer til at køre i loop på GoSave siden.
// (De logoer der kører nu er forskellige smileys, men de kunne skiftes ud med logoer for butikker.)
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

// BS. Dette er funktionen der erstatter den "åbne" HTML med GoSave(Forsiden) Ved tryk på krydset oppe i højre hjørne.
function returnToFrontPage() {
    location.replace("GoSave.html");
}

// BS. Dette er funktionen der henter dato og tid,
// kode taget fra W3Schools: https://www.w3schools.com/js/js_date_methods_set.asp fundet den 29/01-20.
// Det er ikke en færdig implementeret funktion, da jeg ikke har kunnet få den til at opdatere dato, men kun tid.
var d = new Date();
d.getFullYear();
document.getElementById("date").innerHTML = d;
