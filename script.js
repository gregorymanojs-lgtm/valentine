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

let particles = [];
let fireworksActive = false;

function createExplosion(x, y) {
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: x,
      y: y,
      radius: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      speedX: (Math.random() - 0.5) * 10,
      speedY: (Math.random() - 0.5) * 10
    });
  }
}

function animateFireworks() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.radius *= 0.96;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.radius < 0.5) {
      particles.splice(index, 1);
    }
  });

  requestAnimationFrame(animateFireworks);
}

animateFireworks(); // keep animation running

function startCelebration() {
  if (fireworksActive) return;
  fireworksActive = true;

  setInterval(() => {
    const randomX = Math.random() * canvas.width;
    const randomY = Math.random() * canvas.height / 2;
    createExplosion(randomX, randomY);
  }, 600); // burst every 0.6 seconds
}

let celebrated = false;

function sayYes() {
  if (celebrated) return;
  celebrated = true;

  startCelebration();

  const message = document.createElement("h2");
  message.innerHTML = "SHE SAID YES ❤️";
  message.style.color = "#ff1a75";
  message.style.fontSize = "2rem";
  message.style.marginTop = "20px";

  document.querySelector(".proposal").appendChild(message);
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

