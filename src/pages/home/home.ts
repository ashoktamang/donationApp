import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';
import { CollegeDetailsPage } from '../college-details/college-details';

@Component({
  templateUrl: 'home.html'
})

export class HomePage {
  colleges = [];

  constructor(public modalCtrl: ModalController) {
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

  openDetailsModal(index) {
    let modal = this.modalCtrl.create(CollegeDetailsPage, index);
    modal.present();
  }

}
