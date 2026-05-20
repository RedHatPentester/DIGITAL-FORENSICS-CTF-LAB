# HIVE CONSULT — Digital Forensics CTF
### Operation: Digital Ghost

A fully self-contained Digital Forensics CTF platform with 15 challenges across 3 difficulty tiers.

---

## Security Architecture

**Flags are stored in `server.js` only — they never reach the client.**

| Component | Contains flags? | Accessible to players? |
|-----------|----------------|----------------------|
| `server.js` | ✅ Yes | ❌ No — server only |
| `public/index.html` | ❌ No | ✅ Yes — client code |

Flag submissions are sent via `POST /api/check`. The server returns only `{correct: true/false}`. No flag text is ever sent to the browser. Rate limiting: 30 attempts per IP per minute.

---

## Quick Start

```bash
# 1. Unzip
unzip hive_ctf_v2_docker.zip && cd hive-ctf-v2

# 2. Build and start (no npm install needed)
docker compose up -d

# 3. Open browser
open http://localhost:8080

# 4. Stop
docker compose down
```

### Alternative (no Compose)
```bash
docker build -t hive-ctf .
docker run -d -p 8080:3000 --name hive-ctf hive-ctf
```

---

## Challenge Overview

| # | Title | Tier | Pts | Technique |
|---|-------|------|-----|-----------|
| 1 | The EXIF Witness | Beginner | 100 | Hex Decoding |
| 2 | The Encoded Note | Beginner | 100 | Base64 |
| 3 | The Access Log | Beginner | 100 | URL Decoding |
| 4 | The Draft Message | Beginner | 100 | Caesar/ROT13 |
| 5 | The Data Stream | Beginner | 100 | Binary→ASCII |
| 6 | The Hex Payload | Intermediate | 200 | Hex Dump Analysis |
| 7 | The Packet Intercept | Intermediate | 200 | HTTP Basic Auth |
| 8 | The Deleted Evidence | Intermediate | 200 | File Carving |
| 9 | The XOR Cipher | Intermediate | 200 | XOR Decryption |
| 10 | The Double Blind | Intermediate | 200 | Multi-Stage Base64 |
| 11 | Memory Ghost | Advanced | 300 | Memory Forensics |
| 12 | The Hidden Pixel | Advanced | 300 | Steganography/LSB |
| 13 | The Encoding Chain | Advanced | 300 | Multi-Layer Decode |
| 14 | The Registry Key | Advanced | 300 | Windows Registry |
| 15 | Ghost Protocol | Advanced | 300 | Chained Decoding |

**Total: 3,000 points**

---
Built by **Nana Sei Anyemedu** | Property of **HIVE CONSULT**
