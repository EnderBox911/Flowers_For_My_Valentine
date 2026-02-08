onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Sprinkle some cute floating hearts around the screen 💗
  const heartsWrap = document.querySelector(".hearts");
  if (heartsWrap) {
    const HEARTS = 26;

    for (let i = 0; i < HEARTS; i++) {
      const h = document.createElement("div");
      h.className = "heart";

      // random positions across the viewport
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // random size & motion
      const s = 10 + Math.random() * 14;          // px
      const dur = 6 + Math.random() * 8;          // seconds
      const delay = -Math.random() * dur;         // start at random point in animation
      const o = 0.35 + Math.random() * 0.55;

      h.style.left = x + "%";
      h.style.top = y + "%";
      h.style.setProperty("--s", s + "px");
      h.style.setProperty("--dur", dur + "s");
      h.style.animationDelay = delay + "s";
      h.style.setProperty("--o", o);

      heartsWrap.appendChild(h);
    }
  }
};
