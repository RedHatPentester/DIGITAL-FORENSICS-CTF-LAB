# Incident Investigation Report: Operation Dark Horizon
### Incident ID: INC-20241114-04
### Target Asset: WORKSTATION-04
### Subject: Marcus K. Webb (IT Contractor)

---

## 1. Executive Summary
On 14 November 2024 at 14:31 UTC, the Meridian Technology Solutions Ltd. Security Operations Centre (SOC) intercepted anomalous encrypted outbound traffic from `WORKSTATION-04`. A 26-minute full packet capture (PCAP) was archived, spanning 14:23:00 to 14:50:12 UTC. This capture contains exactly 158 packets detailing a complete, localized session lifecycle.

Most forensic investigations get buried in thousands of pages of structural logs. This document strips away the corporate noise to isolate a definitive, high-fidelity network sequence. 

---

## 2. The Core Investigative Goal
> **"Prove that Marcus K. Webb, IT contractor on WORKSTATION-04, deliberately accessed a darknet marketplace from the corporate network, had an authenticated account, and attempted a transaction; using only network traffic evidence."**

---

## 3. Timeline & Evidence Breakdown

### Phase 1: Baseline & Anomalous DNS Queries (14:23:00 – 14:30:59)
* **The Blueprint:** Normal operational traffic abruptly shifts. Standard corporate DNS resolutions cease, replaced by specific outbound lookups designed to map network paths outside standard enterprise routing protocols.
* **The Artifacts:** Non-standard internal DNS requests paired with immediate structural outbound packets.

### Phase 2: The Alert Trigger (14:31:00 UTC)
* **The Catalyst:** Automated IDS flags a sequence of outbound TCP connections originating from `WORKSTATION-04`. 
* **The Signature:** Traffic bypasses standard web ports (80/443), forcing connections over unusual destination ports typical of entry nodes or localized proxy tunnels.

### Phase 3: Darknet Authentication & Transaction Execution (14:32:00 – 14:48:00)
* **The Authentication Proof:** Protocol handshakes and payload length analysis verify a persistent, encrypted session to a known darknet marketplace node. 
* **The Transaction Proof:** Specific packet size fluctuations, directional push (`PSH`) flags, and localized data bursts confirm active user interaction specifically, the transmission of account credentials and subsequent transactional state changes.

### Phase 4: Session Teardown (14:48:01 – 14:50:12)
* **The Cleanup:** Sudden structural changes in traffic flow. A sequence of TCP `FIN/ACK` and `RST` packets terminates the connection, mapping the precise moment the subject attempted to sever the link and obscure active volatile memory artifacts on the workstation.

---

## 4. Technical Constraints & Rules of Engagement
* **Zero Host Artifacts:** The entire proof relies exclusively on the 158 network packets captured within the 26-minute window. No disk forensics, browser history carving, or volatile RAM analysis from `WORKSTATION-04` are permitted.
* **Cryptographic Verification:** While payload contents remain encrypted, malicious intent is proven via behavioral fingerprints: precise packet sizing, exact cryptographic handshake headers, timing correlations, and destination port irregularities.

---

### Property of HIVE CONSULT
