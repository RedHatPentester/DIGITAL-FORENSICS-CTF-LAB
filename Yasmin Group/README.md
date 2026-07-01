\# Digital Forensics Case: Yasmin Group Inventory Audit (YGC-IA-2024-0917)



\## Executive Summary

During the Q4 2024 inventory and compliance audit (spanning September 1 – November 30, 2024), Yasmin Group of Companies—an electronics distributor operating in Tema/Accra—identified multiple critical anomalies. These include batch count variances, a short-received shipment, and failed QR labeling metrics. 



Internal tracking confirmed that inventory officer Kwabena Mensah (`kmensah`) managed the affected stock lines and regularly transferred operational data via removable storage. Consequently, his assigned workstation, \*\*YGC-WS-014\*\*, was isolated and forensically imaged.



\### Objective

Reconstruct all relevant user and system activity on workstation `YGC-WS-014` during the audit window. The final analysis must definitively determine whether the flagged inventory discrepancies stem from procedural negligence or deliberate data manipulation. 



\---



\## Evidence Inventory



| Evidence ID | File Name | Format | Description |

| :--- | :--- | :--- | :--- |

| \*\*EVID-01\*\* | `Yasmin\_Group\_Inventory\_Audit.E01` | Expert Witness Format (E01) | Forensic image of workstation `YGC-WS-014` |



\---



\## Investigative Focus \& Core Questions



The scope of this examination requires finding definitive, artifact-backed answers to the following seven investigative questions:



1\. \*\*User Attribution\*\* Who actively utilized workstation `YGC-WS-014`, and what specific forensic artifacts form the basis for that unique identity attribution?



2\. \*\*Temporal Analysis\*\* Over what exact period did the relevant operational and system activity occur, and what log or filesystem evidence independently establishes that timeframe?



3\. \*\*Inventory Reconciliation\*\* For each flagged batch and short-received shipment, does the local system of record align with official supporting documents and external communications?



4\. \*\*Segregation of Duties\*\* For any identified discrepancy, did a single individual handle both the recording and authorization steps, or was proper segregation of duties maintained?



5\. \*\*Exfiltration \& Data Movement\*\* What specific data profiles left the workstation via removable media (USB), cloud services, web downloads, or peer-to-peer (P2P) networks, and was this movement operationally authorized?



6\. \*\*Anti-Forensics \& Deletion\*\* Was any material data or log structure deleted during the audit period? If so, does the timing or recovered content tie directly to the inventory discrepancies?



7\. \*\*Financial \& P2P Artifacts\*\* Do discovered cryptocurrency or peer-to-peer software artifacts represent a governed corporate business process or an unmanaged internal control gap?



\---



\## Forensic Requirements \& Methodology



To ensure findings are defensible and admissible, the analysis must adhere to standard forensic workflows:



\* \*\*Integrity Validation:\*\* Verify the acquisition hashes (MD5/SHA-1) of `Yasmin\_Group\_Inventory\_Audit.E01` before mounting or parsing data structures.

\* \*\*Timeline Analysis:\*\* Generate a unified master timeline focusing heavily on the critical window of \*\*1 Sep 2024 – 30 Nov 2024\*\*.

\* \*\*Artifact Target Areas:\*\*

&#x20; \* \*\*System Attribution:\*\* Registry hives (`SAM`, `SOFTWARE`), Event Logs (`Security.evtx`), Profile directories.

&#x20; \* \*\*Data Movement:\*\* `SYSTEM` registry hive (USBSTOR), Link files (`.lnk`), Jump Lists, Shellbags, Browser history/downloads.

&#x20; \* \*\*P2P/Crypto:\*\* Program Files execution history, Prefetch files (`.pf`), Amcache, network configurations, and local app data roaming paths.


### Property of HIVE Consult

