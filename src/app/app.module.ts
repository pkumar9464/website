import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTPServiceComponent } from './httpservice.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
	HTTPServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
