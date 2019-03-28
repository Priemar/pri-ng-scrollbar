const fs = require('fs-extra');

fs.copySync('./projects/pri-ng-scrollbar/src/lib/pri.scrollbar.component.theme.scss', './dist/pri-ng-scrollbar/_theming.scss');
