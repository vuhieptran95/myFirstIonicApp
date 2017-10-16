import { Session } from './session.interface';
export interface Group{
    key: string;
    time: string;
    sessions: Session[];
}