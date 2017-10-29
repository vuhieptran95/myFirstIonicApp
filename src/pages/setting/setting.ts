import { User } from './../../models/user.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  displayName: string;
  email: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private geo: Geolocation) {

  }

  ngOnInit() {
    this.afAuth.authState.subscribe(authState => {
      authState? this.displayName = authState.email : this.displayName = ""
    });
  }

  register(){
    this.geo.getCurrentPosition({enableHighAccuracy: true}).then(
      value =>{
        this.afAuth.auth.createUserWithEmailAndPassword("hiepdeptraiqua2@gmail.com","dtthhdc157")
        .then(authState=>{
          let user: User = {
            displayName: authState.email,
            email: authState.email,
            photoURL: "",
            lat: value.coords.latitude,
            long: value.coords.longitude
          };
          this.afDatabase.object('/users/'+authState.uid).update(user);
        }).catch(console.log);
      }
    )
    
  }

  logInWithPassword(){
    this.afAuth.auth.signInWithEmailAndPassword("hiepdeptraiqua@gmail.com", "dtthhdc157").then(console.log);
  }

  // logIn(){
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //   .then(auth => {
  //     let user: User = {
  //       displayName: auth.user.displayName,
  //       email: auth.user.email,
  //       photoURL: auth.user.photoURL,
  //       lat: 
  //     }
  //     this.afDatabase.object('/users/'+auth.user.uid).update(user);
  //   });
  // }

  logOut(){
    this.afAuth.auth.signOut();
  }

}
