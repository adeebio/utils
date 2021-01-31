#!/bin/bash

# use the following command to give this file the permission to be executed
# chmod +x <FILE_NAME>.sh

dirPath=`dirname "$0"`

fileNameWithExt=`basename "$0"`

fileNameWithoutExt=${fileNameWithExt%.sh}

projectName=${fileNameWithoutExt:3}

projectPath="${dirPath}/${projectName}"

cd $projectPath

npm start $@
