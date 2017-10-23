import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the PopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {
  
    constructor(
      public viewCtrl: ViewController,
      public navCtrl: NavController,
      public modalCtrl: ModalController
    ) { }
  
    support() {
      // this.app.getRootNav().push('SupportPage');
      this.viewCtrl.dismiss();
    }
  
    close(url: string) {
      window.open(url, '_blank');
      this.viewCtrl.dismiss();
    }
  }
