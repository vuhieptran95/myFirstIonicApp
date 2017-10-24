import { NAVIGATION_GO_OPTION } from './../../custom-animation/navigation.animation';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Observable } from 'rxjs/Observable';
import { ScheduleModel } from './../../models/viewmodels/schedule.model';
import { ScheduleService } from './../../services/schedule.service';
import { SessionDetailPage } from './../session-detail/session-detail';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private scheduleService: ScheduleService,
    private nativePageTransitions: NativePageTransitions) {
      
      // this.menuCtrl.enable(false,'loggedOutMenu');
    // this.scheduleService.getSessionsWithTimeByQueryText('Migrate').subscribe(console.log);
  }

  goToSessionDetail(key){
    this.nativePageTransitions.slide(NAVIGATION_GO_OPTION);
    this.navCtrl.push(SessionDetailPage,{key: key},{animate: false});
  }

  updateSchedule(){
    
  }

  

  ngOnInit(){
    this.scheduleModels=this.scheduleService.getSessionsWithTime();
  }

}
