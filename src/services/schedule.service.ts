import { ScheduleViewModel } from './../models/viewmodels/schedule.viewmodel.interface';
import { Session } from './../models/session.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class ScheduleService {
    /**
     *
     */
    constructor(private database: AngularFireDatabase) {

    }

    getSessionsWithTime(){
        return this.database.list('time').snapshotChanges().map(
            times => {
              let models = [];
              times.forEach(time=>{
                let sessions = [];
                for (var sessionId in time.payload.val()) {
                    let x = this.database.object('sessions/'+sessionId).snapshotChanges().map(r=>{
                        let session: Session = r.payload.val();
                        session.key = r.key;
                        return session;
                    })
                  sessions.push(x);
                }
                let model: ScheduleViewModel = {
                  time: time.key,
                  sessions: sessions
                }
                models.push(model);
              })
              return models;
            }
          );
    }

    getSessionBySessionId(sessiongId: string){
        return this.database.object('sessions/'+sessiongId).valueChanges();
    }
}