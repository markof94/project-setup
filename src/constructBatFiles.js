import fs from 'fs';

import getDesktopPath from './PathHelpers/getDesktopPath';
import getFrontendPath from './PathHelpers/getFrontendPath';
import getBackendPath from './PathHelpers/getBackendPath';

const constructBatFiles = (config) => {
  const {
    projectName,
    projectId,
    projectToken,
    urlFrontend,
    urlBackend,
  } = config;

  const setBackendUrl = `set KOJI_SERVICE_URL_backend=${urlBackend}`;
  const setFrontendUrl = `set KOJI_SERVICE_URL_frontend=${urlFrontend}`;
  const setProjectId = `set KOJI_PROJECT_ID=${projectId}`;
  const setProjectToken = `set KOJI_PROJECT_TOKEN=${projectToken}`;

  const frontendContent = `cd ${getFrontendPath(config)}\n${setBackendUrl}\n${setFrontendUrl}\n${setProjectId}\nnpm start\n`;

  fs.appendFile(`${getDesktopPath()}\\${projectName}Front.bat`, frontendContent, function (err) {
    if (err) throw err;
  });

  const backendContent = `cd ${getBackendPath(config)}\n${setProjectId}\n${setProjectToken}\nnpm run start-dev`;

  fs.appendFile(`${getDesktopPath()}\\${projectName}Back.bat`, backendContent, function (err) {
    if (err) throw err;
  });
};

export default constructBatFiles;