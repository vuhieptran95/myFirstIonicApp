import { Speaker } from './speaker.interface';
export interface Session{
    key: string;
    id: string;
    name: string;
    description: string;
    location: string;
    speakers: Speaker[];
    timeStart: string;
    timeEnd: string;
}
