'use strict';
const sqlite3 = require('sqlite3').verbose();
const path    = require('path');
const fs      = require('fs');

const DB = path.join(__dirname, 'data', 'ir.db');
const db = new sqlite3.Database(DB);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS flags (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    flag_id  TEXT UNIQUE NOT NULL,
    title    TEXT NOT NULL,
    artifact TEXT NOT NULL,
    category TEXT NOT NULL,
    points   INTEGER DEFAULT 100,
    hint     TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS submissions (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    flag_id    TEXT NOT NULL,
    submitted  TEXT NOT NULL,
    correct    INTEGER DEFAULT 0,
    ip         TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS solved (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    flag_id    TEXT UNIQUE NOT NULL,
    solved_at  DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  const flags = [
    ['ir01','Identify the Attacker\'s IP Address',        '/var/log/apache2/access.log', 'Log Analysis',      100, 'Look for automated tool signatures in the access log'],
    ['ir02','Find the Uploaded Webshell',                 '/var/www/hivebank/uploads/',  'File Forensics',    150, 'Search for PHP files that should not exist in the uploads directory'],
    ['ir03','Discover the Persistence Mechanism',         '/etc/cron.d/',                'Persistence',       150, 'Attackers love scheduled tasks for persistence'],
    ['ir04','Identify the Backdoor Account',              '/etc/passwd',                 'Account Forensics', 150, 'Look for accounts created during the incident window (02:30-02:40)'],
    ['ir05','Find the Stolen Data Evidence',              '/var/db/hivebank.db',         'Database Forensics',200, 'Query the banking database for suspicious records'],
    ['ir06','Locate the Dropped Malware',                 '/tmp/',                       'Malware Analysis',  200, 'Hidden files in /tmp are a common malware staging location'],
    ['ir07','Extract the C2 Domain from History',         '/root/.bash_history',         'Threat Intel',      200, 'The attacker\'s bash history was not fully wiped'],
    ['ir08','Find the SSH Persistence Key',               '/root/.ssh/authorized_keys',  'Persistence',       250, 'Attackers often plant SSH keys for reliable re-entry'],
    ['ir09','Trace the Exfiltration Destination',         '/tmp/',                       'Data Exfiltration', 250, 'The attacker left a log of their exfiltration activity'],
    ['ir10','Reconstruct the Full Attack Timeline',       'Multiple artifacts',          'Timeline Analysis', 300, 'Cross-reference timestamps in logs, files, and database records'],
  ];

  flags.forEach(([id,title,artifact,cat,pts,hint]) =>
    db.run('INSERT OR IGNORE INTO flags (flag_id,title,artifact,category,points,hint) VALUES (?,?,?,?,?,?)',
      [id,title,artifact,cat,pts,hint])
  );

  console.log('[HIVE BREACH CTF] IR database ready.');
});
setTimeout(() => db.close(), 1500);
