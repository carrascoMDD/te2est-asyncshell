#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/general/suite-21-echo-wosession-test.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-10-general launch-02-echo samplelaunchone-21-echo-wosession.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

