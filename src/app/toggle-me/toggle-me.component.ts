import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-toggle-me",
  templateUrl: "./toggle-me.component.html",
  styleUrls: ["./toggle-me.component.scss"]
})
export class ToggleMeComponent implements OnInit {
  status: boolean = true;

  buttonValue = "Go!";

  constructor() {}

  ngOnInit() {}

  toggleFunction() {
    this.status = !this.status;

    if (this.status) {
      this.buttonValue = "Go!";
    } else {
      this.buttonValue = "Stop!";
    }
  }
}
