import { Observable } from 'rxjs/Observable';
import { ScheduleModel } from './../../models/viewmodels/schedule.model';
import { ScheduleService } from './../../services/schedule.service';
import { SessionDetailPage } from './../session-detail/session-detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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

  scheduleModels: Observable<ScheduleModel[]>;
  queryText: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private scheduleService: ScheduleService) {
    this.scheduleService.getSessionsWithTimeByQueryText('Migrate').subscribe(console.log);
  }

  goToSessionDetail(key){
    this.navCtrl.push(SessionDetailPage,{key: key});
  }

  updateSchedule(){
    
  }

  ionViewDidLoad(){
    this.scheduleModels=this.scheduleService.getSessionsWithTime();
  }

}
