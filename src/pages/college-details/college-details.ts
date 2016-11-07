import { Component } from '@angular/core';

import { Platform, ViewController, NavController, NavParams } from 'ionic-angular';
import { DonationPage } from '../donation/donation';

@Component({
  templateUrl: 'college-details.html'
})

export class CollegeDetailsPage {
  college;

  constructor (
    public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController,
    public platform: Platform
  ) {

    let colleges = [
      {
        'title': 'College of Arts and Sciences',
      },
      {
        'title': 'School of Business',
      },
      {
        'title': 'Cathy Hughes School of Communications',
      },
      {
        'title': 'College of Dentistry',
      },
      {
        'title': 'School of Divinity',
      },
      {
        'title': 'School of Education',
      },
      {
        'title': 'College of Engineering and Architecture',
      },
      {
        'title': 'Graduate School',
      },
      {
        'title': 'School of Law',
      },
      {
        'title': 'College of Medicine',
      },
      {
        'title': 'College of Nursing and Allied Health Sciences',
      },
      {
        'title': 'College of Pharmacy',
      },
      {
        'title': 'School of Social Work',
      }
    ];
    this.college = colleges[this.params.get('index')];
  }

  goDonate(item) {
    this.navCtrl.push(DonationPage, { college: item });
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
