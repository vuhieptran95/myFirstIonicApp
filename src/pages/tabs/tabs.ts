import { SpeakersPage } from './../speakers/speakers';
import { AboutPage } from './../about/about';
import { MapPage } from './../map/map';
import { TeachersPage } from './../teachers/teachers';
import { SchedulePage } from './../schedule/schedule';
import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = SpeakersPage;
  tab3Root = MapPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
