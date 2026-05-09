// Replace these image URLs with your own project images.
const PROJECTS = [
  {
    title: "EventNest – Event Management Platform",
    type: "Group Project",
    description: "Event service discovery and booking workflows in one place.",
    image: "event.png",
    tags: ["Teamwork", "UI", "Web"],
    github: "https://meenamurali1217-dot.github.io/makeMyEvent/",
    live: "",
  },
  {
    title: "Hospital Website",
    type: "Solo Project",
    description: "Informative hospital website with services and contact info.",
    image: "hopital.png",
    tags: ["Web", "HTML", "CSS"],
    github: "https://medisettikalyani-dot.github.io/HOSPITAL_WEBSITE/",
    // live: "",
  },
  {
    title: "Chess",
    type: "Solo Project",
    description: "A responsive and interactive chess game showcasing logic building and JavaScript skills.",
    image: "chess.png",
    tags: ["Quiz", "Interactive", "JavaScript"],
    github: "https://medisettikalyani-dot.github.io/chessgame/",
    // live: "",
  },
];


const CERTIFICATIONS = [
  {
    title: "Selling Skills",
    issuer: "ICICI Academy for skills",
    date: "2026",
    image: "icici.jpeg",
    // link: "",
    description: "",
  },
  {
    title: "Python Programming Certificate",
    issuer: "SCALER Topics",
    date: "2026",
    image: "python.png",
    // link: "https://example.com/certificate-python",
    description: "Applied practical Python skills in data handling and automation.",
  },
   {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON, Tata Consultancy Services",
    date: "2026",
    image: "TCS.png",
    // link: "https://example.com/certificate-tcs",
    description: "Career development program for young professionals in technology.",
  },
   {
    title: "DBMS",
    issuer: "SCALER Topics",
    date: "2026",
    image: "DBMS.png",
    // link: "https://example.com/certificate-python",
    description: "Applied practical Python skills in data handling and automation.",
  },

  {
    title: "Personality Development",
    issuer: "Simplilearn",
    date: "2026",
    image: "personality.png",
    // link: "https://example.com/certificate-personality",
    description: "Enhanced personal and professional skills for better communication and growth.",
  },
  {
    title: "Public Speaking",
    issuer: "Simplilearn",
    date: "2026",
    image: "public.png",
    // link: "https://example.com/certificate-public-speaking",
    description: "Developed effective public speaking and presentation skills.",
  },
 
  {
    title: "HTML",
    issuer: "Simplilearn",
    date: "2025",
    image: "html.png",
    // link: "https://example.com/certificate-html",
    description: "Fundamentals of HTML for web development.",
  },
];

function smoothScrollAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const headerOffset = 72;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset + 4;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
}

function setupMobileNav() {
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  if (!navToggle || !navList) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");
    navList.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("is-open")) {
        navList.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function renderProjects() {
  const container = document.getElementById("project-list");
  if (!container) return;

  container.innerHTML = PROJECTS.map((project) => {
    return `
      <article class="card project tilt-card" tabindex="0">
        <div class="project__image-wrapper">
          <img src="${project.image}" alt="${project.title} screenshot" class="project__image" data-image="${project.image}" />
        </div>
        <div class="project__content">
          <div class="project__badge">${project.type}</div>
          <h3 class="project__title">${project.title}</h3>
          <p class="project__subtitle">${project.description}</p>
          <div class="project__meta">
            <div class="project__tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="project__actions">
              ${project.github && project.github.trim() ? `<a href="${project.github}" class="btn btn--ghost btn--sm btn--icon" target="_blank" rel="noopener noreferrer"><svg class="btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.48.55-3-1.22-3-1.22-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-1.98-.18-4.06-1.02-4.06-4.55 0-1.01.35-1.84.93-2.49-.09-.23-.4-1.17.09-2.43 0 0 .75-.25 2.46.95a8.18 8.18 0 0 1 4.48 0c1.7-1.2 2.45-.95 2.45-.95.49 1.26.18 2.2.09 2.43.58.65.93 1.48.93 2.49 0 3.54-2.08 4.36-4.07 4.59.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>View on GitHub</a>` : ""}
              ${project.live && project.live.trim() ? `<a href="${project.live}" class="btn btn--primary btn--sm btn--icon" target="_blank" rel="noopener noreferrer"><svg class="btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Zm3 13H7v-2h10v2Zm0 4H7v-2h10v2Z"/></svg>Live Preview</a>` : ""}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderCertificates() {
  const container = document.getElementById("certificate-list");
  if (!container) return;

  container.innerHTML = CERTIFICATIONS.map((certificate) => {
    return `
      <article class="card certificate-card tilt-card">
        <div class="certificate__visual">
          <img src="${certificate.image}" alt="${certificate.title} certificate" data-image="${certificate.image}" />
        </div>
        <div>
          <p class="certificate__label">${certificate.issuer}</p>
          <h3>${certificate.title}</h3>
          <p class="card__note">${certificate.description}</p>
          <div class="certificate__meta">
            <span>${certificate.date}</span>
            ${certificate.link && certificate.link.trim() ? `<a class="btn btn--primary btn--sm btn--icon" href="${certificate.link}" target="_blank" rel="noopener noreferrer"><svg class="btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Zm3 13H7v-2h10v2Zm0 4H7v-2h10v2Z"/></svg>View Credential</a>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  document.querySelectorAll(
    ".section__header, .about__grid p, .skills__card, .project, .timeline__item, .contact__form, .certificate-card"
  ).forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

function setupContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    const toAddress = "kalyanimedisetti997@gmail.com";
    const subject = `Portfolio contact from ${name || "someone"}`;
    const bodyLines = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      "",
      "Message:",
      message || "(No message provided)",
    ].filter(Boolean);

    const mailto = `mailto:${encodeURIComponent(
      toAddress
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    window.location.href = mailto;
  });
}

function initTilt() {
  const tiltElements = document.querySelectorAll(
    ".tilt-card, .skills__card, .about__card, .about__highlights, .about__focus, .contact__form, .hero-card"
  );

  tiltElements.forEach((element) => {
    VanillaTilt.init(element, {
      max: 12,
      scale: 1.03,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
      transition: true,
    });
  });
}

function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

function setupThemeToggle() {
  const toggleButton = document.querySelector(".theme-toggle");
  const currentTheme = localStorage.getItem("theme");
  const body = document.body;

  if (currentTheme === "light") {
    body.classList.add("light");
  }

  toggleButton?.addEventListener("click", () => {
    const isLight = body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

function openModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  if (!modal || !modalImage) return;

  modalImage.src = imageSrc;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("image-modal");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModal() {
  const modal = document.getElementById("image-modal");
  const closeBtn = document.querySelector(".modal__close");
  if (!modal || !closeBtn) return;

  // Click on images to open modal
  document.addEventListener("click", (e) => {
    const target = e.target;
    const projectImage = target.closest(".project__image");
    const certificateWrapper = target.closest(".certificate__visual");
    const imageElement = projectImage || certificateWrapper?.querySelector("img");

    if (imageElement) {
      const imageSrc = imageElement.getAttribute("data-image") || imageElement.src;
      if (imageSrc) openModal(imageSrc);
    }
  });

  // Close button
  closeBtn.addEventListener("click", closeModal);

  // Close on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  smoothScrollAnchors();
  setupMobileNav();
  renderProjects();
  renderCertificates();
  setupReveal();
  setupContactForm();
  setupModal();
  setupThemeToggle();
  initTilt();
  setFooterYear();
});



