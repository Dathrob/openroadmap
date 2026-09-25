export type AuthorshipType = 'human' | 'ai' | 'hybrid';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export interface Author { name: string; github?: string; url?: string }
export interface AIModel { provider: string; name: string; version?: string; generated_at?: string }
export interface Resource { title: string; provider?: string; url: string; type?: string; format?: string; cost?: 'free'|'freemium'|'paid'; language?: string; recommended?: boolean; description?: string }
export interface Topic { id: string; title: string; description?: string; resources: Resource[] }
export interface Section { id: string; title: string; order: number; description?: string; depends_on?: string[]; topics: Topic[] }
export interface Subject { id: string; title: string; keywords?: string[] }
export interface Roadmap { spec: 'openroadmap/v0.1'; id: string; title: string; description: string; subject: Subject; categories?: string[]; keywords?: string[]; version: string; difficulty?: { from: Difficulty; to: Difficulty }; estimated_hours?: number; authorship: { type: AuthorshipType }; authors?: Author[]; models?: AIModel[]; human_reviewed?: boolean; verification?: { status: 'verified'|'unverified'; reviewed_at?: string }; updated_at?: string; sections: Section[] }
export interface RankingSignals { reviews?: number; freshness?: number; resourceHealth?: number; maintainerActivity?: number }
