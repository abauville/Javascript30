
function set_clock_position(date) {
  const hr  = date.getHours() % 12;
  const min = date.getMinutes() % 60;
  const sec = date.getSeconds() % 60;
  
  const hr_hand  = document.querySelector(".hour-hand");
  const min_hand = document.querySelector(".min-hand");
  const sec_hand = document.querySelector(".second-hand");
  
  hr_angle  = (hr + min/60.0) * (2.0*Math.PI/12.0)
  min_angle = min * (2.0*Math.PI/60.0)
  sec_angle = sec * (2.0*Math.PI/60.0)

  hr_hand.style.transform = `translate(-50%, -10%) rotate(${Math.PI + hr_angle}rad)`
  min_hand.style.transform = `translate(-50%, -10%) rotate(${Math.PI + min_angle}rad)`
  sec_hand.style.transform = `translate(-50%, -10%) rotate(${Math.PI + sec_angle}rad)`  

  // To prevent a rapid counterclockwise rotation when the clock goes around 0
  sec === 0 ? sec_hand.style.transitionDuration = "0s" : sec_hand.style.transitionDuration = "0.1s";
  min === 0 ? min_hand.style.transitionDuration = "0s" : min_hand.style.transitionDuration = "0.5s";
  hr === 0 ?  hr_hand.style.transitionDuration = "0s"  : hr_hand.style.transitionDuration = "0.5s";
}
setInterval(() => set_clock_position(new Date()), 1000);
