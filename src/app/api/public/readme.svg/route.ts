const ASCII = `
⠀




⠀⠀⠀⠀⠀⠀⠀⠀⣀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣾⠟⠓⣯⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⣾⠞⠳⣷⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣏⣿⠀⠀⠿⣾⠶⠾⠶⠶⠶⠶⠭⢶⣶⣿⣇⠀⢀⣿⣿⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣮⡏⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠈⢿⣕⢄⠀⠀⠀
⠀⠀⠀⣠⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣕⠄⠀⠀
⠀⠀⣴⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣤⣄⠀⠀⠀⠀⠀⠀⢀⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣾⡄⠀
⠀⢸⣿⠃⠀⠀⠀⠀⠀⠀⠀⢀⡴⠶⣤⡀⠀⠀⠀⠀⠀⠀⣠⠤⣄⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡀
⠀⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⢺⣷⠴⢿⡇⠀⠀⠀⠀⠀⢸⣧⠤⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇
⢐⣿⡇⠀⠀⠀⠀⣰⣆⡇⣥⣢⡙⠒⠋⠀⠀⠀⣀⠀⠀⠈⠛⠒⢛⣄⣆⣒⢠⡀⠀⠀⠀⣿⡁
⠀⣿⡇⠀⠀⠀⠀⠏⢸⠑⣏⠟⠀⠀⠀⠀⢦⣤⠿⣄⡴⠀⠀⠀⠸⠣⠏⠟⡼⠇⠀⠀⢠⣿⡇
⠀⠹⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡟⠀
⠀⠀⠙⡿⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⿿⠋⠀⠀
⠀⠀⠀⠀⠉⣿⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀☘⢫⣿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⣽⡇⢰⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⢘⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢻⢧⣼⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣧⣸⡟⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⠉⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣿⠃⢸⣶⣦⣤⣤⣄⣠⣀⣠⣀⣤⣤⣤⣶⠄⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⡿⣆⣼⡞⠈⠈⠉⠉⠙⠒⠓⠉⠉⠉⣽⣷⣠⣿⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠓⠁⠀⠀⠀⠀⠀⠀⠀`;

const INFO: Array<{ key: string; value: string; color: string }> = [
  { key: "distro", value: "Windows 11", color: "#8bd5ca" },
  { key: "host", value: "Roe Dizon", color: "#eed49f" },
  { key: "uptime", value: "21 years", color: "#a6da95" },
  {
    key: "kernel",
    value: "Software Developer Intern @ Siklab, Tech Lead @ LSCS",
    color: "#f5bde6",
  },
  {
    key: "school",
    value: "BS Computer Science @ De La Salle University Manila",
    color: "#8aadf4",
  },
  { key: "shell", value: "PowerShell + WezTerm", color: "#c6a0f6" },
  { key: "wm", value: "GlazeWM + Zebar", color: "#f5a97f" },
  { key: "editor", value: "Neovim", color: "#a6da95" },
  {
    key: "languages",
    value: "C, Java, JavaScript, TypeScript, Python, R",
    color: "#91d7e3",
  },
  {
    key: "stack",
    value: "React, Next.js, Node.js, Express, Django",
    color: "#eed49f",
  },
  {
    key: "db",
    value: "PostgreSQL, MySQL, MongoDB, Redis, SQLite",
    color: "#ee99a0",
  },
  {
    key: "tools",
    value: "Git, Docker, GitHub Actions, Contentful",
    color: "#b7bdf8",
  },
  {
    key: "ai",
    value: "Opencode, Openspec",
    color: "#b7bdf8",
  },
];

const PALETTE = [
  "#ed8796",
  "#f5a97f",
  "#eed49f",
  "#a6da95",
  "#8bd5ca",
  "#8aadf4",
  "#c6a0f6",
  "#f5bde6",
];

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function fetchStats() {
  try {
    const [uRes, rRes] = await Promise.all([
      fetch("https://api.github.com/users/Solenad", {
        headers: { "User-Agent": "solenad-readme-svg" },
      }),
      fetch("https://api.github.com/users/Solenad/repos?per_page=100", {
        headers: { "User-Agent": "solenad-readme-svg" },
      }),
    ]);
    const u = await uRes.json();
    const repos = await rRes.json();
    const stars = Array.isArray(repos)
      ? repos.reduce(
          (a: number, r: { stargazers_count?: number }) =>
            a + (r.stargazers_count ?? 0),
          0,
        )
      : 0;
    return {
      repos: u?.public_repos ?? 0,
      followers: u?.followers ?? 0,
      following: u?.following ?? 0,
      stars,
    };
  } catch {
    return { repos: 0, followers: 0, following: 0, stars: 0 };
  }
}

// ── Typewriter animation config ──────────────────────────────────
const TW_P1 = "i have something very important to say";
const TW_P2 = "tung tung tung sahur";
const TW_CYCLE_MS = 9500;
/** Estimated monospace character width (px) at font-size 13 */
const CHAR_W = 8;
/** Extra px to keep cursor clearly ahead of the last typed character */
const CUR_AHEAD = 0;
const TW_PHASE: Array<{ dur: number; label: string }> = [
  { dur: 2400, label: "type p1" }, // 0–1200ms
  { dur: 1500, label: "hold p1" }, // 1200–2700ms
  { dur: 600, label: "delete p1" }, // 2700–3300ms
  { dur: 500, label: "hold empty" }, // 3300–3800ms
  { dur: 2700, label: "type p2" }, // 3800–6500ms
  { dur: 3000, label: "hold p2" }, // 6500–9500ms
];

/** Compute a cumulative offset map from the phase durations. */
const PHASE_OFFSETS: number[] = [];
let acc = 0;
for (const p of TW_PHASE) {
  PHASE_OFFSETS.push(acc);
  acc += p.dur;
}
const TOTAL = acc; // 9500

/** Convert ms offset → percentage of full cycle */
function pct(ms: number): number {
  return (ms / TOTAL) * 100;
}

/**
 * Build @keyframes tw-p1:
 *   type (12 chars) → hold → delete (12 chars) → hidden
 * @keyframes tw-p2:
 *   hidden → type (27 chars) → hold
 */
function genTwCSS(): string {
  // ── phrase 1 ──
  const p1In = PHASE_OFFSETS[0]; // 0
  const p1InEnd = PHASE_OFFSETS[1]; // 1200
  const p1Hold = PHASE_OFFSETS[2]; // 2700
  const p1Out = PHASE_OFFSETS[3]; // 3300
  const p1OutEnd = PHASE_OFFSETS[4]; // 3800
  const chars1 = TW_P1.length; // 12

  const p1Stops: string[] = [];
  // type
  for (let i = 0; i <= chars1; i++) {
    const t = pct(p1In + (i / chars1) * (p1InEnd - p1In));
    const right = ((chars1 - i) / chars1) * 100;
    p1Stops.push(
      `    ${t.toFixed(2)}%{clip-path:inset(0 ${right.toFixed(1)}% 0 0)}`,
    );
  }
  // hold
  p1Stops.push(`    ${pct(p1Hold).toFixed(2)}%{clip-path:inset(0 0% 0 0)}`);
  // delete (reverse)
  for (let i = 1; i <= chars1; i++) {
    const t = pct(p1Hold + (i / chars1) * (p1Out - p1Hold));
    const right = (i / chars1) * 100;
    p1Stops.push(
      `    ${t.toFixed(2)}%{clip-path:inset(0 ${right.toFixed(1)}% 0 0)}`,
    );
  }
  // hidden after delete
  p1Stops.push(`    ${pct(p1OutEnd).toFixed(2)}%{clip-path:inset(0 100% 0 0)}`);
  p1Stops.push(`    100%{clip-path:inset(0 100% 0 0)}`);

  // ── phrase 2 ──
  const p2In = PHASE_OFFSETS[4]; // 3800
  const p2InEnd = PHASE_OFFSETS[5]; // 6500
  const p2Hold = PHASE_OFFSETS[6]; // 9500
  const chars2 = TW_P2.length; // 27

  const p2Stops: string[] = [];
  // hidden before type
  p2Stops.push(`    0%{clip-path:inset(0 100% 0 0)}`);
  p2Stops.push(`    ${pct(p2In).toFixed(2)}%{clip-path:inset(0 100% 0 0)}`);
  // type
  for (let i = 1; i <= chars2; i++) {
    const t = pct(p2In + (i / chars2) * (p2InEnd - p2In));
    const right = ((chars2 - i) / chars2) * 100;
    p2Stops.push(
      `    ${t.toFixed(2)}%{clip-path:inset(0 ${right.toFixed(1)}% 0 0)}`,
    );
  }
  // hold
  p2Stops.push(`    ${pct(p2Hold).toFixed(2)}%{clip-path:inset(0 0% 0 0)}`);
  p2Stops.push(`    100%{clip-path:inset(0 0% 0 0)}`);

  // ── cursor visibility ──
  // Hidden during typing/deleting, visible during pauses (blinks via .blink)
  const cStops: string[] = [];
  // type p1 → hidden
  cStops.push(`    0%{opacity:0}`);
  cStops.push(`    ${pct(p1InEnd).toFixed(2)}%{opacity:0}`);
  // hold p1 → visible
  cStops.push(`    ${(pct(p1InEnd) + 0.05).toFixed(2)}%{opacity:1}`);
  cStops.push(`    ${pct(p1Hold).toFixed(2)}%{opacity:1}`);
  // delete p1 → hidden
  cStops.push(`    ${(pct(p1Hold) + 0.05).toFixed(2)}%{opacity:0}`);
  cStops.push(`    ${pct(p1Out).toFixed(2)}%{opacity:0}`);
  // hold empty → visible
  cStops.push(`    ${(pct(p1Out) + 0.05).toFixed(2)}%{opacity:1}`);
  cStops.push(`    ${pct(p2In).toFixed(2)}%{opacity:1}`);
  // type p2 → hidden
  cStops.push(`    ${(pct(p2In) + 0.05).toFixed(2)}%{opacity:0}`);
  cStops.push(`    ${pct(p2InEnd).toFixed(2)}%{opacity:0}`);
  // hold p2 → visible
  cStops.push(`    ${(pct(p2InEnd) + 0.05).toFixed(2)}%{opacity:1}`);
  cStops.push(`    100%{opacity:1}`);

  // ── cursor position (stays CUR_AHEAD px ahead of typed text) ──
  const cposStops: string[] = [];
  // type p1: move right
  for (let i = 0; i <= chars1; i++) {
    const t = pct(p1In + (i / chars1) * (p1InEnd - p1In));
    cposStops.push(
      `    ${t.toFixed(2)}%{transform:translateX(${i * CHAR_W + CUR_AHEAD}px)}`,
    );
  }
  // hold p1
  cposStops.push(
    `    ${pct(p1Hold).toFixed(2)}%{transform:translateX(${chars1 * CHAR_W + CUR_AHEAD}px)}`,
  );
  // delete p1: move left
  for (let i = 1; i <= chars1; i++) {
    const t = pct(p1Hold + (i / chars1) * (p1Out - p1Hold));
    cposStops.push(
      `    ${t.toFixed(2)}%{transform:translateX(${(chars1 - i) * CHAR_W + CUR_AHEAD}px)}`,
    );
  }
  // hold empty
  cposStops.push(
    `    ${pct(p1Out).toFixed(2)}%{transform:translateX(${CUR_AHEAD}px)}`,
  );
  cposStops.push(
    `    ${pct(p2In).toFixed(2)}%{transform:translateX(${CUR_AHEAD}px)}`,
  );
  // type p2: move right
  for (let i = 1; i <= chars2; i++) {
    const t = pct(p2In + (i / chars2) * (p2InEnd - p2In));
    cposStops.push(
      `    ${t.toFixed(2)}%{transform:translateX(${i * CHAR_W + CUR_AHEAD}px)}`,
    );
  }
  // hold p2
  cposStops.push(
    `    ${pct(p2Hold).toFixed(2)}%{transform:translateX(${chars2 * CHAR_W + CUR_AHEAD}px)}`,
  );
  cposStops.push(
    `    100%{transform:translateX(${chars2 * CHAR_W + CUR_AHEAD}px)}`,
  );

  return `
      @keyframes tw-p1{${p1Stops.join("")}}
      @keyframes tw-p2{${p2Stops.join("")}}
      @keyframes tw-cpos{${cposStops.join("")}}
      .tw-p1{animation:tw-p1 ${TW_CYCLE_MS}ms step-end infinite}
      .tw-p2{animation:tw-p2 ${TW_CYCLE_MS}ms step-end infinite}
      .tw-cpos{animation:tw-cpos ${TW_CYCLE_MS}ms step-end infinite}
      .tw-box{clip-path:inset(0 100% 0 0)}`;
}

export async function GET() {
  const stats = await fetchStats();

  const W = 900;
  const H = 760;

  const asciiX = 30;
  const asciiY = 50;
  const asciiSize = 11;
  const asciiLineH = 12;
  const asciiLines = ASCII.split("\n");

  const infoX = 340;
  const headerY = 70;
  const rowStartY = 120;
  const rowH = 26;
  const keyColW = 110;

  const statsY = 540;
  const cardW = 195;
  const cardH = 90;
  const cardGap = 20;
  const cardStartX = 30;

  const statCards = [
    { label: "public repos", value: stats.repos, color: "#a6da95" },
    { label: "followers", value: stats.followers, color: "#8bd5ca" },
    { label: "following", value: stats.following, color: "#f5bde6" },
    { label: "total stars", value: stats.stars, color: "#eed49f" },
  ];

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#24273a"/>
      <stop offset="100%" stop-color="#1e2030"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5"/>
    </filter>
    <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="2" fill="#000" opacity="0.4"/>
    </pattern>
    <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
      <stop offset="50%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.5"/>
    </radialGradient>
    <linearGradient id="crt-beam" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <filter id="phosphor-glow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <style>
      @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
      .blink { animation: blink 1s step-end infinite; }
      @keyframes glow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
      .pulse { animation: glow 2.5s ease-in-out infinite; }
      ${genTwCSS()}
      .crt-layer { pointer-events: none; }
      @keyframes scan-scroll { 0% { transform: translateY(0); } 100% { transform: translateY(-4px); } }
      .crt-scan { animation: scan-scroll 1.2s linear infinite; transform-origin: 0 0; mix-blend-mode: overlay; }
      @keyframes beam-sweep {
        0%   { transform: translateY(-40px); }
        0%   { transform: translateY(-40px); }
        8%   { transform: translateY(60px); }
        18%  { transform: translateY(160px); }
        26%  { transform: translateY(200px); }
        40%  { transform: translateY(340px); }
        48%  { transform: translateY(370px); }
        62%  { transform: translateY(500px); }
        70%  { transform: translateY(530px); }
        85%  { transform: translateY(760px); }  /* reaches bottom */
        100% { transform: translateY(760px); }  /* hold before flyback */
        100% { transform: translateY(760px); }  /* hold before flyback */
      }
      .crt-beam { animation: beam-sweep 11.25s linear infinite; transform-origin: 0 0; pointer-events: none; mix-blend-mode: screen; }
    </style>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)" rx="12"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#494d64" rx="12"/>

  <circle cx="22" cy="22" r="6" fill="#ed8796"/>
  <circle cx="42" cy="22" r="6" fill="#eed49f"/>
  <circle cx="62" cy="22" r="6" fill="#a6da95"/>
  <text x="${W / 2}" y="26" fill="#a5adcb" font-size="12" text-anchor="middle">solenad@github</text>

  <g transform="translate(${asciiX}, ${asciiY})" fill="#8bd5ca">
    <g filter="url(#glow)" opacity="0.55">
      ${asciiLines
        .map(
          (line, i) =>
            `<text x="0" y="${i * asciiLineH}" font-size="${asciiSize}" xml:space="preserve">${esc(line)}</text>`,
        )
        .join("\n      ")}
    </g>
    ${asciiLines
      .map(
        (line, i) =>
          `<text x="0" y="${i * asciiLineH}" font-size="${asciiSize}" xml:space="preserve">${esc(line)}</text>`,
      )
      .join("\n    ")}
  </g>

  <text x="${infoX}" y="${headerY}" font-size="24" font-weight="700" filter="url(#phosphor-glow)">
    <tspan fill="#b7bdf8">roe</tspan>
  </text>
  <text x="${infoX}" y="${headerY + 22}" fill="#363a4f" font-size="13" xml:space="preserve">${"─".repeat(48)}</text>

  ${INFO.map((row, i) => {
    const y = rowStartY + i * rowH;
    return `<g>
    <text x="${infoX}" y="${y}" font-size="13" font-weight="700" fill="${row.color}">${esc(row.key)}</text>
    <text x="${infoX + keyColW}" y="${y}" font-size="13" fill="#cad3f5">${esc(row.value)}</text>
  </g>`;
  }).join("\n  ")}

  <g filter="url(#phosphor-glow)" transform="translate(${infoX}, ${rowStartY + INFO.length * rowH + 14})">
    ${PALETTE.map(
      (c, i) =>
        `<circle cx="${i * 22 + 8}" cy="8" r="7" fill="${c}" class="pulse" style="animation-delay: ${i * 0.15}s"/>`,
    ).join("\n    ")}
  </g>

  <text x="30" y="${statsY - 20}" fill="#363a4f" font-size="13" xml:space="preserve">${"━".repeat(95)}</text>
  <text x="30" y="${statsY - 38}" font-size="13" filter="url(#phosphor-glow)">
    <tspan fill="#a6da95">~</tspan><tspan fill="#a5adcb"> </tspan><tspan fill="#8aadf4">❯</tspan><tspan fill="#cad3f5" xml:space="preserve"> gh stats --user Solenad</tspan>
  </text>

  ${statCards
    .map((s, i) => {
      const x = cardStartX + i * (cardW + cardGap);
      return `<g>
    <rect x="${x}" y="${statsY}" width="${cardW}" height="${cardH}" rx="8" fill="#363a4f" stroke="#494d64"/>
    <text x="${x + 16}" y="${statsY + 50}" font-size="34" font-weight="700" fill="${s.color}" filter="url(#phosphor-glow)">${s.value.toLocaleString()}</text>
    <text x="${x + 16}" y="${statsY + 74}" font-size="12" fill="#a5adcb">${esc(s.label)}</text>
  </g>`;
    })
    .join("\n  ")}

  <text x="30" y="${H - 30}" font-size="13" filter="url(#phosphor-glow)">
    <tspan fill="#a6da95">~</tspan><tspan fill="#a5adcb"> </tspan><tspan fill="#8aadf4">❯</tspan><tspan fill="#a5adcb"> </tspan>
  </text>
  <g class="tw-p1 tw-box">
    <text x="65" y="${H - 30}" font-size="13" fill="#cad3f5">${esc(TW_P1)}</text>
  </g>
  <g class="tw-p2 tw-box">
    <text x="65" y="${H - 30}" font-size="13" fill="#cad3f5">${esc(TW_P2)}</text>
  </g>
  <g class="tw-cpos">
    <text x="65" y="${H - 30}" font-size="13" fill="#cad3f5">▍</text>
  </g>
  <text x="30" y="${H - 12}" font-size="12" fill="#a5adcb">
  </text>
  <g class="crt-scan">
    <rect class="crt-layer" width="${W}" height="${H}" fill="url(#scanlines)" opacity="0.25" pointer-events="none"/>
  </g>
  <rect class="crt-beam" width="${W}" height="20" fill="url(#crt-beam)"/>
  <rect class="crt-layer" width="${W}" height="${H}" fill="url(#vignette)" pointer-events="none"/>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control":
        process.env.NODE_ENV === "development"
          ? "no-store"
          : "public, max-age=1800, s-maxage=1800",
    },
  });
}
