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
// kode taget fra W3Schools: https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_string_iso1 og
// StackOverflow: https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
// fundet den 09/02-20. Det er en færdig implementeret funktion.
var currentdate = new Date();
var d = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
document.getElementById("dateOnFront").innerHTML = d;

// BS. Dette er funktionen for kontakt formen på "book shopper" siden. Her udfyldes navn, telefon og email,
// er alle felter ikke udfyldt kommer der en alert frem, der beder om at der prøves igen.
function contactForm() {
    var x = document.forms["bookShopperForm"]["fname", "phone", "email"].value;
    if (x == " ") {
        alert("Har du udfyldt alt korrekt? Prøv igen");
        return false;
    }
}

// BS. Dette er funktionen for booking af personlig shopper
class bookPersonalShopper {
    //constructoren her sørger for at hver instans af bookPersonalShopper får et tomt array ved navn booking tilknyttet
    // og bliver initialiseret
    constructor() {
        this.booking = [];
    }
    // add tilføjer det objekt den bliver givet til vores booking array
    add(costumer) {
        this.booking.push(costumer);
    }
    // showBooking eksekverer hver enkelt kundes showData funktion, samt giver dem et costumerNr som er 1 større end deres
    // indeks i array'et.
    showBooking() {
        console.log("Følgende kunder har booket tid:\n");
        for (let i = 0; i < this.booking.length; i++) {
            this.booking[i].showData(i+1, this.booking[i]);
        }
    }
}

class costumer {
    //constructor indikerer at hver instans af kunde skal have følgende oplysninger:
    // fornavn, efternavn, telefonnummer, dato og tid.
    constructor(firstname, lastname, phoneNumber, agreedDate, time) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
        this.agreedDate = agreedDate;
        this.time = time;
    }
    //showData() printer oplysninger om den enkelte instans af costumer samt deres costumerNr.
    // Dette gøres ud fra de to parametre som funktionen kræver som er et costumerNr og et costumer objekt.
    showData(costumerNr, costumer) {
        console.log("Kunde " + costumerNr + ": " + costumer.firstname + " " + costumer.lastname + " - "
            + costumer.phoneNumber + " - " + costumer.agreedDate + " - " + costumer.time)
    }
}
//kunde1 og kunde2 oprettes som nye instanser af vores costumer klasse med de følgende oplysninger
const costumer1 = new costumer("Jane", "Doe", 12345678, "27 April", 10.00);
const costumer2 = new costumer("John", "Doe", 87654321, "09 Juni", 11.30);

//shopper oprettes som instans af vores bookPersonligShopper klasse
let shopper = new bookPersonalShopper();

// add funktionen i shopper eksekveres ved at give den vores to kunder som værdier -
// og de bliver derfor tilføjet til shopper booking array
shopper.add(costumer1);
shopper.add(costumer2);

//shopper visBooking() funktion eksekveres og den printer listen af bookinger
shopper.showBooking();

/* Output:
Følgende kunder har booket tid:
Kunde 1: Jane Doe - 12345678 - 27 April - 10.00
Kunde 2: John Doe - 87654321 - 09 Juni - 11.30
 */