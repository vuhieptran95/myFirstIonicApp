import { Observable } from 'rxjs/Observable';
import { ScheduleViewModel } from './../../models/viewmodels/schedule.viewmodel.interface';
import { ScheduleService } from './../../services/schedule.service';
import { SessionDetailPage } from './../session-detail/session-detail';
import { Group } from './../../models/group.interface';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';


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

  schedules;

  constructor(public navCtrl: NavController, public navParams: NavParams, private scheduleService: ScheduleService) {
   
  }

  goToSessionDetail(key){
    // session.subscribe(x=>console.log(x));
    this.navCtrl.push(SessionDetailPage,{key: key});
  }

  ngOnInit(){
    // this.sessionModels = this.scheduleService.getSchedules();
    // this.scheduleService.getSchedules2().subscribe(console.log);
    // this.scheduleService.getSessionsWithTime().subscribe(console.log);
    // this.scheduleService.getSessionsWithTimeTest().subscribe(console.log);
    this.schedules=this.scheduleService.getSessionsWithTime();
    // this.scheduleService.getSessionsWithTime().subscribe(console.log);
    
  }

}
