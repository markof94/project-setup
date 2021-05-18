const getBackendPath = (config) => {
  const {
    projectsFolder,
    projectName,
  } = config;

  return `${projectsFolder}\\${projectName}\\backend`;
};

export default getBackendPath;