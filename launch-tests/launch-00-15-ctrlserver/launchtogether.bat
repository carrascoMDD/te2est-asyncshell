echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchmodules.js" "#testsroot/ctrlserver/launchablemodules.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
