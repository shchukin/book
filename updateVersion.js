import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const versionFilePath = path.resolve(__dirname, 'version.json');

const versionData = JSON.parse(fs.readFileSync(versionFilePath, 'utf-8'));
export const version = versionData.version;
