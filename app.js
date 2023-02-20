const btn = document.querySelector("#submit");
console.log(btn);
let prev;
btn.addEventListener("mouseover", (e) => {
  prev = parseInt(e.target.style.transform.substring(11));
  const mouseX = e.offsetX;
  const width = e.target.offsetWidth;
  const distance = mouseX - width / 2;
  let motion = (distance * 60) / Math.abs(distance);
  if (prev > 50) motion = -60;
  if (prev < -50) motion = 60;
  e.target.style.transform = `translateX(${motion}px)`;
});
