import { Session } from './session.interface';
export class SessionClass implements Session{
    key: string;
    id: string;
    name: string;
    description: string;
    location: string;
    speakerNames: string[];
    timeStart: string;
    timeEnd: string;
    tracks: string[];

}