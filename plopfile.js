const path = require('path');

const pascalCase = /^[A-Z][A-Za-z0-9]+$/;
const validateComponentName = name =>
  !!name.match(pascalCase) || 'Invalid component name';

const componentAction = filename => {
  const newName = filename.replace('component', '{{name}}');
  return {
    type: 'add',
    path: `src/{{name}}/${newName}`,
    templateFile: `templates/component/${filename}.hbs`
  };
};

module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        validate: validateComponentName
      }
    ],
    actions: [
      'component.js',
      'component.test.js',
      'component.css',
      'index.js'
    ].map(componentAction)
  });
};
