echo off
node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchtogether.js" "@testspath/housekeeping/fakememorysnapshots/launchables-delay2secs-twotests-1millisecinbetween.json" --testHousekeepingFile="@testspath/housekeeping/fakememorysnapshots/testhousekeepingfile-48-housekeeping-fakememorysnapshots-thrashing-testspayloads-millisunder-heapusedover.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
