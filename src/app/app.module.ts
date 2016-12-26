import { BrowserModule } from '@angular/platform-browser';
import { TwowaybindingComponent } from './databinding/twowaybinding/twowaybinding.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { My1stCompComponent } from './my-1st-comp/my-1st-comp.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertybindingComponent } from './propertybinding.component';
import { EventbindingComponent } from './databinding/eventbinding.component';
import { DemoexComponent } from './databinding/demoex/demoex.component';
import { DemoexComponent } from './databinding/demoex.component';
import { IntercommComponent } from './intercomm/intercomm.component';
import { BtnpanelComponent } from './intercomm/btnpanel.component';
import { ImgpanelComponent } from './intercomm/imgpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    My1stCompComponent,
    DatabindingComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DemoexComponent,
    DemoexComponent,
    IntercommComponent,
    BtnpanelComponent,
    ImgpanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
