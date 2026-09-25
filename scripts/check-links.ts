import { getRoadmaps } from '../lib/roadmaps';
const urls = [...new Set(getRoadmaps().flatMap(r => r.sections.flatMap(s => s.topics.flatMap(t => t.resources.map(x => x.url)))))];
let failures = 0;
async function main() {
for (const url of urls) { try { const res = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(8000), redirect: 'follow' }); if (res.status >= 400) { console.log(`✗ ${res.status} ${url}`); failures++; } else console.log(`✓ ${res.status} ${url}`); } catch { console.log(`? network failure ${url}`); } }
if (failures) process.exit(1);
}
main();
