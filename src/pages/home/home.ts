import { ItemDetailsPage } from './../item-details/item-details';
import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController, AlertController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController) {

  }

  inputValue: string;
  myName = "Hiepdeptrai";
  items = [{ description: 'Item 1' }, { description: 'Item 2' }, { description: 'Item 3' }];

  clickAlert() {
    let alert = this.alertCtrl.create({
      title: "Test Alert",
      subTitle: "Test Sub-Alert",
      message: "This is just a Test",
      inputs: [
        {
          type: "text",
          placeholder: "Test input",
        }
      ],
      buttons: [
        {
          text: "Ok",
          handler: (data) => {
            console.log(data[0]);
          }
        }
      ]
    });
    alert.present();
  }

  selectItem(item) {
    // this.navCtrl.push(ItemDetailsPage, {item: item});
    let modal = this.modalCtrl.create(ItemDetailsPage, { item: item });
    modal.present();
    modal.onDidDismiss
  }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Test',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  doClick() {
    this.menuCtrl.open();
  }

}
