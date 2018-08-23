import { Component, OnInit } from "@angular/core";
import { GetDummyDataService } from "../get-dummy-data.service";

@Component({
  selector: "app-loading-data",
  templateUrl: "./loading-data.component.html",
  styleUrls: ["./loading-data.component.css"]
})
export class LoadingDataComponent implements OnInit {
  constructor(private dummyService: GetDummyDataService) {}

  ngOnInit() {}

  getData() {
    this.dummyService.getDummyUsers().subscribe(data => {
      console.log(data);
    });
  }
}
