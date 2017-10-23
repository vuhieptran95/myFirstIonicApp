import { ScheduleService } from './../../services/schedule.service';
import { Speaker } from './../../models/speaker.interface';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpeakerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
})
export class SpeakerDetailPage {

  speaker: Speaker = new Speaker();
  constructor(public navCtrl: NavController, public navParams: NavParams, private scheduleService: ScheduleService) {
    this.speaker = navParams.get('speaker');
  }


}
