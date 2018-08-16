import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-display-list",
  templateUrl: "./display-list.component.html",
  styleUrls: ["./display-list.component.css"]
})
export class DisplayListComponent implements OnInit {
  showList = false;

  friendslist = [
    {
      name: "John",
      hobby: "Coding"
    },
    {
      name: "Sam",
      hobby: "Rock climbing"
    },
    {
      name: "Selena",
      hobby: "Networking"
    },
    {
      name: "Polly",
      hobby: "Shopping"
    },
    {
      name: "Seamus",
      hobby: "Hustling"
    },
    {
      name: "Trevor",
      hobby: "Chilling"
    }
  ];
  constructor() {}

  ngOnInit() {}
  toggleList() {
    this.showList = !this.showList;
  }
}
