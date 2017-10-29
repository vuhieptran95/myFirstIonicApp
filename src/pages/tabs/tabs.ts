import { SettingPage } from './../setting/setting';
import { BarcodePage } from './../barcode/barcode';
import { TAB_OPTION } from './../../custom-animation/tab.animation';
import { SpeakersPage } from './../speakers/speakers';
import { AboutPage } from './../about/about';
import { MapPage } from './../map/map';
import { SchedulePage } from './../schedule/schedule';
import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = SpeakersPage;
  tab3Root = MapPage;
  tab4Root = AboutPage;
  tab5Root = BarcodePage;
  tab6Root = SettingPage;

  loaded: boolean = false;
  constructor(private nativePageTransitions: NativePageTransitions) {

  }

  public transition(e):void {    

    // if (!this.loaded) {
    //   this.loaded = true;
    //   return;
    // }

    // this.nativePageTransitions.fade(TAB_OPTION);
  }
}
