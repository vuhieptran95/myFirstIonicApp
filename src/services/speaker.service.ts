import { ScheduleService } from './schedule.service';
import { SpeakerModel } from './../models/speaker.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class SpeakerService{
    /**
     *
     */
    constructor(private database: AngularFireDatabase, private scheduleService: ScheduleService) {
        
    }

    //return attendSessions as an Observable
    getSpeakersWithAttendedSessions(){
        return this.database.list('speakers').snapshotChanges().map(
            speakerResults => {
                let speakers = [];
                speakerResults.forEach(result =>{
                    let speaker = {
                        attendSessions: this.scheduleService.getSessionsBySpeakerId(result.key),
                        ...result.payload.val()
                    }
                    speaker.sessions = null;
                    speakers.push(speaker);
                })
                return speakers;
            }
        )
    }

    //return attendSessions as list of Observables
    getSpeakersWithAttendedSessions2(){
        return this.database.list('speakers').snapshotChanges().map(
            speakerResults => {
                let speakers = [];
                
                speakerResults.forEach(result =>{
                    let attendSessions = [];
                    for(var sessionId in result.payload.val().sessions){
                        attendSessions.push(this.database.object('sessions/'+sessionId).snapshotChanges().map(
                            session => {
                                return {key: session.key , name: session.payload.val().name}   
                            }
                        ))
                    }
                    let speaker = {attendSessions, ...result.payload.val()};
                    speakers.push(speaker);
                })
                return speakers;
            }
        )
    }

    getSpeakers(){
        return this.database.list('speakers').snapshotChanges().map(
            result=>{
                let speakers: SpeakerModel[] = [];

                result.forEach(r => {
                    let model = new SpeakerModel();
                    model.key = r.key;
                    model.speaker = r.payload.val();
                    speakers.push(model);
                });

                return speakers;
            }
        );
    }
}