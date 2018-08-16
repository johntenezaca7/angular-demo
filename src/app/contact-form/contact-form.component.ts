import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  contactInfo = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: {
      address1: "",
      city: "",
      state: "",
      zip: ""
    }
  };
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // console.log(f.value); // { first: '', last: '' }
    // console.log(f.valid); // false
  }
}
