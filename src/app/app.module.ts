import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { CollegeDetailsPage } from '../pages/college-details/college-details';
import { PaymentFormPage } from '../pages/payment-form/payment-form';
import { DonationPage } from '../pages/donation/donation';
import { ThankYouPage } from '../pages/thank-you/thank-you';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    CollegeDetailsPage,
    PaymentFormPage,
    DonationPage,
    ThankYouPage
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
    PaymentFormPage,
    DonationPage,
    ThankYouPage
  ],
  providers: []
})
export class AppModule {}
