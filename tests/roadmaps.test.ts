import { describe, expect, it } from 'vitest';
import { getRoadmap, validateDependencies } from '../lib/roadmaps';
describe('roadmap standard', () => {
  it('parses the contributed ML/AI engineer roadmap', () => { const r = getRoadmap('ml-ai-engineer'); expect(r?.sections).toHaveLength(6); });
  it('rejects nonexistent dependencies', () => { expect(() => validateDependencies({ sections: [{ id: 'a', title: 'A', order: 1, topics: [], depends_on: ['missing'] }] } as never)).toThrow(/nonexistent/); });
  it('rejects circular dependencies', () => { expect(() => validateDependencies({ sections: [{ id: 'a', title: 'A', order: 1, topics: [], depends_on: ['b'] }, { id: 'b', title: 'B', order: 2, topics: [], depends_on: ['a'] }] } as never)).toThrow(/Circular/); });
});
