# HIVE CONSULT — Operation: PHANTOM WIRE CTF
### APT Incident Response Lab — 17 Challenges

---

## Quick Start
```bash
unzip hive_phantom_wire_ctf.zip && cd hive-ctf-v3
docker compose up -d
open http://localhost:8080
```

## Security Model
- **Flags are in `server.js` only** — never sent to client
- Client HTML contains only encoded evidence (the challenge artefacts)
- Flag guesses go to `POST /api/check` — server returns only `{correct: true/false}`
- Rate limited: 30 guesses per IP per minute

## Challenge Breakdown

| # | Title | Tier | Pts | Technique |
|---|-------|------|-----|-----------|
| 1 | The Phishing Lure | Easy | 100 | Hex decode (email header) |
| 2 | The Macro Dropper | Easy | 100 | Base64 (PowerShell) |
| 3 | The Web Shell | Easy | 100 | URL decode (Apache log) |
| 4 | The Beacon Signal | Easy | 100 | Binary → ASCII |
| 5 | The Malware Config | Intermediate | 200 | Hex dump analysis |
| 6 | The Stolen Credential | Intermediate | 200 | Base64 (HTTP Basic Auth) |
| 7 | The Staging File | Intermediate | 200 | File carving (3 sectors) |
| 8 | The C2 Channel | Intermediate | 200 | XOR decrypt (key: PHANTOM) |
| 9 | The Chrome Vault | Intermediate | 200 | Double Base64 |
| 10 | The DNS Tunnel | Intermediate | 200 | Base32 decode |
| 11 | The Implant Token | Intermediate | 200 | JWT analysis |
| 12 | The Obfuscated Script | Intermediate | 200 | Base64 → Reverse |
| 13 | The Memory Artifact | Hard | 300 | Memory forensics (hex) |
| 14 | The Hidden Implant | Hard | 300 | Steganography + Base64 |
| 15 | The Config Blob | Hard | 300 | Base64 → ROT13 → Reverse |
| 16 | The Registry Rootkit | Hard | 300 | XOR decrypt (key: WIRE) |
| 17 | Ghost Protocol | Hard | 300 | Base64 → Hex → ROT13 |

**Total: 4×100 + 8×200 + 5×300 = 3,500 pts**

---
Built by **Nana Sei Anyemedu** | Property of **HIVE CONSULT**
