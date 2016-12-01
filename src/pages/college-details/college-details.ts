import { Component } from '@angular/core';

import { Platform, ViewController, NavController, NavParams } from 'ionic-angular';
import { PaymentFormPage } from '../payment-form/payment-form';

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
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'School of Business',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'Cathy Hughes School of Communications',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'College of Dentistry',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'School of Divinity',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'School of Education',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'College of Engineering and Architecture',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'Graduate School',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'School of Law',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'College of Medicine',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'College of Nursing and Allied Health Sciences',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'College of Pharmacy',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      },
      {
        'title': 'School of Social Work',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, scelerisque malesuada tempor ac, ultricies scelerisque enim. Vestibulum non neque quam. Ut pulvinar mollis placerat. Aliquam ac ultricies nulla. Mauris ac mattis nisi. Curabitur quis hendrerit tellus. Ut justo justo, auctor blandit interdum at, aliquam at odio. Pellentesque sagittis tortor id arcu viverra, a dictum nisi venenatis. Integer sapien mi, feugiat vitae efficitur quis, mattis quis neque. Nam efficitur consequat sem, vitae tristique purus dapibus id. Maecenas eleifend, ex vitae semper mollis, eros erat auctor orci, sit amet ullamcorper arcu nibh eu risus. In erat magna, euismod eget suscipit sit amet, ornare at lorem. Proin vehicula porta metus non dignissim. Nam enim libero, eleifend ac blandit ac, dictum ac libero. Proin eu condimentum arcu, nec varius lorem. Sed elementum vulputate velit id accumsan. Nullam vel leo eu libero blandit varius suscipit ut magna. Quisque quis ornare sem. Nam sit amet pulvinar neque. Duis quis commodo metus, eget vehicula justo. Nunc dapibus neque sed urna ultricies fringilla. Sed varius leo sed enim consectetur aliquam. Sed non odio nibh. Nulla libero turpis, congue quis neque et, tristique fermentum orci. Donec venenatis pharetra nibh quis venenatis.'
      }
    ];
    this.college = this.params.get('college');
  }

  goDonate(item) {
    this.navCtrl.push(PaymentFormPage, { college: item });
    this.viewCtrl.dismiss();
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
