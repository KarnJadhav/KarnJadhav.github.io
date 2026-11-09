// (() => {
//   "use strict";
//   const toggle = document.querySelector(".menu-toggle");
//   const nav = document.querySelector("#site-nav");
//   if (toggle && nav) {
//     const closeMenu = () => {
//       toggle.setAttribute("aria-expanded", "false");
//       toggle.setAttribute("aria-label", "Open navigation");
//       nav.classList.remove("is-open");
//     };
//     toggle.addEventListener("click", () => {
//       const open = toggle.getAttribute("aria-expanded") !== "true";
//       toggle.setAttribute("aria-expanded", String(open));
//       toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
//       nav.classList.toggle("is-open", open);
//     });
//     nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
//     document.addEventListener("keydown", event => {
//       if (event.key === "Escape") closeMenu();
//     });
//     window.addEventListener("resize", () => {
//       if (window.innerWidth > 640) closeMenu();
//     });
//   }
//   const year = document.querySelector("#year");
//   if (year) year.textContent = String(new Date().getFullYear());
//   const internalLinks = document.querySelectorAll('a[href^="#"]');
//   internalLinks.forEach(link => {
//     link.addEventListener("click", event => {
//       const target = document.querySelector(link.getAttribute("href"));
//       if (!target) return;
//       event.preventDefault();
//       target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
//       history.replaceState(null, "", link.getAttribute("href"));
//     });
//   });
// })();

(() => {
  "use strict";

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  // Mobile navigation
  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
    };

    const openMenu = () => {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation");
      nav.classList.add("is-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen =
        toggle.getAttribute("aria-expanded") === "true";

      isOpen ? closeMenu() : openMenu();
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        closeMenu();
      }
    });
  }

  // Automatically update copyright year
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Smooth internal navigation
  const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  internalLinks.forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.getElementById(
        decodeURIComponent(href.slice(1))
      );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion.matches
          ? "auto"
          : "smooth"
      });

      history.replaceState(null, "", href);
    });
  });
})();
