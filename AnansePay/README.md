# HIVE CONSULT — OPERATION SIM SHIFT

**Case ID:** HC-GH-2025-SF-0089  
**Classification:** MOBILE FORENSICS — MOBILE MONEY FRAUD (SIM SWAP)

---

## Case Overview

A trader's AnansePay mobile money wallet was drained of **GH₵4,350.00** within 27 minutes of an unauthorized SIM swap. The incident highlights a sophisticated social engineering and SIM swap fraud chain.

### Incident Timeline & Methodology

1.  **Social Engineering:** The fraudster initiated contact via WhatsApp, posing as "Ananse Telecom Support."
2.  **Identity Theft:** Through deceptive techniques, the perpetrator obtained:
    *   A photograph of the victim's **Ghana Card**.
    *   A one-time **SIM verification code**.
3.  **Unauthorized SIM Swap:** These credentials were used to execute a fraudulent SIM swap at a telecom retail outlet, effectively hijacking the victim's mobile identity.
4.  **Financial Drainage:** Once the SIM swap was successful, the victim's mobile money account was accessed and drained via two transfers to a primary mule account.
5.  **Laundering Path:** Within 23 minutes, the full amount was onward-transferred from the primary mule account to a second-tier mule account to obscure the trail.

---

## Forensic Significance

This case serves as a critical study in:
*   **Identity Verification Vulnerabilities:** Exploitation of physical ID photos and OTPs at retail points.
*   **Mule Account Networks:** Rapid layering of funds through multiple tiers of accounts.
*   **Crisis Response:** The narrow 27-minute window between swap and total loss emphasizes the need for rapid detection and locking mechanisms.

---

## Investigation Questions

### Section A — Device & Image Integrity
1. Verify the integrity of the E01 image. What is the MD5 hash, and does it match the value provided?
2. What device was extracted, and what extraction method was used?
3. What is the device's IMEI, and what Android version is installed?

### Section B — Social Engineering Timeline
4. Identify the first point of contact between the victim and the fraudster. When did it occur and what pretext was used?
5. What information did the fraudster request from the victim, and via which app?
6. At what time did the victim send photos of their Ghana Card, and where are these files located on the device?

### Section C — The SIM Swap Event
7. Locate the network registration log. At what exact time was the SIM swap completed, and at which outlet?
8. What one-time code was sent to the victim, and at what time?
9. What did the victim do with this code, and how does this action relate to the timing of the SIM swap?
10. How long was the victim's original device without cellular service, and what evidence corroborates this gap?

### Section D — Financial Trail
11. Locate the AnansePay application database. What was the account balance immediately before the fraud began?
12. List all transactions that occurred between the PIN change and the account reaching a zero balance, including timestamps and amounts.
13. What new device was linked to the AnansePay account, and at what time?
14. Identify the recipient of the funds drained from the victim's account. What account number did they use?
15. Is there evidence of a second transfer moving the funds further? If so, to which account and how long after the initial drain?

### Section E — Victim Response & Reporting
16. What attempts did the victim make to contact the fraudster after discovering the fraud, and what were the outcomes?
17. When was the victim's SIM service restored, and at which outlet?
18. What complaint or ticket reference numbers were generated, and by which organizations?
19. What searches did the victim perform in their browser after the incident, and what does this indicate about their state of mind/actions taken?

### Section F — Synthesis
20. Construct a complete timeline of events from the first contact to the filing of the police report, citing the artifact source for each entry.
21. Based on the evidence, identify each stage of the fraud (reconnaissance, social engineering, technical execution, financial extraction, fund laundering).
22. What additional evidence, not present on this device, would be needed to identify the perpetrator(s)?
23. What security practices, if followed by the victim, could have prevented this fraud at each stage?
