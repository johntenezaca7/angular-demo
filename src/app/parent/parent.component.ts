import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  dataFromParent = "";
  constructor() {}

  ngOnInit() {}

  sendBlueBerries() {
    this.dataFromParent = "Blueberries!";
  }

  sendBlueTomatos() {
    this.dataFromParent = "Tomatos!";
  }

  sendBlueBananas() {
    this.dataFromParent = "Bananas!";
  }
}
