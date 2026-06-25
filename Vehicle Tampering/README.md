# Vehicle Tampering Incident (Case VIP-GH-2026-TAMP-0417)



This directory contains the training syllabus and investigation objectives for the vehicle tampering forensic lab. The exercise focuses on automotive digital forensics, logs correlation, and timeline reconstruction to determine the root cause of a sudden, critical system failure.



## Case Background

An executive's driver narrowly avoided a serious crash after experiencing a sudden, catastrophic brake failure. The vehicle had been serviced at the company garage just two days prior to the incident. Investigators must conduct a deep-dive digital analysis to determine whether this incident stems from a routine mechanical defect or intentional, malicious tampering.



The primary objective is to solve two linked operational questions using purely electronic evidence:

1. **Mechanical Defect vs. Deliberate Tampering:** Determine whether the sudden brake failure that nearly caused a serious crash was an honest mechanical fault or if someone deliberately compromised the vehicle.

2. **Attribution:** If the system was compromised via tampering, identify the specific person responsible using only the digital and electronic trail left behind, completely bypassing the need for a physical inspection of the car.



---



## Lab Artifacts & Dataset Information

- **Target Image:** `VIP-GH-2026-TAMP-0417.E01` (Forensic Duplicate Image)  

- **Case Code:** VIP-GH-2026-TAMP-0417  



---



## Investigation Syllabus & Core Milestones



### Phase 1: Triage and System Identification

* **Diagnostic Integrity:** Parse the initial system status logs immediately leading up to the brake failure event. Identify any recurring error codes, clear commands, or forced diagnostic overrides.

* **Maintenance Window Analysis:** Map out the exact timeline of the vehicle's stay at the company garage two days prior to the incident. Identify which diagnostic tools, computers, or networks connected to the vehicle's control modules during this period.



### Phase 2: System Correlation and Anomaly Detection

* **Friction vs. Electronic Command:** Correlate physical sensor logs (wheel speed, brake pressure, pedal position) against Electronic Control Unit (ECU) commands. Look for discrepancies where the physical input does not match the system's electronic execution.

* **Network Traffic Analysis:** Examine the internal vehicle network logs (e.g., CAN bus captures or gateway modules) for unauthorized frames, sudden diagnostic session initializations, or spoofed identifiers that could indicate malicious override injections.



### Phase 3: Attribution and Reporting

* **Digital Footprint Extraction:** Isolate the digital signatures, MAC addresses, technician login IDs, or cryptographic keys utilized during the anomalous configuration changes. 

* **Final Determination:** Build an end-to-end chronological timeline supporting your conclusion. If concluding tampering, clearly tie the electronic trail to the specific threat actor or terminal used to deploy the compromise.



---



## Instructions for Use

1. Locate the `VIP-GH-2026-TAMP-0417.E01` image file within this lab folder.

2. Load the `.E01` image into an automotive-capable forensic suite or an advanced hex/telematics parsing tool.

3. Ensure your forensic workstation verifies the MD5/SHA-1 hashes of the image before starting analysis to maintain evidentiary chain of custody.

4. Document your answers to the two core questions systematically within your final lab report.

