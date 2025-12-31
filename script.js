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
  {
    category: "frontend",
    title: "Khaier",
    desc: "A charity platform connecting donors with verified NGOs, featuring donation tracking and impact reports.",
    tech: [
      "HTML",
      "React.js",
      "TypeScript",
      "React Router",
      "Styled Components",
      "Vite",
    ],
    link: "https://khaier.vercel.app/",
  },
  {
    category: "frontend",
    title: "Hekto E-commerce Landing Page",
    desc: "A modern e-commerce landing page with responsive design and interactive elements.",
    tech: ["HTML", "CSS", "React.js", "React Styled Components", "Vite"],
    link: "https://project01-ecommerce-app.vercel.app/",
  },
  {
    category: "frontend",
    title: "Fylo dark theme landing page",
    desc: "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and/or Grid skills.",
    tech: ["HTML", "Tailwind CSS", "TypeScript", "Vite"],
    link: "https://fylo-dark-theme-landing-page-drab-phi.vercel.app/",
  },
  {
    category: "frontend",
    title: "Bookmark landing page",
    desc: "A simple bookmark landing page with a clean and modern design, featuring responsive layout and interactive elements.",
    tech: ["HTML", "Vanilla CSS", "JS"],
    link: "https://bassiony1.github.io/bookmark-landing-page/",
  },
  {
    category: "frontend",
    title: "X-O Game",
    desc: "Frontend Mentor Challenge: A classic Tic Tac Toe game with a sleek and modern design, featuring single-player and two-player modes.",
    tech: ["HTML", "CSS", "React.js", "React Styled Components", "Vite"],
    link: "https://react-xo-game.vercel.app/",
  },
  {
    category: "frontend",
    title: "Space tourism website",
    desc: "Multi-page space tourism website.",
    tech: ["HTML", "Tailwind CSS", "React.js", "Vite"],
    link: "https://bassiony1.github.io/music-player/",
  },
  {
    category: "frontend",
    title: "Github Finder App",
    desc: "A React.js application that allows users to search for GitHub profiles and view detailed information about users and their repositories.",
    tech: ["HTML", "CSS", "React Styled Components", "React.js", "Vite"],
    link: "https://github-finder-bassiony1.vercel.app/",
  },
  {
    category: "frontend",
    title: "Multi-step Form component",
    desc: "Frontend Advanced Challenge: An excellent test for your form-building and JS skills, this project pose many challenges along the way to completion.",
    tech: ["HTML", "Tailwind CSS", "React.js", "TypeScript", "Vite"],
    link: "https://multi-step-form-main-omega.vercel.app/",
  },
  {
    category: "frontend",
    title: "Modern To Do List",
    desc: "A sleek and modern to-do list application with light and dark mode support, local storage, and drag-and-drop functionality.",
    tech: ["HTML", "Vanilla CSS", "Vanilla js", "Vite"],
    link: "https://todo-app-pi-jade.vercel.app/",
  },
  {
    category: "frontend",
    title: "Password Generator App",
    desc: "A Password Generator App that creates strong, random passwords based on user-selected criteria.",
    tech: ["HTML", "Vanilla CSS", "Vanilla js"],
    link: "https://bassiony1.github.io/password-generator-app/",
  },
  {
    category: "frontend",
    title: "Picker Wheel",
    desc: "A fun and interactive picker wheel that allows users to input options and spin the wheel to make random selections.",
    tech: ["HTML", "Vanilla CSS", "Vanilla js"],
    link: "https://bassiony1.github.io/picker/",
  },
  {
    category: "frontend",
    title: "Music Player App",
    desc: "A sleek and modern dark music player application for anime Bleach soundtracks, featuring OST management and playback controls.",
    tech: ["HTML", "CSS", "js"],
    link: "https://react-xo-game.vercel.app/",
  },
  {
    category: "frontend",
    title: "Sticky Notes App",
    desc: "A simple and intuitive sticky notes application that allows users to create, edit, and delete notes on a virtual board.",
    tech: ["HTML", "Vanilla CSS", "Vanilla js"],
    link: "https://bassiony1.github.io/sticky-notes/",
  },
  {
    category: "frontend",
    title: "Space tourism website",
    desc: "Multi-page space tourism website.",
    tech: ["HTML", "Tailwind CSS", "React.js", "Vite"],
    link: "https://space-tourism-ten-beta.vercel.app/",
  },
  {
    category: "frontend",
    title: "Kayoanime Clone",
    desc: "A clone of The website KayoAnime.com",
    tech: ["HTML", "Bootstrap CSS", "Js"],
    link: "https://kayo-anime-cloner.vercel.app/",
  },
  {
    category: "frontend",
    title: "Interactive card details form Challenge",
    desc: "an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test.",
    tech: ["HTML", "Tailwind CSS", "TypeScript", "Vite"],
    link: "https://interactive-card-details-form-main-nine.vercel.app/",
  },
  {
    category: "frontend",
    title: "Ip Address Tracker",
    desc: "A sleek and modern IP Address Tracker application that allows users to track IP addresses and view their location on an interactive map.",
    tech: ["HTML", "Vanilla CSS", "JS"],
    link: "https://bassiony1.github.io/ip-tracker/",
  },
  {
    category: "frontend",
    title: "Url Shortener",
    desc: "A sleek and modern URL shortener application that allows users to create shortened links.",
    tech: ["HTML", "Vanilla CSS", "JS"],
    link: "https://bassiony1.github.io/url-shortner/",
  },
  {
    category: "frontend",
    title: "Results Summary component",
    desc: "This fun project was an excellent way to practice my HTML and CSS skills .",
    tech: ["HTML", "Tailwind CSS", "TypeScript", "Vite"],
    link: "https://results-summary-component-main-teal-phi.vercel.app/",
  },
  // endregion frontend
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
  {
    category: "automation",
    title: "Tv-Shows subtitle Renamer",
    desc: "A Light weight Windows Form To Rename Your Tv-Show Videos and subtitles with The Same Name From IMDB Using Some Scrapping and Regex and system Modules.",
    tech: ["C#", ".NET WinForms", "IMDB Scraping"],
    link: "https://github.com/bassiony1/Tv-Shows-And-Subtitle-Renamer",
  },

  // DESKTOP APP
  {
    category: "desktop",
    title: "Tv-Shows subtitle Renamer",
    desc: "A Light weight Windows Form To Rename Your Tv-Show Videos and subtitles with The Same Name From IMDB Using Some Scrapping and Regex and system Modules.",
    tech: ["C#", ".NET WinForms", "IMDB Scraping"],
    link: "https://github.com/bassiony1/Tv-Shows-And-Subtitle-Renamer",
  },
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
                        <a href="${project.link}" target="_blank" class="text-red-400 hover:text-white transition-colors"><i class="fas fa-external-link-alt"></i></a>
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
