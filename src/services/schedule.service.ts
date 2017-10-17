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
            result=>{
                let viewmodels: ScheduleViewModel[]=[];
                result.forEach(r => {
                    
                    let viewmodel: ScheduleViewModel = {
                        time: r.key,
                        test: r.payload.val()   
                    }
                    viewmodels.push(viewmodel);
                });
                return viewmodels;
            }
        );
    }

    getSessionsWithTimeTest(){
        
        return this.database.list('time', ref=>ref.child('11:00 am')).valueChanges();
    }

    getSessionByKey(key: string){
        return this.database.object('schedule/'+key).snapshotChanges().map(result=>{
            let session: Session = result.payload.val();
            session.key = result.key;
            return session;
        })
    }

    getSchedules() {
        return this.database.list('schedule').snapshotChanges().map(
            result => {
                let sessions:Session[]=[];
                result.forEach(r => {
                    let session: Session = r.payload.val();
                    session.key = r.key;
                    sessions.push(session);
                })
                return sessions;
            }
        );
    }



    getSchedules2() {
        return this.database.list('schedule').snapshotChanges().map(
            result => {
                let sessions:Session[]=[];
                result.forEach(element => {
                    let session: Session = element.payload.val();
                    session.key = element.key;
                    // model = element.payload.val();
                    sessions.push(session);
                });
                return sessions;
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