'use strict';
// ════════════════════════════════════════════════════════════════
//  HIVE BREACH — Incident Response CTF Dashboard
//  Property of Hive Consult, Ghana
//  Designed by Nana Sei Anyemedu
// ════════════════════════════════════════════════════════════════

const express      = require('express');
const sqlite3      = require('sqlite3').verbose();
const cookieParser = require('cookie-parser');
const fs           = require('fs');
const path         = require('path');

const app  = express();
const PORT = 3000;
const DB   = path.join(__dirname, 'data', 'ir.db');
const FLAGS_DIR = '/app/flags';

const db = new sqlite3.Database(DB);
const dbGet = (s,p=[]) => new Promise((r,j)=>db.get(s,p,(e,row)=>e?j(e):r(row)));
const dbAll = (s,p=[]) => new Promise((r,j)=>db.all(s,p,(e,rows)=>e?j(e):r(rows)));
const dbRun = (s,p=[]) => new Promise((r,j)=>db.run(s,p,function(e){e?j(e):r(this);}));

function readFlag(name) {
  try { return fs.readFileSync(path.join(FLAGS_DIR, name), 'utf8').trim(); }
  catch { return null; }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => res.redirect('/index.html'));

// Get all flags with solved status
app.get('/api/flags', async (_, res) => {
  try {
    const flags = await dbAll(`
      SELECT f.*, s.solved_at,
             CASE WHEN s.flag_id IS NOT NULL THEN 1 ELSE 0 END as solved
      FROM flags f LEFT JOIN solved s ON s.flag_id=f.flag_id
      ORDER BY f.id`);
    const solvedCount = flags.filter(f => f.solved).length;
    const totalPoints = flags.filter(f => f.solved).reduce((a,f)=>a+f.points,0);
    res.json({ flags, solved: solvedCount, total: flags.length, points: totalPoints });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Submit a flag
app.post('/api/submit', async (req, res) => {
  const { flag_id, answer } = req.body;
  if (!flag_id || !answer) return res.status(400).json({ error: 'flag_id and answer required' });
  try {
    const flagMeta = await dbGet('SELECT * FROM flags WHERE flag_id=?', [flag_id]);
    if (!flagMeta) return res.status(404).json({ error: 'Unknown flag ID' });

    const correct_flag = readFlag(flag_id);
    const correct = answer.trim() === correct_flag;

    await dbRun('INSERT INTO submissions (flag_id,submitted,correct,ip) VALUES (?,?,?,?)',
      [flag_id, answer.trim(), correct ? 1 : 0, req.ip]);

    if (correct) {
      await dbRun('INSERT OR IGNORE INTO solved (flag_id) VALUES (?)', [flag_id]);
      const allFlags   = await dbAll('SELECT * FROM flags');
      const solvedRows = await dbAll('SELECT f.points FROM solved s JOIN flags f ON f.flag_id=s.flag_id');
      const totalSolved = solvedRows.length;
      const totalPoints = solvedRows.reduce((a,r)=>a+r.points, 0);
      const all_solved  = totalSolved >= allFlags.length;
      res.json({
        correct:      true,
        message:      `Flag IR-${flag_id.slice(2).toUpperCase()} captured.`,
        flag:         correct_flag,
        points:       flagMeta.points,
        total_solved: totalSolved,
        total_points: totalPoints,
        all_solved,
        ...(all_solved && { bonus: readFlag('ir10') })
      });
    } else {
      res.json({ correct: false, message: '❌ Incorrect flag. Keep investigating.' });
    }
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Get hint for a flag
app.get('/api/hint/:flag_id', async (req, res) => {
  try {
    const f = await dbGet('SELECT hint FROM flags WHERE flag_id=?', [req.params.flag_id]);
    if (!f) return res.status(404).json({ error: 'Flag not found' });
    res.json({ hint: f.hint });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Progress stats
app.get('/api/progress', async (_, res) => {
  try {
    const [total, solved, submissions] = await Promise.all([
      dbGet('SELECT COUNT(*) as c FROM flags'),
      dbGet('SELECT COUNT(*) as c FROM solved'),
      dbGet('SELECT COUNT(*) as c FROM submissions'),
    ]);
    const points_data = await dbAll('SELECT f.points FROM solved s JOIN flags f ON f.flag_id=s.flag_id');
    const points = points_data.reduce((a,r)=>a+r.points,0);
    res.json({ total: total.c, solved: solved.c, submissions: submissions.c, points });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Reset progress (for lab re-runs)
app.post('/api/reset', async (_, res) => {
  try {
    await dbRun('DELETE FROM solved');
    await dbRun('DELETE FROM submissions');
    res.json({ success: true, message: 'Progress reset.' });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Wait for flags table to be populated before accepting requests
async function waitForDB(retries = 20, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      const row = await dbGet('SELECT COUNT(*) as c FROM flags');
      if (row && row.c > 0) return true;
    } catch (_) {}
    await new Promise(r => setTimeout(r, delay));
  }
  return false;
}

waitForDB().then(ready => {
  if (!ready) console.warn('[HIVE] WARNING: flags table empty after retries — starting anyway');
  app.listen(PORT, () => console.log(`
╔══════════════════════════════════════════════════════════╗
║  HIVE BREACH — Incident Response CTF                     ║
║  Property of Hive Consult, Ghana                         ║
║  Designed by Nana Sei Anyemedu                           ║
║  Dashboard: http://localhost:${PORT}                       ║
║  SSH:       ssh analyst@localhost -p 2222                 ║
║             Password: HiveAnalyst@2024                   ║
╚══════════════════════════════════════════════════════════╝`));
});
