# HC-LAB :: Email Forensics v2
**Property of Hive Consult, Ghana**
**Prepared by: Nana Sei Anyemedu**

Terminal-style interactive email forensics lab.
Dark theme · No answers shown · Coin-based hints · Live score.

---

## Quick Start

```bash
# One command
docker compose up -d

# Open in browser
http://localhost:8080
```

Or manually:
```bash
docker build -t hive-forensics-lab .
docker run -d -p 8080:80 --name hive-forensics-lab --restart unless-stopped hive-forensics-lab
```

---

## Mechanics

| Feature | Detail |
|---|---|
| Starting score | 100 pts |
| Hint cost | -5 pts + 1 coin |
| Coins per module | 3 (spend wisely) |
| Questions | 9 across 4 modules |
| Wrong answer | No penalty — retry freely |
| Correct answer | Status locked, answer frozen |

### Hint system
- Each question has 3 progressive hints
- Hints get narrower with each tier — they guide, never reveal
- Once coins for a module run out, no more hints for that module

---

## Modules

| # | Name | Level | Questions |
|---|------|-------|-----------|
| 01 | Header forensics | Beginner | Q-01, Q-02, Q-03 |
| 02 | Phishing detection | Beginner | Q-04, Q-05 |
| 03 | SPF / DKIM / DMARC | Intermediate | Q-06, Q-07 |
| 04 | CTF — The Accra Deception | Advanced | Q-08, Q-09 |

---

## Management

```bash
# Stop
docker compose down

# Rebuild after editing index.html
docker compose up -d --build

# Logs
docker logs hive-forensics-lab

# Change port — edit docker-compose.yml:
#   ports: - "80:80"
```

---

## Requirements
- Docker 20.10+
- Docker Compose v2+

---

Property of Hive Consult, Ghana. All rights reserved.
