/* =========================================================================
   CRDN — shared interactions (vanilla JS, no dependencies)
   Scroll reveals, counters, sticky header + scrollspy, mobile menu,
   testimonial "read more" modal, and the projects-page lightbox.
   Everything degrades gracefully and respects prefers-reduced-motion.
   ========================================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---- Scroll reveals --------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal, .hero");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-64px 0px" }
    );
    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---- Animated counters ------------------------------------------------ */
  var counters = document.querySelectorAll("[data-count]");
  function runCounter(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var start = null;
    var duration = 1800;
    function tick(now) {
      if (start === null) start = now;
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(runCounter);
    } else {
      var countObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              countObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "-64px 0px" }
      );
      counters.forEach(function (el) { countObserver.observe(el); });
    }
  }

  /* ---- Header: scrolled state + process spine progress ------------------ */
  var header = document.querySelector(".header");
  var spine = document.querySelector(".process__spine");
  var processList = document.querySelector(".process__list");

  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 16);
    if (spine && processList && !reduceMotion) {
      var rect = processList.getBoundingClientRect();
      var vh = window.innerHeight;
      var total = rect.height + vh * 0.2;
      var progress = (vh * 0.75 - rect.top) / total;
      spine.style.setProperty("--spine", Math.max(0, Math.min(1, progress)));
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Scrollspy -------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav__link[data-spy]")
  );
  var spySections = navLinks
    .map(function (link) { return document.getElementById(link.getAttribute("data-spy")); })
    .filter(Boolean);
  if (spySections.length && "IntersectionObserver" in window) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle("is-active", link.getAttribute("data-spy") === id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    spySections.forEach(function (s) { spyObserver.observe(s); });
  }

  /* ---- Mobile menu ------------------------------------------------------ */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    header.classList.remove("is-menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  function toggleMenu() {
    var open = mobileMenu.classList.toggle("is-open");
    header.classList.toggle("is-menu-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", toggleMenu);
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  /* ---- Back to top ------------------------------------------------------ */
  var toTop = document.querySelector(".footer__top");
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---- Generic modal (testimonials + any [data-modal-target]) ----------- */
  var lastFocused = null;
  function openModal(modal) {
    lastFocused = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var closeBtn = modal.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
  }
  function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }
  document.querySelectorAll("[data-modal-target]").forEach(function (trigger) {
    var modal = document.getElementById(trigger.getAttribute("data-modal-target"));
    if (!modal) return;
    trigger.addEventListener("click", function () { openModal(modal); });
    modal.querySelectorAll("[data-modal-close]").forEach(function (btn) {
      btn.addEventListener("click", function () { closeModal(modal); });
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal(modal);
    });
  });

  /* ---- Lightbox (projects page galleries) ------------------------------- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector(".lightbox__img");
    var lbClose = lightbox.querySelector(".lightbox__close");
    function openLightbox(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lbClose.focus();
    }
    function hideLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    document.querySelectorAll("[data-lightbox]").forEach(function (item) {
      item.addEventListener("click", function () {
        openLightbox(item.getAttribute("data-lightbox"), item.getAttribute("data-alt"));
      });
    });
    lbClose.addEventListener("click", hideLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) hideLightbox();
    });
  }

  /* ---- Escape closes any open overlay ----------------------------------- */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (mobileMenu && mobileMenu.classList.contains("is-open")) closeMenu();
    document.querySelectorAll(".modal.is-open").forEach(closeModal);
    if (lightbox && lightbox.classList.contains("is-open")) {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  });

  /* ---- Current year ----------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
