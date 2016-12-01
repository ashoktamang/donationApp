import { Component } from '@angular/core';
import { Platform, ViewController, NavController, NavParams } from 'ionic-angular';

import { ThankYouPage } from '../thank-you/thank-you';

/*
  Generated class for the ThankYou page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'card-details',
  templateUrl: 'card-details.html'
})
export class CardDetailsPage {
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
    console.log('Hello card details Page');
  }

  dismiss() {
    this.navCtrl.setRoot(ThankYouPage);
    this.viewCtrl.dismiss();
  }

}