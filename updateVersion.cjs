const fs = require('fs');
const path = require('path');

const versionFilePath = path.resolve(__dirname, 'version.json');

const versionData = JSON.parse(fs.readFileSync(versionFilePath, 'utf-8'));
const newVersion = versionData.version + 1;

fs.writeFileSync(versionFilePath, JSON.stringify({ version: newVersion }, null, 2));

console.log(`Updated version to ${newVersion}`);
