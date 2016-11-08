import { Component } from '@angular/core';
import { Platform, ViewController, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/*
  Generated class for the ThankYou page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html'
})
export class ThankYouPage {
  college;
  donationAmount;
  constructor(
    public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController,
    public platform: Platform
  ) {
    this.college = this.params.get('college');
    this.donationAmount = this.params.get('donationAmount');
  }

  ionViewDidLoad() {
    console.log('Hello ThankYou Page');
  }

  dismiss() {
    this.navCtrl.setRoot(HomePage);
    this.viewCtrl.dismiss();
  }

}
