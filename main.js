// Setup 'tick' sound
let tick = new Audio("sounds/tick.mp3");
let tock = new Audio("sounds/tock.mp3");
const hiHat = new Audio("sounds/hi-hat.mp3");
const hiHatToggle = document.querySelector("#hi-hat");
const hiHatTiming = document.querySelector("#hi-hat-timing");
const kickDrum = new Audio("sounds/kick-drum.mp3");
const kickDrumToggle = document.querySelector("#kick-drum");
const kickDrumTiming = document.querySelector("#kick-drum-timing");
const snareDrum = new Audio("sounds/snare-drum.mp3");
const snareDrumToggle = document.querySelector("#snare-drum");
const snareDrumTiming = document.querySelector("#snare-drum-timing");
const count = document.querySelector("#count");
const MetronomeSoundToggle = document.querySelector("#sound");

let metronomeCount = 0;

// This function is called every 600ms
function update() {
  // Play the 'tick' sound
  metronomeCount++;
  count.innerText = `Count: ${metronomeCount}`;
  console.log(metronomeCount);
  if (metronomeCount % 4 === 0 && MetronomeSoundToggle.checked) {
    tock.play();
  } else if (!metronomeCount % 4 === 0 && MetronomeSoundToggle.checked) {
    tick.play();
  }

  if (hiHatToggle.checked) {
    if (Number(hiHatTiming.value) === 1 && metronomeCount % 1 === 0) {
      // Reset the hihat sound
      hiHat.load();
      hiHat.play();
    } else if (Number(hiHatTiming.value) === 2 && metronomeCount % 2 === 0) {
      hiHat.play();
    } else if (Number(hiHatTiming.value) === 3 && metronomeCount % 3 === 0) {
      hiHat.play();
    } else if (Number(hiHatTiming.value) === 4 && metronomeCount % 4 === 0) {
      hiHat.play();
    }
  }

  if (snareDrumToggle.checked) {
    if (Number(snareDrumTiming.value) === 1 && metronomeCount % 1 === 0) {
      // Reset the hihat sound
      snareDrum.load();
      snareDrum.play();
    } else if (
      Number(snareDrumTiming.value) === 2 &&
      metronomeCount % 2 === 0
    ) {
      snareDrum.play();
    } else if (
      Number(snareDrumTiming.value) === 3 &&
      metronomeCount % 3 === 0
    ) {
      snareDrum.play();
    } else if (
      Number(snareDrumTiming.value) === 4 &&
      metronomeCount % 4 === 0
    ) {
      snareDrum.play();
    }
  }

  if (kickDrumToggle.checked) {
    if (Number(kickDrumTiming.value) === 1 && metronomeCount % 1 === 0) {
      // Reset the hihat sound
      kickDrum.load();
      kickDrum.play();
    } else if (Number(kickDrumTiming.value) === 2 && metronomeCount % 2 === 0) {
      kickDrum.play();
    } else if (Number(kickDrumTiming.value) === 3 && metronomeCount % 3 === 0) {
      kickDrum.play();
    } else if (Number(kickDrumTiming.value) === 4 && metronomeCount % 4 === 0) {
      kickDrum.play();
    }
  }
}
// This function sets up update() to be called every 600ms
function setupUpdate() {
  setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

//Dark mode
const backgroundLeft = document.querySelector(".background-left");
const backgroundCenter = document.querySelector(".background-center");
const backgroundRight = document.querySelector(".background-right");
const darkMode = document.querySelector("#dark-mode-toggle");

darkMode.addEventListener("click", function () {
  const app = document.querySelector("body");
  app.classList.toggle("dark-mode");
  backgroundLeft.classList.toggle("dark-mode-1");
  backgroundCenter.classList.toggle("dark-mode-2");
  backgroundRight.classList.toggle("dark-mode-1");
});
