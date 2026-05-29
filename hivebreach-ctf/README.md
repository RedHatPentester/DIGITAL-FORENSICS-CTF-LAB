![Hive Breach Banner](image.jpeg)

# HIVE BANK BREACH - Digital Forensics Investigation

## Setup and Initialization

To reset and build the environment, run the following commands:

```bash
docker compose down -v
bash build.sh
```

## Accessing the Investigation Environment

Once the environment is running, you can access the analyst workstation via SSH:

*   **Command:** `ssh analyst@localhost -p 2222`
*   **Password:** `HiveAnalyst@2024`

---

## Investigation Challenges & Questions

Your objective is to perform a deep-dive forensic analysis to answer the following questions:

1.  **Attacker’s IP Address**
    *   What IP address did the attacker use to launch the attack?

2.  **Uploaded Webshell**
    *   What is the name and location of the webshell the attacker uploaded?

3.  **Persistence Mechanism**
    *   What persistence mechanism did the attacker install to maintain access?

4.  **Backdoor Account**
    *   What backdoor account did the attacker create on the server?

5.  **Stolen Data Evidence**
    *   What evidence of data theft exists in the banking database?

6.  **Dropped Malware**
    *   What malware did the attacker drop on the server and where?

7.  **C2 Domain**
    *   What command and control domain did the attacker use?

8.  **SSH Persistence**
    *   How did the attacker ensure they could SSH back in without a password?

9.  **Exfiltration Destination**
    *   Where exactly did the stolen data go? (IP, port, and destination).

10. **Full Attack Timeline**
    *   Reconstruct the complete sequence of events from start to finish.

---
**Property of Hive Consult**
