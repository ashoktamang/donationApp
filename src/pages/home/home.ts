import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';
import { CollegeDetailsPage } from '../college-details/college-details';

import { FbDatabase } from '../../providers/fb-database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FbDatabase]
})

export class HomePage {
  colleges = [];

  constructor(public modalCtrl: ModalController, private _data: FbDatabase) {
    // this.colleges = [
    //   {
    //     'title': 'College of Arts and Sciences',
    //   },
    //   {
    //     'title': 'School of Business',
    //   },
    //   {
    //     'title': 'Cathy Hughes School of Communications',
    //   },
    //   {
    //     'title': 'College of Dentistry',
    //   },
    //   {
    //     'title': 'School of Divinity',
    //   },
    //   {
    //     'title': 'School of Education',
    //   },
    //   {
    //     'title': 'College of Engineering and Architecture',
    //   },
    //   {
    //     'title': 'Graduate School',
    //   },
    //   {
    //     'title': 'School of Law',
    //   },
    //   {
    //     'title': 'College of Medicine',
    //   },
    //   {
    //     'title': 'College of Nursing and Allied Health Sciences',
    //   },
    //   {
    //     'title': 'College of Pharmacy',
    //   },
    //   {
    //     'title': 'School of Social Work',
    //   }
    // ];
    setTimeout(this._data.db.on('value', data => {
      this.colleges = data.val();
    }), 0)
  }

  openDetailsModal(index) {
    let modal = this.modalCtrl.create(CollegeDetailsPage, index);
    modal.present();
  }

  addcollege() {
    this._data.db.on('value', data => {
      console.log('data returned', data.val());
    })
  }

}
