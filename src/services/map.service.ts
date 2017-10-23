import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MapService{
    /**
     *
     */
    constructor(private database: AngularFireDatabase) {
        
    }

    getMapInfo(){
        return this.database.list('map').valueChanges();
    }
}