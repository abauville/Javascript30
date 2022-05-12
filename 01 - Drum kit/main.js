const keys = document.querySelectorAll(".key");

keys.forEach( (key, ind) => {
  key.addEventListener("click", (event) => {
    const key = event.currentTarget;
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
    playSound(key, audio);
  })
});

document.addEventListener("keydown", (event) => {
  const k = event.keyCode;
  const key = document.querySelector(`.key[data-key="${k}"]`);
  const audio = document.querySelector(`audio[data-key="${k}"]`);
  if (key) {
    playSound(key, audio);
  }
});

function playSound(key, audio) {
  audio.currentTime = 0; // allows to replay an already playing sound
  audio.play();
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 70);
}
