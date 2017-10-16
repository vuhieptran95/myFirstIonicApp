import { SpeakerDetailPage } from './../speaker-detail/speaker-detail';
import { SpeakerService } from './../../services/speaker.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpeakersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  speakerModels;
  constructor(public navCtrl: NavController, public navParams: NavParams, private speakerService: SpeakerService) {
    console.log(this.speakerModels);
  }


  goToSpeakerDetail(speaker){
    this.navCtrl.push(SpeakerDetailPage, {speaker: speaker});
  }

  ngOnInit(){
    this.speakerModels = this.speakerService.getSpeakers();
  }

}
