
import inquirer from 'inquirer';

const promptForData = async () => {
  const questions = [];

  questions.push({
    type: 'input',
    name: 'projectsFolder',
    message: 'Projects folder path:',
    default: 'C:\\JS Projects',
  });

  questions.push({
    type: 'input',
    name: 'projectName',
    message: 'Project name',
    default: '',
  });

  questions.push({
    type: 'input',
    name: 'cloneUrl',
    message: 'Git clone URL:',
    default: '',
  });

  questions.push({
    type: 'input',
    name: 'projectId',
    message: 'Koji Project ID:',
    default: '',
  });

  questions.push({
    type: 'input',
    name: 'projectToken',
    message: 'Koji Project TOKEN:',
    default: '',
  });

  questions.push({
    type: 'input',
    name: 'urlFrontend',
    message: 'Frontend URL:',
    default: 'http://localhost:8080',
  });

  questions.push({
    type: 'input',
    name: 'urlBackend',
    message: 'Backend URL:',
    default: 'http://localhost:3333',
  });

  const config = await inquirer.prompt(questions);
  return {
    ...config,
  };
};

export default promptForData;