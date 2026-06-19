# Case HC-GH-2025-EX-0112: Operation Crimson Veil
## Digital Forensics & Incident Response (DFIR) Challenge

---

### Overview
This repository contains a professional, scenario-based digital forensic challenge designed to test your investigation and analysis skills on a Windows 11 disk image. The challenge simulates a counter-terrorism investigation involving financial anomalies, NGO exploitation, and potential watchlisted network interactions.

---

### Background
The Bureau of National Investigations (BNI) Joint Counter-Terrorism Task Force seized a laptop from **Osama Elorm Tetteh**, Director of Logistics at the NGO *Sahel Relief Initiative*, on **14 March 2025**. 

The seizure was initiated after flagging **GHS 144,600** in suspicious wire transfers to Turkey that did not correspond to any approved vendor. Tetteh boarded a flight to Istanbul on a one-way ticket two days prior to the seizure (12 March 2025) and has not returned. The laptop has been transferred to **HIVE CONSULT** for forensic examination.

---

### Investigative Objectives
Investigators do not yet know whether Sahel Relief Initiative is a genuine NGO being exploited, a deliberate front, or something in between. Tetteh's abrupt one-way departure, the structured wire transfers, his pushback against two colleagues who raised concerns, and intelligence linking him to a watchlisted network all point to something beyond mismanagement.

Using only this laptop image, your task is to determine:
1. **Activities & Intentions**: What was Tetteh doing, and what was his role?
2. **Communications**: Who did he communicate with, and what channels did he use?
3. **Financial Flow**: How did the money move, and where did the GHS 144,600 go?
4. **Timeline & Knowledge**: What did he know, and when did he know it?
5. **Anti-Forensics / Concealment**: What actions did he take to conceal his activity?
6. **Pre-Departure Activities**: What did he do in the days immediately before leaving the country on 12 March 2025?

---

### Evidence Package Details
The digital evidence is stored in the compressed archive `HC-GH-2025-EX-0112 Terrorist case DFIR.zip`.

#### File Metadata & Verification
| Metric / Attribute | Value |
| :--- | :--- |
| **Evidence File Name** | `HC-GH-2025-EX-0112_OTETTEH_LAPTOP.E01` (Expert Witness Format) |
| **MD5 Hash** | `5a3c3ebfd6a9bd470f12ddcb31d0260b` |
| **SHA-256 Hash** | `28eb348e6343a1a2a0a477fc58aff58b30c17ceb5b7d9a069258e90fde6e489a` |
| **Target Subject** | Osama Elorm Tetteh |
| **Source System** | Windows 11 Pro Laptop |
| **System Hostname** | `OTETTEH-LAPTOP` |
| **Seizure Date** | 2025-03-14 |
| **Case Version** | v3.0 (Expanded WhatsApp dataset: 297 messages across 5 chats) |
| **Examiner / Agency** | Nana Sei Anyemedu \| Property of HIVE CONSULT |

> [!NOTE]
> **Disclaimer & Training Notice**
> This is a training scenario. All characters, organizations, events, and identifiers depicted in this challenge are entirely fictional. Any resemblance to real persons, living or dead, or actual events is purely coincidental.

---

### Investigation Setup & Tools
To begin the challenge:
1. **Extract the Archive**: Unzip the contents of `HC-GH-2025-EX-0112 Terrorist case DFIR.zip`.
2. **Verify File Integrity**: Calculate the MD5 or SHA-256 hash of the extracted `.E01` file to verify it matches the hashes listed above.
3. **Load Image**: Import `HC-GH-2025-EX-0112_OTETTEH_LAPTOP.E01` into your preferred digital forensics suite (e.g., Autopsy, Magnet AXIOM, FTK, or EnCase).
4. **Key Areas of Interest**:
   - **Communications**: Analyze the WhatsApp SQLite databases to parse the 297 messages across 5 chats.
   - **System Artifacts**: Inspect Registry hives (`SYSTEM`, `SOFTWARE`, `SAM`, `NTUSER.DAT`) to reconstruct system configuration and user activity.
   - **Web Activity**: Analyze Chromium browser profiles, history databases, and cache files.
   - **Evidentiary Timelines**: Leverage event logs (`.evtx`), link files (`.lnk`), Shellbags, and Jump Lists to map out Tetteh's final days of activity.

---

Property of Hive Security Consult
