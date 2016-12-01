import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  ) {
    this.college = this.params.get('college');
    this.project = this.params.get('project');
    console.log(this.project);
  }

  ionViewDidLoad() {
    console.log('Hello ThankYou Page');
  }

}
