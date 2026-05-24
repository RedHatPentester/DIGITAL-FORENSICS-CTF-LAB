# Dead Reckoning — Metadata Forensics CTF

```
PROPERTY OF HIVE CONSULT, GHANA
Developed by: Nana Sei Anyemedu
Organization: Hive Consult, Ghana
Challenge:    Dead Reckoning — Metadata Forensics CTF
Difficulty:   Advanced
```

---

## Case Background

A senior operations analyst at **Accra Petroleum Holdings (APH)** has been found dead in his apartment on the night of **April 9, 2024**. His company laptop is missing. Three days prior, highly classified petroleum exploration contracts were leaked to an unknown foreign entity.

Police recovered a USB drive at the scene containing four image files. A prime suspect — **Kofi Mensah-Addo**, APH Operations Department — claims he was in London at the time, about to board a flight back to Accra.

**Your job:** prove or disprove his alibi. The truth is in the metadata.

---

## Evidence Files

| File | Description |
|------|-------------|
| `crime_scene_photo.jpg` | CCTV capture from scene |
| `suspect_device.jpg` | Photo from suspect's personal phone |
| `leaked_document_scan.jpg` | Scan of the leaked contract |
| `alibi_photo.jpg` | Suspect's claimed airport selfie |

---

## Your Mission

Extract metadata from all four files and answer the following questions:

**Q1.** What is the TRUE location recorded in the crime scene photo EXIF and how does it differ from the official report? (GPS coordinates required)

**Q2.** The crime scene photo has TWO timestamps. What are they and what does the discrepancy tell you?

**Q3.** The suspect claims he was in London (BST timezone). What timezone offset is embedded in his phone photo and what does that prove?

**Q4.** What device serial number is hidden in the suspect's phone metadata?

**Q5.** Who is the real author of the leaked document scan and what internal software was used to create it?

**Q6.** What email address is embedded in the scanner software field of the leaked document?

**Q7.** The suspect claims he was at Heathrow at 19:47. What GPS coordinates are in the airport selfie and which airport do they actually point to?

**Q8.** A final flag is base64-encoded in the XPComment field of `alibi_photo.jpg`. Decode it.
