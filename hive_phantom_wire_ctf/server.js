// ════════════════════════════════════════════════════════════════
//  HIVE CONSULT — Operation: PHANTOM WIRE CTF
//  server.js — Server-side flag validation (flags NEVER reach client)
//  Built by Nana Sei Anyemedu
// ════════════════════════════════════════════════════════════════
const http = require('http');
const fs   = require('fs');
const path = require('path');

// ── All 17 flags — server-side only ─────────────────────────────
const FLAGS = {
   1: "HIVE{ph1sh1ng_h34d3r_3xp0s3d}",
   2: "HIVE{dr0pp3r_c0mm4nd_3xp0s3d}",
   3: "HIVE{w3b_sh3ll_4cc3ss_l0g}",
   4: "HIVE{b34c0n_b1n4ry_s1gn4l}",
   5: "HIVE{p3_h34d3r_c0nf1g_l34k3d}",
   6: "HIVE{l4t3r4l_m0v3m3nt_cr3ds}",
   7: "HIVE{st4g1ng_f1l3_r3c0v3r3d}",
   8: "HIVE{c2_x0r_b34c0n_d3c0d3d}",
   9: "HIVE{chr0m3_cr3d_st0r3_l34k}",
  10: "HIVE{dns_3xf1l_ch4nn3l_f0und}",
  11: "HIVE{jwt_t0k3n_p4yl04d_l34k}",
  12: "HIVE{p0w3rsh3ll_0bfusc4t10n}",
  13: "HIVE{m3m0ry_4rt1f4ct_3xtr4ct3d}",
  14: "HIVE{st3g0_1mpl4nt_d3t3ct3d}",
  15: "HIVE{tr1_l4y3r_3nc0d1ng_br0k3n}",
  16: "HIVE{r3g1stry_sh3llc0d3_d3c0d3d}",
  17: "HIVE{ch41n_r34ct10n_c0mpl3t3}",
};

const MIME = { '.html':'text/html; charset=utf-8', '.js':'application/javascript', '.css':'text/css', '.ico':'image/x-icon' };
const rateMap = {};

function isRateLimited(ip) {
  const now = Date.now();
  if (!rateMap[ip]) rateMap[ip] = [];
  rateMap[ip] = rateMap[ip].filter(t => now - t < 60000);
  if (rateMap[ip].length >= 30) return true;
  rateMap[ip].push(now); return false;
}

function readBody(req) {
  return new Promise((res, rej) => {
    let d = '';
    req.on('data', c => { d += c; if (d.length > 2048) rej(new Error('Too large')); });
    req.on('end', () => res(d));
    req.on('error', rej);
  });
}

const server = http.createServer(async (req, res) => {
  const ip = req.socket.remoteAddress || 'unknown';

  if (req.method === 'POST' && req.url === '/api/check') {
    if (isRateLimited(ip)) {
      res.writeHead(429, {'Content-Type':'application/json'});
      return res.end(JSON.stringify({correct:false, error:'Rate limit: wait 60s'}));
    }
    let body;
    try { body = JSON.parse(await readBody(req)); } catch {
      res.writeHead(400, {'Content-Type':'application/json'});
      return res.end(JSON.stringify({correct:false}));
    }
    const id   = parseInt(body.id, 10);
    const flag = typeof body.flag === 'string' ? body.flag.trim() : '';
    if (!FLAGS[id] || !flag) {
      res.writeHead(400, {'Content-Type':'application/json'});
      return res.end(JSON.stringify({correct:false}));
    }
    const correct = flag === FLAGS[id];
    console.log(`[${new Date().toISOString()}] IP:${ip} CH:${id.toString().padStart(2,'0')} ${correct ? '✓ CORRECT' : '✗ WRONG  '} "${flag.slice(0,30)}"`);
    res.writeHead(200, {'Content-Type':'application/json'});
    return res.end(JSON.stringify({correct}));
  }

  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, {'Content-Type':'application/json'});
    return res.end(JSON.stringify({status:'ok', challenges:Object.keys(FLAGS).length, name:'Operation PHANTOM WIRE'}));
  }

  if (req.method !== 'GET') { res.writeHead(405); return res.end(); }

  let fp = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  if (!fp.startsWith(path.join(__dirname, 'public'))) { res.writeHead(403); return res.end(); }

  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404, {'Content-Type':'text/plain'}); return res.end('Not found'); }
    const mime = MIME[path.extname(fp)] || 'application/octet-stream';
    res.writeHead(200, {'Content-Type':mime, 'Cache-Control':'no-cache', 'X-Content-Type-Options':'nosniff'});
    res.end(data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('\n  ██╗  ██╗██╗██╗   ██╗███████╗');
  console.log('  ██║  ██║██║██║   ██║██╔════╝');
  console.log('  ███████║██║██║   ██║█████╗  ');
  console.log('  ██╔══██║██║╚██╗ ██╔╝██╔══╝  ');
  console.log('  ██║  ██║██║ ╚████╔╝ ███████╗');
  console.log('  ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚══════╝\n');
  console.log(`  Operation: PHANTOM WIRE CTF`);
  console.log(`  Listening on http://localhost:${PORT}`);
  console.log(`  Flags: server-side only — 17 challenges loaded\n`);
});
