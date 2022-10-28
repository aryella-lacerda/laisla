let numOfClicks = 0;

document
  .querySelector("#button") // takes one argument, the id of the component you want
  .addEventListener("click", function () {
    numOfClicks = numOfClicks + 1;
    // console.log("This button was clicked x times: ", numOfClicks);

    // console.log(1 + 25);
    // console.log("1" + "25");

    console.log("This button was clicked " + numOfClicks + " times");
  });
