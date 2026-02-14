// FADE IN
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

// FLOATING HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 600);

// RUNAWAY NO BUTTON
function moveNo() {
  const btn = document.querySelector(".no-btn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

// COUNTDOWN
const countdownEl = document.getElementById("countdown");
const targetDate = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownEl.innerHTML = "Happy Valentine's Day My Love ❤️";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdownEl.innerHTML = days + " Days Until Valentine's Day 💕";
  }
}, 1000);

// TYPEWRITER
const text = "From the moment you walked into my life, I never knew you would be special to me Ponne. I love you so much and i want u to be my valentine forever. Through every smile, every tear, and every moment in between, I want to be there for you ❤️";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}

typeWriter();

// FIREWORKS
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework(x, y) {
  for (let i = 0; i < 80; i++) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.fill();
  }
}

function sayYes() {
  alert("SHE SAID YES ❤️");
  for (let i = 0; i < 15; i++) {
    firework(Math.random() * canvas.width, Math.random() * canvas.height);
  }
}

// CUSTOM CURSOR
const cursor = document.createElement("div");
cursor.classList.add("cursor-heart");
cursor.innerHTML = "💖";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  const trail = document.createElement("div");
  trail.classList.add("trail-heart");
  trail.innerHTML = "❤️";
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";
  document.body.appendChild(trail);

  setTimeout(() => trail.remove(), 600);
});
