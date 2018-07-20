const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('oui-antd.css')
  .hasFile('oui-antd.min.css')
  .hasFile('oui-antd.js')
  .hasFile('oui-antd.min.js');

// eslint-disable-next-line
console.log('`dist` directory is valid.');
