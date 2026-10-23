import {readFile,writeFile} from 'node:fs/promises';import {render} from './index.mjs';
try{if(process.argv.length!==4)throw new Error('Usage: node cli.mjs report.json output.html');await writeFile(process.argv[3],render(JSON.parse(await readFile(process.argv[2],'utf8'))));}catch(e){console.error(e.message);process.exitCode=1;}
