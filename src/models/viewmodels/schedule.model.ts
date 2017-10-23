import { Observable } from 'rxjs/Observable';
import { Session } from './../session.interface';
export class ScheduleModel{
    time: string;
    sessions: Observable<Session>[]
}