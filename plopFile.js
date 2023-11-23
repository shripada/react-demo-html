import { exec } from 'child_process';
export default function (plop) {
  plop.setActionType('runFormat', async function (answers) {
    console.log(answers);
    const command = `npx prettier --write ./src/components/${answers.componentName}/*.{ts,tsx,css}`;
    exec(command, (error) => {
      if (error) {
        console.error(`Failed to run format: ${error}`);
        return '';
      }
    });
    return '';
  });

  plop.setGenerator('componentStory', {
    description: 'Generate a story file for a React component',

    // Prompts for user input
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter the name of the component:',
      },
      // You can add more prompts here based on your requirements
    ],

    // Actions to perform after user input
    actions: [
      // Create a new story file

      {
        type: 'add',
        path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.stories.tsx',
        templateFile: 'plop-templates/component.stories.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.test.tsx',
        templateFile: 'plop-templates/component.test.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.module.css',
        templateFile: 'plop-templates/component.module.css.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase componentName}}/types.ts',
        templateFile: 'plop-templates/types.hbs',
      },
      {
        type: 'runFormat',
      },
    ],
  });
}
