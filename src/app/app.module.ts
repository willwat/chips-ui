import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { HomeComponent } from './home/home.component';
import { RemovalComponent } from './removal/removal.component';
import { TrimmingComponent } from './trimming/trimming.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponentComponent,
    HomeComponent,
    RemovalComponent,
    TrimmingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
