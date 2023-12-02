const path = require('path');
const { exec } = require('child_process');

const dayNumber = process.argv[2] ?? 1;
const scriptPath = path.join(__dirname, `dist/day${dayNumber}/index.js`);

exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
	console.error(error);
    // console.log(`Day ${dayNumber} not solved yet...\n`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});