const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files = [
    './dist/web-component/pri-ng-scrollbar/runtime.js',
    './dist/web-component/pri-ng-scrollbar/main.js'
  ];

  await fs.ensureDir('./dist/pri-ng-scrollbar/web-component');

  await concat(files, './dist/pri-ng-scrollbar/web-component/pri-ng-scrollbar.js');
  await fs.copySync('./dist/web-component/pri-ng-scrollbar/polyfills.js', './dist/pri-ng-scrollbar/web-component/polyfills.js');
  //need angular cli update and option: es5BrowserSupport: true in angular cli to get es2015 polyfills
  await fs.copySync('./dist/web-component/pri-ng-scrollbar/es2015-polyfills.js', './dist/pri-ng-scrollbar/web-component/es2015-polyfills.js');

  const bundle = [
    './dist/web-component/pri-ng-scrollbar/polyfills.js',
    './dist/web-component/pri-ng-scrollbar/es2015-polyfills.js',
    ...files
  ];
  await concat(bundle, './dist/pri-ng-scrollbar/web-component/pri-ng-scrollbar.bundle.js');
})();
