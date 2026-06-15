# Operation Dark Barrel: Metadata Analysis Report

**Property of Hive Security Consult**

## Confidentiality Notice
The information contained in this document is classified and intended solely for the use of authorized personnel at Hive Security Consult and its designated partners. Unauthorized disclosure, copying, or distribution of this report or any part thereof is strictly prohibited.

---

## Case Overview
An insider at **Accra Petroleum Holdings** is suspected of scanning a classified contract amendment (DA-7 revenue share amendment) late on a Saturday night and transmitting it to a foreign oil company. 

The primary suspect, **Kofi Mensah-Addo**, claims he was in London, UK, during the week of the incident (6–9 April 2024). Investigator **Nancy Aggrey** has recovered four forensic exhibits that contain embedded EXIF metadata critical to the investigation.

## Forensic Exhibits
The following image files were submitted as forensic exhibits for analysis. While the visual content is neutral, all forensic intelligence is contained within the binary headers.

| Exhibit Filename | Visual Description |
| :--- | :--- |
| `office_scene.jpg` | Darkened office at night. Desk, laptop, silhouette holding a phone toward documents. |
| `contract_amendment.jpg` | Scanned copy of the DA-7 revenue share amendment document. |
| `petrol_station.jpg` | Petrol station forecourt in daylight. Posted to social media on 9 April 2024. |
| `hotel_room.jpg` | Hotel room interior at night. Bed, luggage, window showing city lights. |

## Investigation Objectives
The metadata analysis aims to address the following key points:

1.  **Device Identification**: Determine the make, model, and IMEI of the capture device.
2.  **Location & Alibi Verification**: Verify the suspect's claim of being in London by analyzing GPS coordinates and timezone offsets (UTC+1).
3.  **Scan Analysis**: Identify the system used for the scan, the authenticated user, scan job identifier, and the document's destination.
4.  **Timeline Reconstruction**: Sequentially map the suspect's movements and actions on the night of 6 April 2024.
5.  **Payload Extraction**: Programmatically extract and decode hidden flags or payloads embedded in the binary metadata fields.
6.  **Attribution**: Provide a formal attribution statement linking the suspect to the breach using coordinates, device ID, and corporate identity.

## Technical Requirements
Analysis should be performed using standard forensic tools, including:
*   **ExifTool**
*   **Python (with `piexif` library)**
*   Hex Editors (for low-level extraction)

---
*Hive Security Consult - Cyber Forensics Division*
