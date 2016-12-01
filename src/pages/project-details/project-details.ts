import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { PaymentFormPage } from '../payment-form/payment-form';

@Component({
  selector: 'project-details',
  templateUrl: 'project-details.html'
})
export class ProjectDetailsPage {
  public college;
  public project;
  constructor(
    public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.college = this.params.get('college');
    this.project = this.params.get('project');
    console.log('project', this.project);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goDonate(college, project) {
    this.navCtrl.push(PaymentFormPage, { college: college, project: project });
  }

}
