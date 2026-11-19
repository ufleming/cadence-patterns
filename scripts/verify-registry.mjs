// Read-only registry proof: the published version exists and its integrity
// equals the archive packed in this run. Credentials come from setup-node's
// generated npmrc (NODE_AUTH_TOKEN); nothing is written or printed here.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const archive=process.argv[2];
if(!archive)throw Error('Usage: verify-registry.mjs <packed archive>');
const integrity='sha512-'+crypto.createHash('sha512').update(fs.readFileSync(archive)).digest('base64');
const view=JSON.parse(execFileSync('npm',['view',`${pkg.name}@${pkg.version}`,'name','version','dist','--json','--registry=https://npm.pkg.github.com'],{encoding:'utf8'}));
if(view.name!==pkg.name||view.version!==pkg.version)throw Error('Registry identity mismatch');
if(view.dist?.integrity!==integrity)throw Error('Registry integrity does not match the packed archive');
const out={name:view.name,version:view.version,integrity,registry:'https://npm.pkg.github.com'};
fs.mkdirSync(path.join(root,'.tmp'),{recursive:true});
fs.writeFileSync(path.join(root,'.tmp/registry-dist.json'),JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify(out));
