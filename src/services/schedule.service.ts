import { Session, SessionModel } from './../models/session.interface';
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
        return this.database.list('schedule').snapshotChanges().map(
            result => {
                let sessionModels:any[]=[];
                result.forEach(r => {
                    let model: SessionModel = {
                        key: r.key,
                        session: r.payload.val()
                    };
                    model.key = r.key;
                    model.session = r.payload.val();
                    sessionModels.push(model);
                })
                return sessionModels;
            }
        );
    }

    getSchedules2() {
        return this.database.list('schedule').snapshotChanges().map(
            result => {
                let models:any[]=[];
                result.forEach(element => {
                    let model: SessionModel = {
                        key: element.key,
                        session: element.payload.val()
                    };
                    // model = element.payload.val();
                    models.push(model);
                });
                return models;
            }
        );
    }

    getScheduleNameBySpeakerName(speakerName: string){

        let $key;
        return this.database.list('schedule', 
        ref =>ref.orderByChild('groups')
        ).valueChanges();
    }
}