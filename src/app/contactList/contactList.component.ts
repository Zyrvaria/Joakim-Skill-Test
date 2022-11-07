import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { contacts } from '../contacts';
import { Contact } from '../contacts';

@Component({
  selector: 'app-contactList',
  templateUrl: './contactList.component.html',
  styleUrls: ['./contactList.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts = contacts;
  constructor(private http: HttpClient) {}

  deleteContact(id: number) {
    //double check that the user didn't just misclick
    if (confirm('Do you sure you want to delete this contact?')) {
      //While I have not managed to connect properly to the API, I will setup the code as I would to create the contact.
      //specifying what user ID we are deleting
      let url: string = `https://test-api.softrig.com/api/biz/contacts${id}`;
      this.http.delete(url);
      window.alert('The contact has been deleted!');
    }
  }

  //An attempt to aquire contacts with filter options from the server, error 401 as expected.
  filterContacts(filterList: any, filter: any) {
    //set up the first part of the url now so that we can add to it later
    let url: string = 'https://test-api.softrig.com/api/biz/contacts';
    //use a switch statement to see what we need to filter for
    switch (filterList.value) {
      case '1': {
        //no filter
        console.log('filterList.value=1');
        break;
      }
      case '2': {
        //name filter
        console.log('filterList.value=2');
        url += `?filter=contains(Info.Name, ${filter.value})`;
        break;
      }
      case '3': {
        //phone number filter
        console.log('filterList.value=3');
        url += `?filter=contains(Info.DefaultPhone.Number, ${filter.value})`;
        break;
      }
      case '4': {
        //email filter
        console.log('filterList.value=4');
        url += `?filter=contains(Info.DefaultEmail.EmailAddress, ${filter.value})`;
        break;
      }
      case '5': {
        //country filter
        console.log('filterList.value=5');
        url += `?filter=contains(Info.InvoiceAddress.Country, ${filter.value})`;
        break;
      }
      default: {
        //for bugtestingS
        console.log('Something broke');
        break;
      }
    }
    //add the final bit of the url before we send the get request for the contacts from the API
    url +=
      '?expand=Info,Info.InvoiceAddress,Info.DefaultPhone,Info.DefaultEmail,Info.DefaultAddress';
    console.log(url);
    this.http.get<Contact[]>(url).subscribe((data) => {
      this.contacts = data;
    });
  }
  ngOnInit(): void {}
}
