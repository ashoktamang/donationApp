import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    const fbConf = {
      apiKey: "AIzaSyDIei2U-Dj6XdL8uJV9thfyOIYya2STMWk",
      authDomain: "donationapp-ae4c9.firebaseapp.com",
      databaseURL: "https://donationapp-ae4c9.firebaseio.com",
      storageBucket: "donationapp-ae4c9.appspot.com",
      messagingSenderId: "501468789456"
    };
    firebase.initializeApp(fbConf);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
