# Meridian Financial Services — Ransomware Incident CTF

## Scenario

It was a Tuesday morning at Meridian Financial Services. Philip Green sat down at his desk, opened his inbox, and found an email with an attachment: `Invoice_March2024.docm`. He'd processed dozens like it. He clicked, enabled the macro, and went back to his coffee.

He never saw the PowerShell window. He never heard the outbound connection to 185.220.101.47. By 8:01 AM his machine was beaconing to a Tor exit node in Eastern Europe, and by 8:22 AM the attacker was walking the internal file server using Philip's own credentials.

Two hundred megabytes of client records left the building silently over HTTPS to MEGA. Then came the encryption. Every file, every folder , sealed with a .lockbit extension. Shadow copies wiped. Defender disabled. Event logs cleared. His wallpaper replaced with a black screen and a ransom demand.

Philip stared at a countdown timer and a victim ID he'd never asked for: 4A9F2E8B-7C31-4D56-A091-F3E28C107B44.

One email. One click. Thirty-two minutes from delivery to total compromise.

The forensic team arrived that afternoon with an imaging kit and a packet capture. Your job is to piece together what they found.

## Evidence Files

This challenge is distributed as a zip archive. Extract it to access the evidence:

| File | Description |
|------|-------------|
| `meridian_workstation.E01` | EnCase forensic image of Philip Green's workstation (257 MB) |
| `meridian_incident.pcap` | Network packet capture from the incident |

## Questions

1. What was the initial access vector and when did it occur?
2. How long after the lure was opened did the C2 beacon start?
3. Which internal host did the attacker pivot to?
4. Where was data exfiltrated before encryption?
5. What Windows security feature did the attacker disable first?
6. What anti-forensics technique was used, and at what time?
7. What is the victim ID from the ransom note?
8. What does ID Ransomware identify the malware family as?
