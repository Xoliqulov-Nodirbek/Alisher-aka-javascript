let elResult = document.querySelector(".result")
let userBudjet = Number(prompt("Iltimos pul miqdoringizni sumda kiriting !", 0));

let  USD_TO_UZS = 9433.34; 
let EURO_TO_UZS = 10354.03;

let bilet = 500;
let hotel = 250;
let museum = 120;
let total = (bilet + hotel) * USD_TO_UZS + museum * EURO_TO_UZS; 

if (userBudjet >= total) { 
    elResult.textContent = "Alisher aka bemalol sayohat qilib kelishingiz mumkin."

} else if (userBudjet < 0 || userBudjet == 0){
    alert("Iltimos 0 dan katta son kiriting !");

} else {
    elResult.textContent = "Alisher aka hali ishlashingiz kerak ekan !"
}

