// Dette er vores Javascript
// Denne funktion åbner en ny side i samme vindue ved tryk på button. en mulig løsning til vores

// BS. Dette er funktionen til procentvis besparelse
function udregnProcentvisBesparelse() {
    document.getElementById("resultDiv1").style.display = "block";

    let foer = document.getElementById("previousPrice1").value;
    let efter = document.getElementById("newPrice1").value;
    if (!isNaN(foer) && !isNaN(efter)) {

        if (foer > efter) {
            let sparet = foer - efter;
            let procentbesparelse = (sparet / foer) * 100;
            document.getElementById("besparelse1").innerHTML = procentbesparelse.toFixed(2) + "%";
        }
    }
}
// BS. Dette er funktionen til beregning af procentvis stigning
function udregnProcentvisStigning() {
    document.getElementById("resultDiv2").style.display = "block";

    let foer = document.getElementById('previousPrice2').value;
    let efter = document.getElementById('newPrice2').value;
    if (!isNaN(foer) && !isNaN(efter)) {

        if (foer < efter) {
            let sparet = efter - foer;
            let procentstigning = (sparet / foer) * 100;

            document.getElementById('stigning').innerHTML = procentstigning.toFixed(2) + "%";
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