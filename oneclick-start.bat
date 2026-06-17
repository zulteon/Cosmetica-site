@echo off
setlocal

cd /d "%~dp0"

echo.
echo === Cosmetica-site inditas ===
echo.

node --version >nul 2>&1
if errorlevel 1 (
  echo HIBA: A Node.js nincs telepitve vagy nem erheto el.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Fuggosegek telepitese...
  call npm.cmd install
  if errorlevel 1 (
    echo HIBA: Az npm install nem sikerult.
    pause
    exit /b 1
  )
)

echo.
echo A weboldal itt lesz elerheto:
echo http://127.0.0.1:3000
echo.

call npm.cmd run dev -- --hostname 127.0.0.1
pause
