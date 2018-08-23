import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  contactInformation = {
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

  showDisplay = false;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (!this.showDisplay) {
      this.showDisplay = true;
    }
  }
  cancelSubmit() {
    this.showDisplay = false;
    this.contactInformation = {
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
  }
}
