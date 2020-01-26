// Dette er vores Javascript
// Denne funktion åbner en ny side i samme vindue ved tryk på button. en mulig løsning til vores buttons

// Dette er funktionerne til procent
function udregnProcentvisBesparelse() {
    if (!$('#besparelsepris').is(":visible")) {
        $('#besparelsepris').show();
    }

    var foer = document.getElementById('foerpris').value;
    var efter = document.getElementById('nypris').value;
    if (!isNaN(foer) && !isNaN(efter)) {

        if (foer > efter) {
            var sparet = foer-efter;
            var procentbesparelse = (sparet/foer)*100;

            document.getElementById('besparelse').innerHTML = procentbesparelse.toFixed(2) + "%";
        }
    }

}

function udregnProcentvisStigning() {
    if (!$('#besparelsepris').is(":visible")) {
        $('#besparelsepris').show();
    }

    var foer = document.getElementById('foerpris').value;
    var efter = document.getElementById('nypris').value;
    if (!isNaN(foer) && !isNaN(efter)) {

        if (foer < efter) {
            var sparet = efter-foer;
            var procentbesparelse = (sparet/foer)*100;

            document.getElementById('besparelse').innerHTML = procentbesparelse.toFixed(2) + "%";
        }
    }


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
