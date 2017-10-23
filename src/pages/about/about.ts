import { PopOverPage } from './../pop-over/pop-over';
import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    conferenceDate = '2047-05-17';
  
    constructor(public popoverCtrl: PopoverController) { }
  
    presentPopover(event: Event) {
      let popover = this.popoverCtrl.create(PopOverPage);
      popover.present({ ev: event });
    }

}
