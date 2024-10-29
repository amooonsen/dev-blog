import fs from 'fs';
import path from 'path';

const dir = path.join(__dirname, '.next');

fs.rmSync(dir, { recursive: true, force: true });

console.log('.next folder deleted');
