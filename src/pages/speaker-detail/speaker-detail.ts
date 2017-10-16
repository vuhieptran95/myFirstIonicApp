import { ScheduleService } from './../../services/schedule.service';
import { Speaker } from './../../models/speaker.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpeakerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
})
export class SpeakerDetailPage {

  speaker: Speaker = new Speaker();
  constructor(public navCtrl: NavController, public navParams: NavParams, private scheduleService: ScheduleService) {
    this.speaker = navParams.get('speaker');
    this.scheduleService.getScheduleNameBySpeakerName('Burt Bear').subscribe(console.log);
  }


}