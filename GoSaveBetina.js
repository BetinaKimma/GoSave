// Dette er Javascript lavet af Betina

// BKS. Dette er funktionen til beregning af procentvis besparelse. Det er en færdig implementeret funktion.
function calculatePercentSaving() {
    document.getElementById("resultDivPercent").style.display = "block";

    let before = document.getElementById("previousPricePercent").value;
    let after = document.getElementById("newPricePercent").value;
    if (!isNaN(before) && !isNaN(after)) {
        if (before > after)
        {
            let saved = before - after;
            let percentSavings = (saved / before) * 100;

            document.getElementById("savings").innerHTML = percentSavings.toFixed(2) + "%";
        }
    }
    else {
        alert("Hovsa! Prøv igen med hele tal");
    }
}

// BKS. Dette er funktionen til beregning af procentvis stigning. Det er en færdig implementeret funktion.
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
    else {
        alert("Hovsa! Prøv igen med hele tal");
    }
}

// BKS. Dette er funktionen til beregning af pris efter en procentrabat. Det er en færdig implementeret funktion.
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
    else {
        alert("Hovsa! Prøv igen med hele tal");
    }
}

// BKS. Dette er funktionen til beregning af procent af pris. Det er en færdig implementeret funktion.
function calculatePercentOff() {
    document.getElementById("resultDivPercentOff").style.display = "block";

    let before = document.getElementById("previousPriceFull").value;
    let percent = document.getElementById("discountPercentOff").value;
    if (!isNaN(before) && !isNaN(percent)) {

        let percentOff = percent * before / 100;

        document.getElementById("priceOff").innerHTML = percentOff.toFixed(2) + "Kr";
    }
    else {
        alert("Hovsa! Prøv igen med hele tal");
    }
}

// BKS. Dette er funktionen der får logoer til at køre i loop på GoSave siden.
// (De logoer der kører nu er forskellige smileys, men de kunne skiftes ud med logoer for butikker.)
var logoIndex = 0;
showLogos();

function showLogos() {
    let i;
    let logos = document.getElementsByClassName("myLogos");
    if (logos.length == 0)
        return;

    for (i = 0; i < logos.length; i++) {
        logos[i].style.display = "none";
    }
    logoIndex++;
    if (logoIndex > logos.length) {logoIndex = 1}
    logos[logoIndex-1].style.display = "block";
    setTimeout(showLogos, 400);
}

// BKS. Dette er funktionen der erstatter den "åbne" HTML med GoSave(Forsiden) Ved tryk på krydset oppe i højre hjørne.
function returnToFrontPage() {
    location.replace("GoSave.html");
}

// BKS. Dette er funktionen der henter dato og tid,
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
if (document.getElementById("dateOnFront") != null)
{
    document.getElementById("dateOnFront").innerHTML = d;
}

// BKS. Dette er funktionen for kontakt formen på "book shopper" siden. Her udfyldes navn, telefon og email,
// disse bliver gemt som string i LocalStorage ved methoden JSON.stringify.
function contactForm() {
    var fname = document.getElementById("fname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var contactForm =  {
        fname : fname,
        phone : phone,
        email : email
    };
    localStorage["contactForm"] = JSON.stringify(contactForm);
}

// BKS. Dette er funktionen for booking af personlig shopper. Der er ikke lavet HTML til denne funktion.
// Den virker i console.
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

// BKS. Dette er funktionen for at shopper kan gemme items i en liste. Der er ikke lavet HTML til denne funktion.
// Funktionen virker i console
class userWishList {
    //constructoren her sørger for at hver instans af userWishlist får et tomt array ved navn list tilknyttet
    // og bliver initialiseret
    constructor() {
        this.list = [];
    }
    // add tilføjer det objekt den bliver givet til vores list array
    add(item) {
        this.list.push(item);
    }
    // showList eksekverer hver enkelt item i showItem funktion, samt giver dem et itemNr som er 1 større end deres
    // indeks i array'et.
    showList() {
        console.log("Dette er din ønskeliste:\n");
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].showItem(i+1, this.list[i]);
        }
    }
}
class item {
    //constructor indikerer at hver instans af wish skal have følgende oplysninger:
    // butiksnavn, detaljer, farve, størrelse og pris.
    constructor(storeName, details, color, size, price) {
        this.storeName = storeName;
        this.details = details;
        this.color = color;
        this.size = size;
        this.price = price;
    }
    //showItem() printer oplysninger om den enkelte instans af item samt deres itemNr.
    // Dette gøres ud fra de to parametre som funktionen kræver som er et itemNr og et item objekt.
    showItem(itemNr, item) {
        console.log("Jeg ønsker mig " + itemNr + ": Fra " + item.storeName + " - " + item.details + " i " + item.color + " / Str.: "
            + item.size + " Til " + item.price + " Kr.")
    }
}
//item1 og item2 oprettes som nye instanser af vores item klasse med de følgende oplysninger
const item1 = new item("Kvindemode", "Diana Kjole", "Rød", "Medium", 400);
const item2 = new item("Herremode", "David Jeans", "Blå", "Large", 600);

//want oprettes som instans af vores wishList klasse
let want = new userWishList();

// add funktionen i want eksekveres ved at give den vores to item som værdier -
// og de bliver derfor tilføjet til want list array
want.add(item1);
want.add(item2);

//want showList() funktion eksekveres og den printer listen
want.showList();
/* Output:
Dette er din ønskeliste:
Jeg ønsker mig 1: Fra Kvindemode - Diana kjole i Rød / Str.: Medium Til 400 Kr.
Jeg ønsker mig 2: Fra Herremode - David Jeans i Blå / Str.: Large Til 600 Kr.
 */
