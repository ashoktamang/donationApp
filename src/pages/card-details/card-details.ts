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
  private card = {};
  private donor = {};
  
  college;
  donationAmount;
  project;
  
  constructor(
    public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController,
    public platform: Platform
  ) {
    this.college = this.params.data.college;
    this.donationAmount = this.params.data.donationAmount;
    this.project = this.params.data.project;
    console.log(this.college + '<<<<<<<<<<<<<<<<<');
  }

  ionViewDidLoad() {
    console.log('payment info page loads');
  }

  donate() {
    console.log(this.card);
    console.log(this.donor);
    // db.donationAmount += this.donationAmount
    this.navCtrl.push(ThankYouPage, { college: this.college, project: this.project, donationAmount: this.donationAmount });
    this.viewCtrl.dismiss();
  }

}
