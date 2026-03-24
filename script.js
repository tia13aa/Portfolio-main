const pastelBlues = [
  "#cfe9ff",
  "#b5dcff",
  "#9ed0ff",
  "#b6d9ff",
  "#ddeaf7",
  "#f8f8f8"
];

document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("cursor-trail");


  const color = pastelBlues[Math.floor(Math.random() * pastelBlues.length)];
  dot.style.background = color;

  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  document.body.appendChild(dot);

  setTimeout(() => {
    dot.style.transform = "translate(-50%, -50%) scale(0.5)";
    dot.style.opacity = "0";
  }, 10);
  setTimeout(() => {
    dot.remove();
  }, 400);
});