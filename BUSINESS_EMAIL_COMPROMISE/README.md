# HIVE CONSULT Digital Forensics Training
## Business Email Compromise Case: Operation Harbour Drift

> [!IMPORTANT]
> **Classification:** TRAINING. This is a fictional scenario. All names, domains, IP addresses, bank details, and events are invented for instruction and do not refer to any real person, company, or account.

| Metadata | Details |
| :--- | :--- |
| **Case Created By** | Nana Sei Anyemedu |
| **Case Number** | HC-2026-0442 |
| **Platform** | CIPHER (Cloud Investigation Platform for Hosted Email and Records) |
| **Suggested Duration** | 60 to 90 minutes |
| **Level** | Intermediate/Advanced |

## Scenario

On Tuesday 14 July 2026, Efua Sarpong, an Accounts Officer at Adinkra Logistics in Accra, received an email that appeared to come from the Finance Manager, Kwabena Mensah. It approved an urgent supplier payment of USD 128,750.00 to a new beneficiary before the banking cut off, marked confidential, and asked her to handle it by email only.

Efua noticed that the beneficiary on the attached instruction did not match the Volta River Supplies record on file and that the bank was new, so she paused the payment and asked Kwabena to confirm on a call. The matter was escalated to the security team, who exported mailbox, sign-in, and cloud activity for review.

You are the assigned examiner. Reconstruct what happened and advise whether the payment is safe to release.

## Evidence Artifacts

The following forensic artifacts are available in the [evidence/](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence) directory for your analysis:

- **Mailbox Data:**
  - [mailbox_adinkra.mbox](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence/mailbox_adinkra.mbox) – MBOX mailbox export for Adinkra Logistics.
  - [Adinkra_Invoice_Fraud.eml](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence/Adinkra_Invoice_Fraud.eml) – The fraudulent payment email received on 14 July 09:30.
- **Identity & Sign-in Logs:**
  - [entra_signins.csv](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence/entra_signins.csv) / [entra_signins.json](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence/entra_signins.json) – Microsoft Entra ID sign-in activity logs.
- **Cloud Audit Logs:**
  - [unified_audit_log.csv](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence/unified_audit_log.csv) / [unified_audit_log.json](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence/unified_audit_log.json) – Unified Audit Log (UAL) data capturing cloud events.
  - [onedrive_sharepoint_audit.csv](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence/onedrive_sharepoint_audit.csv) – OneDrive and SharePoint access logs.
- **Network & Delivery Activity:**
  - [message_trace.csv](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/evidence/message_trace.csv) – Email message trace logs.

*Integrity verification metadata is provided in [MANIFEST.txt](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/MANIFEST.txt) and documented in [PROVENANCE.md](file:///C:/Users/turningpointKS/Downloads/BUSINESS%20EMAIL%20COMPROMISE/PROVENANCE.md).*

## Your Task

Answer the 7 core questions of an email and cloud investigation:

1. **Initial Access**
   How did the attacker first obtain the Finance Manager credentials, and what evidence supports it?

2. **Account Takeover**
   Prove that the Finance Manager mailbox was taken over, and state when and from where.

3. **Persistence**
   List every persistence mechanism the attacker established, with the supporting evidence.

4. **Data Exfiltration**
   What data left the organization, and how? Give the correlated sequence.

5. **Header and Authentication Analysis**
   Examine the fraudulent payment email of 14 July 09:30. Is it spoofed? Cite the header indicators.

6. **Attribution and Geolocation**
   What can and cannot be concluded about the attacker location from `91.219.236.14`?

7. **Decision and Containment**
   Is the USD 128,750.00 payment safe to release? State your decision and the immediate containment actions.
