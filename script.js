(() => {
  const t = document.querySelector(".menu-toggle"),
    n = document.querySelector(".primary-nav"),
    y = document.querySelector("#year");
  if (y) y.textContent = new Date().getFullYear();
  if (t && n) {
    t.addEventListener("click", () => {
      const o = t.getAttribute("aria-expanded") === "true";
      t.setAttribute("aria-expanded", String(!o));
      t.setAttribute("aria-label", o ? "Open navigation" : "Close navigation");
      n.classList.toggle("is-open", !o);
    });
    n.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        n.classList.remove("is-open");
        t.setAttribute("aria-expanded", "false");
      }),
    );
    document.addEventListener("click", (e) => {
      if (!n.contains(e.target) && !t.contains(e.target)) {
        n.classList.remove("is-open");
        t.setAttribute("aria-expanded", "false");
      }
    });
  }
  const p = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".primary-nav a").forEach((a) => {
    if (a.getAttribute("href") === p) a.setAttribute("aria-current", "page");
  });
  const f = document.querySelector("#enquiry-form"),
    s = document.querySelector("#form-status");
  if (f && s)
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!f.reportValidity()) return;
      s.textContent =
        "Your details passed the browser checks, but this preview is not connected to a form service. Nothing has been sent or stored. Connect a secure form endpoint and update the privacy notice before launch.";
    });
})();
