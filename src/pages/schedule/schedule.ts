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

  groups;

  constructor(public navCtrl: NavController, public navParams: NavParams, private scheduleService: ScheduleService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  @ViewChild('myInputText') myInput;
  @ViewChild(Nav) nav: Nav;

  onClick(){
    console.log(this.nav.getActiveChildNavs());
  }


  goToSessionDetail(session){
    this.navCtrl.push(SessionDetailPage, {session: session});
  }

  ngOnInit(){
    this.groups = this.scheduleService.getSchedules();
  }

}
