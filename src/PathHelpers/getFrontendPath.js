const getFrontendPath = (config) => {
  const {
    projectsFolder,
    projectName,
  } = config;

  return `${projectsFolder}\\${projectName}\\frontend`;
};

export default getFrontendPath;