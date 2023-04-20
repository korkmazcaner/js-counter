const counter = document.querySelector("#counter");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");
let counterNumber = 0; // Başlangıçta sayacın içinde yazan sayı.

counter.innerHTML = counterNumber;

function decreaseNumber() {
  counterNumber--;
  if (counterNumber > 0) {
    counter.style.color = "green";
  } else if (counterNumber < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
  counter.innerHTML = counterNumber;
}

decreaseBtn.addEventListener("click", decreaseNumber); // Decrease butonuna tıkladığında sayacı bir azaltır.

//---------------------------

function increaseNumber() {
  counterNumber++;
  if (counterNumber > 0) {
    counter.style.color = "green";
  } else if (counterNumber < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
  counter.innerHTML = counterNumber;
}

increaseBtn.addEventListener("click", increaseNumber); // İncrease butonuna tıkladığında sayacı bir arttırır.

//----------------------------

function resetNumber() {
  counterNumber = 0;
  if (counterNumber > 0) {
    counter.style.color = "green";
  } else if (counterNumber < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
  counter.innerHTML = counterNumber;
}

resetBtn.addEventListener("click", resetNumber); //Reset butonuna basıldığında sayıcı sıfırlıyor.
