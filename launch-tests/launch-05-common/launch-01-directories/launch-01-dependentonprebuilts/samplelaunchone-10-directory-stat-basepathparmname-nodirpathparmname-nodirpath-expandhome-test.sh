#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchbyname.js" "@testspath/common/directories/dependentonprebuilts/suite-10-directory-dopb-stat-basepathparmname-nodirpathname-nodirpath-expandhome-test.json"
aRetCode=$?


aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-05-common launch-01-directories launch-01-dependentonprebuilts samplelaunchone-10-directory-dopb-stat-basepathparmname-nodirpathname-nodirpath-expandhome-test.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

