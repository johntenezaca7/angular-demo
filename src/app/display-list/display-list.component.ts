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
      name: "Jon",
      hobby: "coding"
    },
    {
      name: "Sam",
      hobby: "rock climbing"
    },
    {
      name: "Selena",
      hobby: "networking"
    },
    {
      name: "Polly",
      hobby: "shopping"
    },
    {
      name: "Seamus",
      hobby: "hustling"
    },
    {
      name: "Trevor",
      hobby: "chilling"
    }
  ];
  constructor() {}

  ngOnInit() {}
  toggleList() {
    this.showList = !this.showList;
  }
}
