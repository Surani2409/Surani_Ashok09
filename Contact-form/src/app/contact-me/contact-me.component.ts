import { Component } from '@angular/core';
import{ FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent  {
  
  submit = false;

  constructor( ) { }

  contactform = new FormGroup({
    fullName : new FormControl (null, [Validators.required, Validators.minLength(3)]),
    password: new  FormControl (null, [Validators.required, Validators.minLength(7)]),
    MobileNumber: new  FormControl (null, [Validators.required, Validators.minLength(10)]),
    Country:  new FormControl (null, [Validators.required, Validators.minLength(1)]),
    Address: new FormControl (null, [Validators.required, Validators.minLength(10)]),
    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
  });

  get f(){ return this.contactform.controls;}

  onSubmit ( ) {
    // this.submit =true;
     if (this.contactform.invalid)
     {
       return;
     }
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactform.value));
  }
}
