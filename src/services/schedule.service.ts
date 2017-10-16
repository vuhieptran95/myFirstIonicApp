import { Group } from './../models/group.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class ScheduleService {
    /**
     *
     */
    constructor(private database: AngularFireDatabase) {

    }

    getSchedules() {
        return this.database.list('schedule/0/groups').snapshotChanges().map(
            result => {
                var groups: Group[] = [];
                result.forEach(r => {
                    var group: Group = { key: "", time: "", sessions: [] };
                    group.key = r.key;
                    group.time = r.payload.val().time;
                    group.sessions = r.payload.val().sessions;
                    groups.push(group);
                })
                return groups;
            }
        );
    }

    getScheduleNameBySpeakerName(speakerName: string){
        return this.database.list('scheduel/0/groups/1/sessions/0', ref => ref.orderByChild('location')).valueChanges();
    }
}