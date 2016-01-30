#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../lib/launchtop.js" "@testspath/#testsroot/toplaunchables.json"  --maxHeapUsed=256 --minHeapAvailable=10
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launchtop.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

