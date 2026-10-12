// Image paths (files live in the images/ folder)
const IMG = {
  "project-todo": "images/project-todo.jpg",
  "project-message": "images/project-message.jpg",
  hero: "images/hero.jpg",
  "cert-4": "images/cert-4.jpg",
  "project-qr": "images/project-qr.jpg",
  "project-weather": "images/project-weather.jpg",
  "project-tictactoe": "images/project-tictactoe.jpg",
  "cert-3": "images/cert-3.jpg",
  "cert-5": "images/cert-5.jpg",
  "cert-2": "images/cert-2.jpg",
  "cert-1": "images/cert-1.jpg",
  "project-calculator": "images/project-calculator.jpg",
  about: "images/about.jpg",
  "project-fresh": "images/project-fresh.svg",
  "project-portfolio": "images/project-portfolio.svg",
  "project-restaurant": "images/project-restaurant.svg",
  "project-flight": "images/project-flight.svg",
  "project-trip": "images/project-trip.svg",
  "resume-1": "images/resume-1.jpg",
};
const projects = [
  [
    "Restaurant Management & Ordering System",
    "restaurant",
    null,
    "Full-stack ordering app: menu management, cart, order creation, updates and tracking, with authentication, validation and MySQL storage.",
    "🍽️",
    "React, Node.js, Express.js, MySQL",
  ],
  [
    "FreshCart Grocery Store",
    "fresh",
    "https://pavi302005.github.io/E-Commerce-Website/",
    "A full grocery e-commerce site: four aisles, weekly deals, cart, login, order history and checkout, with a backend.",
  ],
  [
    "Flight Finder",
    "flight",
    null,
    "Retrieves, filters and compares flights and fares through REST APIs, with loading states and error handling.",
    "✈️",
    "React, JavaScript, REST APIs",
  ],
  [
    "Trip Budget & Packing Planner",
    "trip",
    null,
    "Node.js REST APIs for trip budgets, expenses and packing lists, with MySQL, CRUD endpoints and centralized error handling.",
    "🧳",
    "Node.js, MySQL, REST APIs",
  ],
  [
    "3D Portfolio (this site)",
    "portfolio",
    null,
    "A 3D, voice-guided portfolio built with React and Three.js.",
  ],
  [
    "Weather Report",
    "weather",
    "https://pavi302005.github.io/weather-app/",
    "Real-time weather from a public API: temperature, humidity and conditions for any city.",
  ],
  [
    "Tic-Tac-Toe",
    "tictactoe",
    "https://pavi302005.github.io/tic-tac-toe/",
    "A two-player game that highlights the winner and resets after each round.",
  ],
  [
    "Calculator",
    "calculator",
    "https://pavi302005.github.io/calculator/",
    "A JavaScript calculator with all basic operations, a clear key and a live display.",
  ],
  [
    "Pass the Message",
    "message",
    "https://pavi302005.github.io/project/",
    "Type a message and see it appear instantly. A small DOM interaction exercise.",
  ],
  [
    "To-Do List",
    "todo",
    "https://pavi302005.github.io/grocery/",
    "Add, tick off and delete tasks, saved in the browser with localStorage.",
  ],
  [
    "QR Code Generator",
    "qr",
    "https://pavi302005.github.io/qrcode/",
    "Turn any text or URL into a QR code using a public API.",
  ],
];
document.getElementById("aboutImg").src = IMG.about;
const ICON = {
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  in: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  gh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
};
ICON.pin =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
document
  .querySelectorAll(".social a")
  .forEach((a) => (a.innerHTML = ICON[a.dataset.i]));
document.getElementById("links").innerHTML = [
  [
    "mail",
    "Email",
    "sodavarampavithra@gmail.com",
    "mailto:sodavarampavithra@gmail.com",
  ],
  [
    "in",
    "LinkedIn",
    "pavithra-sodavaram",
    "https://www.linkedin.com/in/pavithra-sodavaram",
  ],
  ["gh", "GitHub", "Pavi302005", "https://github.com/Pavi302005"],
  ["pin", "Location", "BTM 1st Stage, Bengaluru, Karnataka 560029", null],
]
  .map((l) =>
    l[3]
      ? `<a class="tilt linkcard" href="${l[3]}" target="_blank" rel="noreferrer"><span class="ic">${ICON[l[0]]}</span><span><b>${l[1]}</b><small>${l[2]}</small></span></a>`
      : `<div class="tilt linkcard"><span class="ic">${ICON[l[0]]}</span><span><b>${l[1]}</b><small>${l[2]}</small></span></div>`,
  )
  .join("");
document.getElementById("stats").innerHTML = [
  [projects.length, "projects built"],
  [3, "internships"],
  ["8.9", "CGPA"],
]
  .map((s) => `<div><b>${s[0]}</b><span>${s[1]}</span></div>`)
  .join("");

document.getElementById("projGrid").innerHTML = projects
  .map(
    (p) =>
      `<div class="tilt card">${IMG["project-" + p[1]] ? `<img src="${IMG["project-" + p[1]]}" alt="${p[0]} screenshot">` : `<div class="thumb-fresh" aria-hidden="true">${p[4] || "🛒"}</div>`}<h3>${p[0]}</h3><p>${p[3]}</p>${p[2] ? `<a class="btn small" href="${p[2]}" target="_blank" rel="noreferrer">View project</a>` : `<span class="badge">${p[5] || "You are viewing it"}</span>`}</div>`,
  )
  .join("");
const certCap = [
  "AI for Students: Build Your Own Generative AI Model (NxtWave workshop)",
  "Python Basics and Career Guidance Workshop (ManiTech Ed)",
  "JavaScript Master Course: Beginner to Expert (Udemy)",
  "Python Fundamentals for Beginners (Great Learning)",
  "Full-Stack Java Development Internship (ProgMaster)",
];
document.getElementById("certGrid").innerHTML = certCap
  .map(
    (c, i) =>
      `<button class="tilt cert" data-c="${i + 1}" aria-label="Open certificate: ${c}"><img src="${IMG["cert-" + (i + 1)]}" alt="${c}"><span class="cap">${c}</span></button>`,
  )
  .join("");
const exp = [
  [
    "Full Stack Developer Intern",
    "Intelects Lab Technology (OPC) Private Limited",
    "Jan 2026 – Jun 2026",
    "Remote",
    [
      "Developed full-stack features using React.js on the front end and Node.js/Express.js REST APIs on the back end.",
      "Integrated APIs with asynchronous data fetching, loading states and centralized error handling.",
      "Debugged with Chrome DevTools and Postman; collaborated via Git/GitHub with code reviews in agile sprints.",
    ],
  ],
  [
    "Software Engineer Intern",
    "ProgMaster Private Limited",
    "Jan 2026 – Apr 2026",
    "Hybrid",
    [
      "Built 2+ responsive web applications with reusable, maintainable React.js components.",
      "Implemented JWT-based authentication and consumed RESTful APIs, improving integration efficiency by 35%.",
      "Resolved 15+ UI and functional defects while working alongside 5 developers on feature delivery.",
    ],
  ],
  [
    "MERN Full Stack Development Intern",
    "Smart Bridge & APSCHE",
    "May 2025 – Jul 2025",
    "Remote",
    [
      "Created responsive React.js interfaces integrated with backend APIs, improving user engagement by 40%.",
      "Developed reusable UI components with client-side form validation and dynamic rendering.",
      "Applied mobile-first responsive design for seamless layouts across desktop, tablet and mobile.",
    ],
  ],
];
document.getElementById("xp").innerHTML = exp
  .map(
    (e) =>
      `<article class="tilt xp"><div class="xp-head"><h3>${e[0]}</h3><span class="when">${e[2]}</span></div><p class="co">${e[1]}, ${e[3]}</p><ul>${e[4].map((b) => `<li>${b}</li>`).join("")}</ul></article>`,
  )
  .join("");
document.getElementById("edu").innerHTML = [
  [
    "B.Tech in Computer Science & Engineering (AI & ML)",
    "Sri Venkateswara College of Engineering (SVCE), Tirupati, AP",
    "2022 – 2026",
    "CGPA 8.9/10",
  ],
  [
    "Intermediate (MPC)",
    "Vikram Junior College, Srikalahasti, AP",
    "2020 – 2022",
    "7.8/10",
  ],
]
  .map(
    (e) =>
      `<article class="tilt xp"><div class="xp-head"><h3>${e[0]}</h3><span class="when">${e[2]}</span></div><p class="co">${e[1]}</p><p class="score">${e[3]}</p></article>`,
  )
  .join("");
const chips = (a) =>
  `<ul class="chips">${a.map((x) => `<li>${x}</li>`).join("")}</ul>`;
document.getElementById("eduExtra").innerHTML =
  `<h3 class="grp">Strengths</h3>${chips(["Problem-solving", "Quick learner", "Attention to detail", "Teamwork", "Adaptability"])}<h3 class="grp">Languages</h3>${chips(["English (Proficient)", "Telugu (Native)", "Hindi (Proficient)"])}<h3 class="grp">Availability</h3>${chips(["Immediate joiner", "Open to on-site work and relocation"])}`;
const rm = document.getElementById("resumeModal");
const li = (a) => a.map((b) => `<li>${b}</li>`).join("");
rm.querySelector(".rbody").innerHTML =
  `<header><h2>Pavithra Sodavaram</h2><p>sodavarampavithra@gmail.com | linkedin.com/in/pavithra-sodavaram | github.com/Pavi302005 | BTM Layout, Bengaluru, Karnataka</p></header>
<h3>Summary</h3><p>B.Tech (CSE – AI &amp; ML) graduate with three software development internships and hands-on experience in full-stack web development. Skilled in Java, JavaScript, React.js, Node.js, Express.js, Spring Boot, REST APIs, and MySQL. Experienced in developing responsive web applications, integrating APIs, implementing authentication, debugging, and building reusable components. Strong problem-solving, OOP, and DSA skills with experience working in collaborative agile environments.</p>
<h3>Technical Skills</h3><ul class="rk"><li><b>Languages:</b> Java (Core Java, OOP, Collections, Multithreading, Exception Handling), JavaScript (ES6+), SQL</li><li><b>Backend:</b> Spring Boot, Node.js, Express.js, RESTful APIs, JWT Authentication</li><li><b>Frontend:</b> React.js (Hooks, Context API, Router), HTML5, CSS3, Tailwind CSS, Bootstrap</li><li><b>Database:</b> MySQL</li><li><b>Tools:</b> Git, GitHub, VS Code, IntelliJ IDEA, Postman</li><li><b>Core Competencies:</b> OOP, Data Structures &amp; Algorithms, Debugging</li></ul>
<h3>Experience</h3>${exp.map((e) => `<div class="ri"><div class="rr"><b>${e[0]}</b><span>${e[2]}</span></div><div class="rr"><i>${e[1]}</i><span>${e[3]}</span></div><ul>${li(e[4])}</ul></div>`).join("")}
<h3>Projects</h3>
<div class="ri"><div class="rr"><b>Restaurant Management &amp; Ordering System</b><span>Jan 2026 – Mar 2026</span></div><div class="rr"><i>React.js, Node.js, Express.js, MySQL, REST APIs</i></div><ul>${li(["Developed a full-stack restaurant ordering application using React.js, Node.js, and Express.js with RESTful API integration.", "Implemented backend APIs for menu management, cart operations, order creation, order updates, and order tracking.", "Integrated MySQL for persistent storage of user, menu, and order data and implemented database operations through backend services.", "Implemented authentication, request validation, error handling, and frontend-backend communication using Axios for reliable responses."])}</ul></div>
<div class="ri"><div class="rr"><b>Flight Finder</b><span>May 2025 – Jul 2025</span></div><div class="rr"><i>React.js, JavaScript, REST APIs</i></div><ul>${li(["Integrated REST APIs to retrieve, filter, compare, and display flight information and fare updates based on search criteria.", "Handled asynchronous API requests, loading states, and error scenarios to improve application reliability.", "Connected frontend components with backend API responses for dynamic and responsive flight data rendering."])}</ul></div>
<div class="ri"><div class="rr"><b>Trip Budget &amp; Packing Planner</b></div><div class="rr"><i>JavaScript, Node.js, MySQL, REST APIs</i></div><ul>${li(["Developed backend REST APIs using Node.js for managing trip budgets, expenses, and packing-list data.", "Integrated MySQL database operations for persistent storage and retrieval of trip and expense information.", "Implemented CRUD API endpoints with request validation and centralized error handling to ensure reliable API responses."])}</ul></div>
<h3>Education</h3><div class="ri"><div class="rr"><b>B.Tech in Computer Science &amp; Engineering (AI &amp; ML)</b><span>2022 – 2026</span></div><div class="rr"><i>Sri Venkateswara College of Engineering (SVCE)</i><span>Tirupati, AP</span></div><p>CGPA: 8.9/10</p></div><div class="ri"><div class="rr"><b>Intermediate (MPC)</b><span>2020 – 2022</span></div><div class="rr"><i>Vikram Junior College</i><span>Srikalahasti, AP</span></div><p>7.8/10</p></div>
<h3>Additional Information</h3><ul class="rk"><li><b>Certifications:</b> Full Stack Developer Internship – Intelects Lab Technology (2026); Full-Stack Development (MERN) – Smart Bridge &amp; APSCHE (2025)</li><li><b>Strengths:</b> Problem-solving, quick learner of modern frameworks, attention to detail, teamwork, adaptability</li><li><b>Languages:</b> English (Proficient), Telugu (Native), Hindi (Proficient)</li><li><b>Availability:</b> Immediate joiner – open to on-site work and relocation</li></ul>`;
const rOpen = () => {
  rm.hidden = false;
  document.body.style.overflow = "hidden";
  rm.querySelector(".rclose").focus();
};
const rClose = () => {
  rm.hidden = true;
  document.body.style.overflow = "";
};
document.querySelectorAll("[data-resume]").forEach((b) => (b.onclick = rOpen));
rm.querySelector(".rclose").onclick = rClose;
const tabs = rm.querySelectorAll(".rtabs button"),
  rb = rm.querySelector(".rbody"),
  rp = rm.querySelector(".rpdf");
rp.innerHTML = Object.keys(IMG)
  .filter((k) => k.startsWith("resume-"))
  .sort()
  .map((k) => `<img src="${IMG[k]}" alt="Resume, page ${k.slice(7)}">`)
  .join("");
tabs.forEach(
  (b) =>
    (b.onclick = () => {
      tabs.forEach((x) => x.classList.toggle("on", x === b));
      const pdf = b.dataset.t === "pdf";
      rb.hidden = pdf;
      rp.hidden = !pdf;
    }),
);
rm.onclick = (e) => {
  if (e.target === rm) rClose();
};
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !rm.hidden) rClose();
});
// tilt
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".tilt").forEach((el) => {
  el.addEventListener("pointermove", (e) => {
    if (reduce) return;
    const r = el.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) translateZ(8px)`;
  });
  el.addEventListener("pointerleave", () => (el.style.transform = ""));
});
// lightbox
document.querySelectorAll(".cert").forEach(
  (b) =>
    (b.onclick = () => {
      const d = document.createElement("div");
      d.className = "lightbox";
      d.innerHTML = `<button class="x" aria-label="Close">✕</button><img src="${IMG["cert-" + b.dataset.c]}" alt="Certificate">`;
      const close = () => {
        d.remove();
        removeEventListener("keydown", k);
      };
      const k = (e) => e.key === "Escape" && close();
      d.onclick = close;
      addEventListener("keydown", k);
      document.body.appendChild(d);
    }),
);
// skills
const groups = [
  [
    "Frontend",
    [
      ["HTML", 85],
      ["CSS", 75],
      ["JavaScript", 80],
      ["React.js", 78],
    ],
  ],
  [
    "Backend",
    [
      ["Java", 80],
      ["Spring Boot", 70],
      ["Node.js", 75],
      ["Express.js", 75],
    ],
  ],
  ["Database", [["MySQL", 70]]],
];
const bars = document.getElementById("bars");
bars.innerHTML =
  groups
    .map(
      (g) =>
        `<h3 class="grp">${g[0]}</h3>` +
        g[1]
          .map(
            (s) =>
              `<div class="bar" role="img" aria-label="${s[0]}: ${s[1]} percent"><span>${s[0]}</span><i><u data-v="${s[1]}"></u></i><b>${s[1]}%</b></div>`,
          )
          .join(""),
    )
    .join("") +
  `<h3 class="grp">Tools</h3><ul class="chips">${["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "REST APIs", "JWT Auth", "Tailwind CSS", "Bootstrap"].map((x) => `<li>${x}</li>`).join("")}</ul>`;
new IntersectionObserver(
  (es, io) => {
    if (!es[0].isIntersecting) return;
    io.disconnect();
    bars
      .querySelectorAll("u")
      .forEach((u, i) =>
        setTimeout(
          () => (u.style.width = u.dataset.v + "%"),
          reduce ? 0 : i * 90,
        ),
      );
  },
  { threshold: 0.25 },
).observe(bars);
// nav
const nav = document.getElementById("nav");
document.getElementById("menu").onclick = () => nav.classList.toggle("open");
nav.onclick = () => nav.classList.remove("open");
const links = [...nav.querySelectorAll("a")];
const io2 = new IntersectionObserver(
  (es) =>
    es.forEach(
      (e) =>
        e.isIntersecting &&
        links.forEach((a) =>
          a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        ),
    ),
  { rootMargin: "-45% 0px -50% 0px" },
);
links.forEach((a) =>
  io2.observe(document.querySelector(a.getAttribute("href"))),
);
// map zoom
(function () {
  const g = document.getElementById("mapg"),
    zi = document.getElementById("zIn"),
    zo = document.getElementById("zOut");
  let z = 1,
    raf;
  const draw = (v) =>
    g.setAttribute(
      "transform",
      `translate(500 170) scale(${v}) translate(-500 -170)`,
    );
  const go = (n) => {
    n = Math.max(0.6, Math.min(3, Math.round(n * 10) / 10));
    const from = z,
      t0 = performance.now();
    z = n;
    zi.disabled = z >= 3;
    zo.disabled = z <= 0.6;
    cancelAnimationFrame(raf);
    if (reduce) {
      draw(n);
      return;
    }
    const step = (t) => {
      const p = Math.min((t - t0) / 260, 1),
        e = 1 - Math.pow(1 - p, 3);
      draw(from + (n - from) * e);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  };
  zi.onclick = () => go(z + 0.6);
  zo.onclick = () => go(z - 0.6);
})();
// first-page photo (static)
document.getElementById("hero3d").innerHTML =
  `<img class="hero-photo" src="${IMG.hero}" alt="Portrait of Pavithra">`;

// 3D project showcase: one scene per project, Next/Previous to switch
(function () {
  const $ = (id) => document.getElementById(id),
    host = $("reel3d");
  const BX = THREE.BoxGeometry,
    SP = THREE.SphereGeometry,
    CY = THREE.CylinderGeometry,
    TO = THREE.TorusGeometry,
    CO = THREE.ConeGeometry;
  const add = (g, geo, c, p = [0, 0, 0], o) => {
    const m = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial(
        Object.assign({ color: c, roughness: 0.45, metalness: 0.05 }, o),
      ),
    );
    m.position.set(...p);
    g.add(m);
    return m;
  };
  const SC = {
    restaurant: () => {
      const g = new THREE.Group(),
        b = new THREE.Group(),
        lid = new THREE.Group(),
        m = { metalness: 0.85, roughness: 0.2 };
      g.add(b, lid);
      g.scale.setScalar(0.85);
      add(g, new CY(2.4, 2.4, 0.14, 48), 0xf4f4f0, [0, -1, 0]);
      add(b, new CY(0.95, 0.95, 0.28, 40), 0xd9953a, [0, -0.7, 0]);
      add(b, new CY(1, 1, 0.3, 40), 0x5a3420, [0, -0.4, 0]);
      add(b, new BX(2, 0.06, 2), 0xf2c040, [0, -0.2, 0]).rotation.y = 0.8;
      add(b, new CY(0.98, 0.98, 0.12, 40), 0xd8402a, [0, -0.1, 0]);
      add(b, new SP(0.98, 40, 20, 0, 6.283, 0, 1.5708), 0xe0a548).scale.y = 0.8;
      add(
        lid,
        new SP(1.9, 48, 24, 0, 6.283, 0, 1.5708),
        0xcfd6dc,
        [0, 0, 0],
        m,
      );
      add(lid, new SP(0.22, 16, 16), 0xcfd6dc, [0, 1.95, 0], m);
      return [
        g,
        (t) => {
          lid.position.y = -0.9 + (Math.sin(t * 0.9) * 0.5 + 0.5) * 1.7;
          lid.rotation.y = t * 0.6;
          b.rotation.y = t * 0.5;
        },
      ];
    },
    fresh: () => {
      const g = new THREE.Group(),
        w = { roughness: 0.7, side: THREE.DoubleSide };
      add(g, new CY(1.5, 1.05, 1.1, 40, 1, true), 0xc58b4e, [0, 0, 0], w);
      add(
        g,
        new THREE.CircleGeometry(1.05, 40),
        0xc58b4e,
        [0, -0.55, 0],
        w,
      ).rotation.x = -1.5708;
      add(g, new TO(1.5, 0.07, 12, 48), 0x8a5a2b, [0, 0.55, 0]).rotation.x =
        1.5708;
      add(g, new TO(1.5, 0.06, 12, 48, Math.PI), 0x8a5a2b, [0, 0.55, 0]);
      const it = [
        [0xd8402a, new SP(0.42, 32, 32)],
        [0xf28c1b, new SP(0.4, 32, 32)],
        [0xf5d327, new SP(0.34, 32, 32)],
        [0x2f5d2a, new SP(0.36, 32, 32)],
        [0x6cc04a, new SP(0.3, 32, 32)],
        [0xee7a1c, new CO(0.17, 0.85, 24)],
        [0xeaf3f8, new BX(0.45, 0.75, 0.4)],
      ].map(([c, geo]) => add(g, geo, c));
      it[5].rotation.z = 3.14;
      return [
        g,
        (t) =>
          it.forEach((x, i) => {
            const k = Math.abs(Math.sin(t * 1.1 + i * 1.26)),
              a = i * 0.8976 + t * 0.3;
            x.position.set(
              Math.cos(a) * 0.85,
              -0.1 + k * 2.2,
              Math.sin(a) * 0.85,
            );
            x.rotation.y = t + i;
          }),
      ];
    },
    flight: () => {
      const g = new THREE.Group(),
        tilt = new THREE.Group(),
        spin = new THREE.Group(),
        p = new THREE.Group();
      g.add(tilt);
      tilt.add(spin);
      spin.add(p);
      tilt.rotation.z = 0.4;
      add(g, new SP(1.5, 32, 24), 0x1f5f8b);
      add(g, new SP(1.53, 24, 16), 0x9fd3e6, [0, 0, 0], { wireframe: true });
      add(p, new CY(0.12, 0.12, 1, 16), 0xffffff).rotation.z = 1.5708;
      add(p, new CO(0.12, 0.3, 16), 0xffffff, [0.65, 0, 0]).rotation.z =
        -1.5708;
      add(p, new BX(0.35, 0.03, 1.5), 0xe9a23b, [-0.05, 0, 0]);
      add(p, new BX(0.2, 0.25, 0.03), 0xe9a23b, [-0.5, 0.15, 0]);
      add(p, new BX(0.2, 0.03, 0.6), 0xe9a23b, [-0.5, 0, 0]);
      p.position.set(2.6, 0, 0);
      p.rotation.y = -1.5708;
      p.scale.setScalar(1.5);
      return [
        g,
        (t) => {
          spin.rotation.y = -t * 0.8;
          g.children[2].rotation.y = t * 0.15;
        },
      ];
    },
    trip: () => {
      const g = new THREE.Group();
      add(g, new BX(2.6, 1.8, 1), 0xc2542d, [0, -0.5, 0]);
      add(g, new BX(2.7, 0.08, 1.05), 0x8f3a1d, [0, -0.5, 0]);
      add(g, new TO(0.4, 0.07, 12, 24, Math.PI), 0x333333, [0, 0.4, 0]);
      add(g, new BX(0.25, 0.18, 0.06), 0xf2c879, [-0.7, -0.25, 0.52]);
      add(g, new BX(0.25, 0.18, 0.06), 0xf2c879, [0.7, -0.25, 0.52]);
      const c = [0, 1, 2, 3].map((i) =>
        add(
          g,
          new CY(0.38, 0.38, 0.08, 32),
          0xf2c040,
          [-1.4 + i * 0.95, 1.6, 0],
          { metalness: 0.6, roughness: 0.25 },
        ),
      );
      return [
        g,
        (t) =>
          c.forEach((m, i) => {
            m.position.y = 1.6 + Math.sin(t * 1.6 + i) * 0.35;
            m.rotation.x = t * 1.5 + i;
            m.rotation.z = t;
          }),
      ];
    },
    portfolio: () => {
      const g = new THREE.Group(),
        lid = new THREE.Group();
      g.add(lid);
      lid.position.set(0, -0.94, -1);
      lid.rotation.x = -0.35;
      add(g, new BX(3, 0.12, 2), 0x9aa7b2, [0, -1, 0], { metalness: 0.5 });
      add(lid, new BX(3, 1.9, 0.1), 0x2b3a47, [0, 0.95, 0]);
      add(lid, new BX(2.7, 1.6, 0.02), 0x0e7c86, [0, 0.95, 0.06], {
        emissive: 0x0e7c86,
        emissiveIntensity: 0.5,
      });
      add(lid, new BX(1.2, 0.12, 0.03), 0xf2c879, [-0.5, 1.4, 0.08]);
      add(lid, new BX(1.8, 0.08, 0.03), 0xffffff, [-0.2, 1.15, 0.08]);
      add(lid, new BX(1.5, 0.08, 0.03), 0xffffff, [-0.35, 0.95, 0.08]);
      const s = [
        add(
          g,
          new THREE.TorusKnotGeometry(0.3, 0.1, 64, 12),
          0xe9a23b,
          [-2.2, 1.1, 0],
        ),
        add(g, new THREE.IcosahedronGeometry(0.35), 0x1f5f8b, [2.2, 1.4, 0]),
        add(g, new THREE.OctahedronGeometry(0.35), 0x6b4fd8, [2, -0.4, 0.6]),
      ];
      return [
        g,
        (t) =>
          s.forEach((m, i) => {
            m.rotation.x = t * 0.8 + i;
            m.rotation.y = t * 0.6;
            m.position.y += Math.sin(t * 1.5 + i) * 0.004;
          }),
      ];
    },
    weather: () => {
      const g = new THREE.Group(),
        cl = new THREE.Group();
      g.add(cl);
      const sun = add(g, new SP(0.8, 32, 24), 0xf5b82e, [1.5, 1.5, -0.5], {
        emissive: 0xf5b82e,
        emissiveIntensity: 0.6,
      });
      [
        [0, 0, 0.9],
        [-0.9, -0.15, 0.65],
        [0.9, -0.15, 0.7],
        [0.4, 0.45, 0.6],
        [-0.4, 0.4, 0.55],
      ].forEach(([x, y, r]) => add(cl, new SP(r, 24, 16), 0xf2f6fa, [x, y, 0]));
      cl.position.y = 0.4;
      const d = Array.from({ length: 14 }, (_, i) =>
        add(g, new CY(0.03, 0.03, 0.35, 8), 0x4aa3df, [
          ((i % 7) - 3) * 0.35,
          -1,
          i < 7 ? 0.2 : -0.2,
        ]),
      );
      return [
        g,
        (t) => {
          sun.rotation.y = t;
          cl.position.y = 0.4 + Math.sin(t) * 0.1;
          d.forEach((m, i) => {
            m.position.y = -0.4 - ((t * 1.6 + i * 0.37) % 1.8);
          });
        },
      ];
    },
    tictactoe: () => {
      const g = new THREE.Group(),
        pc = [];
      [-0.6, 0.6].forEach((v) => {
        add(g, new BX(0.1, 3.2, 0.2), 0x1f5f8b, [v, 0, 0]);
        add(g, new BX(3.2, 0.1, 0.2), 0x1f5f8b, [0, v, 0]);
      });
      const X = (x, y) => {
        const p = new THREE.Group();
        add(p, new BX(0.9, 0.18, 0.18), 0xe0432b).rotation.z = 0.785;
        add(p, new BX(0.9, 0.18, 0.18), 0xe0432b).rotation.z = -0.785;
        p.position.set(x, y, 0);
        g.add(p);
        pc.push(p);
      };
      const O = (x, y) => {
        const p = new THREE.Group();
        add(p, new TO(0.42, 0.1, 16, 32), 0xe9a23b);
        p.position.set(x, y, 0);
        g.add(p);
        pc.push(p);
      };
      X(-1.2, 1.2);
      X(0, 0);
      X(1.2, -1.2);
      X(1.2, 1.2);
      O(0, 1.2);
      O(-1.2, 0);
      O(1.2, 0);
      const ln = add(g, new BX(3.8, 0.09, 0.1), 0x0e7c86, [0, 0, 0.25]);
      ln.rotation.z = -0.785;
      return [
        g,
        (t) => {
          pc.forEach((p, i) => {
            p.position.z = Math.sin(t * 1.5 + i) * 0.2;
            p.rotation.y = Math.sin(t + i) * 0.5;
          });
          ln.scale.x = 0.92 + 0.08 * Math.sin(t * 3);
        },
      ];
    },
    calculator: () => {
      const g = new THREE.Group(),
        b = [];
      add(g, new BX(2.6, 3.6, 0.4), 0x2b3a47);
      add(g, new BX(2.2, 0.8, 0.06), 0xcfe8d8, [0, 1.2, 0.23], {
        emissive: 0x7fd6a8,
        emissiveIntensity: 0.35,
      });
      for (let r = 0; r < 4; r++)
        for (let c = 0; c < 4; c++)
          b.push(
            add(g, new BX(0.42, 0.42, 0.16), c == 3 ? 0xe9a23b : 0xf0f5f8, [
              -0.78 + c * 0.52,
              0.35 - r * 0.55,
              0.27,
            ]),
          );
      return [
        g,
        (t) =>
          b.forEach((m, i) => {
            const p = Math.max(0, Math.sin(t * 3 - i * 0.5));
            m.position.z = 0.27 - p * 0.1;
            m.scale.z = 1 - p * 0.4;
          }),
      ];
    },
    message: () => {
      const g = new THREE.Group(),
        ys = [1.3, -0.1, -1.5],
        bs = [];
      const bub = (x, y, c) => {
        const b = new THREE.Group();
        add(b, new SP(1, 32, 20), c).scale.set(1.5, 0.8, 0.35);
        add(b, new CO(0.3, 0.5, 16), c, [
          x < 0 ? -0.9 : 0.9,
          -0.65,
          0,
        ]).rotation.z = Math.PI;
        [-0.5, 0, 0.5].forEach((d) =>
          add(b, new SP(0.1, 12, 12), 0xffffff, [d, 0, 0.38]),
        );
        b.position.set(x, y, 0);
        g.add(b);
        bs.push(b);
      };
      bub(-0.8, ys[0], 0x0e7c86);
      bub(0.8, ys[1], 0x1f5f8b);
      bub(-0.5, ys[2], 0xe9a23b);
      return [
        g,
        (t) =>
          bs.forEach((b, i) => {
            b.position.y = ys[i] + Math.sin(t * 1.2 + i * 2) * 0.12;
            b.position.z = Math.sin(t * 1.4 + i * 2) * 0.3;
            b.rotation.y = Math.sin(t + i) * 0.3;
          }),
      ];
    },
    todo: () => {
      const g = new THREE.Group(),
        ck = [];
      add(g, new BX(2.6, 3.4, 0.15), 0xb98a57);
      add(g, new BX(2.2, 3, 0.05), 0xffffff, [0, 0, 0.1]);
      add(g, new BX(1, 0.35, 0.2), 0x8a8f95, [0, 1.65, 0.1], {
        metalness: 0.6,
      });
      [0, 1, 2].forEach((i) => {
        const y = 0.8 - i * 0.9;
        add(g, new BX(0.4, 0.4, 0.06), 0xd3e0e7, [-0.8, y, 0.16]);
        add(g, new BX(1.1, 0.12, 0.04), 0x4f6575, [0.3, y, 0.15]);
        const c = new THREE.Group();
        add(
          c,
          new BX(0.12, 0.3, 0.06),
          0x0e7c86,
          [-0.08, -0.05, 0],
        ).rotation.z = 0.6;
        add(c, new BX(0.12, 0.55, 0.06), 0x0e7c86, [0.1, 0.05, 0]).rotation.z =
          -0.6;
        c.position.set(-0.8, y, 0.22);
        g.add(c);
        ck.push(c);
      });
      return [
        g,
        (t) =>
          ck.forEach((c, i) => {
            const p = Math.min(1, Math.max(0, (((t * 0.6) % 4) - i * 0.8) * 2));
            c.scale.setScalar(0.01 + p);
          }),
      ];
    },
    qr: () => {
      const g = new THREE.Group(),
        md = [],
        n = 9;
      const fin = (x, y) =>
        (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5);
      for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++) {
          const on = fin(x, y)
            ? !((x == 1 && y == 1) || (x == 7 && y == 1) || (x == 1 && y == 7))
            : (x * 7 + y * 13 + x * y) % 5 < 2;
          if (on)
            md.push([
              add(g, new BX(0.34, 0.3, 0.34), 0x14283a, [
                (x - 4) * 0.38,
                0,
                (y - 4) * 0.38,
              ]),
              x,
              y,
            ]);
        }
      add(g, new BX(3.7, 0.12, 3.7), 0xf0f5f8, [0, -0.2, 0]);
      g.rotation.x = 0.25;
      return [
        g,
        (t) =>
          md.forEach(([m, x, y]) => {
            const s = (0.6 + Math.sin(t * 2 - (x + y) * 0.6) * 0.45) * 1.2;
            m.scale.y = s;
            m.position.y = -0.14 + 0.15 * s;
          }),
      ];
    },
  };
  const FEAT = {
    restaurant: [
      "Menu management",
      "Cart",
      "Order tracking",
      "Authentication",
      "MySQL",
    ],
    fresh: [
      "4 aisles",
      "Weekly deals",
      "Cart and checkout",
      "Cash on delivery or online",
      "Login and past orders",
      "Backend",
    ],
    flight: [
      "Search and filter",
      "Compare fares",
      "Loading and error states",
      "REST APIs",
    ],
    trip: ["Trip budgets", "Expenses", "Packing lists", "CRUD APIs", "MySQL"],
    portfolio: ["React", "Three.js", "Voice guide", "Responsive"],
    weather: ["Live weather API", "Temperature", "Humidity", "Any city"],
    tictactoe: ["Two players", "Winner highlight", "Reset each round"],
    calculator: ["All basic operations", "Clear key", "Live display"],
    message: ["Instant display", "DOM events"],
    todo: ["Add tasks", "Tick off", "Delete", "Saved with localStorage"],
    qr: ["Text or URL to QR code", "Public API", "Works on mobile"],
  };
  const BG = [
    "#173F55,#0E7C86",
    "#1F5F8B,#173F55",
    "#0F2A3D,#1F5F8B",
    "#0E7C86,#1F5F8B",
    "#2B4559,#0E7C86",
  ];
  const n = projects.length;
  let idx = 0,
    paused = false,
    tt = 0,
    ct = 0,
    born = 0,
    tick = null,
    R;
  $("reelDots").innerHTML = projects
    .map(
      (p, i) =>
        `<button aria-label="Project ${i + 1}: ${p[0]}" data-i="${i}"></button>`,
    )
    .join("");
  let SCN, CAM, W;
  try {
    R = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    R.setPixelRatio(Math.min(devicePixelRatio, 2));
    host.appendChild(R.domElement);
    SCN = new THREE.Scene();
    CAM = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    W = new THREE.Group();
    SCN.add(W);
    SCN.add(new THREE.AmbientLight(0xffffff, 0.9));
    const d1 = new THREE.DirectionalLight(0xffffff, 1.4);
    d1.position.set(3, 6, 4);
    SCN.add(d1);
    const d2 = new THREE.DirectionalLight(0xffffff, 0.5);
    d2.position.set(-4, 2, -3);
    SCN.add(d2);
    const size = () => {
      const w = host.clientWidth,
        h = host.clientHeight;
      R.setSize(w, h);
      CAM.aspect = w / h;
      CAM.updateProjectionMatrix();
    };
    size();
    new ResizeObserver(size).observe(host);
  } catch (e) {
    R = null;
    host.textContent = "3D is not available in this browser.";
  }
  const dispose = (g) =>
    g.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
  function show(i) {
    idx = (i + n) % n;
    const p = projects[idx];
    $("reelTitle").textContent = p[0];
    $("reelDesc").textContent = p[3];
    $("reelCount").textContent = idx + 1 + " / " + n;
    $("reelChips").innerHTML = (FEAT[p[1]] || [])
      .map((x) => `<li>${x}</li>`)
      .join("");
    const L = $("reelLink");
    L.style.display = p[2] ? "" : "none";
    if (p[2]) L.href = p[2];
    document
      .querySelectorAll("#reelDots button")
      .forEach((b, k) => b.setAttribute("aria-current", k === idx));
    host.style.background = `linear-gradient(160deg,${BG[idx % BG.length]})`;
    if (!R) return;
    while (W.children.length) {
      const o = W.children[0];
      W.remove(o);
      dispose(o);
    }
    const [g, tk] = (SC[p[1]] || SC.fresh)();
    W.add(g);
    tick = tk;
    tt = 0;
    born = performance.now();
  }
  $("reelNext").onclick = $("reelNext2").onclick = () => show(idx + 1);
  $("reelPrev").onclick = () => show(idx - 1);
  $("reelDots").onclick = (e) => {
    const b = e.target.closest("button");
    if (b) show(+b.dataset.i);
  };
  host.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(idx + 1);
    if (e.key === "ArrowLeft") show(idx - 1);
  });
  $("reelPause").onclick = (e) => {
    paused = !paused;
    e.target.textContent = paused ? "Play" : "Pause";
  };
  show(
    Math.max(
      0,
      projects.findIndex((p) => p[1] === "fresh"),
    ),
  );
  if (R) {
    let last = 0;
    R.setAnimationLoop((now) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!paused && !reduce) {
        tt += dt;
        ct += dt;
      }
      const a = ct * 0.25;
      CAM.position.set(Math.sin(a) * 7.8, 3.4, Math.cos(a) * 7.8);
      CAM.lookAt(0, 0.4, 0);
      const e = Math.min(1, (now - born) / 450);
      W.scale.setScalar(reduce ? 1 : Math.max(0.001, 1 - Math.pow(1 - e, 3)));
      if (tick) tick(tt);
      R.render(SCN, CAM);
    });
  }
})();

// 3D skills sphere (drag to rotate)
(function () {
  const host = document.getElementById("sphere");
  const sk = [
    ["HTML", "#D9532B"],
    ["CSS", "#1572B6"],
    ["JavaScript", "#B58900"],
    ["React.js", "#0E7C86"],
    ["Node.js", "#3C873A"],
    ["Express.js", "#444F5E"],
    ["Java", "#B07219"],
    ["Spring Boot", "#4C9A3A"],
    ["MySQL", "#00758F"],
    ["REST APIs", "#1F5F8B"],
    ["JWT", "#7C3AED"],
    ["Git", "#E2432A"],
    ["GitHub", "#24292F"],
    ["Postman", "#E8590C"],
    ["Tailwind CSS", "#0891B2"],
  ];
  try {
    const R = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    R.setPixelRatio(Math.min(devicePixelRatio, 2));
    host.appendChild(R.domElement);
    const S = new THREE.Scene(),
      C = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    C.position.z = 9.5;
    const G = new THREE.Group();
    S.add(G);
    G.add(
      new THREE.Mesh(
        new THREE.IcosahedronGeometry(3.3, 2),
        new THREE.MeshBasicMaterial({
          color: 0x0e7c86,
          wireframe: true,
          transparent: true,
          opacity: 0.18,
        }),
      ),
    );
    const build = () =>
      sk.forEach((s, i) => {
        const n = sk.length,
          y = 1 - (i / (n - 1)) * 2,
          r = Math.sqrt(1 - y * y),
          th = i * 2.39996;
        const c = document.createElement("canvas");
        c.width = 512;
        c.height = 160;
        const x = c.getContext("2d");
        x.fillStyle = s[1];
        x.beginPath();
        x.roundRect ? x.roundRect(8, 8, 496, 144, 72) : x.rect(8, 8, 496, 144);
        x.fill();
        x.fillStyle = "#fff";
        x.font =
          "700 " +
          Math.min(64, Math.floor(430 / (s[0].length * 0.56))) +
          "px Figtree,Arial,sans-serif";
        x.textAlign = "center";
        x.textBaseline = "middle";
        x.fillText(s[0], 256, 84);
        const tx = new THREE.CanvasTexture(c);
        tx.encoding = THREE.sRGBEncoding;
        const sp = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: tx, transparent: true }),
        );
        sp.scale.set(2.2, 0.69, 1);
        sp.position.set(
          Math.cos(th) * r * 3.5,
          y * 3.5,
          Math.sin(th) * r * 3.5,
        );
        G.add(sp);
      });
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(build);
    const size = () => {
      const w = host.clientWidth,
        h = host.clientHeight;
      R.setSize(w, h);
      C.aspect = w / h;
      C.updateProjectionMatrix();
    };
    size();
    new ResizeObserver(size).observe(host);
    let drag = false,
      px = 0,
      py = 0;
    host.addEventListener("pointerdown", (e) => {
      drag = true;
      px = e.clientX;
      py = e.clientY;
      host.setPointerCapture(e.pointerId);
    });
    host.addEventListener("pointermove", (e) => {
      if (!drag) return;
      G.rotation.y += (e.clientX - px) * 0.006;
      G.rotation.x = Math.max(
        -1,
        Math.min(1, G.rotation.x + (e.clientY - py) * 0.006),
      );
      px = e.clientX;
      py = e.clientY;
    });
    ["pointerup", "pointercancel"].forEach((n) =>
      host.addEventListener(n, () => {
        drag = false;
      }),
    );
    R.setAnimationLoop(() => {
      if (!drag && !reduce) G.rotation.y += 0.004;
      R.render(S, C);
    });
  } catch (e) {
    host.textContent = "3D is not available in this browser.";
  }
})();

// Voice guide: speaks as Pavithra in a female voice, scrolling section by section
(function () {
  const steps = [
    [
      ".hero",
      "Hi, I'm Pavithra Sodavaram, a full-stack software engineer and B.Tech graduate in Computer Science with A I and Machine Learning. I'm based in BTM Layout, Bengaluru, and I'm available to join immediately.",
    ],
    [
      "#about",
      "I've completed three software development internships, building React front ends and Node.js, Express.js and Spring Boot back ends, with REST APIs, J W T authentication and MySQL. I graduated with a C G P A of eight point nine, and I enjoy solving problems and writing clean code.",
    ],
    [
      "#experience",
      "At Intelects Lab I built full-stack features with React and Node.js. At ProgMaster, I built responsive React apps, implemented J W T authentication, and fixed more than fifteen bugs alongside five developers. And at Smart Bridge, I built React interfaces connected to backend APIs, which improved user engagement by forty percent.",
    ],
    [
      "#projects",
      "My projects include a restaurant ordering system with a React front end, an Express.js API and MySQL. Flight Finder, which uses REST APIs. A trip budget planner with Node.js. FreshCart, my grocery store. And smaller JavaScript apps, like a weather app and a calculator.",
    ],
    [
      "#showreel",
      "Here are all my projects in 3D. Press Next to move from one project to another. FreshCart is my grocery store, with four aisles, weekly deals, a cart, login and past orders, and a backend. The restaurant system, the flight finder, the trip planner, and my smaller apps each have their own 3D scene too.",
    ],
    [
      "#certificates",
      "My certificates cover JavaScript, Python, generative A I, and full-stack Java development, plus my internship certifications from Intelects Lab and Smart Bridge.",
    ],
    [
      "#skills",
      "Here are my skills, in 3D. You can drag the sphere to explore. On the front end: HTML at eighty five percent, CSS at seventy five, JavaScript at eighty, and React at seventy eight. On the back end: Java at eighty, Spring Boot at seventy, and Node.js and Express.js at seventy five. And MySQL for databases at seventy.",
    ],
    [
      "#education",
      "I earned my B.Tech at Sri Venkateswara College of Engineering in Tirupati, with a C G P A of eight point nine out of ten. I speak English, Telugu and Hindi.",
    ],
    [
      "#contact",
      "I'd love to work with you. Email me, connect on LinkedIn, or take a look at my GitHub. Thank you for visiting!",
    ],
  ];
  const btn = document.getElementById("tourBtn"),
    bub = document.getElementById("bubble"),
    bot = document.getElementById("bot"),
    sel = document.getElementById("voiceSel"),
    synth = window.speechSynthesis;
  const FEM =
    /female|zira|samantha|heera|neerja|veena|jenny|karen|moira|tessa|susan|hazel|fiona|catherine|sonia|libby|natasha|clara|allison|joanna|kendra|kimberly|salli|ivy|zoe|aria|maria|victoria|serena|amelie|emma/i;
  let running = false,
    timer,
    chosen = "auto";
  const en = () => synth.getVoices().filter((v) => /^en/i.test(v.lang));
  const best = () => {
    const v = en();
    return (
      v.find((x) => /en-IN/i.test(x.lang) && FEM.test(x.name)) ||
      v.find((x) => FEM.test(x.name)) ||
      v.find((x) => /en-IN/i.test(x.lang)) ||
      v[0] ||
      null
    );
  };
  const pick = () =>
    chosen === "auto"
      ? best()
      : synth.getVoices().find((v) => v.voiceURI === chosen);
  if (synth) {
    const fill = () => {
      const v = en();
      if (!v.length) return;
      sel.hidden = false;
      sel.innerHTML =
        '<option value="auto">Voice: auto (female)</option>' +
        v
          .map((x) => `<option value="${x.voiceURI}">${x.name}</option>`)
          .join("");
    };
    synth.onvoiceschanged = fill;
    fill();
    sel.onchange = () => {
      chosen = sel.value;
    };
  }
  const clearSpot = () =>
    document
      .querySelectorAll(".spot")
      .forEach((e) => e.classList.remove("spot"));
  function stop() {
    running = false;
    clearTimeout(timer);
    synth && synth.cancel();
    bot.className = "bot";
    bub.hidden = true;
    clearSpot();
    btn.textContent = "▶ Hear my story";
  }
  function step(i) {
    if (!running) return;
    if (i >= steps.length) return stop();
    const [sel2, text] = steps[i],
      el = document.querySelector(sel2);
    clearSpot();
    bub.hidden = true;
    bot.className = "bot walking";
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    timer = setTimeout(() => {
      if (!running) return;
      el.classList.add("spot");
      bub.textContent = text;
      bub.hidden = false;
      bot.className = "bot talking";
      const next = () => {
        if (!running) return;
        bot.className = "bot";
        timer = setTimeout(() => step(i + 1), 700);
      };
      if (synth) {
        const u = new SpeechSynthesisUtterance(text),
          v = pick();
        if (v) u.voice = v;
        u.lang = v ? v.lang : "en-US";
        u.rate = 0.97;
        u.pitch = v && FEM.test(v.name) ? 1.05 : 1.3;
        u.onend = next;
        u.onerror = next;
        synth.speak(u);
      } else timer = setTimeout(next, Math.max(4000, text.length * 60));
    }, 1100);
  }
  btn.onclick = () => {
    if (running) return stop();
    running = true;
    btn.textContent = "■ Stop tour";
    synth && synth.getVoices();
    step(0);
  };
})();
