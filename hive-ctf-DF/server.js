// ════════════════════════════════════════════════════════════════
//  HIVE CONSULT — Digital Forensics CTF
//  server.js — Flag validation endpoint (flags never reach client)
//  Built by Nana Sei Anyemedu
// ════════════════════════════════════════════════════════════════

const http = require('http');
const fs   = require('fs');
const path = require('path');

// ── FLAGS live here only. Never exposed to the client ───────────
const FLAGS = {
   1: "HIVE{m3tad4ta_n3v3r_l13s}",
   2: "HIVE{b4s364_n0t_3ncrypt10n}",
   3: "HIVE{l0g_4nal1s1s_3xp0s3d}",
   4: "HIVE{c43s4r_c1ph3r_cr4ck3d}",
   5: "HIVE{b1n4ry_w0rds_sp34k_4ll}",
   6: "HIVE{h3x_dump_3xp0s3s_4ll}",
   7: "HIVE{p4ck3t_sn1ff3d_4n4lyst}",
   8: "HIVE{c4rv3d_fr0m_th3_v01d}",
   9: "HIVE{x0r_k3y_3xp0s3d_gh0st}",
  10: "HIVE{mult1_st4g3_d3c0d3r}",
  11: "HIVE{m3m0ry_str1ng_h1dd3n}",
  12: "HIVE{st3g_ls8_ch4nn3l_f0und}",
  13: "HIVE{4dv_ch41n_3nc0d1ng_3l1t3}",
  14: "HIVE{r3g1stry_h1v3_s3cr3ts}",
  15: "HIVE{m4st3r_f0r3ns1c4t0r_h1v3}",
};

// ── Simple rate limiting (per IP, 30 guesses/min) ───────────────
const rateMap = {};
function isRateLimited(ip) {
  const now = Date.now();
  if (!rateMap[ip]) rateMap[ip] = [];
  rateMap[ip] = rateMap[ip].filter(t => now - t < 60000);
  if (rateMap[ip].length >= 30) return true;
  rateMap[ip].push(now);
  return false;
}

// ── MIME types ───────────────────────────────────────────────────
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.ico':  'image/x-icon',
};

// ── Read body helper ─────────────────────────────────────────────
function readBody(req) {
  return new Promise((res, rej) => {
    let d = '';
    req.on('data', c => { d += c; if (d.length > 2048) rej(new Error('Too large')); });
    req.on('end', () => res(d));
    req.on('error', rej);
  });
}

// ── HTTP Server ──────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  const ip = req.socket.remoteAddress || 'unknown';

  // ── POST /api/check — flag validation ──────────────────────────
  if (req.method === 'POST' && req.url === '/api/check') {
    if (isRateLimited(ip)) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ correct: false, error: 'Rate limit exceeded. Wait 60 seconds.' }));
    }

    let body;
    try {
      body = JSON.parse(await readBody(req));
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ correct: false, error: 'Bad request' }));
    }

    const id   = parseInt(body.id, 10);
    const flag = typeof body.flag === 'string' ? body.flag.trim() : '';

    if (!FLAGS[id] || !flag) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ correct: false }));
    }

    const correct = flag === FLAGS[id];

    // Log attempt (server console only — never logged to client)
    const ts = new Date().toISOString();
    console.log(`[${ts}] IP:${ip} CH:${id} ${correct ? 'CORRECT ✓' : 'WRONG ✗'}`);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ correct }));
  }

  // ── GET /health ────────────────────────────────────────────────
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', challenges: Object.keys(FLAGS).length }));
  }

  // ── Static files ───────────────────────────────────────────────
  if (req.method !== 'GET') {
    res.writeHead(405); return res.end();
  }

  let filePath = path.join(__dirname, 'public',
    req.url === '/' ? 'index.html' : req.url.split('?')[0]);

  // Prevent path traversal
  if (!filePath.startsWith(path.join(__dirname, 'public'))) {
    res.writeHead(403); return res.end();
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }
    const ext  = path.extname(filePath);
    const mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n  ██╗  ██╗██╗██╗   ██╗███████╗`);
  console.log(`  ██║  ██║██║██║   ██║██╔════╝`);
  console.log(`  ███████║██║██║   ██║█████╗  `);
  console.log(`  ██╔══██║██║╚██╗ ██╔╝██╔══╝  `);
  console.log(`  ██║  ██║██║ ╚████╔╝ ███████╗`);
  console.log(`  ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚══════╝`);
  console.log(`\n  HIVE CONSULT — Digital Forensics CTF`);
  console.log(`  Operation: Digital Ghost`);
  console.log(`  Server running on http://localhost:${PORT}`);
  console.log(`  Flags: server-side only. Not exposed to clients.\n`);
});
