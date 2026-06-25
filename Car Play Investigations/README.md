# Sankofa Couriers: CarPlay Activity Reconstruction (Case SANKOFA-CP-2025-0042)

This repository contains a mobile forensics training image designed to simulate a real-world digital forensics investigation involving Apple CarPlay usage. The exercise focuses on artifact analysis, timeline construction, application correlation, and behavioral interpretation from an iOS Full File System extraction.

## Case Background
Courier Daniel Owusu drives CarPlay-equipped vans for Sankofa Couriers, a parcel-delivery firm operating within the Accra-Tema metropolitan area in Ghana. During a routine fleet review covering the period from February to April 2025, his company-issued iPhone was acquired via a full file system extraction. 

The primary objective of this exercise is to reconstruct the courier's in-vehicle digital behavior, establish vehicle pairing profiles, map precise connection windows, trace user interactions (navigation, messaging, calls, media playback, and Siri usage), and determine whether the device was used hands-free or physically handled while driving.

*Note: This case is entirely synthetic. No actual crimes or policy violations are implied. It is designed solely for educational and training purposes.*

---

## File & Dataset Information
- **Target Archive:** `IOS_FullFileSystem.rar` (Approx. 66 MB)
- **Extraction Type:** iOS Full File System (FFS)
- **Case Developer:** Nana Sei Anyemedu
- **Property of:** Hive Consult

### Dataset Access
Due to size limitations on standard GitHub repository uploads, the raw forensic extraction target is hosted via GitHub Releases. 
1. Navigate to the **Releases** section on the right sidebar of this repository.
2. Download the `IOS_FullFileSystem.rar` binary asset from the latest release.
3. Extract the archive locally using an appropriate extraction utility (e.g., WinRAR, 7-Zip, or unrar via terminal).

---

## Investigation Syllabus & Exercises

### Phase 1: Beginner — Identification and Orientation
1. **Device Identity:** Establish the target device identity, including make, model, iOS version, owner name, and the device's own phone number. Identify the single, specific file that definitively proves to an examiner that this data originates from an iOS file system rather than a generic file dump.
2. **Contact Analysis:** Determine the total number of contacts stored on the device. Identify the local/international numbering convention followed by these contacts. Isolate the specific number belonging to the device owner to separate it from third-party contacts.
3. **CarPlay Pairings:** Identify how many CarPlay-capable vehicles this specific phone was paired with. Name each vehicle and determine whether the connection was established over USB (wired) or wirelessly.
4. **Pairing Artifacts:** Locate the specific directories/files where CarPlay pairing keys and history are stored on an iPhone. For each paired vehicle, report the human-readable vehicle name, the unique CarPlay unit/accessory ID, and the associated Bluetooth MAC address.
5. **Media Usage:** Identify the specific third-party or native music application utilized while connected to the vehicle systems. Extract and list three specific music tracks played through the CarPlay interface.

### Phase 2: Intermediate — Reconstruction and Correlation
6. **Session Logging:** Calculate the total number of distinct CarPlay connection sessions recorded over the examined period (Feb–Apr 2025). Identify the single longest session, documenting the specific vehicle involved, along with its exact start and end timestamps.
7. **Application Focus:** Analyze the `knowledgeC.db` database (specifically focusing on the `/app/inFocus` and `/app/usage` streams). Determine which applications were most frequently active or in focus during the established CarPlay connection windows.
8. **Drive Timeline Construction:** Select a single drive session and build an end-to-end chronological timeline detailing:
   - Vehicle connection initialization
   - Application focus shifts (foreground status changes)
   - Media playback events
   - Siri/Voice command invocation
   - Session disconnection
9. **Siri & Dictation Analysis:** Identify and isolate all dictation events. Pinpoint exactly when the user invoked Siri while actively connected to CarPlay, and determine the exact trigger mechanism used (e.g., the CarPlay touchscreen Siri button vs. the vehicle's steering-wheel physical control button).
10. **Geo-Location Corroboration:** Utilizing the system location databases (`CacheEncryptedB.db` / `RoutineD`) alongside metadata from photos taken during the trip (GPS EXIF data), determine the approximate geographical location of the phone during a chosen session. Corroborate these two data sources against each other to assess location accuracy.

### Phase 3: Advanced — Analysis and Interpretation
11. **Screen Interactivity Differentiation:** Distinguish between phone-screen physical interaction and CarPlay-screen interaction. Correlate device lock state, display backlight status (`/display/isBacklit`), `App.InFocus` streams, Siri events, and audio routing artifacts to construct an evidentiary argument proving whether the courier physically handled the phone or interacted safely through the vehicle dashboard. Document the limitations of this analytical conclusion.
12. **Communications Correlation:** Identify which active contacts the user messaged (SMS/iMessage/WhatsApp) or called while a CarPlay session was actively live. Cross-reference message and call log timestamps directly against known vehicle connection windows.
13. **Physical vs. Wireless Forensics:** Establish definitively which vehicle utilized a wired USB connection and which utilized a wireless connection. Name the explicit forensic artifacts (e.g., preference files, power logs, connection daemons) that support each finding. Explain the broader investigative significance of this distinction regarding the types of residual evidence you would expect to find left behind on both the phone and the vehicle infotainment system.
14. **Audio-Routing Analysis:** Conduct a deep-dive audio-routing analysis. Demonstrate via internal logs that the audio output was explicitly routed to the vehicle hardware (`CarAudio`) and that the system microphone was engaged (`CarMicrophone`) during dictation events. Explain what this proves technically, and critically analyze what it does *not* prove regarding actual driver cognitive distraction.
15. **Cross-Source Validation & Report Caveating:** Perform a multi-source validation exercise for a single investigative claim (e.g., *"The user navigated toward Tema Port while connected to CarPlay"*). Corroborate this hypothesis across at least three independent forensic artifacts (e.g., `knowledgeC.db`, Apple/Google Maps history, internal location databases, photo EXIF data). Identify any data gaps, synchronization lags, or contradictions, and write a professional forensic caveat explaining how you would present these anomalies in a formal report.

---

## Instructions for Use
1. Download the file from the **Releases** tab.
2. Extract the contents of `IOS_FullFileSystem.rar` using a forensic suite or archive extraction utility.
3. Load the file system structure into your preferred forensic analysis tool (e.g., Cellebrite Physical Analyzer, Axiom, Autopsy, or manual SQLite parsers).
4. Follow the phases sequentially to complete the reconstruction exercise.