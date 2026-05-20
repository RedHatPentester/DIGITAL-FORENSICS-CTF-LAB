# HIVE CONSULT — Digital Forensics CTF
### Operation: Digital Ghost

A fully self-contained Digital Forensics CTF platform with 15 challenges across 3 difficulty tiers.

---

## Quick Start (Docker)

```bash
# Build and start
docker compose up -d

# Access the CTF
open http://localhost:8080

# Stop
docker compose down
```

## Alternative — Docker only

```bash
docker build -t hive-ctf .
docker run -d -p 8080:80 --name hive-ctf hive-ctf
```

## Challenge Overview

| # | Title | Tier | Technique |
|---|-------|------|-----------|
| 1 | The EXIF Witness | Beginner | Hex decoding |
| 2 | The Encoded Note | Beginner | Base64 |
| 3 | The Access Log | Beginner | URL decoding |
| 4 | The Draft Message | Beginner | Caesar/ROT13 |
| 5 | The Data Stream | Beginner | Binary→ASCII |
| 6 | The Hex Payload | Intermediate | Hex dump analysis |
| 7 | The Packet Intercept | Intermediate | HTTP Basic Auth |
| 8 | The Deleted Evidence | Intermediate | File carving |
| 9 | The XOR Cipher | Intermediate | XOR decryption |
| 10 | The Double Blind | Intermediate | Multi-stage Base64 |
| 11 | Memory Ghost | Advanced | Memory forensics |
| 12 | The Hidden Pixel | Advanced | Steganography (LSB) |
| 13 | The Encoding Chain | Advanced | Multi-layer decode |
| 14 | The Registry Key | Advanced | Windows Registry |
| 15 | Ghost Protocol | Advanced | Chained decoding |

## Scoring
- Beginner: 100 pts × 5 = 500 pts
- Intermediate: 200 pts × 5 = 1,000 pts  
- Advanced: 300 pts × 5 = 1,500 pts
- **Total: 3,000 pts**

---
Built by **Nana Sei Anyemedu** | Property of **HIVE CONSULT**
