import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CollegeDetailsPage } from '../pages/college-details/college-details';
import { PaymentFormPage } from '../pages/payment-form/payment-form';
import { DonationPage } from '../pages/donation/donation';
import { ThankYouPage } from '../pages/thank-you/thank-you';
import { CardDetailsPage } from '../pages/card-details/card-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CollegeDetailsPage,
    PaymentFormPage,
    DonationPage,
    CardDetailsPage,
    ThankYouPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CollegeDetailsPage,
    PaymentFormPage,
    DonationPage,
    CardDetailsPage,
    ThankYouPage
  ],
  providers: []
})
export class AppModule {}
