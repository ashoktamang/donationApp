import { Component } from '@angular/core';
import { ModalController, NavParams, NavController, AlertController, ActionSheetController, LoadingController } from 'ionic-angular';
import { CardDetailsPage } from '../card-details/card-details';

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
  numpad;
  donationAmount; // Minimum donation amount is $1.

  constructor (
    public params: NavParams,
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController
  ) {
    this.college = this.params.data.college;
    this.donationAmount = '0';

    this.numpad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Delete'];
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
    // let modal = this.modalCtrl.create(ThankYouPage, { college: this.college, donationAmount: this.donationAmount });
    // modal.present();
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Donate',
      buttons: [
        {
          text: 'Visa/MasterCard',
          handler: () => {
            this.navCtrl.push(CardDetailsPage, { college: this.college, donationAmount: this.donationAmount });
            console.log('visa clicked.');
          }
        },
        {
          text: 'PayPal',
          handler: () => {
            this.navCtrl.push(CardDetailsPage, { college: this.college, donationAmount: this.donationAmount });
            console.log('PayPal clicked.');
          }
        }
      ]
    })
    actionSheet.present();
  }

}
