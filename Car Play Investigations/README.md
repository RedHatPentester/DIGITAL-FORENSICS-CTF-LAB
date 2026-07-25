# Sankofa Couriers: Apple CarPlay Route Reconstruction

## Case SANKOFA-CP-2025-0042

This repository contains a synthetic iOS Full File System forensic training image designed to simulate a real-world investigation involving Apple CarPlay, vehicle pairing, navigation activity, communications, media playback, Siri interactions, location evidence and courier operations.

The exercise requires investigators to reconstruct the digital activity of an iPhone used in multiple CarPlay-enabled vehicles and examine an unusual temporary pairing connected to a courier route deviation.

The dataset is intentionally evidence-rich and contains both corroborating and potentially conflicting artifacts. Students must avoid relying on a single database or timestamp when reaching conclusions.

---

## Case Background

Daniel Owusu works as a courier and primary fleet driver for **Sankofa Couriers**, a parcel-delivery company operating across the Accra metropolitan area.

Between **1 February and 30 April 2025**, the company conducted a routine review of mobile-device and vehicle-infotainment activity associated with its delivery operations. Daniel’s company-issued iPhone was subsequently acquired through an iOS Full File System extraction.

During the review, fleet administrators identified an irregularity involving consignment **DROP-91799**, which was originally scheduled for delivery to the **East Legon Research Centre** on **18 April 2025**.

The available records indicate that a temporary CarPlay profile may have been established inside a Sankofa delivery van shortly before the vehicle departed the company’s depot in the North Industrial Area. The vehicle then appears to have travelled through several Accra locations before returning to the depot.

The investigative team must determine:

* Which phones and users were associated with the available CarPlay profiles.
* Which vehicles were paired with the extracted device.
* Whether the connections were wired or wireless.
* The exact CarPlay connection windows.
* Which applications were active during those windows.
* Whether calls, messages and Siri commands occurred while the vehicle was moving.
* Whether the phone was physically handled or operated through CarPlay.
* The route followed during the DROP-91799 incident.
* Whether a temporary pairing was deleted after the journey.
* Whether the available evidence supports package-transfer and route-deviation claims.

### Important Notice

This case is entirely synthetic and was created exclusively for cybersecurity and digital-forensics education.

All identities, phone numbers, accounts, communications, coordinates, documents, package references and events are fictional. No real crime, misconduct, company or policy violation is represented.

---

## File Information

* **Case Number:** `SANKOFA-CP-2025-0042`
* **Target Archive:** `IOS_APPLE_CARPLAY_FULL_FILESYSTEM_ENRICHED_ACCRA.tar`
* **Verification File:** `IOS_APPLE_CARPLAY_FULL_FILESYSTEM_ENRICHED_ACCRA_SHA256.txt`
* **Extraction Type:** iOS Full File System
* **Device Period:** February–April 2025
* **Primary Incident Date:** 18 April 2025
* **Primary Consignment:** `DROP-91799`
* **Package Seal:** `4C19`
* **Primary Region:** Accra, Greater Accra Region, Ghana
* **Case Developer:** Nana Sei Anyemedu
* **Property of:** HIVE CONSULT, Ghana
* **Classification:** Synthetic Mobile and Vehicle Forensics Training Dataset

---

## Dataset Evidence Profile

The filesystem contains approximately **221 individual files**, including:

* 132 photographic artifacts.
* 25 courier and incident-related PDF documents.
* 2,002 CarPlay session records.
* 8,004 CarPlay navigation records.
* 3,004 detailed navigation routes.
* 6,505 Siri activity records.
* 9,004 CarPlay messaging events.
* 5,502 CarPlay media events.
* 2,203 CarPlay call events.
* 13,000 CoreDuet `knowledgeC.db` records.
* 6,384 Biome stream records.
* 3,000 system-location records.
* 2,506 SMS and iMessage records.
* 2,005 WhatsApp messages.
* 704 native call-history records.
* 34,005 Safari history records.
* 904 Apple Maps history entries.
* 903 Google Maps search-history entries.
* 275 contact records.
* Calendar, reminders, notes, account and device-user artifacts.
* CarPlay pairing records, deletion tombstones and Bluetooth events.
* Evidence indexes, a correlation matrix and artifact-level SHA-256 hashes.

Record counts do not automatically represent unique human actions. Investigators must account for duplicates, generated background activity, synchronization delays and overlapping records.

---

# Investigation Syllabus and Exercises

## Phase 1: Beginner — Device and Artifact Identification

### 1. Device Identity and iOS Verification

Establish the identity of the extracted device.

Determine:

* Device owner.
* Device name.
* Device model.
* Apple product identifier.
* Installed iOS version.
* Build version.
* Device phone number.
* Serial number.
* Unique device identifier.

Identify the specific native system artifact that proves the dataset represents an iOS filesystem rather than a generic collection of files.

Examine, at minimum:

```text
/System/Library/CoreServices/SystemVersion.plist
/private/var/mobile/Library/Preferences/SystemConfiguration/device_info.plist
/private/var/mobile/.iphone
```

Explain why `SystemVersion.plist` carries greater evidentiary value than a manually created text label.

---

### 2. Device Users and Contact Analysis

Identify all users associated with the device and determine which person is recorded as the primary owner or driver.

Examine:

```text
/private/var/mobile/Library/Preferences/com.apple.deviceusers.plist
/private/var/mobile/Library/HIVE_CarPlay/device_users.dat
/private/var/mobile/Library/AddressBook/AddressBook.sqlitedb
/private/var/mobile/Library/Accounts/accounts.plist
/private/var/mobile/Library/Accounts/Accounts3.sqlite
```

Determine:

* The total number of contacts.
* The total number of device-user profiles.
* The primary user’s phone number.
* The roles assigned to the other users.
* Whether the contact records follow a Ghanaian local-numbering convention.
* Whether any telephone numbers use a different mobile prefix from the majority.
* Whether the same device name appears under more than one user profile.

Discuss whether the existence of multiple device-user records proves that every listed person physically used the phone.

---

### 3. CarPlay Vehicle Identification

Determine how many distinct CarPlay units are represented in the extraction.

For every unit, report:

* Human-readable vehicle name.
* CarPlay unit ID.
* Connection type.
* Bluetooth MAC address.
* Wireless CarPlay SSID, where available.
* First-pairing timestamp.
* Most recent connection timestamp.
* Associated driver or device profile.
* Whether the profile remained trusted.
* Whether the profile was later deleted.

Primary artifacts include:

```text
/private/var/mobile/Library/Preferences/com.apple.carplay.plist
/private/var/mobile/Library/HIVE_CarPlay/carplay_pairing.dat
/private/var/mobile/Library/HIVE_CarPlay/deleted_pairings.dat
/private/var/mobile/Library/HIVE_CarPlay/bluetooth_events.dat
```

Separate permanent vehicle pairings from transient or deleted pairings.

---

### 4. Pairing-Key and Connection Artifact Examination

Locate the files and directories containing CarPlay pairing history, accessory identifiers and connection-state evidence.

Examine:

```text
/private/var/mobile/Library/Preferences/com.apple.carplay.plist
/private/var/mobile/Library/Preferences/com.apple.carplayapp.plist
/private/var/mobile/Library/SpringBoard/D9B69CC5-4D2F-CarDisplayIconState.plist
/private/var/mobile/Library/HIVE_CarPlay/carplay_pairing.dat
/private/var/mobile/Library/HIVE_CarPlay/bluetooth_events.dat
/private/var/mobile/Library/HIVE_CarPlay/deleted_pairings.dat
/private/var/mobile/Library/Biome/streams/restricted/
```

For each profile, determine whether the available artifacts represent:

* A phone-side pairing record.
* A Bluetooth discovery event.
* A wireless trust request.
* A completed CarPlay connection.
* A disconnection.
* A deletion tombstone.
* A cached or application-generated audit record.

Explain why a deleted-pairing tombstone may remain recoverable after the visible profile has been removed.

---

### 5. Media and Entertainment Usage

Identify the applications used to play audio through the CarPlay interface.

Examine:

```text
/private/var/mobile/Library/HIVE_CarPlay/carplay_media.dat
/private/var/mobile/Media/iTunes_Control/iTunes/MediaLibrary.sqlitedb
/private/var/mobile/Library/Preferences/com.apple.celestial.plist
/private/var/mobile/Library/CoreDuet/Knowledge/knowledgeC.db
```

Determine:

* Which native and third-party media applications were used.
* Which audio route was selected.
* The most frequently played tracks.
* The most frequently played artists.
* Whether podcasts, voice notes or other non-music media were played.
* Which media events occurred during active CarPlay sessions.

Extract at least five track records and report:

* Track title.
* Artist.
* Application.
* Playback timestamp.
* Vehicle or CarPlay unit.
* Whether Siri initiated the playback.
* Audio-output route.

---

## Phase 2: Intermediate — Session and Timeline Reconstruction

### 6. CarPlay Session Analysis

Calculate the total number of CarPlay sessions recorded between February and April 2025.

Examine:

```text
/private/var/mobile/Library/HIVE_CarPlay/carplay_sessions.dat
/private/var/mobile/Library/Biome/streams/restricted/biome_streams.sqlite
/private/var/mobile/Library/CoreDuet/Knowledge/knowledgeC.db
```

Determine:

* Session count per vehicle.
* Session count per CarPlay unit.
* Session count per driver profile.
* Wired-session count.
* Wireless-session count.
* Average session duration.
* Maximum recorded session duration.
* All sessions tied for the maximum duration.
* The longest session attributed specifically to Daniel Owusu.
* Sessions associated with the deleted or unattributed profile.

For the 18 April incident, identify why the activity appears as two connection windows rather than one uninterrupted session.

---

### 7. Application Focus and Usage Analysis

Analyze the following CoreDuet streams:

```text
/app/inFocus
/app/usage
/carplay/isConnected
/device/isLocked
/device/isBacklit
/audio/outputRoute
/audio/inputRoute
/siri/dictation
/siri/carplayButton
/siri/steeringWheel
```

Primary database:

```text
/private/var/mobile/Library/CoreDuet/Knowledge/knowledgeC.db
```

Supporting Biome database:

```text
/private/var/mobile/Library/Biome/streams/restricted/biome_streams.sqlite
```

Determine:

* Which applications were most frequently used during CarPlay sessions.
* Which application remained in focus for the longest total duration.
* Whether navigation, messaging or media applications dominated the sessions.
* Whether application focus changed during active navigation.
* Whether foreground application activity continued while the device was locked.
* Whether the Biome and CoreDuet records agree.

Document any application-usage entries that overlap but cannot be conclusively assigned to a particular vehicle or driver.

---

### 8. DROP-91799 Drive Timeline

Construct a complete timeline for the unusual CarPlay activity recorded on **18 April 2025**.

The reconstruction should begin with the first Bluetooth observation and end with the deletion of the temporary pairing on the following morning.

Correlate:

```text
bluetooth_events.dat
carplay_sessions.dat
carplay_navigation.dat
navigation_routes.dat
carplay_siri.dat
carplay_messaging.dat
carplay_notifications.dat
carplay_calls.dat
incident_timeline.dat
biome_streams.sqlite
knowledgeC.db
```

Your timeline should include:

* Bluetooth discovery.
* Pairing request.
* Wireless trust establishment.
* First CarPlay connection.
* First navigation instruction.
* Application-focus changes.
* Siri invocation.
* Dictated messages.
* Incoming messages read aloud.
* Route movement.
* First disconnection.
* Reconnection.
* Calls or media activity.
* Package-transfer communication.
* Return journey.
* Final disconnection.
* Pairing deletion.

Reconstruct the route through the following operational areas without assuming the order in advance:

* Sankofa Depot, North Industrial Area.
* Cantonments Circle.
* Dzorwulu Junction.
* Accra Central Warehouse Annex.
* Sankofa Depot, North Industrial Area.

Explain how the temporary connection interruption affects the interpretation of the overall journey.

---

### 9. Siri, Voice Commands and Dictation

Identify all Siri and dictation events that occurred during the incident connection windows.

Examine:

```text
/private/var/mobile/Library/HIVE_CarPlay/carplay_siri.dat
/private/var/mobile/Library/HIVE_CarPlay/carplay_messaging.dat
/private/var/mobile/Library/Biome/streams/restricted/Siri.Dictation/
/private/var/mobile/Library/CoreDuet/Knowledge/knowledgeC.db
```

For each relevant event, report:

* Timestamp.
* Command category.
* Transcript.
* Intended contact or destination.
* Result.
* Vehicle or CarPlay unit.
* Trigger mechanism.

Differentiate between:

* `HeySiri`
* `CarPlayButton`
* `SteeringWheel`

Determine which commands were used for:

* Navigation.
* Sending messages.
* Calling contacts.
* Media playback.
* Reading notifications.

Explain whether a steering-wheel trigger is stronger evidence of hands-free interaction than a generic Siri event.

---

### 10. Geolocation and Route Corroboration

Select one complete CarPlay journey and reconstruct its approximate geographical path.

Use at least three of the following sources:

```text
/private/var/mobile/Library/Caches/locationd/cache_encryptedB.db
/private/var/root/Library/Caches/locationd/cache.plist
/private/var/mobile/Library/Maps/GeoHistory.mapsdata
/private/var/mobile/Library/Caches/com.apple.Maps/navigation_urls.txt
/private/var/mobile/Library/HIVE_CarPlay/navigation_history.sqlite
/private/var/mobile/Library/HIVE_CarPlay/navigation_routes.dat
/private/var/mobile/Containers/Data/Application/769CDD26-GMAP/Library/Application Support/GoogleMaps/history.db
/private/var/mobile/Media/PhotoData/Photos.sqlite
/private/var/mobile/Media/DCIM/100APPLE/
```

Report:

* Latitude and longitude.
* Timestamp.
* Horizontal accuracy.
* Speed.
* Course or direction.
* Named location.
* Navigation application.
* Relevant photograph.
* Photograph EXIF coordinates.
* Distance between the system-location point and photograph coordinates.

Assess whether the independent sources place the phone within a reasonably consistent geographical area.

---

## Phase 3: Advanced — Behavioral and Evidentiary Interpretation

### 11. Phone Handling Versus CarPlay Interaction

Determine whether the available evidence supports physical handling of the iPhone while the vehicle was moving.

Correlate:

* Device-lock state.
* Display-backlight state.
* Application-focus events.
* ScreenTime usage.
* Siri triggers.
* CarPlay connection state.
* Audio-output route.
* Audio-input route.
* Message-dictation events.
* Photograph timestamps.
* Navigation movement and speed.

Relevant CoreDuet streams include:

```text
/device/isLocked
/device/isBacklit
/app/inFocus
/app/usage
/audio/outputRoute
/audio/inputRoute
/siri/dictation
/siri/carplayButton
/siri/steeringWheel
/carplay/isConnected
```

Construct separate arguments for:

1. Interaction through the vehicle dashboard.
2. Interaction through steering-wheel controls.
3. Hands-free voice interaction.
4. Possible physical phone-screen interaction.

Clearly distinguish between what the artifacts prove, what they suggest and what they cannot establish.

Include limitations such as:

* Background application activity.
* Synchronization delays.
* CarPlay-display interaction appearing as application focus.
* Passenger interaction.
* Automated notifications.
* Inability to identify who pressed a control.
* Inability to establish driver attention solely from software logs.

---

### 12. Communications During Active CarPlay Sessions

Identify all contacts called or messaged while a CarPlay session was active.

Examine:

```text
/private/var/mobile/Library/SMS/sms.db
/private/var/mobile/Library/CallHistoryDB/CallHistory.storedata
/private/var/mobile/Containers/Shared/AppGroup/87B81007-WAGROUP/ChatStorage.sqlite
/private/var/mobile/Library/HIVE_CarPlay/carplay_calls.dat
/private/var/mobile/Library/HIVE_CarPlay/carplay_messaging.dat
/private/var/mobile/Library/HIVE_CarPlay/carplay_notifications.dat
```

For each relevant communication, report:

* Contact name.
* Telephone number or account identifier.
* Service.
* Direction.
* Timestamp.
* Message text or preview.
* Call duration.
* Whether the call was answered.
* Whether Siri was used.
* Vehicle connection window.
* Associated CarPlay unit.
* Relevant route location.

Pay particular attention to communications involving:

* Delivery instructions.
* Waiting instructions.
* Rear-entrance directions.
* Consignment `DROP-91799`.
* Seal `4C19`.
* Package-transfer confirmation.
* Temporary-pairing deletion.

Determine whether native Messages and WhatsApp independently support the same sequence of events.

---

### 13. Wired and Wireless CarPlay Forensics

Identify which vehicle used a wired USB CarPlay connection and which vehicle used wireless CarPlay.

Support the conclusion with explicit artifacts rather than relying only on a `ConnectionType` field.

Potential supporting evidence includes:

```text
com.apple.carplay.plist
carplay_pairing.dat
bluetooth_events.dat
carplay_sessions.dat
knowledgeC.db
biome_streams.sqlite
audio-routing records
power or charging indicators
Wi-Fi SSID records
Bluetooth MAC addresses
```

Explain the expected forensic differences between wired and wireless CarPlay.

Your discussion should address:

* USB attachment records.
* Charging or power-state evidence.
* Bluetooth pairing records.
* Wi-Fi Direct or vehicle SSID records.
* Trust relationships.
* Connection-daemon logs.
* Accessory identifiers.
* Residual evidence on the phone.
* Residual evidence on the infotainment system.
* Whether wireless reconnection can occur automatically.
* Whether physical possession of a cable is required.

---

### 14. Deleted Pairing and Anti-Forensic Interpretation

Investigate the deleted CarPlay profile associated with the 18 April incident.

Examine:

```text
/private/var/mobile/Library/HIVE_CarPlay/deleted_pairings.dat
/private/var/mobile/Library/HIVE_CarPlay/bluetooth_events.dat
/private/var/mobile/Library/Preferences/com.apple.carplay.plist
/private/var/mobile/Library/Safari/History.db
/private/var/mobile/Documents/Sankofa/Vehicle_Access_Audit_VAA-042.pdf
/private/var/mobile/Documents/Sankofa/Telematics_Discrepancy_TD-042.pdf
```

Determine:

* When the profile was created.
* When it was first connected.
* How many connection windows are recorded.
* When it was last seen.
* When it was deleted.
* Which device name was associated with it.
* Whether a phone number was recovered.
* The Bluetooth MAC address.
* The vehicle SSID.
* The reason code.
* The source from which the deleted record was recovered.
* Whether browser activity suggests an attempt to understand or remove a CarPlay pairing.

Assess whether deletion should be described as:

* Routine privacy maintenance.
* Innocent device cleanup.
* Fleet-access management.
* Potential evidence concealment.
* An unexplained post-incident action.

Do not describe the deletion as anti-forensic conduct unless the surrounding evidence reasonably supports that conclusion.

---

### 15. Cross-Source Validation and Professional Caveating

Test the following investigative hypothesis:

> On 18 April 2025, a temporarily paired iPhone was used through Sankofa Van 04’s wireless CarPlay system during a route from the North Industrial Area through Cantonments, Dzorwulu and Accra Central. Communications made during the journey referred to the transfer of consignment DROP-91799 and seal 4C19. The pairing was deleted the following morning.

Validate or challenge the hypothesis using at least five independent artifact categories.

Possible sources include:

* CarPlay preferences.
* Bluetooth events.
* CarPlay session records.
* Siri transcripts.
* Native Messages.
* WhatsApp.
* Call logs.
* Apple Maps history.
* Google Maps history.
* Navigation routes.
* CoreDuet.
* Biome.
* Locationd.
* Photo EXIF.
* Calendar entries.
* Notes.
* Reminders.
* Safari history.
* Waybills.
* Delivery-exception records.
* Chain-of-custody documents.
* Vehicle-access audits.

For every source, document:

* Relevant artifact path.
* Record identifier.
* Timestamp.
* Time zone.
* Extracted value.
* Interpretation.
* Confidence level.
* Whether the source corroborates, contradicts or does not address the hypothesis.

Identify:

* Timestamp gaps.
* Overlapping sessions.
* Synchronization delays.
* Duplicate records.
* Conflicting driver attribution.
* Missing phone-number information.
* Application-generated versus native records.
* Any unusual or unrealistic data relationships.
* Limitations created by the synthetic nature of the dataset.

Conclude with a professional forensic caveat suitable for inclusion in a formal report.

---

# Recommended Student Deliverables

Students should submit the following:

1. **Device Identification Worksheet**

   * Device details.
   * Owner details.
   * iOS verification artifact.
   * Hash verification result.

2. **CarPlay Pairing Table**

   * Vehicle names.
   * Unit IDs.
   * MAC addresses.
   * Connection types.
   * Driver profiles.
   * Deletion status.

3. **Session Analysis Spreadsheet**

   * Start and end timestamps.
   * Duration.
   * Vehicle.
   * Driver.
   * Primary application.
   * Audio route.

4. **DROP-91799 Master Timeline**

   * Events arranged chronologically.
   * Source path for every event.
   * Confidence rating.
   * Supporting screenshot or SQL result.

5. **Route Map**

   * GPS points.
   * Named Accra locations.
   * Navigation legs.
   * Photo positions.
   * Connection interruption.

6. **Communications Matrix**

   * Messages.
   * Calls.
   * WhatsApp records.
   * Siri commands.
   * Session-window correlation.

7. **Device-Interaction Assessment**

   * Evidence supporting hands-free interaction.
   * Evidence supporting possible phone handling.
   * Alternative explanations.
   * Limitations.

8. **Final Forensic Report**

   * Executive summary.
   * Scope.
   * Methodology.
   * Evidence examined.
   * Findings.
   * Timeline.
   * Analysis.
   * Limitations.
   * Conclusion.
   * Appendix of relevant SQL queries and hashes.

---

# Suggested Tools

The archive may be examined using:

* Cellebrite Physical Analyzer.
* Magnet AXIOM.
* Autopsy.
* DB Browser for SQLite.
* SQLiteStudio.
* Apple Property List Editor.
* Plist Editor Pro.
* ExifTool.
* Python.
* PowerShell.
* Timeline Explorer.
* Google Earth.
* QGIS.
* Any tool capable of parsing SQLite, plist, EXIF and delimited-text records.

Students should validate automated-tool output manually wherever possible.

---

# Evidence Integrity

Before analysis, calculate the SHA-256 hash of the archive and compare it with:

```text
IOS_APPLE_CARPLAY_FULL_FILESYSTEM_ENRICHED_ACCRA_SHA256.txt
```

Artifact-level hashes are also available in:

```text
/EVIDENCE_HASHES_SHA256.txt
```

Investigators should record:

* Original archive hash.
* Extraction date.
* Extraction tool.
* Working-copy location.
* Examiner name.
* Analysis start date.
* Any files exported or converted during examination.

The original archive should remain unchanged throughout the investigation.

---

# Key Evidence Directories

```text
/System/Library/CoreServices/
/private/var/mobile/Library/Preferences/
/private/var/mobile/Library/HIVE_CarPlay/
/private/var/mobile/Library/CoreDuet/Knowledge/
/private/var/mobile/Library/Biome/streams/restricted/
/private/var/mobile/Library/Caches/locationd/
/private/var/mobile/Library/Maps/
/private/var/mobile/Library/SMS/
/private/var/mobile/Library/CallHistoryDB/
/private/var/mobile/Library/AddressBook/
/private/var/mobile/Library/Safari/
/private/var/mobile/Library/Calendar/
/private/var/mobile/Library/Reminders/
/private/var/mobile/Library/Group Containers/group.com.apple.notes/
/private/var/mobile/Containers/Shared/AppGroup/87B81007-WAGROUP/
/private/var/mobile/Containers/Data/Application/769CDD26-GMAP/
/private/var/mobile/Media/PhotoData/
/private/var/mobile/Media/DCIM/100APPLE/
/private/var/mobile/Media/iTunes_Control/iTunes/
/private/var/mobile/Documents/Sankofa/
```

---

# Assessment Guidance

Students should not receive full marks for presenting a record without explaining:

* Where the record was located.
* How its timestamp was interpreted.
* Which time zone was applied.
* Whether the artifact was native or application-generated.
* Which independent source corroborated it.
* Whether alternative explanations exist.
* What the record cannot prove.

A strong submission will separate:

* **Fact:** The value directly stored in an artifact.
* **Interpretation:** What the examiner believes the value means.
* **Inference:** A conclusion derived from multiple records.
* **Limitation:** A reason the conclusion may be incomplete or uncertain.

---

## Ownership and Attribution

**Case Developer:** Nana Sei Anyemedu
**Property of:** HIVE CONSULT, Ghana
**Case Reference:** SANKOFA-CP-2025-0042
**Purpose:** Digital Forensics and Apple CarPlay Investigation Training

Unauthorized commercial redistribution or alteration of the case attribution is prohibited.

