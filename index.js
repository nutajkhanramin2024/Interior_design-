let value = 199;
let room = document.getElementById("room");
let room_two = document.getElementById("room-2");
let a = 1;
let p = 1;
let value_two = 249;
//* This is for the basic packages *//

//! increases the value !//
document
  .getElementById("increaseButton")
  .addEventListener("click", function () {
    a++;
    value += 199;
    document.getElementById("display").innerText = "$" + value;
    document.getElementById("room").innerHTML = a + " room";
  });

//! decrisec the value !//
document
  .getElementById("decreaseButton")
  .addEventListener("click", function () {
    a--;
    value -= 199;
    document.getElementById("display").innerText = "$" + value;
    document.getElementById("room").innerHTML = a + " room";
  });

//? This is for the pro packeges

//! increases the value !//
document.getElementById("plus2").addEventListener("click", function () {
  p++;
  value_two += 249;
  document.getElementById("display_two").innerText = "$" + value_two;
  document.getElementById("room-2").innerHTML = p + " room";
});

//! decrisec the value !//
document.getElementById("minus2").addEventListener("click", function () {
  p--;
  value_two -= 249;
  document.getElementById("display_two").innerText = "$" + value_two;
  document.getElementById("room-2").innerHTML = p + " room";
});
document.getElementById("sing-up-1").addEventListener("click", function () {
  document.getElementById("thanks").innerHTML = "Thanks for choosing room " + p;
});
document.getElementById("thanks-2").addEventListener("click", function () {
  document.getElementById("thanks-2").innerHTML =
    "Thanks for choosing room " + p;
});
