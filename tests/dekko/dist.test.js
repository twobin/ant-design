const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('oui-antd.css')
  .hasFile('oui-antd.min.css')
  .hasFile('oui-antd.js')
  .hasFile('oui-antd.min.js');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
