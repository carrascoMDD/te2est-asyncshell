echo off
node --max-old-space-size=2000 --expose-gc "../../lib/ttst/ttstlaunchers/ttstlaunchtogether.js" "@testspath/ttst/ttstlaunchables.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
