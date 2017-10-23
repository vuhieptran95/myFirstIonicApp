import { ScheduleService } from './../../services/schedule.service';
import { Session } from './../../models/session.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


/**
 * Generated class for the SessionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html',
})
export class SessionDetailPage {

  session;
  constructor(public navCtrl: NavController, public navParams: NavParams, private scheduleService: ScheduleService) {
    this.session = this.scheduleService.getSessionWithSpeakerNamesById(navParams.get('key'));
  }


}
