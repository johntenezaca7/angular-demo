import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ToggleMeComponent } from "./toggle-me/toggle-me.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { DisplayListComponent } from "./display-list/display-list.component";
import { LoadingDataComponent } from "./loading-data/loading-data.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ToggleMeComponent,
    ParentComponent,
    ChildComponent,
    DisplayListComponent,
    LoadingDataComponent,
    ContactFormComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
