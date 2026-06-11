document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.floating-nav a[href^="#"]');
  const sections = document.querySelectorAll("section[id]");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.removeAttribute("aria-current");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "section");
          }
        });
      });
    },
    { rootMargin: "-25% 0px -60% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
});
