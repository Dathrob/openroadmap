import { getRoadmaps } from '../../lib/roadmaps';
import Directory from './directory';
export default function Page(){ return <Directory roadmaps={getRoadmaps()} /> }
