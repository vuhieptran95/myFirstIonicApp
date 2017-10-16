import { AboutPage } from './../pages/about/about';
import { MapPage } from './../pages/map/map';
import { TeachersPage } from './../pages/teachers/teachers';
import { SchedulePage } from './../pages/schedule/schedule';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  appPages: PageInterface[]=[
    { title: 'Schedule', name: 'TabsPage', component: TabsPage, tabComponent: SchedulePage, index: 0, icon: 'calendar' },
    { title: 'Teachers', name: 'TabsPage', component: TabsPage, tabComponent: TeachersPage, index: 1, icon: 'contacts' },
    { title: 'Map', name: 'TabsPage', component: TabsPage, tabComponent: MapPage, index: 2, icon: 'map' },
    { title: 'About', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 3, icon: 'information-circle' }
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    // private navCtrl: NavController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  @ViewChild(Nav) nav: Nav;

  onClick(page){
    console.log(this.nav.getActive());
    this.nav.getActiveChildNavs()[0].select(page.index);
    
  }

  isActive(page){
    let childNav = this.nav.getActiveChildNavs()[0];
      // Tabs are a special case because they have their own navigation
      if (childNav) {
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;
      }
  }
}
