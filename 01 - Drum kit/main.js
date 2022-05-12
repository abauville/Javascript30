const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

const key2audio = {};

keys.forEach( (key, ind) => {
  key2audio[key.dataset.key] = audios[ind];
  key.addEventListener("click", (event) => playSound(event))
});

function playSound(event) {
  const key = event.currentTarget;
  audio = key2audio[key.dataset.key];
  console.log(key, audio);
  audio.play();
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 70);
}

