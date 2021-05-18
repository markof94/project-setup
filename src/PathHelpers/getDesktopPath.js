const getDesktopPath = () => {
  const os = require('os');
  const path = require('path');
  return path.join(os.homedir(), "Desktop");
};

export default getDesktopPath;