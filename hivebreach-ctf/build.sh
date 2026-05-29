#!/bin/bash
# HIVE BREACH — Deploy (offline-safe)
echo "[*] Starting HIVE BREACH..."
DOCKER_BUILDKIT=0 docker compose up --build -d
echo ""
echo "[+] Dashboard : http://localhost:8080"
echo "[+] SSH       : ssh analyst@localhost -p 2222"
echo "[+] Password  : HiveAnalyst@2024"
