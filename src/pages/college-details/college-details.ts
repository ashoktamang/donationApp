import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { DonationPage } from '../donation/donation';

@Component({
  templateUrl: 'college-details.html'
})

export class CollegeDetailsPage {
  college;

  constructor (public navCtrl: NavController, params: NavParams) {
    this.college = params.data.college;
    console.log(params);
  }

  goDonate(item) {
    this.navCtrl.push(DonationPage, { college: item });
  }
}
