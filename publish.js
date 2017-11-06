const { spawn } = require('child_process');

const package = require('./package.json');

spawn('npm', ['publish']);
