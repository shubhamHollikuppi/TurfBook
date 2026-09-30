@echo off
title TurfBook Lite Launcher
echo ===================================================
echo Starting TurfBook Lite Server...
echo ===================================================

:: Open the browser in background after a 1.5 second delay
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:5000"

:: Start the Node.js server
node server.js
pause
