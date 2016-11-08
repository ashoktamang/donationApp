import { Component } from '@angular/core';
import { ModalController, NavParams, AlertController } from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you';

/*
  Generated class for the PaymentForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment-form',
  templateUrl: 'payment-form.html'
})
export class PaymentFormPage {

  college;
  donationAmount; // Minimum donation amount is $1.

  constructor (
    public modalCtrl: ModalController,
    public params: NavParams, 
    public alertCtrl: AlertController,
  ) {
    this.college = this.params.data.college;
    this.donationAmount = '0';
  }

  ionViewDidLoad() {
    console.log('Hello PaymentForm Page');
  }

  // TODO: Validate the amount input after '.' is placed.
  getAmount(numAsString) {
    this.donationAmount = (this.donationAmount == '0') ? numAsString : this.donationAmount + numAsString;
  }

  delete() {
    this.donationAmount = (this.donationAmount.length == 0) ? '0' : this.donationAmount.slice(0, -1);
  }

  donate() {
    let modal = this.modalCtrl.create(ThankYouPage, { college: this.college, donationAmount: this.donationAmount });
    modal.present();
  }

}
