let brugernavn = [];
console.log(brugernavn);

console.log(JSON.parse(localStorage.getItem('brugernavn')));let brugernavn = [];

function brugernavn() {
    brugernavn.push("brugernavn"().value);
    localStorage.setItem('brugernavn', brugernavn.value);
    alert('En bruger er logget på');
    console.log("brugernavn"());
    localStorage.setItem('brugernavn', JSON.stringify(brugernavn));

    // JSON står for JavaScript Object Notation
    // stringify er en metode vi bruger for JSON i Javascript
}








