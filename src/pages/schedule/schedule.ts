import { ScheduleService } from './../../services/schedule.service';
import { SessionDetailPage } from './../session-detail/session-detail';
import { Group } from './../../models/group.interface';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

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

  sessions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private scheduleService: ScheduleService, private database: AngularFireDatabase) {
  }

  goToSessionDetail(session){
    this.navCtrl.push(SessionDetailPage, {session: session});
  }

  ngOnInit(){
    // this.sessionModels = this.scheduleService.getSchedules();
    // this.scheduleService.getSchedules2().subscribe(console.log);
    // this.scheduleService.getSessionsWithTime().subscribe(console.log);
    // this.scheduleService.getSessionsWithTimeTest().subscribe(console.log);
    this.sessions=this.scheduleService.getSchedules();
  }

}
