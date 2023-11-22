import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ColorChromeModule } from 'ngx-color/chrome';

import { AppComponent } from './app.component';
import { MemePageComponent } from './meme-page/meme-page.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MemePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorChromeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
