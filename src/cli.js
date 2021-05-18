import chalk from 'chalk';
import util from 'util';

import promptForData from './promptForData';
import constructBatFiles from './constructBatFiles';
import getFrontendPath from './PathHelpers/getFrontendPath';
import getBackendPath from './PathHelpers/getBackendPath';

const exec = util.promisify(require('child_process').exec);

const installFrontend = async (config) => {
  console.log(chalk.cyan('Installing frontend packages...'));
  await runNpmInstall(getFrontendPath(config));
};

const installBackend = async (config) => {
  console.log(chalk.cyan('Installing backend packages...'));
  await runNpmInstall(getBackendPath(config));
};

const runNpmInstall = async (path) => {
  const { stdout, stderr } = await exec('npm install', { cwd: path });

  console.log(stdout);
  console.error(stderr);

  if (!stderr || stderr === '') {
    console.log(chalk.green('Packages installed.'));
  }
};

const gitClone = async (config) => {
  const {
    cloneUrl,
    projectName,
    projectsFolder,
  } = config;

  const command = `git clone ${cloneUrl} ${projectName}`;
  const { stdout, stderr } = await exec(command, { cwd: projectsFolder });

  console.log(stdout);
  console.error(stderr);

  if (!stderr || stderr === '') {
    console.log(chalk.green('Project cloned!'));
  }
};

export async function cli(args) {
  const config = await promptForData();
  await gitClone(config);
  await installFrontend(config);
  await installBackend(config);
  constructBatFiles(config);
  console.log(chalk.green('Bat files created!'));
}