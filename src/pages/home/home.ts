import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';
import { CollegeDetailsPage } from '../college-details/college-details';

@Component({
  templateUrl: 'home.html'
})

export class HomePage {
  colleges = [];

  constructor(public navCtrl: NavController) {
    this.colleges = [
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
  }

  showDetailsPage(item) {
    this.navCtrl.push(CollegeDetailsPage, { college: item });
  }

}
