var elResultHeading = document.querySelector('.heading');

alert ("Assalomu alleykum!");

var userName = prompt ("Ismingiz?");

var userMoney = Number(prompt(`${ userName } uchib ketish uchun byudjetizda nech pul borligini korsating`, 0));

var prices = alert(`Borish va kelish samalyot bileti - 500$
Mexmonxona to'lovi - 250$
Muzey va boshqa ko'ngil ochar joylar uchun - 120 euro`);

var ticketPrice = 4716670;
var hotelPrice = 2358335;
var museumPrice = 1242483.6;

var totalPrice = Number( ticketPrice + hotelPrice + museumPrice);

if (userMoney >= totalPrice) {
    elResultHeading.textContent = `Oq yo'l, ${userName}`;
} else {
    elResultHeading.textContent = `${userName}, sabr oka!`;
}