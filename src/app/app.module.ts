import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { CollegeDetailsPage } from '../pages/college-details/college-details';
import { DonationPage } from '../pages/donation/donation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    CollegeDetailsPage,
    DonationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    CollegeDetailsPage,
    DonationPage
  ],
  providers: []
})
export class AppModule {}
