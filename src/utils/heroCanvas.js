export function initHeroCanvas() {
  const canvas = document.getElementById("bubbleCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let w, h;
  let particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.r = Math.random() * 6 + 3;
      this.speed = Math.random() * 0.6 + 0.3;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 165, 0, ${this.alpha})`;
      ctx.fill();
    }

    update() {
      this.y -= this.speed;
      if (this.y < -10) {
        this.y = h + 10;
        this.x = Math.random() * w;
      }
      this.draw();
    }
  }

  function init() {
    particles = [];
    const count = Math.min(90, Math.floor(w / 15));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => p.update());
    requestAnimationFrame(animate);
  }

  init();
  animate();
}
