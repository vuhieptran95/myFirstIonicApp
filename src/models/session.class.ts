import { Session } from './session.interface';
export class SessionClass implements Session{
    speakers: any;
    key: string;
    id: string;
    name: string;
    description: string;
    location: string;
    timeStart: string;
    timeEnd: string;

}