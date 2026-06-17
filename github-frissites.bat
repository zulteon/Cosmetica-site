@echo off
setlocal

cd /d "%~dp0"

echo.
echo === Cosmetica-site GitHub frissites ===
echo.

git --version >nul 2>&1
if errorlevel 1 (
  echo HIBA: A Git nincs telepitve vagy nem erheto el.
  pause
  exit /b 1
)

git remote get-url origin >nul 2>&1
if errorlevel 1 (
  echo HIBA: Nincs beallitva GitHub remote. Szolj a Codexnek, hogy allitsa be.
  pause
  exit /b 1
)

echo Aktualis valtozasok:
git status --short
echo.

set /p COMMIT_MSG=Commit uzenet / Enter = weboldal frissites: 
if "%COMMIT_MSG%"=="" set "COMMIT_MSG=weboldal frissites"

git add -A
git diff --cached --quiet
if not errorlevel 1 (
  echo Nincs uj commitolhato valtozas. Push ellenorzese...
) else (
  git commit -m "%COMMIT_MSG%"
  if errorlevel 1 (
    echo HIBA: A commit nem sikerult.
    pause
    exit /b 1
  )
)

for /f "tokens=*" %%b in ('git branch --show-current') do set "BRANCH=%%b"
if "%BRANCH%"=="" set "BRANCH=main"

git push -u origin %BRANCH%
if errorlevel 1 (
  echo HIBA: A feltoltes nem sikerult.
  pause
  exit /b 1
)

echo.
echo Kesz, a valtozasok fent vannak GitHubon.
pause
