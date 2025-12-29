const projectsData = [
  // BACKEND
  {
    category: "backend",
    title: "ANEES (Autism Therapy)",
    desc: "Gamified RESTful API to treat delayed language in autistic children. Top 27 MENA Award Winner.",
    tech: ["Django REST", "PostgreSQL", "Docker", "AI Integration"],
    link: "https://github.com/bassiony1/public-ANEES",
  },
  {
    category: "backend",
    title: "Store Core API",
    desc: "Production-ready E-commerce API handling carts, orders, and payments with Role-Based Access Control.",
    tech: ["DRF", "Redis Cache", "Stripe", "JWT"],
    link: "https://github.com/bassiony1/store-core",
  },

  // FRONTEND
  // {
  //   category: "frontend",
  //   title: "Dashboard UI",
  //   desc: "Responsive admin dashboard with data visualization charts and dark mode toggle.",
  //   tech: ["React.js", "Tailwind CSS", "Recharts"],
  //   link: "#",
  // },

  // FULL STACK
  {
    category: "fullstack",
    title: "Bondly (Real-Time Chat)",
    desc: "Architected unified WebSocket layer for instant messaging and notifications using Redis and Channels.",
    tech: ["Django Channels", "Redis", "Celery", "WebSockets"],
    link: "https://github.com/bassiony1/bondly",
  },
  {
    category: "fullstack",
    title: "Shelf Master (Library Management System)",
    desc: "Architected and developed a full-stack library management solution to streamline membership, inventory tracking, and penalty enforcement.",
    tech: ["Django", "PostgreSQL", "Tailwind CSS", "Git"],
    link: "https://github.com/bassiony1/shelf-master",
  },

  // AUTOMATION
  // {
  //   category: "automation",
  //   title: "Data Scraper Bot",
  //   desc: "Automated python script to scrape real estate data and export to Excel daily.",
  //   tech: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
  //   link: "#",
  // },

  // DESKTOP APP
  // {
  //   category: "desktop",
  //   title: "Inventory Manager",
  //   desc: "Desktop application for offline inventory tracking for local warehouses.",
  //   tech: ["Python", "PyQt5", "SQLite"],
  //   link: "#",
  // },
];

function filterProjects(category, btnElement) {
  const grid = document.getElementById("projects-grid");
  const buttons = document.querySelectorAll(".filter-btn");

  // Update Buttons State
  buttons.forEach((btn) => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  // Filter Data
  const filtered = projectsData.filter((p) => p.category === category);

  // Clear Grid
  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="text-red-300 opacity-50 col-span-2 text-center py-10">No projects found in this category yet.</p>`;
    return;
  }

  // Render Cards with Animation Delay
  filtered.forEach((project, index) => {
    const card = document.createElement("div");
    card.className =
      "bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r hover:bg-red-900/30 transition-all duration-300 animate-fadeInUp";
    card.style.animationDelay = `${index * 100}ms`; // Staggered animation

    // Generate Tags HTML
    const tagsHtml = project.tech
      .map(
        (t) =>
          `<span class="text-xs font-mono text-red-400 bg-red-950/50 px-2 py-1 rounded border border-red-900/50">${t}</span>`
      )
      .join("");

    card.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-white">${project.title}</h3>
                        <a href="${project.link}" class="text-red-400 hover:text-white transition-colors"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <p class="text-red-100 text-sm mb-4 opacity-80 leading-relaxed">${project.desc}</p>
                    <div class="flex flex-wrap gap-2">
                        ${tagsHtml}
                    </div>
                `;
    grid.appendChild(card);
  });
}

// ================= LAYOUT LOGIC (EXISTING) =================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Projects (Load Backend by default)
  const defaultBtn = document.querySelector(".filter-btn.active");
  filterProjects("backend", defaultBtn);

  const bars = Array.from(document.querySelectorAll(".portfolio-bar"));
  const homeContent = document.getElementById("home-content");

  const BAR_SIZE_REM = 4; // 4rem
  const BREAKPOINT = 1024; // Standard Tablet Landscape / Laptop

  let isMobile = window.innerWidth < BREAKPOINT;
  let activeSplitIndex = -1;

  function getRemPixels() {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  function updateLayout() {
    const rem = getRemPixels();
    const barSize = BAR_SIZE_REM * rem;
    const totalBars = bars.length;
    const totalBarThickness = totalBars * barSize;

    if (isMobile) {
      document.body.classList.add("is-vertical");
      document.body.classList.remove("is-horizontal");
    } else {
      document.body.classList.add("is-horizontal");
      document.body.classList.remove("is-vertical");
    }

    if (isMobile) {
      homeContent.style.paddingTop = "0px";
      homeContent.style.paddingLeft = "0px";
      homeContent.style.top = `${totalBarThickness}px`;
      homeContent.style.height = `calc(100vh - ${totalBarThickness}px)`;
      homeContent.style.left = "0";
      homeContent.style.width = "100%";
    } else {
      homeContent.style.top = "0";
      homeContent.style.height = "100vh";
      homeContent.style.width = "100vw";
      homeContent.style.paddingLeft = `${totalBarThickness}px`;
      homeContent.style.paddingTop = "0px";
    }

    bars.forEach((bar, index) => {
      const handle = bar.querySelector(".bar-handle");
      const content = bar.querySelector(".content-container");

      bar.style.left = "";
      bar.style.right = "";
      bar.style.top = "";
      bar.style.bottom = "";
      bar.style.width = "";
      bar.style.height = "";
      handle.style.left = "";
      handle.style.right = "";
      handle.style.top = "";
      handle.style.bottom = "";
      handle.style.width = "";
      handle.style.height = "";
      content.style.left = "";
      content.style.right = "";
      content.style.top = "";
      content.style.bottom = "";

      const isActive = index === activeSplitIndex;
      const isLeftGroup = index < activeSplitIndex;
      const isRightGroup = index > activeSplitIndex;

      if (isActive) {
        bar.classList.add("active", "z-30");
        bar.classList.remove("z-10", "z-20");
      } else {
        bar.classList.remove("active", "z-30");
        bar.classList.add(isLeftGroup ? "z-10" : "z-20");
      }

      if (isMobile) {
        handle.style.width = "100%";
        handle.style.height = `${barSize}px`;

        if (activeSplitIndex === -1) {
          bar.style.top = `${index * barSize}px`;
          bar.style.width = "100%";
          bar.style.height = `${barSize}px`;
          handle.style.top = "0";
        } else {
          if (isLeftGroup) {
            bar.style.top = `${index * barSize}px`;
            bar.style.width = "100%";
            bar.style.height = `${barSize}px`;
            handle.style.top = "0";
          } else if (isRightGroup) {
            const offsetFromEnd = (totalBars - 1 - index) * barSize;
            bar.style.bottom = `${offsetFromEnd}px`;
            bar.style.width = "100%";
            bar.style.height = `${barSize}px`;
            bar.style.top = "auto";
            handle.style.bottom = "0";
          } else {
            bar.style.top = `${index * barSize}px`;
            const offsetFromEnd = (totalBars - 1 - index) * barSize;
            bar.style.bottom = `${offsetFromEnd}px`;
            bar.style.width = "100%";
            bar.style.height = "auto";
            handle.style.bottom = "0";
            handle.style.top = "auto";
            content.style.top = "0";
            content.style.bottom = `${barSize}px`;
          }
        }
      } else {
        handle.style.width = `${barSize}px`;
        handle.style.height = "100%";

        if (activeSplitIndex === -1) {
          bar.style.left = `${index * barSize}px`;
          bar.style.width = `${barSize}px`;
          bar.style.height = "100%";
          handle.style.left = "0";
        } else {
          if (isLeftGroup) {
            bar.style.left = `${index * barSize}px`;
            bar.style.width = `${barSize}px`;
            bar.style.height = "100%";
            handle.style.left = "0";
          } else if (isRightGroup) {
            const offsetFromEnd = (totalBars - 1 - index) * barSize;
            bar.style.right = `${offsetFromEnd}px`;
            bar.style.width = `${barSize}px`;
            bar.style.height = "100%";
            bar.style.left = "auto";
            handle.style.left = "0";
          } else {
            bar.style.left = `${index * barSize}px`;
            const offsetFromEnd = (totalBars - 1 - index) * barSize;
            bar.style.right = `${offsetFromEnd}px`;
            bar.style.width = "auto";
            bar.style.height = "100%";
            handle.style.right = "0";
            handle.style.left = "auto";
            content.style.left = "0";
            content.style.right = `${barSize}px`;
          }
        }
      }
    });

    if (activeSplitIndex === -1) {
      homeContent.classList.remove("opacity-0", "pointer-events-none");
      homeContent.classList.add("opacity-100");
    } else {
      homeContent.classList.add("opacity-0", "pointer-events-none");
      homeContent.classList.remove("opacity-100");
    }
  }

  bars.forEach((bar) => {
    const handle = bar.querySelector(".bar-handle");
    handle.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = parseInt(bar.dataset.index);

      if (activeSplitIndex === -1) {
        activeSplitIndex = index;
      } else {
        if (index === activeSplitIndex) {
          activeSplitIndex = index + 1;
          if (activeSplitIndex >= bars.length) {
            activeSplitIndex = -1;
          }
        } else {
          activeSplitIndex = index;
        }
      }
      updateLayout();
    });
  });

  window.addEventListener("resize", () => {
    const newIsMobile = window.innerWidth < BREAKPOINT;
    if (newIsMobile !== isMobile) {
      isMobile = newIsMobile;
      activeSplitIndex = -1;
      updateLayout();
    } else {
      updateLayout();
    }
  });

  updateLayout();
});
