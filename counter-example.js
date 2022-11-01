let counter = 0;

document.querySelector("#subtraction").addEventListener("click", function () {
  counter = counter - 1;
  document.querySelector("#counter").innerHTML = counter;
});

document.querySelector("#addition").addEventListener("click", function () {
  counter = counter + 1;
  document.querySelector("#counter").innerHTML = counter;
});
