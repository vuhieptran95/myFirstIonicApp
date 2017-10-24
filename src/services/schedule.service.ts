import { Observable } from 'rxjs/Observable';
import { ScheduleModel } from './../models/viewmodels/schedule.model';
import { Session } from './../models/session.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import * as _ from 'lodash';

@Injectable()
export class ScheduleService {
  /**
   *
   */
  constructor(private database: AngularFireDatabase) {
    
  }

  getSessionsWithTimeByQueryText(queryText) {
    return this.database.list('sessions', ref => ref.orderByChild('name').startAt(queryText)).valueChanges();
  }

  getSessionsWithTime(): Observable<ScheduleModel[]> {
    return this.database.list('time', ref=>ref.orderByChild('id').startAt(1)).snapshotChanges().map(
      times => {
        let scheduleModels: ScheduleModel[] = [];
        times.forEach(listSessionId => {
          let sessions: Observable<Session>[] = this.getSessionsFromListSessionId(listSessionId.payload.val());
          let scheduleModel = {
            time: listSessionId.key,
            sessions: sessions
          }
          scheduleModels.push(scheduleModel);
        })
        return scheduleModels;
      }
    );
  }

  getSessionWithSpeakerNamesById(sessionId: string) {
    return this.database.object('sessions/' + sessionId).snapshotChanges().map(
      session => {
        let speakerNames: any[] = [];
        for (var speakerId in session.payload.val().speakers) {
          speakerNames.push(this.database.object('speakers/' + speakerId).snapshotChanges().map(
            speaker => {
              return speaker.payload.val().name;
            }
          ));
        }
        let model = { speakerNames, ...session.payload.val() };
        return model;
      }
    );
  }

  getSessionsBySpeakerId(speakerId: string) {
    return this.database.list('sessions').snapshotChanges().map(
      sessionResults => {
        let sessions: any[] = [];
        sessionResults.forEach(result => {
          for (var id in result.payload.val().speakers) {
            if (id === speakerId) {
              let session = { key: result.key, name: result.payload.val().name };
              sessions.push(session);
            }
          }
        })
        return sessions;
      }
    );
  }

  private getSessionsFromListSessionId(snapVal: any): Observable<Session>[] {
    let sessions: Observable<Session>[] = [];
    for (var sessionId in snapVal) {
      if(sessionId!="id"){
        let session = this.database.object('sessions/' + sessionId).snapshotChanges().map(r => {
          let session: Session = r.payload.val();
          session.key = r.key;
          return session;
        })
        sessions.push(session);
      }
    }
    return sessions;
  }
}