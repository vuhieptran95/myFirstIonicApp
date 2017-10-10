import { ItemDetailsPage } from './../item-details/item-details';
import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController) {

  }

  myName = "Hiepdeptrai";
  items = [{description: 'Item 1'},{description: 'Item 2'},{description: 'Item 3'}];

  selectItem(item){
    // this.navCtrl.push(ItemDetailsPage, {item: item});
    this.modalCtrl.create(ItemDetailsPage, {item: item}).present();
  }

  openMenu(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Test',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () =>{
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
