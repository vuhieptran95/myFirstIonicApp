import { Session } from './../models/session.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

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

  getSessionsWithTime() {
    return this.database.list('time').snapshotChanges().map(
      times => {
        let models = [];
        times.forEach(time => {
          let sessions = [];
          for (var sessionId in time.payload.val()) {
            let x = this.database.object('sessions/' + sessionId).snapshotChanges().map(r => {
              let session: Session = r.payload.val();
              session.key = r.key;
              return session;
            })
            sessions.push(x);
          }
          let model = {
            time: time.key,
            sessions: sessions
          }
          models.push(model);
        })
        return models;
      }
    );
  }

  getSessionById(sessiongId: string) {
    return this.database.object('sessions/' + sessiongId).valueChanges();
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
}