import { SessionDetailPage } from './../session-detail/session-detail';
import { ScheduleService } from './../../services/schedule.service';
import { SpeakerDetailPage } from './../speaker-detail/speaker-detail';
import { SpeakerService } from './../../services/speaker.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

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

  speakers;
  constructor(public navCtrl: NavController, public navParams: NavParams, private speakerService: SpeakerService , private scheduleService: ScheduleService, private actionSheetCtrl: ActionSheetController) {
  }


  goToSpeakerDetail(speaker){
    this.navCtrl.push(SpeakerDetailPage, {speaker: speaker});
  }

  goToSessionDetail(sessionId: string){
    this.navCtrl.push(SessionDetailPage, {key: sessionId})
  }

  openSpeakerShare(speaker){
    let actionSheet = this.actionSheetCtrl.create({
      title: "Share "+ speaker.name,
      buttons: [
        {
          text: "Copy Link"
        },
        {
          text: "Share via ..."
        },
        {
          text: "Cancel",
          role: 'cancel'
        }
      ]
    }).present();
  }

  openContact(speaker){
    let actionSheet = this.actionSheetCtrl.create({
      title: "Contact "+speaker.name,
      buttons: [
        {
          text: "Email ( "+speaker.email+" )",
          icon: "mail",
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: "Call ( "+speaker.phone+" )",
          icon: "call",
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        }
      ]
    }).present();
  }

  ionViewDidLoad(){
    this.speakers = this.speakerService.getSpeakersWithAttendedSessions();
  }

}
