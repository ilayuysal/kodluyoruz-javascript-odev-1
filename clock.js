let userName1 = prompt("Adınızı Giriniz:");
userName = document.querySelector("#userName")
userName.innerHTML = userName1;

function clock () {
let saat = document.querySelector("#saat");
let dakika = document.querySelector("#dakika");
let saniye = document.querySelector("#saniye");
let gun = document.querySelector("#gun");

let s = new Date().getHours();
let d = new Date().getMinutes();
let sn = new Date().getSeconds();
let g = new Date().getDay();
if (g == 0) {
    gun.innerHTML = "Pazar" 
} else if (g == 1) {
    gun.innerHTML = "Pazartesi"
} else if (g == 2) {
    gun.innerHTML = "Salı" 
} else if (g == 3) {
    gun.innerHTML = "Çarşamba"
} else if (g == 4) {
    gun.innerHTML = "Perşembe"
} else if (g == 5) {
    gun.innerHTML = "Cuma"
} else if (g == 6) {
    gun.innerHTML = "Cumartesi"
}
saat.innerHTML = `${s}:`
dakika.innerHTML = `${d}:`
saniye.innerHTML = sn;
}
let interval = setInterval (clock,100);

