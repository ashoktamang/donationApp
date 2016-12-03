/// <reference path="../typings/mocha/mocha.d.ts" />
import PaymentFormPage from '../src/pages/payment-form/payment-form'

describe('Payment Form Page', () => {
    var payment: PaymentFormPage;

    beforeEach(function () {
        payment = new PaymentFormPage();
    });


    describe('#getAmount', () => {
        it('should return the same number as string if single digit', () => {
            var result : string =  payment.getAmount('3');
            if (result !== '3'){
                throw new Error('Expected 3 but was ' + result);
            }
        });

    });

});
