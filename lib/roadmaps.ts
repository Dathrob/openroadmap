import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import Ajv from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import type { Roadmap } from './types';
import schema from '../schemas/roadmap.schema.json';
const root = path.join(process.cwd(), 'roadmaps');
const ajv = new Ajv({ allErrors: true }); addFormats(ajv);
const validateSchema = ajv.compile(schema);
export function parseRoadmapFile(file: string): Roadmap { const data: unknown = YAML.parse(fs.readFileSync(file, 'utf8')); if (!validateSchema(data)) throw new Error((validateSchema.errors ?? []).map(e => `${e.instancePath || '/'} ${e.message}`).join('\n')); validateDependencies(data as unknown as Roadmap); return data as unknown as Roadmap; }
export function validateDependencies(r: Roadmap) { const ids = new Set(r.sections.map(s => s.id)); const graph = new Map(r.sections.map(s => [s.id, s.depends_on ?? []])); for (const s of r.sections) for (const dep of s.depends_on ?? []) if (!ids.has(dep)) throw new Error(`sections.${s.id}.depends_on references nonexistent section '${dep}'`); const visiting = new Set<string>(); const visited = new Set<string>(); function visit(id: string) { if (visiting.has(id)) throw new Error(`Circular section dependency involving '${id}'`); if (visited.has(id)) return; visiting.add(id); for (const dep of graph.get(id) ?? []) visit(dep); visiting.delete(id); visited.add(id); } for (const id of ids) visit(id); }
export function getRoadmaps(): Roadmap[] { if (!fs.existsSync(root)) return []; const roads = fs.readdirSync(root, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => parseRoadmapFile(path.join(root, e.name, 'roadmap.yaml'))); const ids = new Set<string>(); for (const r of roads) { if (ids.has(r.id)) throw new Error(`Duplicate roadmap id '${r.id}'`); ids.add(r.id); if ((r.authorship.type === 'ai' || r.authorship.type === 'hybrid') && (!r.models || r.models.length === 0)) throw new Error(`${r.id} requires AI model provenance`); } return roads; }
export function getRoadmap(id: string) { return getRoadmaps().find(r => r.id === id); }

export function getRoadmapsByCategory(category: string) { return getRoadmaps().filter(r => r.categories?.includes(category)); }
export function getRoadmapsByAuthorship(type: Roadmap['authorship']['type']) { return getRoadmaps().filter(r => r.authorship.type === type); }
export function getRoadmapsBySubject(subjectId: string) { return getRoadmaps().filter(r => r.subject.id === subjectId); }
export function getFeaturedRoadmaps() { return getRoadmaps().filter(r => r.verification?.status === 'verified').slice(0, 6); }
export function getSubjects() { const map = new Map<string, { subject: Roadmap['subject']; roadmaps: Roadmap[] }>(); for (const r of getRoadmaps()) { const entry = map.get(r.subject.id) ?? { subject: r.subject, roadmaps: [] }; entry.roadmaps.push(r); map.set(r.subject.id, entry); } return [...map.values()]; }
