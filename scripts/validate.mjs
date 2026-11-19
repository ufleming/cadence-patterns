import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
assert.equal(pkg.version,manifest.protocolVersion);
const files=['README.md','CHANGELOG.md',...manifest.concepts,...manifest.patterns,...manifest.templates,...fs.readdirSync(path.join(root,'docs')).filter(n=>n.endsWith('.md')).map(n=>'docs/'+n)];
assert.equal(new Set(files).size,files.length);
for(const dir of ['concepts','patterns','templates'])for(const n of fs.readdirSync(path.join(root,dir)).filter(n=>n.endsWith('.md')))assert(manifest[dir].includes(dir+'/'+n),`Not in manifest: ${dir}/${n}`);
let links=0;
for(const name of files){const body=fs.readFileSync(path.join(root,name),'utf8');assert(!/cadence-patterns-internal|cadence-next#|PVT_|(?:^|[^A-Za-z])[A-Z]:[\\/]|\.private\./i.test(body),`Restricted reference in ${name}`);for(const m of body.matchAll(/\]\(([^)]+)\)/g)){const ref=m[1].split('#')[0];if(!ref||/^[a-z]+:/i.test(ref))continue;assert(fs.existsSync(path.resolve(root,path.dirname(name),decodeURIComponent(ref))),`Broken link ${name}: ${ref}`);links++;}}
assert(fs.readFileSync(path.join(root,'concepts/queue.md'),'utf8').includes('Only the [Gardener]'));
assert(fs.readFileSync(path.join(root,'patterns/08-card-queues.md'),'utf8').includes('Keep later requests separate'));
for(const rel of manifest.patterns.filter(p=>Number(path.basename(p).slice(0,2))>=15))assert(fs.readFileSync(path.join(root,rel),'utf8').includes('\n## Without it\n'),`Missing "Without it" section: ${rel}`);
console.log(JSON.stringify({documents:files.length,relativeLinks:links,version:pkg.version,publicBoundary:'passed',status:'passed'}));
