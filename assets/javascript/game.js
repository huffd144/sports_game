let count = +1;
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamoneNumgoals = document.querySelector("#teamone-numgoals");

console.log(teamoneShootButton);

teamoneShootButton.addEventListener("click", function () {
  console.log("+ button clicked");
  let newCounterValue = Number(teamoneNumshots.innerHTML) + 1;
  teamoneNumshots.innerHTML = newCounterValue;

  if (resetButton) {
    let newCounterValue = Number(teamoneNumshots.innerHTML) + 0;
    teamoneNumshots.innerHTML = newCounterValue;
  }

  if (Math.random() * 100 < 80) {
    let newCounterValue = Number(teamoneNumgoals.innerHTML) + 2;
    teamoneNumgoals.innerHTML = newCounterValue;
  }
});

let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals");

console.log(teamtwoShootButton);

teamtwoShootButton.addEventListener("click", function () {
  console.log("+ button clicked");
  let newCounterValue = Number(teamtwoNumshots.innerHTML) + 1;
  teamtwoNumshots.innerHTML = newCounterValue;

  if (Math.random() * 100 < 55) {
    let newCounterValue = Number(teamtwoNumgoals.innerHTML) + 2;
    teamtwoNumgoals.innerHTML = newCounterValue;
  }
});

let resetButton = document.querySelector("#reset-button");
let resetContainer = document.querySelector("#reset-container");
let numResets = document.querySelector("#num-resets");

console.log(resetButton);

resetButton.addEventListener("click", function () {
  console.log("+ button clicked");
  let newCounterValue = Number(numResets.innerHTML) + 1;
  numResets.innerHTML = newCounterValue;
  teamoneNumshots.innerHTML = 0;
  teamoneNumgoals.innerHTML = 0;
  teamtwoNumgoals.innerHTML = 0;
  teamtwoNumshots.innerHTML = 0;
});
