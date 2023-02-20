// Removes the team.html file from the dist/ folder.
// Used in `npm run reset` script

const fs = require('fs');
if (fs.existsSync('./dist/generated.html')) {
  fs.unlinkSync('./dist/generated.html');
  console.log('/dist/ folder reset!');
}
