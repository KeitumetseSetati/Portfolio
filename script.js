// ======== PROFILE ========
const PROFILE = {
  name: "Keitumetse Cezil Setati",
  roles: ["Front-end Developer", "Back-end Developer", "Problem Solver"],
  summary:
    "Aspiring software engineer with a strong foundation in programming, web development, and database systems. Passionate about innovative solutions, collaboration, and continuous learning.",
  location: "Johannesburg, South Africa",
  email: "keitumetsecezil16@gmail.com",
  phone: "+27 68 328 3657",
  linkedin: "https://linkedin.com/in/keitumetse-setati-116252214",
  github: "https://github.com/KeitumetseSetati",

  // Skills (brand blocks)
  skills: [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "C#", icon: "devicon-csharp-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },

    { name: "SQL Server Management Studio", icon: "devicon-microsoftsqlserver-plain colored" },
    { name: "SQL", bi: "bi-database" },

    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },

    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "Visual Studio", icon: "devicon-visualstudio-plain colored" },

    { name: "Database management", bi: "bi-collection" },
    { name: "User interface design", icon: "devicon-figma-plain colored" },
    { name: "Software testing", icon: "devicon-jest-plain colored" },

    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },

    { name: "Apache NetBeans", icon: "devicon-apache-plain colored" },
    { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored" },
    { name: "REST APIs", icon: "devicon-postman-plain colored" },
    { name: "Java Swing", bi: "bi-ui-checks-grid" }
  ],

  // Projects
  projects: [
    {
      title: "Inventory Management System",
      tags: ["Backend", "SQL"],
      type: "backend",
      desc: "Stock tracking & order management app for a franchise: inventory levels, purchase orders, supplier management.",
      link: "#",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=60"
    },
    {
      title: "Student System App (C#)",
      tags: ["C#", "Desktop"],
      type: "ui",
      desc: "Attendance, grades, and student profile management desktop app.",
      link: "#",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=60"
    },
    {
      title: "Community Portal (Node, MongoDB, EJS)",
      tags: ["Web", "Node.js", "MongoDB", "EJS"],
      type: "web",
      desc: "Events, discussions, and resource sharing with auth and CRUD.",
      link: "#",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=60"
    },
    {
      title: "Wellness Management Application",
      tags: ["Web", "Health"],
      type: "web",
      desc: "Manage & track wellness activities, routines, and habits.",
      link: "#",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=60"
    }
  ],

  education: [
    { school: "Belgium Campus iTversity – Pretoria, GP", degree: "Bachelor of Computing: Software Engineering", period: "Expected 2025", details: "Relevant: OOP, DS&A, Web, DB Systems, SDLC, UML, Project Management" }
  ]
};

// ======== HELPERS ========
const $ = (id) => document.getElementById(id);

// ======== THEME TOGGLE ========
function getTheme(){ return localStorage.getItem('kc_theme') || 'dark'; }
function setTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('kc_theme', mode);
}
function setupThemeToggle(){
  setTheme(getTheme());
  const btn = $('themeToggle');
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ======== BIG NAME: moving-color stroke, then fill ========
function drawName() {
  const wrap = $('nameDraw');
  if (!wrap) return;

  const letters = [...PROFILE.name];                 // includes spaces
  const nonSpaceCount = letters.filter(ch => ch !== ' ').length;

  // width available for layout
  const container = wrap.closest('.container') || document.body;
  const available = container.getBoundingClientRect().width - 40;

  // equal spacing for letters
  const maxStep = 56, minStep = 28;
  const step = Math.max(minStep, Math.min(maxStep, Math.floor(available / (nonSpaceCount + 2))));
  const space = Math.floor(step * 0.6);

  // total width
  const total = 20 + letters.reduce((w, ch) => w + (ch === ' ' ? space : step), 0);

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'name-svg');
  svg.setAttribute('viewBox', `0 0 ${total} 120`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  // ===== Gradients (stroke animates / moves) =====
  const defs = document.createElementNS(svgNS, 'defs');

  // Flowing stroke gradient across the whole word
  const gStroke = document.createElementNS(svgNS, 'linearGradient');
  gStroke.setAttribute('id', 'strokeFlow');
  gStroke.setAttribute('gradientUnits', 'userSpaceOnUse');
  gStroke.setAttribute('x1', '0');      gStroke.setAttribute('y1', '0');
  gStroke.setAttribute('x2', String(total)); gStroke.setAttribute('y2', '0');
  const sA = document.createElementNS(svgNS, 'stop'); sA.setAttribute('offset', '0%');   sA.setAttribute('stop-color', '#4ea1ff');
  const sB = document.createElementNS(svgNS, 'stop'); sB.setAttribute('offset', '50%');  sB.setAttribute('stop-color', '#f7df1e');
  const sC = document.createElementNS(svgNS, 'stop'); sC.setAttribute('offset', '100%'); sC.setAttribute('stop-color', '#4ea1ff');
  const anim = document.createElementNS(svgNS, 'animateTransform');
  anim.setAttribute('attributeName', 'gradientTransform');
  anim.setAttribute('type', 'translate');
  anim.setAttribute('from', `-${total} 0`);
  anim.setAttribute('to', `${total} 0`);
  anim.setAttribute('dur', '4s');
  anim.setAttribute('repeatCount', 'indefinite');
  gStroke.appendChild(sA); gStroke.appendChild(sB); gStroke.appendChild(sC); gStroke.appendChild(anim);
  defs.appendChild(gStroke);

  svg.appendChild(defs);

  // build letters (fill underneath, stroke on top)
  let x = 10, i = 0;
  letters.forEach(ch => {
    if (ch === ' ') { x += space; return; }

    const g = document.createElementNS(svgNS, 'g');

    // Fill layer
    const tf = document.createElementNS(svgNS, 'text');
    tf.setAttribute('x', String(x));
    tf.setAttribute('y', '86');
    tf.setAttribute('font-family', 'Space Grotesk, Inter, Arial, sans-serif');
    tf.setAttribute('font-weight', '800');
    tf.setAttribute('font-size', '64');
    tf.setAttribute('class', 'letter-fill');
    tf.style.setProperty('--i', i);
    tf.textContent = ch;
    g.appendChild(tf);

    // Stroke layer (moving gradient + draw)
    const ts = document.createElementNS(svgNS, 'text');
    ts.setAttribute('x', String(x));
    ts.setAttribute('y', '86');
    ts.setAttribute('font-family', 'Space Grotesk, Inter, Arial, sans-serif');
    ts.setAttribute('font-weight', '800');
    ts.setAttribute('font-size', '64');
    ts.setAttribute('class', 'letter-stroke');
    ts.style.setProperty('--i', i);
    ts.textContent = ch;
    g.appendChild(ts);

    // per-letter stroke length (for smooth drawing)
    const len = (typeof ts.getComputedTextLength === 'function') ? ts.getComputedTextLength() : 220;
    ts.setAttribute('stroke-dasharray', String(len));
    ts.setAttribute('stroke-dashoffset', String(len));
    ts.style.setProperty('--len', len);

    svg.appendChild(g);
    x += step; i += 1;
  });

  wrap.innerHTML = '';
  wrap.appendChild(svg);
}

// ======== RENDER ========
function renderBasic(){
  $('yearNow').textContent = new Date().getFullYear();
  requestAnimationFrame(()=>document.body.classList.add('page-in'));

  $('linkLinkedIn').href = PROFILE.linkedin;
  $('linkGitHub').href = PROFILE.github;

  $('aboutSummary').textContent = PROFILE.summary;
  const ul = document.getElementById('aboutHighlights'); ul.innerHTML = '';
  ["Former SRC Member (leadership)","Tutoring peers in coding modules","Regular LeetCode and competitive programming"].forEach(h=>{
    const li=document.createElement('li');
    li.innerHTML = `<i class="bi bi-check2-circle text-warning me-2"></i>${h}`;
    ul.appendChild(li);
  });

  const focus = $('focusBadges'); focus.innerHTML = '';
  ["Front-end Developer","Back-end Developer","Problem Solver"].forEach(r=>{
    const span=document.createElement('span');
    span.className='badge-focus';
    span.textContent=r;
    focus.appendChild(span);
  });

  const emailHref = `mailto:${PROFILE.email}`;
  $('contactEmail').href = emailHref;
  $('contactEmail').textContent = PROFILE.email;
  $('linkEmail').href = '#contact';
  $('contactPhone').textContent = PROFILE.phone;
  $('contactLocation').textContent = PROFILE.location;
  $('contactLinkedIn').href = PROFILE.linkedin;
  $('contactGitHub').href = PROFILE.github;

  // Skills grid
  const grid = $('skillsGrid'); grid.innerHTML = '';
  PROFILE.skills.forEach(s=>{
    const item = document.createElement('div');
    item.className = 'skill-block';
    const icon = s.icon
      ? `<i class="${s.icon} skill-icon" aria-hidden="true"></i>`
      : s.bi
        ? `<i class="skill-icon bi ${s.bi}" aria-hidden="true"></i>`
        : s.img
          ? `<span class="skill-icon"><img src="${s.img}" alt="${s.name} logo"></span>` : '';
    item.innerHTML = `${icon}<span class="skill-name">${s.name}</span>`;
    grid.appendChild(item);
  });

  // Projects
  const pgrid = $('projectGrid'); pgrid.innerHTML = '';
  PROFILE.projects.forEach((p, idx)=>{
    const col = document.createElement('div'); col.className = 'col-12 col-sm-6 col-lg-4 project'; col.dataset.type = p.type;
    col.innerHTML = `
      <div class="square" data-index="${idx}" title="Click for details">
        <img src="${p.image}" alt="${p.title}">
        <div class="overlay"></div>
        <div class="meta">
          <div class="title h5 mb-0">${p.title}</div>
          <div class="tags d-flex flex-wrap gap-1">${p.tags.map(t=>`<span class='tag'>${t}</span>`).join('')}</div>
        </div>
      </div>`;
    pgrid.appendChild(col);
  });

  // Education
  const edu = $('educationList'); edu.innerHTML = '';
  PROFILE.education.forEach(e=>{
    const col = document.createElement('div'); col.className = 'col-12 col-md-6';
    col.innerHTML = `<div class="card p-3 glass h-100">
        <div class="fw-bold">${e.degree}</div>
        <div class="text-muted">${e.school}</div>
        <div class="small text-muted">${e.period}</div>
        <p class="mb-0 mt-2">${e.details || ''}</p>
      </div>`;
    edu.appendChild(col);
  });
}

// Project modal + filtering
function setupProjectGrid(){
  const modalEl = $('projectModal');
  const modal = modalEl ? new bootstrap.Modal(modalEl) : null;
  const modalTitle = $('projectModalTitle');
  const modalDesc = $('projectModalDesc');
  const modalImg = $('projectModalImage');
  const modalTags = $('projectModalTags');
  const modalLink = $('projectModalLink');

  const grid = $('projectGrid');
  if(grid && modal){
    grid.addEventListener('click', (e)=>{
      const card = e.target.closest('.square'); if(!card) return;
      const p = PROFILE.projects[+card.dataset.index];
      modalTitle.textContent = p.title;
      modalDesc.textContent = p.desc;
      modalImg.src = p.image;
      modalTags.innerHTML = p.tags.map(t=>`<span class='tag'>${t}</span>`).join('');
      modalLink.href = p.link || '#';
      modal.show();
    });
  }

  document.querySelectorAll('.filter-tabs .filter').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.filter-tabs .filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.filter;
      document.querySelectorAll('#projectGrid .project').forEach(el=>{
        el.style.display = (type==='all' || el.dataset.type===type) ? '' : 'none';
      });
    });
  });
}

// Back to top
function setupBackToTop(){
  const btn = $('backToTop'); if(!btn) return;
  window.addEventListener('scroll', ()=>{
    btn.style.display = window.scrollY > 600 ? 'block' : 'none';
  });
  btn.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
}

// AOS + Name draw (+ redraw on resize)
function setupEffects(){
  if(window.AOS){ AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true }); }
  drawName();
}
let _drawRaf;
window.addEventListener('resize', ()=>{ cancelAnimationFrame(_drawRaf); _drawRaf = requestAnimationFrame(drawName); });

// ======== INIT ========
window.addEventListener('DOMContentLoaded', ()=>{
  setupThemeToggle();
  renderBasic();
  setupProjectGrid();
  setupBackToTop();
});
window.addEventListener('load', setupEffects);
