import { SessionClass } from './../../models/session.class';
import { Session } from './../../models/session.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SessionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html',
})
export class SessionDetailPage {

  session = new SessionClass();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.session = navParams.get('session');
    console.log(this.session);
  }


}
