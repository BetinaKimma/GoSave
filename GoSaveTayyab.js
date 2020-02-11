
function brugernavn() {
    brugernavn.push(brugernavn().value);
    localStorage.setItem('brugernavn', brugernavn.value);
    alert('En ny bruger er logget på');
    console.log(brugernavn());
    localStorage.setItem('brugernavn', JSON.stringify(brugernavn));

    // JSON står for JavaScript Object Notation
    // stringify er en metode vi bruger for JSON i Javascript
}








