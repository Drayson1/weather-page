
const isAdmin = false;

// === porównanie ze sprawdzeniem wartości i typu
// == porównanie ze sprawdzeniem wartości 
if (isAdmin === true) {
    console.log("Zalogowano jako admin")
} else {
    console.log("Zwykły użytkownik")
}
let num = 7;

if (num === 7) {
    console.log("Szczęśliwy numerek")
}
else if (num > 10) {
    console.log("Numer jest większy od 10")
}
else if (num < 5) {
    console.log("Numer mniejszy od 5")
}
else {
    console.log("ERROR")
}