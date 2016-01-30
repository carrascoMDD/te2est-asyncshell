echo off
node --max-old-space-size=2000 --expose-gc "../../lib/common-test/launchers/launchbyname.js" "@testspath/releasing/suite-02-releasing-subordinates-test.json" --testReleasingFile="@testspath/releasing/testreleasingfile-02-releasing-subordinates.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
