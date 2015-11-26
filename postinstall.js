var exec = require('child_process').exec;
exec('cd src/ui; npm install; jspm install');
exec('cd src/api; npm install');

// You can add scripts here that will be executed after running `npm install`
