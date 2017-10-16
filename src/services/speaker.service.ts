import { Speaker, SpeakerModel } from './../models/speaker.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class SpeakerService{
    /**
     *
     */
    constructor(private database: AngularFireDatabase) {
        
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