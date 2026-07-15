/* Umesh Iyer portfolio — vanilla JS */
(function () {
  const NAV = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const SKILLS = [
    { icon: "🐍", name: "Python", desc: "Pandas · NumPy · ETL", pct: 92 },
    { icon: "🗄️", name: "SQL", desc: "PostgreSQL · CTEs · Windows", pct: 90 },
    { icon: "📊", name: "Power BI", desc: "DAX · Power Query", pct: 88 },
    { icon: "📈", name: "Tableau", desc: "Blending · Parameters", pct: 82 },
    { icon: "⚙️", name: "ETL / n8n", desc: "Pipelines · Orchestration", pct: 85 },
    { icon: "☁️", name: "GCP", desc: "BigQuery · Cloud", pct: 72 },
    { icon: "📓", name: "R", desc: "Statistical analysis", pct: 68 },
    { icon: "🍃", name: "MongoDB", desc: "NoSQL · Aggregation", pct: 70 },
  ];

  const PROJECTS = [
    { id: 1, cat: "bi", tags: ["Power BI","DAX","Python","SQL"], title: "E-Commerce Sales Analysis",
      problem: "Fragmented sales data across 10K+ records made revenue and product performance impossible to track in one place.",
      solution: "Built an end-to-end analytics pipeline with a DAX/Power Query dashboard tracking revenue, margin and AOV.",
      impact: ["10K+ records","+25% reporting efficiency","Interactive KPI dashboard"] },
    { id: 2, cat: "nlp", tags: ["Python","VADER NLP","Power BI"], title: "UK Public Sentiment Analysis",
      problem: "No structured way to quantify public sentiment shifts around UK policy events like the Energy Price Guarantee.",
      solution: "Built a Python + VADER NLP pipeline processing unstructured text, surfacing daily sentiment KPIs in Power BI.",
      impact: ["Event-driven analysis","Daily sentiment KPIs","Stakeholder-ready"] },
    { id: 3, cat: "bi", tags: ["Tableau","Analytics","Data Blending"], title: "British Airways Review Analysis",
      problem: "1,000+ customer reviews with no clear signal on what was driving low satisfaction scores.",
      solution: "Interactive Tableau dashboard using calculated fields, parameters and data blending across service dimensions.",
      impact: ["1,000+ reviews","Multi-dim analysis","Drove service initiatives"] },
    { id: 4, cat: "etl", tags: ["Python","n8n","APIs"], title: "Automated ETL Orchestration",
      problem: "Manual multi-source data prep was taking 4 hours per cycle and blocking analysis work.",
      solution: "Engineered Python ETL pipelines orchestrated in n8n with Google Sheets API refresh and validation checks.",
      impact: ["4 hrs → <10 min","−95% runtime","−25% reporting errors"] },
  ];

  const FILTERS = [
    { id: "all", label: "All" },
    { id: "bi", label: "BI & Dashboards" },
    { id: "etl", label: "Data Engineering" },
    { id: "nlp", label: "NLP / Analytics" },
  ];

  const EXPERIENCE = [{
    role: "AI & Data Intern",
    company: "YCX · Remote / London, UK",
    date: "Apr 2025 – Aug 2025",
    tags: ["Python","n8n","ETL","Google Sheets API"],
    points: [
      "Engineered high-throughput Python ETL pipelines orchestrated via n8n, integrating multi-source datasets and reducing runtime by ~95% (4 hrs → <10 min).",
      "Automated manual reporting workflows, cutting effort by 30% so the team could focus on analysis over data prep.",
      "Enforced automated validation and consistency rules on ingested data, cutting downstream reporting errors by 25%.",
      "Scheduled dataset refresh via Google Sheets API; translated stakeholder requirements into query-ready datasets.",
    ],
    impact: ["−95% pipeline runtime","−30% manual effort","−25% reporting errors"],
  }];

  const CERTS = [
    { icon: "📊", title: "Business Intelligence with Power BI and Tableau", provider: "Udemy", year: "2024", skills: ["Power BI","Tableau","Dashboards"] },
    { icon: "🗄️", title: "SQL Associate", provider: "DataCamp", year: "2025", skills: ["SQL","PostgreSQL","Analytics"] },
  ];

  const TAGLINES = [
    "> building ETL pipelines that ship_",
    "> turning messy data into decisions_",
    "> Python · SQL · Power BI · Tableau_",
    "> London, UK · open to opportunities_",
  ];

  const escape = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

  // ---------- Theme ----------
  const themeToggle = document.getElementById("themeToggle");
  const SUN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  const MOON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    themeToggle.innerHTML = t === "dark" ? SUN : MOON;
  }
  const saved = localStorage.getItem("theme");
  applyTheme(saved === "light" || saved === "dark" ? saved : "dark");
  themeToggle.addEventListener("click", () => {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  // ---------- Smooth scroll ----------
  function scrollTo(id) {
    document.getElementById("mobileMenu").hidden = true;
    document.getElementById("mobileMenuBtn").classList.remove("open");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-scroll]");
    if (t) { e.preventDefault(); scrollTo(t.dataset.scroll); }
  });

  // ---------- Nav ----------
  const navLinks = document.getElementById("navLinks");
  const mobileNavLinks = document.getElementById("mobileNavLinks");
  NAV.forEach((n) => {
    navLinks.insertAdjacentHTML("beforeend",
      `<li><button class="nav-link" data-nav="${n.id}" data-scroll="${n.id}">${n.label}</button></li>`);
    mobileNavLinks.insertAdjacentHTML("beforeend",
      `<li><button class="mob-link" data-scroll="${n.id}">${n.label}</button></li>`);
  });
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  mobileMenuBtn.addEventListener("click", () => {
    const menu = document.getElementById("mobileMenu");
    menu.hidden = !menu.hidden;
    mobileMenuBtn.classList.toggle("open", !menu.hidden);
  });

  // ---------- Scroll: progress + active + fab + navbar ----------
  const navbar = document.getElementById("navbar");
  const progressEl = document.getElementById("scrollProgress");
  const fab = document.getElementById("fab");
  fab.addEventListener("click", () => scrollTo("hero"));
  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 20);
    fab.hidden = !(y > 400);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progressEl.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    let current = "hero";
    for (const n of NAV) {
      const el = document.getElementById(n.id);
      if (el && el.getBoundingClientRect().top <= 120) current = n.id;
    }
    document.querySelectorAll("[data-nav]").forEach((b) => {
      b.classList.toggle("active", b.dataset.nav === current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Reveal ----------
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));

  // ---------- Typing ----------
  const tagEl = document.getElementById("tagline");
  let i = 0, j = 0, deleting = false;
  function tick() {
    const full = TAGLINES[i];
    if (!deleting) {
      tagEl.textContent = full.slice(0, ++j);
      if (j === full.length) { deleting = true; return setTimeout(tick, 1800); }
    } else {
      tagEl.textContent = full.slice(0, --j);
      if (j === 0) { deleting = false; i = (i + 1) % TAGLINES.length; }
    }
    setTimeout(tick, deleting ? 30 : 55);
  }
  setTimeout(tick, 400);

  // ---------- Skills ----------
  const skillsGrid = document.getElementById("skillsGrid");
  SKILLS.forEach((s, idx) => {
    const card = document.createElement("div");
    card.className = "glass skill-card reveal";
    card.innerHTML = `
      <div class="skill-icon">${s.icon}</div>
      <h3>${escape(s.name)}</h3>
      <p>${escape(s.desc)}</p>
      <div class="skill-bar-wrap"><div class="skill-bar" style="width:0%"></div></div>
      <span class="skill-pct">${s.pct}%</span>`;
    skillsGrid.appendChild(card);
    revealIO.observe(card);
    const bar = card.querySelector(".skill-bar");
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => { bar.style.width = s.pct + "%"; }, idx * 60);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(card);
  });

  // ---------- Timeline ----------
  const timeline = document.getElementById("timeline");
  EXPERIENCE.forEach((e) => {
    const wrap = document.createElement("div");
    wrap.className = "timeline-item reveal";
    wrap.innerHTML = `
      <div class="tl-dot"></div>
      <div class="glass tl-content">
        <div class="tl-header">
          <div><h3>${escape(e.role)}</h3><span class="tl-company">${escape(e.company)}</span></div>
          <span class="tl-date">${escape(e.date)}</span>
        </div>
        <div class="tl-tags">${e.tags.map((t) => `<span>${escape(t)}</span>`).join("")}</div>
        <ul class="tl-list">${e.points.map((p) => `<li>${escape(p)}</li>`).join("")}</ul>
        <div class="tl-impact">${e.impact.map((i) => `<span class="impact-chip">${escape(i)}</span>`).join("")}</div>
      </div>`;
    timeline.appendChild(wrap);
    revealIO.observe(wrap);
  });

  // ---------- Projects ----------
  const filterBar = document.getElementById("filterBar");
  const projectsGrid = document.getElementById("projectsGrid");
  let activeFilter = "all";
  FILTERS.forEach((f) => {
    const b = document.createElement("button");
    b.className = "filter-btn" + (f.id === "all" ? " active" : "");
    b.textContent = f.label;
    b.addEventListener("click", () => {
      activeFilter = f.id;
      filterBar.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      renderProjects();
    });
    filterBar.appendChild(b);
  });
  function renderProjects() {
    projectsGrid.innerHTML = "";
    PROJECTS.filter((p) => activeFilter === "all" || p.cat === activeFilter).forEach((p) => {
      const el = document.createElement("article");
      el.className = "glass project-card reveal";
      el.innerHTML = `
        <div class="project-card-header">
          <div class="project-meta-tags">${p.tags.map((t) => `<span class="p-tag">${escape(t)}</span>`).join("")}</div>
        </div>
        <h3 class="project-title">${escape(p.title)}</h3>
        <p class="project-problem"><strong style="color:var(--text-1)">Problem · </strong>${escape(p.problem)}</p>
        <p class="project-solution"><strong style="color:var(--text-1)">Solution · </strong>${escape(p.solution)}</p>
        <div class="project-impact">${p.impact.map((i) => `<span class="pi-chip">${escape(i)}</span>`).join("")}</div>`;
      projectsGrid.appendChild(el);
      revealIO.observe(el);
      requestAnimationFrame(() => el.classList.add("visible"));
    });
  }
  renderProjects();

  // ---------- Certs ----------
  const certsGrid = document.getElementById("certsGrid");
  CERTS.forEach((c) => {
    const el = document.createElement("div");
    el.className = "glass cert-card reveal";
    el.innerHTML = `
      <div class="cert-logo">${c.icon}</div>
      <div class="cert-body">
        <h3>${escape(c.title)}</h3>
        <span class="cert-provider">${escape(c.provider)}</span>
        <span class="cert-year">${escape(c.year)}</span>
        <div class="cert-skills">${c.skills.map((s) => `<span>${escape(s)}</span>`).join("")}</div>
      </div>`;
    certsGrid.appendChild(el);
    revealIO.observe(el);
  });

  // ---------- Contact ----------
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const s = document.getElementById("formSuccess");
    s.hidden = false;
    e.target.reset();
    setTimeout(() => { s.hidden = true; }, 4500);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
