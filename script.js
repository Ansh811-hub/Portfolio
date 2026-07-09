/* ============================================================
   TYPEWRITER — hero dynamic text cluster
   ============================================================ */
(function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const phrases = [
    "manages distributed systems smoothly.",
    "optimizes validation under load.",
    "reduces query latency by 50%.",
    "architects clean high-traffic APIs.",
  ];

  if (prefersReduced) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
      setTimeout(tick, 45 + Math.random() * 35);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, 25);
    }
  }
  tick();
})();

/* ============================================================
   HERO NAME — split into animated characters
   ============================================================ */
(function splitHeroName() {
  const el = document.getElementById("hero-name");
  if (!el) return;
  const html = el.innerHTML;
  const lines = html.split("<br/>");
  let delay = 0;
  el.innerHTML = lines
    .map((line) =>
      line
        .split("")
        .map((ch) => {
          const span = ch === " " ? "&nbsp;" : ch;
          const out = `<span class="char" style="animation-delay:${delay}s">${span}</span>`;
          delay += 0.04;
          return out;
        })
        .join("")
    )
    .join("<br/>");
})();

/* ============================================================
   3D TILT + SHINE — project cards, gallery, certs
   ============================================================ */
(function initTilt() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const targets = document.querySelectorAll(".gallery__item, .certs__item");
  targets.forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      el.style.setProperty("--mx", px + "%");
      el.style.setProperty("--my", py + "%");

      const rx = ((y / rect.height) - 0.5) * -8;
      const ry = ((x / rect.width) - 0.5) * 8;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
    });
  });

  const projects = document.querySelectorAll(".project");
  projects.forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const rect = el.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", px + "%");
      el.style.setProperty("--my", py + "%");
    });
  });
})();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => io.observe(item));
})();

/* ============================================================
   ANIMATED NETWORK BACKGROUND — coded pattern (no image)
   ============================================================ */
(function initHeroGraph() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let pointerX = 0;
  let pointerY = 0;
  let scrollProgress = 0;
  let scrollY = 0;

  const nodes = [];
  const velocityScale = 34;
  let rafId = 0;
  let lastTime = 0;

  function updateScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    scrollY = window.scrollY || window.pageYOffset || 0;
    scrollProgress = max > 0 ? scrollY / max : 0;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(90, Math.floor((width * height) / 15000));
    nodes.length = 0;
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.45 + Math.random() * 0.75,
        vx: (Math.random() - 0.5) * velocityScale,
        vy: (Math.random() - 0.5) * velocityScale,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function drawFrame(time) {
    rafId = window.requestAnimationFrame(drawFrame);

    const now = time || 0;
    const dt = Math.min((now - lastTime) / 1000 || 0.016, 0.04);
    lastTime = now;

    ctx.clearRect(0, 0, width, height);

    const heroFade = Math.max(0, 1 - scrollY / (window.innerHeight * 1.8));
    const renderAlpha = 0.38 + heroFade * 0.62;
    canvas.style.opacity = renderAlpha.toFixed(3);

    const depthShiftX = (pointerX - width * 0.5) * 0.03;
    const depthShiftY = (pointerY - height * 0.5) * 0.03;
    const scrollDrift = scrollProgress * 280;

    const maxDist = Math.min(240, Math.max(140, width * 0.2));

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];

      if (!prefersReduced) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < -30 || n.x > width + 30) n.vx *= -1;
        if (n.y < -30 || n.y > height + 30) n.vy *= -1;
      }

      const nx = n.x + depthShiftX * n.z;
      const ny = n.y + depthShiftY * n.z - scrollDrift * (n.z - 0.45) * 0.08;

      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const mx = m.x + depthShiftX * m.z;
        const my = m.y + depthShiftY * m.z - scrollDrift * (m.z - 0.45) * 0.08;

        const dx = nx - mx;
        const dy = ny - my;
        const dist = Math.hypot(dx, dy);
        if (dist > maxDist) continue;

        const alpha = (1 - dist / maxDist) * 0.52 * ((n.z + m.z) * 0.5) * renderAlpha;
        ctx.strokeStyle = "rgba(222, 230, 245, " + alpha.toFixed(3) + ")";
        ctx.lineWidth = 0.55 + ((n.z + m.z) * 0.5) * 0.75;
        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.lineTo(mx, my);
        ctx.stroke();
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const pulse = 0.8 + (Math.sin(now * 0.0016 + n.phase) + 1) * 0.14;
      const x = n.x + depthShiftX * n.z;
      const y = n.y + depthShiftY * n.z - scrollDrift * (n.z - 0.45) * 0.08;
      const r = (1.25 + n.z * 1.7) * pulse;

      ctx.beginPath();
      ctx.fillStyle = "rgba(236, 242, 255, " + ((0.42 + n.z * 0.34) * renderAlpha).toFixed(3) + ")";
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  window.addEventListener("resize", resize);
  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("pointermove", (e) => {
    pointerX = e.clientX;
    pointerY = e.clientY;
  });

  updateScroll();
  resize();

  if (prefersReduced) {
    drawFrame(0);
    window.cancelAnimationFrame(rafId);
    return;
  }
  rafId = window.requestAnimationFrame(drawFrame);
})();

/* ============================================================
   MOBILE NAV TOGGLE (progressive enhancement, nav hidden on
   small screens via CSS; keeping structure simple/no-JS-required)
   ============================================================ */