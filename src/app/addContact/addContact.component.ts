import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addContact',
  templateUrl: './addContact.component.html',
  styleUrls: ['./addContact.component.css'],
})
export class AddContactComponent {
  checkoutForm = this.formBuilder.group({
    Name: '',
    PhoneCountryCode: '',
    Number: '',
    Description: '',
    Email: '',
    AddressLine1: '',
    AddressLine2: '',
    AddressLine3: '',
    City: '',
    Country: '',
    CountryCode: '',
    PostalCode: '',
    Region: '',
  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}
  onSubmit(): void {
    //process contact data here
    console.warn('Your contact has been added', this.checkoutForm.value);
    //while I have not managed to connect properly to the API, I will setup the code as I would to create the contact.
    this.http.post<ContactPayload>(
      'https://test-api.softrig.com/api/biz/contacts',
      this.checkoutForm.value
    );
    //sending the user back to the full contact list page
    this.router.navigate(['/']);
  }
}
//this is here to help format the payload from the creation form better
//payload format found here: https://developer.softrig.com/wiki/how-to/contacts
export interface ContactPayload {
  Info: {
    Name: string;
    InvoiceAddress: {
      AddressLine1: string;
      AddressLine2: string;
      AddressLine3: string;
      City: string;
      Country: string;
      CountryCode: string;
      PostalCode: string;
    };
    DefaultPhone: {
      CountryCode: string;
      Description: string;
      Number: string;
    };
    DefaultEmail: {
      EmailAddress: string;
    };
  };
}
