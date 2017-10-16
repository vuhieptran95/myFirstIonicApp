import { Group } from './../../models/group.interface';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  scheduleListRef: AngularFireList<any>;
  groups;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.getSchedule();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  @ViewChild('myInputText') myInput;
  @ViewChild(Nav) nav: Nav;

  onClick(){
    console.log(this.nav.getActiveChildNavs());
  }

  getSchedule(){
    return this.database.list('schedule/0/groups').snapshotChanges().map(
      result => {
        var groups: Group[] = [];
        result.forEach( r => {
          var group: Group={key: "", time: "", sessions: []};
          group.key = r.key;
          group.time = r.payload.val().time;
          group.sessions = r.payload.val().sessions;
          groups.push(group);
       })
       return groups; 
      }
    );
    // this.database.list('schedule/0/groups').valueChanges().subscribe(console.log);
  }

  ngOnInit(){
    this.groups = this.getSchedule();
  }

}
