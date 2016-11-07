import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html'
})

export class DonationPage {

  college;

  constructor (params: NavParams) {
    this.college = params.data.college;
  }

}
